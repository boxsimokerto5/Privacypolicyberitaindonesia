import React from 'react';
import { 
  Database, 
  Radio, 
  ExternalLink, 
  Award, 
  Users, 
  Lock, 
  UserCheck, 
  RefreshCw, 
  Mail, 
  Search, 
  Check, 
  X, 
  FileText, 
  ListFilter,
  ShieldCheck,
  Globe,
  Trash2,
  Copy
} from 'lucide-react';
import { 
  POLICY_SECTIONS, 
  AD_NETWORKS, 
  NEWS_PORTALS, 
  APP_METADATA 
} from '../data/privacyData';
import { AdSettingsGuide } from './AdSettingsGuide';

interface PolicySectionsProps {
  viewMode: 'summary' | 'full';
  onChangeViewMode: (mode: 'summary' | 'full') => void;
}

export const PolicySections: React.FC<PolicySectionsProps> = ({ 
  viewMode, 
  onChangeViewMode 
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const getSectionIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'ExternalLink': return <ExternalLink className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'Award': return <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-stone-600 dark:text-stone-300" />;
      case 'Mail': return <Mail className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default: return <FileText className="w-5 h-5 text-stone-600" />;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(APP_METADATA.supportEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredSections = React.useMemo(() => {
    if (!searchQuery.trim()) return POLICY_SECTIONS;
    const q = searchQuery.toLowerCase();
    return POLICY_SECTIONS.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.shortSummary.toLowerCase().includes(q) ||
      s.bulletPoints.some(bp => bp.toLowerCase().includes(q)) ||
      s.fullText.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Controls: Mode Switcher & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
        {/* View Mode Toggle */}
        <div className="inline-flex p-1 bg-stone-100 dark:bg-stone-800 rounded-lg">
          <button
            onClick={() => onChangeViewMode('summary')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'summary'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Mode Poin Penting (Ringkas)</span>
          </button>
          <button
            onClick={() => onChangeViewMode('full')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'full'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Dokumen Lengkap (Resmi)</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata kunci (cth: Iklan, Bookmark, GAID)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-red-500 focus:border-red-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Notice if search filtered */}
      {searchQuery && (
        <div className="mt-4 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
          <span>Menampilkan hasil pencarian untuk &ldquo;{searchQuery}&rdquo; ({filteredSections.length} bagian ditemukan)</span>
          <button onClick={() => setSearchQuery('')} className="text-red-600 dark:text-red-400 hover:underline">
            Reset pencarian
          </button>
        </div>
      )}

      {/* Sections List */}
      <div className="mt-8 space-y-12">
        {filteredSections.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="scroll-mt-24 border-b border-stone-200/80 dark:border-stone-800/80 pb-12 last:border-b-0"
          >
            {/* Section Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 shrink-0 mt-0.5">
                {getSectionIcon(sec.iconName)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-500 font-mono">
                  <span>BAGIAN {sec.number}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans font-medium text-stone-600 dark:text-stone-400">{sec.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-0.5">
                  {sec.title}
                </h3>
              </div>
            </div>

            {/* View Mode 1: Summary / Point-by-point view */}
            {viewMode === 'summary' ? (
              <div className="space-y-4">
                {/* Short takeaway callout box */}
                <div className="p-4 rounded-xl bg-stone-100/60 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-sm text-stone-700 dark:text-stone-300 font-medium leading-relaxed">
                  <span className="font-bold text-red-600 dark:text-red-400 mr-2">Intisari:</span>
                  {sec.shortSummary}
                </div>

                {/* Key Bullet points */}
                <div className="bg-white dark:bg-stone-900/40 border border-stone-200/70 dark:border-stone-800/80 rounded-xl p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                    Poin-Poin Pokok
                  </h4>
                  <ul className="space-y-3">
                    {sec.bulletPoints.map((bp, bidx) => (
                      <li key={bidx} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 shrink-0 mt-2" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section Specific Enhancements in Summary View */}
                {sec.id === 'informasi-dikumpulkan' && (
                  <div className="mt-4 overflow-hidden border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-900">
                    <div className="px-4 py-3 bg-stone-100/70 dark:bg-stone-800/60 border-b border-stone-200 dark:border-stone-800">
                      <h5 className="text-xs font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider">
                        Matriks Pengumpulan Data
                      </h5>
                    </div>
                    <div className="divide-y divide-stone-100 dark:divide-stone-800 text-xs sm:text-sm">
                      <div className="p-3.5 flex items-center justify-between gap-4">
                        <span className="font-medium text-stone-700 dark:text-stone-300">
                          Nama, Email, Nomor Telepon, Akun
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs shrink-0">
                          <X className="w-4 h-4 text-emerald-600 stroke-[3]" /> Tidak Dikumpulkan
                        </span>
                      </div>
                      <div className="p-3.5 flex items-center justify-between gap-4">
                        <span className="font-medium text-stone-700 dark:text-stone-300">
                          Lokasi Presisi GPS & Buku Kontak
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs shrink-0">
                          <X className="w-4 h-4 text-emerald-600 stroke-[3]" /> Tidak Diakses
                        </span>
                      </div>
                      <div className="p-3.5 flex items-center justify-between gap-4">
                        <span className="font-medium text-stone-700 dark:text-stone-300">
                          Bookmark Berita & Mode Tema
                        </span>
                        <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs shrink-0">
                          <Check className="w-4 h-4 text-blue-600 stroke-[3]" /> Tersimpan Lokal (Room DB)
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {sec.id === 'layanan-pihak-ketiga' && (
                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {AD_NETWORKS.map((ad, aidx) => (
                        <div
                          key={aidx}
                          className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                              Mitra Iklan {aidx + 1}
                            </div>
                            <h5 className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                              {ad.name}
                            </h5>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                              {ad.purpose}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
                            <a
                              href={ad.privacyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
                            >
                              <span>Kebijakan Privasi</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <AdSettingsGuide />
                  </div>
                )}

                {sec.id === 'tautan-eksternal' && (
                  <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
                    <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 mb-2">
                      Contoh Sumber Berita Publik yang Diagregasi:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {NEWS_PORTALS.map((portal) => (
                        <span
                          key={portal}
                          className="px-2.5 py-1 text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md"
                        >
                          {portal}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 leading-relaxed">
                      Artikel dibuka via <strong>Chrome Custom Tabs</strong> langsung ke situs resmi penerbit untuk memastikan kepatuhan hak cipta dan kuki penerbit.
                    </p>
                  </div>
                )}

                {sec.id === 'hak-penghapusan-data' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
                      <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-semibold text-sm mb-1">
                        <Trash2 className="w-4 h-4 text-red-500" />
                        <span>Hapus Bookmark Tersimpan</span>
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        Cukup buka menu <strong>&ldquo;Tersimpan&rdquo;</strong> di dalam aplikasi Berita Indonesia dan ketuk ikon hapus pada berita yang tidak lagi diinginkan.
                      </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
                      <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-semibold text-sm mb-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>Hapus Data Menyeluruh (Reset)</span>
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        Buka <strong>Setelan HP &gt; Aplikasi &gt; Berita Indonesia &gt; Hapus Data (Clear Data)</strong>, atau hapus aplikasi (<em className="italic">uninstall</em>) dari ponsel Anda.
                      </p>
                    </div>
                  </div>
                )}

                {sec.id === 'hubungi-kami' && (
                  <div className="p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-stone-400">Pengembang Resmi</span>
                        <div className="text-base font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                          {APP_METADATA.developerName}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                          Aplikasi: {APP_METADATA.appName}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-stone-400">Email Dukungan & Privasi</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <a
                            href={`mailto:${APP_METADATA.supportEmail}`}
                            className="text-sm font-semibold text-red-600 dark:text-red-400 hover:underline truncate"
                          >
                            {APP_METADATA.supportEmail}
                          </a>
                          <button
                            onClick={handleCopyEmail}
                            title="Salin Email"
                            className="p-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded"
                          >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <span className="text-[11px] text-stone-500">Respon dalam 1-2 hari kerja</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* View Mode 2: Full Formal Legal Document Text */
              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-xs">
                  <div className="prose dark:prose-invert max-w-none text-sm text-stone-700 dark:text-stone-300 whitespace-pre-line leading-relaxed font-normal">
                    {sec.fullText}
                  </div>
                </div>

                {sec.id === 'layanan-pihak-ketiga' && (
                  <div className="p-4 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-xl">
                    <h5 className="text-xs font-semibold text-stone-900 dark:text-stone-100 mb-2">
                      Tautan Langsung Kebijakan Privasi Mitra:
                    </h5>
                    <ul className="space-y-1.5 text-xs">
                      {AD_NETWORKS.map((ad, idx) => (
                        <li key={idx}>
                          <a
                            href={ad.privacyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
                          >
                            <span>{ad.name}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
