import React from 'react';
import { Sliders, CheckCircle2, ChevronRight, Info, RotateCcw } from 'lucide-react';

export const AdSettingsGuide: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      title: 'Buka Setelan HP',
      subtitle: 'Menu Pengaturan Android',
      instruction: 'Buka aplikasi Setelan (Settings / Pengaturan) di ponsel Android Anda.',
      detail: 'Ikon roda gigi di layar utama atau panel notifikasi atas.',
    },
    {
      title: 'Pilih Menu Google',
      subtitle: 'Layanan Sistem Google',
      instruction: 'Gulir ke bawah dan ketuk menu bernama "Google" (atau "Layanan & Preferensi Google").',
      detail: 'Ini membuka dashboard akun dan kontrol privasi Google Play Services di perangkat Anda.',
    },
    {
      title: 'Ketuk Submenu "Iklan"',
      subtitle: 'Pengaturan Advertising ID',
      instruction: 'Di dalam halaman Google, pilih menu "Iklan" (Ads).',
      detail: 'Di sinilah ID Iklan Google (GAID) teknis perangkat Anda dikelola.',
    },
    {
      title: 'Setel Ulang atau Hapus',
      subtitle: 'Privasi Maksimal',
      instruction: 'Pilih "Setel ulang ID iklan" untuk mengacak ulang kode, atau "Hapus ID iklan" untuk memblokir personalisasi sepenuhnya.',
      detail: 'Setelah dihapus, aplikasi tidak akan dapat menautkan histori teknis apapun ke ID iklan Anda.',
    },
  ];

  return (
    <div className="bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-xl p-5 my-6">
      <div className="flex items-center gap-2 mb-2">
        <Sliders className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
          Panduan Interaktif: Kontrol & Reset ID Iklan di Android
        </h4>
      </div>
      <p className="text-xs text-stone-600 dark:text-stone-300 mb-4">
        Sebagai pengguna, Anda memegang kendali penuh atas ID Iklan (GAID) perangkat Anda. Ikuti 4 langkah mudah berikut:
      </p>

      {/* Interactive Step Timeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {steps.map((st, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`p-2.5 rounded-lg text-left transition-all text-xs border ${
              activeStep === i
                ? 'bg-white dark:bg-stone-800 border-purple-500/50 shadow-xs ring-1 ring-purple-500/20 text-stone-900 dark:text-stone-100 font-semibold'
                : 'bg-stone-100/70 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-white dark:hover:bg-stone-800'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                Langkah 0{i + 1}
              </span>
              {activeStep === i && (
                <CheckCircle2 className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              )}
            </div>
            <div className="truncate">{st.title}</div>
          </button>
        ))}
      </div>

      {/* Step Detail Card */}
      <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Langkah {activeStep + 1} dari {steps.length} — {steps[activeStep].subtitle}
            </span>
            <p className="text-sm font-medium text-stone-900 dark:text-stone-100 mt-1">
              {steps[activeStep].instruction}
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              {steps[activeStep].detail}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {activeStep < steps.length - 1 ? (
              <button
                onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded transition-colors"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setActiveStep(0)}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 rounded transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Ulangi</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
        <Info className="w-3.5 h-3.5 shrink-0 text-stone-400" />
        <span>
          Lokasi menu dapat sedikit bervariasi bergantung pada antarmuka pabrikan ponsel Anda (Samsung OneUI, Xiaomi HyperOS/MIUI, Oppo ColorOS, Pixel, dll).
        </span>
      </div>
    </div>
  );
};
