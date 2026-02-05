'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation, LOCALE_LABELS, Locale } from '@/i18n/context';

const LOCALES = Object.keys(LOCALE_LABELS) as Locale[];

export default function LanguageSwitcher() {
	const { locale, setLocale } = useTranslation();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-medium backdrop-blur-sm hover:bg-white/15 transition-colors cursor-pointer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<line x1="2" y1="12" x2="22" y2="12" />
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
				</svg>
				{LOCALE_LABELS[locale]}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`transition-transform ${open ? 'rotate-180' : ''}`}
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</button>

			{open && (
				<div className="absolute right-0 top-full mt-2 bg-[#1a1035]/95 border border-white/15 rounded-xl backdrop-blur-md shadow-xl overflow-hidden z-50 min-w-[140px]">
					{LOCALES.map((loc) => (
						<button
							key={loc}
							type="button"
							onClick={() => {
								setLocale(loc);
								setOpen(false);
							}}
							className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
								locale === loc
									? 'text-white bg-white/10 font-semibold'
									: 'text-white/60 hover:text-white hover:bg-white/5'
							}`}
						>
							{LOCALE_LABELS[loc]}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
