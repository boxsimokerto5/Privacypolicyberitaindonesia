import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  Megaphone, 
  Sliders, 
  Newspaper, 
  Trash2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { QUICK_HIGHLIGHTS } from '../data/privacyData';

interface KeyHighlightsProps {
  onSelectSection: (sectionId: string) => void;
}

export const KeyHighlights: React.FC<KeyHighlightsProps> = ({ onSelectSection }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'Trash2': return <Trash2 className="w-5 h-5 text-stone-600 dark:text-stone-300" />;
      default: return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'safe':
        return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800';
      case 'local':
        return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800';
      case 'third_party':
        return 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800';
      case 'user_control':
        return 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800';
      default:
        return 'text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700';
    }
  };

  const targetMapping: Record<number, string> = {
    0: 'informasi-dikumpulkan',
    1: 'informasi-dikumpulkan',
    2: 'layanan-pihak-ketiga',
    3: 'layanan-pihak-ketiga',
    4: 'tautan-eksternal',
    5: 'hak-penghapusan-data',
  };

  return (
    <section id="ringkasan" className="py-10 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
              Ringkasan Eksekutif
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-1">
              Poin-Poin Penting Sepintas (Key Takeaways)
            </h2>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Dapat dipahami tuntas dalam waktu 1 menit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUICK_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 rounded-xl transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800">
                    {getIcon(item.iconName)}
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${getBadgeStyle(item.status)}`}>
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-end">
                <button
                  onClick={() => onSelectSection(targetMapping[idx] || 'informasi-dikumpulkan')}
                  className="text-xs font-medium text-stone-500 group-hover:text-red-600 dark:text-stone-400 dark:group-hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <span>Lihat klausul resmi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
