export interface PolicySection {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  bulletPoints: string[];
  fullText: string;
  iconName: string;
  tag: string;
}

export interface AdNetwork {
  name: string;
  company: string;
  purpose: string;
  privacyUrl: string;
  dataProcessed: string[];
}

export interface QuickHighlight {
  title: string;
  highlight: string;
  description: string;
  iconName: string;
  status: 'safe' | 'local' | 'third_party' | 'user_control';
}

export const APP_METADATA = {
  appName: 'Berita Indonesia',
  packageName: 'com.beritaindonesia.gecckocreator',
  developerName: 'Geccko Creator',
  supportEmail: 'eccko.w4@gmail.com',
  lastUpdated: '8 November 2026',
  appVersionNote: 'Versi Rilis Publik Android (SDK 24+)',
  appLogo: '/assets/aistudio/IMG_20261106_220019_c7eb4cab.jpg',
  storeStatus: 'Google Play Store Compliant',
};

export const QUICK_HIGHLIGHTS: QuickHighlight[] = [
  {
    title: 'Nol Identitas Pribadi (No PII)',
    highlight: '100% Bebas Registrasi',
    description: 'Kami tidak meminta atau mengumpulkan nama, nomor HP, kontak, foto, maupun lokasi presisi GPS Anda.',
    iconName: 'ShieldCheck',
    status: 'safe',
  },
  {
    title: 'Penyimpanan Eksklusif di HP',
    highlight: 'Room Database Lokal',
    description: 'Bookmark berita dan pilihan tema disimpan di memori internal ponsel. Tidak pernah diunggah ke server eksternal.',
    iconName: 'Smartphone',
    status: 'local',
  },
  {
    title: 'Jaringan Iklan Terverifikasi',
    highlight: 'TopOn, Meta & Google',
    description: 'Menampilkan iklan untuk menjaga aplikasi tetap gratis. Hanya memproses ID Iklan teknis non-pribadi.',
    iconName: 'Megaphone',
    status: 'third_party',
  },
  {
    title: 'Kendali Penuh di Tangan Anda',
    highlight: 'Reset ID Iklan Kapan Saja',
    description: 'Anda bebas menyetel ulang atau menonaktifkan ID Iklan Google melalui Setelan ponsel Android Anda.',
    iconName: 'Sliders',
    status: 'user_control',
  },
  {
    title: 'Agregasi Resmi & Hak Cipta',
    highlight: 'Chrome Custom Tabs',
    description: 'Artikel berita lengkap dibuka langsung di situs web penerbit resmi. Hak cipta 100% milik media bersangkutan.',
    iconName: 'Newspaper',
    status: 'safe',
  },
  {
    title: 'Penghapusan Data Mudah',
    highlight: 'Hapus Sekali Klik',
    description: 'Hapus bookmark dari dalam aplikasi, atau pilih Hapus Data di setelan aplikasi ponsel Anda.',
    iconName: 'Trash2',
    status: 'user_control',
  },
];

export const AD_NETWORKS: AdNetwork[] = [
  {
    name: 'TopOn Ad Mediation (Anythink)',
    company: 'TopOn Tech Co., Ltd.',
    purpose: 'Mediasi dan optimasi penayangan iklan pihak ketiga',
    privacyUrl: 'https://www.toponad.com/en/privacy-policy',
    dataProcessed: ['Google Advertising ID (GAID)', 'Alamat IP (geolokasi umum & anti-fraud)', 'Info teknis perangkat'],
  },
  {
    name: 'Meta Audience Network (Facebook Ads)',
    company: 'Meta Platforms, Inc.',
    purpose: 'Penyedia inventaris iklan yang relevan',
    privacyUrl: 'https://www.facebook.com/privacy/policy/',
    dataProcessed: ['Google Advertising ID (GAID)', 'Tipe perangkat & versi OS', 'Interaksi iklan'],
  },
  {
    name: 'Google Play Services (Google Advertising ID)',
    company: 'Google LLC',
    purpose: 'Layanan infrastruktur Android dan ID periklanan terstandarisasi',
    privacyUrl: 'https://policies.google.com/privacy',
    dataProcessed: ['Google Advertising ID (GAID)', 'Diagnostik teknis dasar'],
  },
];

