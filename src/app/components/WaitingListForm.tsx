'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n/context';

type Tab = 'advertiser' | 'influencer';

interface Props {
	activeTab: Tab;
	onTabChange: (tab: Tab) => void;
}

export default function WaitingListForm({ activeTab, onTabChange }: Props) {
	const { t } = useTranslation();
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [formData, setFormData] = useState({
		brandName: '',
		email: '',
		name: '',
		snsAccount: '',
		influencerEmail: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const isAdvertiser = activeTab === 'advertiser';

		const body = {
			name: isAdvertiser ? formData.brandName : formData.name,
			type: isAdvertiser ? '광고주' : '인플루언서',
			email: isAdvertiser ? formData.email : formData.influencerEmail,
			snsAccount: isAdvertiser ? null : formData.snsAccount || null,
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
				brandName: '',
				email: '',
				name: '',
				snsAccount: '',
				influencerEmail: '',
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

	return (
		<div className="w-full max-w-lg mx-auto">
			{/* Tabs */}
			<div className="flex bg-white/10 rounded-2xl p-1.5 mb-8 backdrop-blur-sm border border-white/10">
				<button
					type="button"
					onClick={() => onTabChange('advertiser')}
					className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
						activeTab === 'advertiser'
							? 'tab-active'
							: 'text-white/60 hover:text-white/80'
					}`}
				>
					{t('form.tabAdvertiser')}
				</button>
				<button
					type="button"
					onClick={() => onTabChange('influencer')}
					className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
						activeTab === 'influencer'
							? 'tab-active'
							: 'text-white/60 hover:text-white/80'
					}`}
				>
					{t('form.tabInfluencer')}
				</button>
			</div>

			{/* Form */}
			<form onSubmit={handleSubmit} className="space-y-4">
				{activeTab === 'advertiser' ? (
					<>
						<div>
							<label className="block text-sm font-medium text-white/70 mb-2">
								{t('form.brandName')}
							</label>
							<input
								type="text"
								name="brandName"
								value={formData.brandName}
								onChange={handleChange}
								placeholder={t('form.brandNamePlaceholder')}
								required
								className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-white/70 mb-2">
								{t('form.email')}
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="example@brand.com"
								required
								className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
							/>
						</div>
					</>
				) : (
					<>
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
								className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
							/>
						</div>
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
								className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-white/70 mb-2">
								{t('form.email')}
							</label>
							<input
								type="email"
								name="influencerEmail"
								value={formData.influencerEmail}
								onChange={handleChange}
								placeholder="example@email.com"
								required
								className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
							/>
						</div>
					</>
				)}

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
