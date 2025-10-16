import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es,
  en,
} as const;

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  // Remove the base path '/portfolio' if present
  const pathWithoutBase = pathname.replace(/^\/portfolio/, '');
  const [, lang] = pathWithoutBase.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  const lang = parts[1];
  
  if (lang in ui) {
    return parts.slice(2).join('/') || '';
  }
  return pathname.slice(1) || '';
}

export function translatePath(lang: string, path: string = '') {
  const isDefaultLang = lang === defaultLang;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isDefaultLang) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  
  return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`;
}
