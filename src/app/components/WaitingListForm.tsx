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

const PLATFORMS = ['Instagram', 'TikTok', 'YouTube', 'Other'] as const;
const FOLLOWER_RANGES = ['Nano (1K – 10K)', 'Micro (10K – 100K)', 'Mid (100K+)'] as const;

export default function WaitingListForm() {
	const { t } = useTranslation();
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		snsAccount: '',
		platform: '',
		followerRange: '',
		email: '',
		country: '',
	});
	const [countryOpen, setCountryOpen] = useState(false);
	const [countrySearch, setCountrySearch] = useState('');
	const countryRef = useRef<HTMLDivElement>(null);

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

	const selectedCountry = COUNTRIES.find((c) => c.code === formData.country);

	const handleCountrySelect = (code: string) => {
		setFormData({ ...formData, country: code });
		setCountryOpen(false);
		setCountrySearch('');
	};

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const body = {
			name: formData.name,
			type: '인플루언서',
			email: formData.email,
			snsAccount: formData.snsAccount || null,
			platform: formData.platform || null,
			followerRange: formData.followerRange || null,
			country: selectedCountry ? selectedCountry.name.replace(/^\S+\s/, '') : null,
		};

		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			if (!res.ok) {
				throw new Error(t('form.errorFallback'));
			}

			setSubmitted(true);
			setFormData({
				name: '',
				snsAccount: '',
				platform: '',
				followerRange: '',
				email: '',
				country: '',
			});
			setTimeout(() => setSubmitted(false), 3000);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : t('form.errorFallback')
			);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const inputClass = "w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12";

	return (
		<div className="w-full max-w-lg mx-auto">
			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Name */}
				<div>
					<label className="block text-sm font-medium text-white/70 mb-2">
						{t('form.name')}
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder={t('form.namePlaceholder')}
						required
						className={inputClass}
					/>
				</div>

				{/* SNS Account */}
				<div>
					<label className="block text-sm font-medium text-white/70 mb-2">
						{t('form.snsAccount')}
					</label>
					<input
						type="text"
						name="snsAccount"
						value={formData.snsAccount}
						onChange={handleChange}
						placeholder={t('form.snsPlaceholder')}
						required
						className={inputClass}
					/>
				</div>

				{/* Platform */}
				<div>
					<label className="block text-sm font-medium text-white/70 mb-2">
						{t('form.platform')}
					</label>
					<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
						{PLATFORMS.map((p) => (
							<button
								key={p}
								type="button"
								onClick={() => setFormData({ ...formData, platform: p })}
								className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
									formData.platform === p
										? 'tab-active'
										: 'bg-white/8 border border-white/15 text-white/60 hover:text-white/80 hover:bg-white/12'
								}`}
							>
								{p === 'Other' ? t('form.platformOther') : p}
							</button>
						))}
					</div>
				</div>

				{/* Follower Range */}
				<div>
					<label className="block text-sm font-medium text-white/70 mb-2">
						{t('form.followerRange')}
					</label>
					<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
						{FOLLOWER_RANGES.map((r) => {
							const label =
								r === 'Nano (1K – 10K)' ? t('form.followerNano') :
								r === 'Micro (10K – 100K)' ? t('form.followerMicro') :
								t('form.followerMid');
							return (
								<button
									key={r}
									type="button"
									onClick={() => setFormData({ ...formData, followerRange: r })}
									className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
										formData.followerRange === r
											? 'tab-active'
											: 'bg-white/8 border border-white/15 text-white/60 hover:text-white/80 hover:bg-white/12'
									}`}
								>
									{label}
								</button>
							);
						})}
					</div>
				</div>

				{/* Email */}
				<div>
					<label className="block text-sm font-medium text-white/70 mb-2">
						{t('form.email')}
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="example@email.com"
						required
						className={inputClass}
					/>
				</div>

				{/* Country Select */}
				<div ref={countryRef} className="relative">
					<label className="block text-sm font-medium text-white/70 mb-2">
						{t('form.country')}
					</label>
					<button
						type="button"
						onClick={() => setCountryOpen((prev) => !prev)}
						className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-sm transition-all duration-200 hover:bg-white/12 flex items-center justify-between cursor-pointer"
					>
						<span className={selectedCountry ? 'text-white' : 'text-white/30'}>
							{selectedCountry ? selectedCountry.name : t('form.countryPlaceholder')}
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={`text-white/40 transition-transform duration-200 ${countryOpen ? 'rotate-180' : ''}`}
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>

					{countryOpen && (
						<div className="absolute z-50 mt-1 w-full rounded-xl bg-[#1a1a2e] border border-white/15 shadow-xl overflow-hidden">
							<div className="p-2 border-b border-white/10">
								<input
									type="text"
									value={countrySearch}
									onChange={(e) => setCountrySearch(e.target.value)}
									placeholder={t('form.countrySearchPlaceholder')}
									autoFocus
									className="w-full px-3 py-2 rounded-lg bg-white/8 border border-white/10 text-white placeholder-white/30 text-sm outline-none"
								/>
							</div>
							<ul className="max-h-48 overflow-y-auto py-1">
								{filteredCountries.length > 0 ? (
									filteredCountries.map((c) => (
										<li key={c.code}>
											<button
												type="button"
												onClick={() => handleCountrySelect(c.code)}
												className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
													formData.country === c.code
														? 'bg-white/15 text-white'
														: 'text-white/70 hover:bg-white/8 hover:text-white'
												}`}
											>
												{c.name}
											</button>
										</li>
									))
								) : (
									<li className="px-4 py-3 text-sm text-white/40 text-center">
										{t('form.countryNoResults')}
									</li>
								)}
							</ul>
						</div>
					)}
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					disabled={loading}
					className="btn-gradient w-full py-4 rounded-xl text-white font-semibold text-base mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<span>
						{loading
							? t('form.submitting')
							: submitted
								? t('form.submitted')
								: t('form.submitButton')}
					</span>
				</button>

				{submitted && (
					<p className="text-center text-sm text-green-400 mt-3 animate-fade-in">
						{t('form.successMessage')}
					</p>
				)}

				{error && (
					<p className="text-center text-sm text-red-400 mt-3">
						{error}
					</p>
				)}
			</form>
		</div>
	);
}
