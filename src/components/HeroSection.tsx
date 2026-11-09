import React from 'react';
import { Copy, Check, ShieldCheck, Database, Sliders, Smartphone } from 'lucide-react';
import { APP_METADATA } from '../data/privacyData';

export const HeroSection: React.FC = () => {
  const [copiedPkg, setCopiedPkg] = React.useState(false);

  const handleCopyPackage = () => {
    navigator.clipboard.writeText(APP_METADATA.packageName);
    setCopiedPkg(true);
    setTimeout(() => setCopiedPkg(false), 2000);
  };

  return (
    <section id="top" className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-stone-200 dark:border-stone-800 bg-gradient-to-b from-stone-100/70 via-stone-50 to-white dark:from-stone-900/60 dark:via-stone-900 dark:to-stone-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top trust kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-4">
          <span className="font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
            Dokumen Resmi
          </span>
          <span aria-hidden="true">·</span>
          <span>Google Play Policy Compliant</span>
          <span aria-hidden="true">·</span>
          <span>Diperbarui {APP_METADATA.lastUpdated}</span>
        </div>

        {/* Main App Identity Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-7 shadow-xs">
          <div className="relative shrink-0">
            <img
              src={APP_METADATA.appLogo}
              alt={APP_METADATA.appName}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-md ring-1 ring-stone-900/10 dark:ring-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                Kebijakan Privasi
              </h1>
            </div>
            <p className="text-lg font-medium text-red-600 dark:text-red-400 mt-0.5">
              Aplikasi {APP_METADATA.appName}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-center gap-1.5">
                <span className="text-stone-400 dark:text-stone-500">Pengembang:</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{APP_METADATA.developerName}</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-stone-400 dark:text-stone-500">Paket:</span>
                <code className="font-mono text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
                  {APP_METADATA.packageName}
                </code>
                <button
                  onClick={handleCopyPackage}
                  title="Salin ID Paket"
                  className="p-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700 rounded transition-colors"
                >
                  {copiedPkg ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <p className="mt-6 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
          <strong className="text-stone-900 dark:text-stone-100 font-semibold">{APP_METADATA.developerName}</strong> (&ldquo;kami&rdquo;, &ldquo;pengembang&rdquo;) berkomitmen untuk melindungi dan menghormati privasi pengguna aplikasi <strong className="text-stone-900 dark:text-stone-100 font-semibold">{APP_METADATA.appName}</strong>. Halaman ini menyajikan transparansi penuh mengenai bagaimana data teknis dan preferensi lokal Anda dikelola dengan mengedepankan asas minimasi data (<em className="italic">data minimization</em>).
        </p>

        {/* 4 Metric Badges in 1 row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Nol PII</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Tanpa nama, nomor HP, atau kontak</p>
          </div>

          <div className="p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <Database className="w-4 h-4" />
              <span>Room DB Lokal</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Bookmark tersimpan eksklusif di HP</p>
          </div>

          <div className="p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-semibold">
              <Sliders className="w-4 h-4" />
              <span>Iklan Terverifikasi</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Mitra resmi Google, Meta & TopOn</p>
          </div>

          <div className="p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-semibold">
              <Smartphone className="w-4 h-4" />
              <span>Tanpa Akun</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Bisa langsung dipakai tanpa login</p>
          </div>
        </div>
      </div>
    </section>
  );
};
