'use client';

import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
	ReactNode,
} from 'react';
import ko from './locales/ko.json';
import en from './locales/en.json';
import vi from './locales/vi.json';
import th from './locales/th.json';
import zh from './locales/zh.json';

export type Locale = 'ko' | 'en' | 'vi' | 'th' | 'zh';

export const LOCALE_LABELS: Record<Locale, string> = {
	ko: '한국어',
	en: 'English',
	vi: 'Tiếng Việt',
	th: 'ภาษาไทย',
	zh: '中文',
};

const translations: Record<Locale, Record<string, unknown>> = {
	ko,
	en,
	vi,
	th,
	zh,
};

type LanguageContextType = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
	const keys = path.split('.');
	let current: unknown = obj;
	for (const key of keys) {
		if (
			current &&
			typeof current === 'object' &&
			key in (current as Record<string, unknown>)
		) {
			current = (current as Record<string, unknown>)[key];
		} else {
			return '';
		}
	}
	return typeof current === 'string' ? current : '';
}

function detectBrowserLanguage(): Locale {
	if (typeof window === 'undefined') return 'ko';

	const stored = localStorage.getItem('pickin-locale');
	if (stored && stored in translations) return stored as Locale;

	const browserLang =
		navigator.language || navigator.languages?.[0] || 'ko';
	const langCode = browserLang.split('-')[0].toLowerCase();

	if (langCode in translations) return langCode as Locale;

	return 'ko';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>('ko');

	useEffect(() => {
		const detected = detectBrowserLanguage();
		setLocaleState(detected);
		document.documentElement.lang = detected;
	}, []);

	const setLocale = useCallback((newLocale: Locale) => {
		setLocaleState(newLocale);
		localStorage.setItem('pickin-locale', newLocale);
		document.documentElement.lang = newLocale;
	}, []);

	const t = useCallback(
		(key: string): string => {
			const value = getNestedValue(
				translations[locale] as Record<string, unknown>,
				key
			);
			if (value === '') {
				return getNestedValue(
					translations['ko'] as Record<string, unknown>,
					key
				);
			}
			return value;
		},
		[locale]
	);

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useTranslation() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error(
			'useTranslation must be used within a LanguageProvider'
		);
	}
	return context;
}