export const NEWS_PORTALS = [
  'Detikcom',
  'Kompas.com',
  'CNN Indonesia',
  'Antara News',
  'CNBC Indonesia',
  'Republika',
  'Tempo',
  'Sindonews',
];

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'informasi-dikumpulkan',
    number: '01',
    title: 'Informasi yang Kami Kumpulkan',
    shortSummary: 'Beroperasi dengan asas minimasi data: tanpa registrasi akun, tanpa meminta identitas pribadi, dan bookmark disimpan murni di memori internal perangkat Anda.',
    bulletPoints: [
      'Informasi Identitas Pribadi (PII): TIDAK ADA pengumpulan nama, alamat rumah, nomor telepon, kontak buku, foto, maupun lokasi presisi GPS.',
      'Tanpa Akun / Login: Aplikasi dapat digunakan secara penuh tanpa harus mendaftar atau masuk ke sistem akun apapun.',
      'Data Penyimpanan Lokal (On-Device Storage): Bookmark berita tersimpan dan preferensi tema (Terang / Gelap) disimpan eksklusif di memori ponsel via Room Database lokal terenkripsi.',
      'Tidak Ada Sinkronisasi Cloud: Data bookmark dan setelan lokal tidak pernah dikirim, disimpan, atau disinkronkan ke server eksternal milik kami.',
    ],
    fullText: `Aplikasi Berita Indonesia beroperasi dengan prinsip minimasi data (data minimization):

• Informasi Identitas Pribadi (PII): Kami TIDAK mengumpulkan data identitas pribadi seperti nama lengkap, alamat rumah, nomor telepon, daftar kontak telepon, foto pribadi, maupun lokasi presisi GPS Anda. Aplikasi ini dapat digunakan sepenuhnya tanpa perlu registrasi akun atau proses masuk (login).

• Data Penyimpanan Lokal (On-Device Storage): Data penanda buku (bookmarks) dan preferensi tema tampilan (Mode Terang/Mode Gelap) disimpan secara eksklusif di dalam memori internal perangkat Anda menggunakan basis data lokal terenkripsi (Room Database). Data ini tidak pernah diunggah atau disinkronkan ke server eksternal kami.`,
    iconName: 'Database',
    tag: 'Minimasi Data',
  },
  {
    id: 'layanan-pihak-ketiga',
    number: '02',
    title: 'Layanan Pihak Ketiga & SDK Periklanan',
    shortSummary: 'Iklan digunakan agar aplikasi dapat dinikmati 100% gratis. Mitra periklanan hanya mengolah parameter teknis perangkat non-pribadi seperti ID Iklan Google (GAID).',
    bulletPoints: [
      'Mitra SDK Resmi: TopOn Ad Mediation, Meta Audience Network (Facebook Ads), dan Google Play Services.',
      'Data Teknis yang Diproses: Google Advertising ID (GAID), Alamat IP kasar (tingkat negara/kota untuk cegah kecurangan iklan), serta model perangkat & versi OS Android.',
      'Kontrol Pengguna: Anda berhak mengatur ulang atau menonaktifkan personalisasi iklan kapan saja melalui Setelan ponsel Android.',
      'Jalur Pengaturan: Buka Setelan HP > Google > Iklan > Hapus atau Setel Ulang ID Iklan.',
    ],
    fullText: `Untuk menjaga agar aplikasi ini dapat terus dinikmati secara gratis oleh masyarakat luas, kami menggunakan jaringan periklanan pihak ketiga terpercaya:

1. TopOn Ad Mediation (Anythink)
   Kebijakan Privasi: https://www.toponad.com/en/privacy-policy
2. Meta Audience Network (Facebook Ads)
   Kebijakan Privasi: https://www.facebook.com/privacy/policy/
3. Google Play Services (Google Advertising ID)
   Kebijakan Privasi: https://policies.google.com/privacy

Data yang Diproses oleh Jaringan Iklan:
SDK pihak ketiga tersebut dapat secara otomatis mengumpulkan dan memproses informasi teknis non-pribadi perangkat Anda, termasuk:
• ID Iklan Google (Google Advertising ID / GAID).
• Alamat IP (untuk penentuan wilayah umum negara/kota dan pencegahan penipuan klik/fraud prevention).
• Informasi teknis perangkat (tipe perangkat, versi sistem operasi Android, resolusi layar, operator seluler).

Kontrol Pengguna Terhadap Iklan:
Anda memiliki kendali penuh untuk menyetel ulang (reset) atau menonaktifkan personalisasi iklan kapan saja melalui menu pengaturan ponsel Android Anda:
Setelan (Settings) > Google > Iklan (Ads) > Hapus atau Setel Ulang ID Iklan.`,
    iconName: 'Radio',
    tag: 'SDK & Iklan',
  },
  {
    id: 'tautan-eksternal',
    number: '03',
    title: 'Tautan Eksternal & Chrome Custom Tabs',
    shortSummary: 'Sebagai pembaca agregator feed berita publik, artikel lengkap dibuka langsung di situs web penerbit resmi via Chrome Custom Tabs (CCT).',
    bulletPoints: [
      'Agregator Berita Publik: Mengumpulkan tajuk berita dari media terverifikasi seperti Detikcom, Kompas, CNN Indonesia, Antara News, CNBC Indonesia, Republika, Tempo, Sindonews, dll.',
      'Buka di Peramban Resmi (CCT): Artikel lengkap dibuka langsung menggunakan Chrome Custom Tabs tanpa modifikasi konten.',
      'Kuki & Kebijakan Penerbit: Interaksi dan kuki di situs media eksternal tunduk penuh pada kebijakan privasi masing-masing penerbit resmi terkait.',
    ],
    fullText: `Aplikasi Berita Indonesia adalah aplikasi agregator pembaca feed berita publik dari sumber-sumber terpercaya (seperti Detikcom, Kompas, CNN Indonesia, Antara News, CNBC Indonesia, Republika, Tempo, Sindonews, dan portal media nasional lainnya).

Ketika Anda memilih untuk membaca artikel lengkap, aplikasi akan membuka situs resmi penerbit berita menggunakan teknologi peramban resmi Chrome Custom Tabs (CCT). Segala kuki (cookies), interaksi, maupun kebijakan pengumpulan data di situs web eksternal tersebut tunduk sepenuhnya pada kebijakan privasi masing-masing penerbit berita terkait.`,
    iconName: 'ExternalLink',
    tag: 'Peramban Web',
  },
  {
    id: 'hak-cipta-konten',
    number: '04',
    title: 'Hak Cipta Konten Berita',
    shortSummary: 'Seluruh naskah, foto jurnalistik, dan merek dagang adalah hak milik eksklusif masing-masing media penerbit. Aplikasi selalu mencantumkan sumber resmi.',
    bulletPoints: [
      'Kepemilikan Hak Cipta: Seluruh naskah, kutipan, foto jurnalistik, dan merek dagang adalah milik eksklusif penerbit berita terkait.',
      'Tujuan Kemudahan Informasi: Berita Indonesia menyajikan rangkuman dan judul untuk mempermudah akses informasi publik.',
      'Rujukan & Atribusi: Setiap artikel selalu menyertakan nama media sumber dan tautan langsung ke artikel aslinya.',
    ],
    fullText: `Seluruh naskah berita, cuplikan, foto jurnalistik, dan merek dagang portal media yang ditampilkan adalah milik eksklusif dari masing-masing penerbit berita bersangkutan. Aplikasi Berita Indonesia menyajikan informasi tersebut untuk tujuan kemudahan akses informasi publik dengan selalu mencantumkan sumber dan merujuk langsung ke halaman web penerbit resmi.`,
    iconName: 'Award',
    tag: 'Hak Kekayaan Intelektual',
  },
  {
    id: 'privasi-anak',
    number: '05',
    title: 'Privasi Anak-Anak (Children\'s Privacy)',
    shortSummary: 'Aplikasi ditujukan untuk audiens umum berusia 13 tahun ke atas dan tidak mengumpulkan informasi dari anak-anak di bawah umur.',
    bulletPoints: [
      'Batas Usia Pengguna: Aplikasi ditujukan untuk pengguna umum berusia 13 tahun ke atas.',
      'Perlindungan Anak: Kami tidak secara sengaja mengumpulkan data identifikasi dari anak-anak di bawah usia 13 tahun.',
      'Kepatuhan Kebijakan Keluarga: Mematuhi panduan COPPA dan kebijakan keluarga Google Play.',
    ],
    fullText: `Aplikasi kami ditujukan untuk pengguna umum berusia 13 tahun ke atas. Kami tidak secara sengaja mengumpulkan data identifikasi dari anak-anak di bawah usia 13 tahun.`,
    iconName: 'Users',
    tag: 'Perlindungan Anak',
  },
  {
    id: 'keamanan-data',
    number: '06',
    title: 'Keamanan Data (Data Security)',
    shortSummary: 'Menerapkan standar industri untuk mengamankan integritas data lokal pada perangkat dari akses pihak tak berwenang.',
    bulletPoints: [
      'Standar Industri: Pengamanan struktur aplikasi untuk mencegah injeksi, modifikasi, atau manipulasi file lokal.',
      'Basis Data Terenkripsi: Basis data Room pada Android diisolasi dalam sandbox aplikasi milik sistem operasi Android.',
      'Protokol Aman: Seluruh muatan feed berita diakses melalui koneksi aman terenkripsi (HTTPS).',
    ],
    fullText: `Kami menerapkan praktik keamanan standar industri untuk melindungi integritas aplikasi di perangkat Anda dari manipulasi atau akses tidak sah.`,
    iconName: 'Lock',
    tag: 'Keamanan',
  },
  {
    id: 'hak-penghapusan-data',
    number: '07',
    title: 'Hak dan Penghapusan Data Anda',
    shortSummary: 'Karena seluruh data personal tersimpan secara lokal di perangkat Anda, Anda memegang kendali 100% untuk menghapusnya kapan saja.',
    bulletPoints: [
      'Hapus Bookmark Seketika: Hapus satu atau seluruh artikel yang tersimpan langsung dari menu "Tersimpan" di aplikasi.',
      'Hapus Data Menyeluruh: Buka Pengaturan Android > Aplikasi > Berita Indonesia > Hapus Penyimpanan / Hapus Data (Clear Data).',
      'Uninstall / Copot Pemasangan: Mencopot pemasangan aplikasi secara otomatis menghapus seluruh basis data lokal dari ponsel Anda.',
    ],
    fullText: `Karena penanda buku (bookmark) disimpan secara lokal pada perangkat Anda:
• Anda dapat menghapus artikel tersimpan kapan saja langsung dari menu Tersimpan di dalam aplikasi.
• Anda dapat menghapus seluruh data aplikasi secara permanen dengan memilih Hapus Data (Clear Data) pada menu Setelan Aplikasi di ponsel Anda, atau dengan mencopot pemasangan (uninstall) aplikasi.`,
    iconName: 'UserCheck',
    tag: 'Hak Pengguna',
  },
  {
    id: 'perubahan-kebijakan',
    number: '08',
    title: 'Perubahan pada Kebijakan Privasi',
    shortSummary: 'Kebijakan dapat diperbarui secara berkala menyesuaikan pembaruan fitur atau regulasi hukum, dengan tanggal revisi yang selalu diperbarui.',
    bulletPoints: [
      'Pembaruan Berkala: Disesuaikan dengan pembaruan fitur aplikasi atau kepatuhan peraturan perundang-undangan.',
      'Transparansi Tanggal: Setiap perubahan akan langsung tercantum pada halaman ini dengan tanggal "Terakhir Diperbarui".',
      'Rekomendasi Peninjauan: Kami menyarankan pengguna memeriksa halaman ini secara berkala.',
    ],
    fullText: `Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan peraturan perundang-undangan baru atau pembaruan fitur aplikasi. Setiap perubahan akan dicantumkan pada halaman ini dengan tanggal "Terakhir Diperbarui" yang disesuaikan.`,
    iconName: 'RefreshCw',
    tag: 'Revisi Kebijakan',
  },
  {
    id: 'hubungi-kami',
    number: '09',
    title: 'Informasi Kontak & Pengembang',
    shortSummary: 'Hubungi pengembang langsung melalui email resmi jika Anda memiliki pertanyaan, saran, atau masukan privasi.',
    bulletPoints: [
      'Nama Pengembang: Geccko Creator',
      'Email Dukungan: eccko.w4@gmail.com',
      'Nama Aplikasi: Berita Indonesia',
      'ID Paket Aplikasi: com.beritaindonesia.gecckocreator',
    ],
    fullText: `Jika Anda memiliki pertanyaan, saran, atau masukan mengenai Kebijakan Privasi ini, silakan hubungi pengembang melalui:

• Nama Pengembang: Geccko Creator
• Email Dukungan: eccko.w4@gmail.com
• Nama Aplikasi: Berita Indonesia
• ID Paket Aplikasi: com.beritaindonesia.gecckocreator`,
    iconName: 'Mail',
    tag: 'Kontak Resmi',
  },
];
