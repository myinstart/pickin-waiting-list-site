'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/i18n/context';

const COUNTRIES = [
	{ code: 'TH', name: '🇹🇭 Thailand' },
	{ code: 'VN', name: '🇻🇳 Vietnam' },
	{ code: 'SG', name: '🇸🇬 Singapore' },
	{ code: 'ID', name: '🇮🇩 Indonesia' },
	{ code: 'MY', name: '🇲🇾 Malaysia' },
	{ code: 'PH', name: '🇵🇭 Philippines' },
	{ code: 'OTHER', name: '🌍 Other' },
];

const FOLLOWER_RANGES = ['Nano (1K – 10K)', 'Micro (10K – 100K)', 'Mid (100K+)'] as const;

type Platform = 'Instagram' | 'TikTok' | 'YouTube' | 'Other';
const PLATFORMS: Platform[] = ['Instagram', 'TikTok', 'YouTube', 'Other'];

interface SnsEntry {
	id: string;
	platform: Platform | '';
	account: string;
	followerRange: string;
}

const PLATFORM_CONFIG: Record<Platform, { active: string; cardBorder: string; dot: string }> = {
	Instagram: {
		active: 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_3px_10px_-2px_rgba(219,39,119,0.55)]',
		cardBorder: 'border-l-pink-500',
		dot: 'bg-gradient-to-br from-purple-500 to-pink-500',
	},
	TikTok: {
		active: 'bg-gradient-to-r from-[#010101] to-[#2ec5ce] text-white shadow-[0_3px_10px_-2px_rgba(46,197,206,0.45)]',
		cardBorder: 'border-l-[#2ec5ce]',
		dot: 'bg-gradient-to-br from-[#010101] to-[#2ec5ce]',
	},
	YouTube: {
		active: 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-[0_3px_10px_-2px_rgba(239,68,68,0.5)]',
		cardBorder: 'border-l-red-500',
		dot: 'bg-red-500',
	},
	Other: {
		active: 'bg-gradient-to-r from-blue-700 to-indigo-500 text-white shadow-[0_3px_10px_-2px_rgba(99,102,241,0.45)]',
		cardBorder: 'border-l-indigo-400',
		dot: 'bg-indigo-400',
	},
};

function InstagramIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
		</svg>
	);
}

function TikTokIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
			<path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.27 8.27 0 004.83 1.54V7.03a4.85 4.85 0 01-1.06-.34z" />
		</svg>
	);
}

function YouTubeIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
			<path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
		</svg>
	);
}

function GlobeIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
		</svg>
	);
}

const PLATFORM_ICONS: Record<Platform, React.ReactNode> = {
	Instagram: <InstagramIcon />,
	TikTok: <TikTokIcon />,
	YouTube: <YouTubeIcon />,
	Other: <GlobeIcon />,
};

let _idCounter = 0;
function newEntry(): SnsEntry {
	return { id: `sns-${++_idCounter}`, platform: '', account: '', followerRange: '' };
}

