import React from 'react';
import { ShieldCheck, ArrowUp, Mail, Copy, Check } from 'lucide-react';
import { APP_METADATA } from '../data/privacyData';

export const Footer: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = React.useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch {
      // ignore
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <img
              src={APP_METADATA.appLogo}
              alt={APP_METADATA.appName}
              className="w-10 h-10 rounded-xl object-cover ring-1 ring-stone-200 dark:ring-stone-700"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                {APP_METADATA.appName}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400">
                Oleh {APP_METADATA.developerName} · ID: {APP_METADATA.packageName}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin URL Kebijakan</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Ke Atas</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mematuhi Google Play Developer Distribution Agreement & Pedoman Privasi Pengguna</span>
          </div>
          <div>
            &copy; 2026 {APP_METADATA.developerName}. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
};
