import React from 'react';
import { Sun, Moon, Copy, Check, Printer } from 'lucide-react';
import { APP_METADATA } from '../data/privacyData';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme, onPrint }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & app icon */}
        <a href="#top" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
          <img
            src={APP_METADATA.appLogo}
            alt={APP_METADATA.appName}
            className="w-9 h-9 rounded-lg object-cover shadow-sm ring-1 ring-stone-200 dark:ring-stone-700 group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {APP_METADATA.appName}
          </span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
          <a href="#ringkasan" className="hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0">
            Poin Penting
          </a>
          <a href="#informasi-dikumpulkan" className="hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0">
            Data Lokal
          </a>
          <a href="#layanan-pihak-ketiga" className="hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0">
            Mitra Iklan
          </a>
          <a href="#hak-penghapusan-data" className="hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0">
            Hapus Data
          </a>
          <a href="#hubungi-kami" className="hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0">
            Kontak
          </a>
        </nav>

        {/* Zone 3: Actions & Utility Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={handleCopyUrl}
            title="Salin Tautan Kebijakan Privasi"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden sm:inline">Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Salin Link</span>
              </>
            )}
          </button>

          <button
            onClick={onPrint}
            title="Cetak atau Simpan sebagai PDF"
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors shrink-0"
            aria-label="Cetak Kebijakan Privasi"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleTheme}
            title={isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors shrink-0"
            aria-label="Ganti Tema Tampilan"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};