export default function WaitingListForm() {
	const { t } = useTranslation();
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCountry] = useState('');
	const [countryOpen, setCountryOpen] = useState(false);
	const [countrySearch, setCountrySearch] = useState('');
	const countryRef = useRef<HTMLDivElement>(null);

	const [snsAccounts, setSnsAccounts] = useState<SnsEntry[]>([newEntry()]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
				setCountryOpen(false);
				setCountrySearch('');
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const filteredCountries = COUNTRIES.filter((c) =>
		c.name.toLowerCase().includes(countrySearch.toLowerCase()),
	);
	const selectedCountry = COUNTRIES.find((c) => c.code === country);

	const updateSns = (id: string, field: keyof SnsEntry, value: string) => {
		setSnsAccounts((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
	};

	const addSns = () => {
		if (snsAccounts.length < 5) {
			setSnsAccounts((prev) => [...prev, newEntry()]);
		}
	};

	const removeSns = (id: string) => {
		setSnsAccounts((prev) => prev.filter((s) => s.id !== id));
	};

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setError('');

		const first = snsAccounts[0];
		if (!first.platform || !first.account.trim()) {
			setError(t('form.snsMinRequired'));
			return;
		}

		setLoading(true);

		const body = {
			name: name.trim(),
			email: email.trim(),
			country: selectedCountry ? selectedCountry.name.replace(/^\S+\s/, '') : null,
			snsAccounts: snsAccounts
				.filter((s) => s.platform && s.account.trim())
				.map((s) => ({
					platform: s.platform,
					account: s.account.trim(),
					followerRange: s.followerRange || null,
				})),
		};

		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			if (!res.ok) throw new Error(t('form.errorFallback'));

			setSubmitted(true);
			setName('');
			setEmail('');
			setCountry('');
			setSnsAccounts([newEntry()]);
			setTimeout(() => setSubmitted(false), 4000);
		} catch (err) {
			setError(err instanceof Error ? err.message : t('form.errorFallback'));
		} finally {
			setLoading(false);
		}
	};

	const inputClass =
		'w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-white placeholder-white/25 text-sm transition-all duration-200 focus:bg-white/12 focus:border-white/25';

	const labelClass = 'block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2';

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="space-y-5">
				{/* Name */}
				<div>
					<label className={labelClass}>{t('form.name')} <span className="text-red-400/60 normal-case tracking-normal font-normal">*</span></label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder={t('form.namePlaceholder')}
						required
						className={inputClass}
					/>
				</div>

				{/* Email + Country row */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div>
						<label className={labelClass}>{t('form.email')} <span className="text-red-400/60 normal-case tracking-normal font-normal">*</span></label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@email.com"
							required
							className={inputClass}
						/>
					</div>

					<div ref={countryRef} className="relative">
						<label className={labelClass}>{t('form.country')} <span className="text-red-400/60 normal-case tracking-normal font-normal">*</span></label>
						<button
							type="button"
							onClick={() => setCountryOpen((prev) => !prev)}
							className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-sm transition-all duration-200 hover:bg-white/12 flex items-center justify-between cursor-pointer"
						>
							<span className={selectedCountry ? 'text-white' : 'text-white/25'}>
								{selectedCountry ? selectedCountry.name : t('form.countryPlaceholder')}
							</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white/35 transition-transform duration-200 ${countryOpen ? 'rotate-180' : ''}`}>
								<polyline points="6 9 12 15 18 9" />
							</svg>
						</button>

						{countryOpen && (
							<div className="absolute z-50 mt-1 w-full rounded-xl bg-[#16122e] border border-white/15 shadow-2xl overflow-hidden">
								<div className="p-2 border-b border-white/8">
									<input
										type="text"
										value={countrySearch}
										onChange={(e) => setCountrySearch(e.target.value)}
										placeholder={t('form.countrySearchPlaceholder')}
										autoFocus
										className="w-full px-3 py-2 rounded-lg bg-white/8 border border-white/10 text-white placeholder-white/30 text-sm outline-none"
									/>
								</div>
								<ul className="max-h-40 overflow-y-auto py-1">
									{filteredCountries.length > 0 ? (
										filteredCountries.map((c) => (
											<li key={c.code}>
												<button
													type="button"
													onClick={() => {
														setCountry(c.code);
														setCountryOpen(false);
														setCountrySearch('');
													}}
													className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${country === c.code ? 'bg-white/15 text-white' : 'text-white/65 hover:bg-white/8 hover:text-white'}`}
												>
													{c.name}
												</button>
											</li>
										))
									) : (
										<li className="px-4 py-3 text-sm text-white/35 text-center">
											{t('form.countryNoResults')}
										</li>
									)}
								</ul>
							</div>
						)}
					</div>
				</div>

				{/* Divider */}
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-white/8" />
					</div>
					<div className="relative flex items-center justify-between">
						<span className="bg-transparent pr-3 text-xs font-semibold text-white/40 uppercase tracking-wider">
							{t('form.snsSection')}
							<span className="text-red-400/60 normal-case tracking-normal font-normal ml-1">*</span>
						</span>
						{snsAccounts.length < 5 && (
							<button
								type="button"
								onClick={addSns}
								className="pl-3 flex items-center gap-1 text-xs text-purple-300/80 hover:text-purple-200 transition-colors font-medium cursor-pointer"
							>
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
									<line x1="12" y1="5" x2="12" y2="19" />
									<line x1="5" y1="12" x2="19" y2="12" />
								</svg>
								{t('form.addSns')}
							</button>
						)}
					</div>
				</div>

				{/* SNS Cards */}
				<div className="space-y-3 -mt-1">
					{snsAccounts.map((entry, idx) => {
						const cfg = entry.platform ? PLATFORM_CONFIG[entry.platform as Platform] : null;
						return (
							<div
								key={entry.id}
								className={`rounded-2xl bg-white/4 border border-white/10 border-l-2 p-4 relative transition-all duration-300 ${cfg ? cfg.cardBorder : 'border-l-white/10'}`}
							>
								{/* Card index + remove */}
								<div className="flex items-center justify-between mb-3">
									<div className="flex items-center gap-2">
										{cfg && (
											<span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
										)}
										<span className="text-xs text-white/35 font-medium">
											#{idx + 1}
										</span>
									</div>
									{idx > 0 && (
										<button
											type="button"
											onClick={() => removeSns(entry.id)}
											className="w-5 h-5 rounded-full bg-white/6 hover:bg-white/12 flex items-center justify-center text-white/30 hover:text-white/60 transition-all cursor-pointer"
										>
											<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
												<line x1="18" y1="6" x2="6" y2="18" />
												<line x1="6" y1="6" x2="18" y2="18" />
											</svg>
										</button>
									)}
								</div>

								{/* Platform pills */}
								<div className="grid grid-cols-4 gap-1.5 mb-3">
									{PLATFORMS.map((p) => {
										const isActive = entry.platform === p;
										return (
											<button
												key={p}
												type="button"
												onClick={() => updateSns(entry.id, 'platform', p)}
												className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${isActive ? PLATFORM_CONFIG[p].active : 'bg-white/6 border border-white/10 text-white/45 hover:text-white/65 hover:bg-white/10'}`}
											>
												{PLATFORM_ICONS[p]}
												<span className="hidden sm:inline">
													{p === 'Other' ? t('form.platformOther') : p}
												</span>
											</button>
										);
									})}
								</div>

								{/* Account URL */}
								<input
									type="text"
									value={entry.account}
									onChange={(e) => updateSns(entry.id, 'account', e.target.value)}
									placeholder={
										entry.platform === 'Instagram' ? 'instagram.com/username or @username' :
										entry.platform === 'TikTok' ? 'tiktok.com/@username or @username' :
										entry.platform === 'YouTube' ? 'youtube.com/@channel or channel URL' :
										t('form.snsAccountUrlPlaceholder')
									}
									className="w-full px-3.5 py-2.5 rounded-xl bg-white/6 border border-white/10 text-white placeholder-white/22 text-sm transition-all duration-200 focus:bg-white/10 focus:border-white/20 mb-3"
								/>

								{/* Follower range */}
								<div className="grid grid-cols-3 gap-1.5">
									{FOLLOWER_RANGES.map((r) => {
										const label =
											r === 'Nano (1K – 10K)' ? t('form.followerNano') :
											r === 'Micro (10K – 100K)' ? t('form.followerMicro') :
											t('form.followerMid');
										const isActive = entry.followerRange === r;
										return (
											<button
												key={r}
												type="button"
												onClick={() =>
													updateSns(entry.id, 'followerRange', isActive ? '' : r)
												}
												className={`py-2 px-1 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${isActive ? 'tab-active' : 'bg-white/6 border border-white/10 text-white/45 hover:text-white/65 hover:bg-white/10'}`}
											>
												{label}
											</button>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>

				{/* Submit */}
				<div className="pt-1">
					<button
						type="submit"
						disabled={loading}
						className="btn-gradient w-full py-4 rounded-xl text-white font-semibold text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
					>
						<span>
							{loading
								? t('form.submitting')
								: submitted
									? t('form.submitted')
									: t('form.submitButton')}
						</span>
					</button>
				</div>

				{submitted && (
					<p className="text-center text-sm text-green-400 animate-pulse">
						{t('form.successMessage')}
					</p>
				)}
				{error && (
					<p className="text-center text-sm text-red-400">
						{error}
					</p>
				)}
			</form>
		</div>
	);
}
