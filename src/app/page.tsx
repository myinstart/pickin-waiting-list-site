'use client';

import WaitingListForm from './components/WaitingListForm';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from '@/i18n/context';

export default function Home() {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen snap-container">
			{/* ===== Header ===== */}
			<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<span className="text-gradient text-lg font-bold">
						PICKIN
					</span>
					<LanguageSwitcher />
				</div>
			</header>

			{/* ===== Section 1: Hero ===== */}
			<section className="hero-gradient min-h-screen flex items-center justify-center px-6 py-20 snap-section relative">
				<div className="relative z-10 text-center max-w-4xl mx-auto -mt-16 sm:-mt-20">
					{/* Brand Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 mb-8 backdrop-blur-sm">
						<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
						<span className="text-white/70 text-xs font-medium tracking-wide">
							{t('hero.badge')}
						</span>
					</div>

					{/* Brand Name */}
					<h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
						<span className="text-gradient">PICKIN</span>
					</h1>

					{/* Headline */}
					<p className="text-xl sm:text-3xl text-white/80 leading-snug mb-3 font-bold">
						{t('hero.subtitle')}
					</p>
					<p className="text-xl sm:text-3xl font-bold mb-8">
						<span className="text-gradient">
							{t('hero.subtitleHighlight')}
						</span>
					</p>

					<p className="text-sm sm:text-base text-white/40 leading-relaxed mb-10 max-w-2xl mx-auto">
						{t('hero.description1')}
						<br />
						{t('hero.description2')}
					</p>

					{/* CTA Button */}
					<a
						href="#waitlist"
						className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
					>
						<span>{t('hero.cta')}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="relative z-10"
						>
							<path d="M7 17l9.2-9.2M17 17V7H7" />
						</svg>
					</a>
				</div>

				{/* Scroll Down Indicator */}
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#chevron-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scroll-indicator">
						<defs>
							<linearGradient id="chevron-grad" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#a78bfa" />
								<stop offset="50%" stopColor="#c084fc" />
								<stop offset="100%" stopColor="#e879f9" />
							</linearGradient>
						</defs>
						<polyline points="6 9 12 15 18 9" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#chevron-grad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scroll-indicator-delayed -mt-3">
						<defs>
							<linearGradient id="chevron-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#a78bfa" />
								<stop offset="50%" stopColor="#c084fc" />
								<stop offset="100%" stopColor="#e879f9" />
							</linearGradient>
						</defs>
						<polyline points="6 9 12 15 18 9" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#chevron-grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scroll-indicator-delayed-2 -mt-3">
						<defs>
							<linearGradient id="chevron-grad3" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#a78bfa" />
								<stop offset="50%" stopColor="#c084fc" />
								<stop offset="100%" stopColor="#e879f9" />
							</linearGradient>
						</defs>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			</section>

			{/* ===== Section 2: Pain Points ===== */}
			<section className="section-gradient py-20 sm:py-28 px-6 snap-section">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-14">
						<p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
							WHY PICKIN
						</p>
						<h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5">
							{t('painPoints.title')}
						</h2>
						<p className="text-muted text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
							{t('painPoints.subtitle')}
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{/* Card 1 */}
						<div className="feature-card bg-white rounded-2xl p-6 border border-border">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-rose-500 flex items-center justify-center mb-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								</svg>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{t('painPoints.card1Title')}
							</h3>
							<p className="text-sm text-muted leading-relaxed mb-4">
								{t('painPoints.card1Problem')}
							</p>
							<p className="text-sm text-primary font-medium leading-relaxed">
								{t('painPoints.card1Solution')}
							</p>
						</div>

						{/* Card 2 */}
						<div className="feature-card bg-white rounded-2xl p-6 border border-border">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10" />
									<line x1="2" y1="12" x2="22" y2="12" />
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
								</svg>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{t('painPoints.card2Title')}
							</h3>
							<p className="text-sm text-muted leading-relaxed mb-4">
								{t('painPoints.card2Problem')}
							</p>
							<p className="text-sm text-primary font-medium leading-relaxed">
								{t('painPoints.card2Solution')}
							</p>
						</div>

						{/* Card 3 */}
						<div className="feature-card bg-white rounded-2xl p-6 border border-border">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-rose-400 to-pink-600 flex items-center justify-center mb-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10" />
									<line x1="15" y1="9" x2="9" y2="15" />
									<line x1="9" y1="9" x2="15" y2="15" />
								</svg>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{t('painPoints.card3Title')}
							</h3>
							<p className="text-sm text-muted leading-relaxed mb-4">
								{t('painPoints.card3Problem')}
							</p>
							<p className="text-sm text-primary font-medium leading-relaxed">
								{t('painPoints.card3Solution')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Section 3: Validation ===== */}
			<section className="cta-gradient py-20 sm:py-28 px-6 snap-section relative">
				<div className="relative z-10 max-w-5xl mx-auto text-center">
					<p className="text-sm font-semibold text-purple-300 tracking-widest uppercase mb-3">
						FOR NANO &amp; MICRO CREATORS
					</p>
					<h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
						<span className="text-gradient">{t('validation.title')}</span>
					</h2>
					<p className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-14">
						{t('validation.description')}
					</p>

					{/* Stats */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						<div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
							<p className="text-3xl sm:text-4xl font-extrabold text-gradient mb-2">
								{t('validation.stat1Value')}
							</p>
							<p className="text-white/60 text-sm font-medium">
								{t('validation.stat1Label')}
							</p>
						</div>
						<div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
							<p className="text-3xl sm:text-4xl font-extrabold text-gradient mb-2">
								{t('validation.stat2Value')}
							</p>
							<p className="text-white/60 text-sm font-medium">
								{t('validation.stat2Label')}
							</p>
						</div>
						<div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
							<p className="text-3xl sm:text-4xl font-extrabold text-gradient mb-2">
								{t('validation.stat3Value')}
							</p>
							<p className="text-white/60 text-sm font-medium">
								{t('validation.stat3Label')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Section 4: How It Works ===== */}
			<section className="section-gradient-alt py-20 sm:py-28 px-6 snap-section">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-14">
						<p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
							HOW IT WORKS
						</p>
						<h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5">
							{t('howItWorks.title')}
						</h2>
						<p className="text-muted text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
							{t('howItWorks.subtitle')}
						</p>
					</div>

					<div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
						{/* Step 1 */}
						<div className="relative bg-white rounded-2xl p-6 border border-border feature-card">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
									1
								</div>
								<h3 className="text-lg font-bold text-foreground">
									{t('howItWorks.step1Title')}
								</h3>
							</div>
							<p className="text-sm text-muted leading-relaxed">
								{t('howItWorks.step1Description')}
							</p>
						</div>

						{/* Step 2 */}
						<div className="relative bg-white rounded-2xl p-6 border border-border feature-card">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
									2
								</div>
								<h3 className="text-lg font-bold text-foreground">
									{t('howItWorks.step2Title')}
								</h3>
							</div>
							<p className="text-sm text-muted leading-relaxed">
								{t('howItWorks.step2Description')}
							</p>
						</div>

						{/* Step 3 */}
						<div className="relative bg-white rounded-2xl p-6 border border-border feature-card">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
									3
								</div>
								<h3 className="text-lg font-bold text-foreground">
									{t('howItWorks.step3Title')}
								</h3>
							</div>
							<p className="text-sm text-muted leading-relaxed">
								{t('howItWorks.step3Description')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Section 5: Early Access ===== */}
			<section className="section-gradient py-20 sm:py-28 px-6 snap-section">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-14">
						{/* Urgency Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/40 bg-orange-400/10 mb-5">
							<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
							<span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
								{t('earlyAccess.urgencyBadge')}
							</span>
						</div>
						<p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
							EARLY ACCESS
						</p>
						<h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5">
							{t('earlyAccess.title')}
						</h2>
						<p className="text-muted text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
							{t('earlyAccess.subtitle')}
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{/* Item 1 */}
						<div className="feature-card bg-white rounded-2xl p-6 border border-border">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
								</svg>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{t('earlyAccess.item1Title')}
							</h3>
							<p className="text-sm text-muted leading-relaxed">
								{t('earlyAccess.item1Desc')}
							</p>
						</div>

						{/* Item 2 */}
						<div className="feature-card bg-white rounded-2xl p-6 border border-border">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M12 2L2 7l10 5 10-5-10-5z" />
									<path d="M2 17l10 5 10-5" />
									<path d="M2 12l10 5 10-5" />
								</svg>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{t('earlyAccess.item2Title')}
							</h3>
							<p className="text-sm text-muted leading-relaxed">
								{t('earlyAccess.item2Desc')}
							</p>
						</div>

						{/* Item 3 */}
						<div className="feature-card bg-white rounded-2xl p-6 border border-border">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10" />
									<line x1="2" y1="12" x2="22" y2="12" />
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
								</svg>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{t('earlyAccess.item3Title')}
							</h3>
							<p className="text-sm text-muted leading-relaxed">
								{t('earlyAccess.item3Desc')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Section 6: Waitlist Form ===== */}
			<section id="waitlist" className="cta-gradient snap-section min-h-screen flex flex-col justify-center">
				<div className="relative z-10 w-full max-w-6xl mx-auto py-20 sm:py-28 px-6 flex-1 flex flex-col justify-center">
					<div className="text-center mb-6">
						<p className="text-sm font-semibold text-purple-300 tracking-widest uppercase mb-3">
							JOIN WAITLIST
						</p>
						<h2 className="text-2xl sm:text-4xl font-bold text-white mb-5">
							{t('waitlist.title')}
						</h2>
						<p className="text-white/50 text-base mx-auto leading-relaxed">
							{t('waitlist.description1')}
						</p>
					</div>

					{/* Beta Benefit Banner */}
					<div className="max-w-2xl mx-auto w-full mb-6 rounded-2xl border border-purple-400/20 bg-white/4 backdrop-blur-sm px-5 py-4 text-center">
						<p className="text-xs font-semibold tracking-widest uppercase text-purple-300 mb-1">
							{t('waitlist.betaTitle')}
						</p>
						<p className="text-sm text-white/70 leading-relaxed">
							<span className="text-gradient font-semibold">
								{t('waitlist.betaBenefit')}
							</span>
						</p>
					</div>

					{/* Form Container */}
					<div className="glass-card rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto w-full">
						<WaitingListForm />
					</div>

					{/* Trust note */}
					<p className="text-center text-xs text-white/30 mt-6">
						{t('waitlist.trustNote')}
					</p>
				</div>
			</section>

			{/* ===== Footer ===== */}
			<footer className="bg-[#0a0820] py-8 px-6 sm:snap-start">
				<div className="max-w-5xl mx-auto text-center">
					<p className="text-gradient text-lg font-bold mb-2">
						PICKIN
					</p>
					<p className="text-white/50 text-sm">
						{t('footer.contactEmail')}:{' '}
						<a
							href="mailto:myin@myin-biz.com"
							className="hover:text-white/70 transition-colors"
						>
							myin@myin-biz.com
						</a>
					</p>
					<p className="text-white/30 text-xs mt-3">
						&copy; 2025 PICKIN. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
