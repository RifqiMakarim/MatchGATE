
export type EntityRole = 
  | "sppg" 
  | "sekolah" 
  | "peternak_hewan" 
  | "peternak_manggot" 
  | "waste_to_energy";

export interface RegionalEntity {
  id: string;
  city: string;
  category: string; // Display name
  role: EntityRole; // Internal logic
  name: string;
  address: string;
  lat: number;
  lng: number;
  stock: string; // Display string like "Butuh 50kg" or "Ada 20kg"
  wasteStock: number; // Numeric for charts
  status: "Tersedia" | "Proses Penjemputan" | "Aktif" | "Penuh";
  lastActivity: string;
  avatar: string; // Initials
}

export const CITIES = ["Jakarta", "Surabaya", "Semarang", "Bandung"];

export const REGIONAL_ENTITIES: RegionalEntity[] = [
  // --- JAKARTA ---
  // SPPG
  { id: "jkt-sppg-1", city: "Jakarta", category: "SPPG", role: "sppg", name: "SPPG Pejaten (Polri)", address: "Jl. Pejaten Raya Ps. Minggu", lat: -6.2800, lng: 106.8300, stock: "Ada 45kg", wasteStock: 45, status: "Tersedia", lastActivity: "2 jam lalu", avatar: "SP" },
  { id: "jkt-sppg-2", city: "Jakarta", category: "SPPG", role: "sppg", name: "SPPG Kemang 1 (GSN)", address: "Jl. Kemang Selatan No. 106", lat: -6.2600, lng: 106.8100, stock: "Ada 30kg", wasteStock: 30, status: "Proses Penjemputan", lastActivity: "5 jam lalu", avatar: "SK" },
  { id: "jkt-sppg-3", city: "Jakarta", category: "SPPG", role: "sppg", name: "SPPG Tanah Abang (TNI)", address: "Kawasan Koramil Tanah Abang", lat: -6.1800, lng: 106.8100, stock: "Ada 60kg", wasteStock: 60, status: "Tersedia", lastActivity: "1 jam lalu", avatar: "ST" },
  { id: "jkt-sppg-4", city: "Jakarta", category: "SPPG", role: "sppg", name: "SPPG Cilincing", address: "Wilayah Pesisir Cilincing", lat: -6.1100, lng: 106.9400, stock: "Ada 25kg", wasteStock: 25, status: "Aktif", lastActivity: "Hari ini", avatar: "SC" },
  { id: "jkt-sppg-5", city: "Jakarta", category: "SPPG", role: "sppg", name: "SPPG Pulogadung", address: "Kawasan Industri Pulogadung", lat: -6.1900, lng: 106.9000, stock: "Ada 80kg", wasteStock: 80, status: "Tersedia", lastActivity: "30 menit lalu", avatar: "SP" },
  // Sekolah
  { id: "jkt-sch-1", city: "Jakarta", category: "Sekolah", role: "sekolah", name: "SMA Negeri 8 Jakarta", address: "Jl. Taman Bukit Duri Tebet", lat: -6.2200, lng: 106.8600, stock: "Ada 15kg", wasteStock: 15, status: "Tersedia", lastActivity: "4 jam lalu", avatar: "S8" },
  { id: "jkt-sch-2", city: "Jakarta", category: "Sekolah", role: "sekolah", name: "SMA Kanisius", address: "Jl. Menteng Raya No. 64", lat: -6.1850, lng: 106.8350, stock: "Ada 10kg", wasteStock: 10, status: "Aktif", lastActivity: "Kemarin", avatar: "SK" },
  { id: "jkt-sch-3", city: "Jakarta", category: "Sekolah", role: "sekolah", name: "SMA Negeri 70 Jakarta", address: "Jl. Bulungan No. 1", lat: -6.2400, lng: 106.7900, stock: "Ada 20kg", wasteStock: 20, status: "Tersedia", lastActivity: "3 jam lalu", avatar: "S7" },
  // Peternak Hewan
  { id: "jkt-ph-1", city: "Jakarta", category: "Peternak Hewan", role: "peternak_hewan", name: "Kandang Ayam Betawi Muda", address: "Petukangan Utara Pesanggrahan", lat: -6.2300, lng: 106.7500, stock: "Butuh 100kg", wasteStock: 100, status: "Aktif", lastActivity: "1 jam lalu", avatar: "KB" },
  { id: "jkt-ph-2", city: "Jakarta", category: "Peternak Hewan", role: "peternak_hewan", name: "Arkandra Farm", address: "Kawasan Agro Wisata Halim", lat: -6.2600, lng: 106.8900, stock: "Butuh 200kg", wasteStock: 200, status: "Aktif", lastActivity: "Hari ini", avatar: "AF" },
  { id: "jkt-ph-3", city: "Jakarta", category: "Peternak Hewan", role: "peternak_hewan", name: "Bina Satwa Farm", address: "Cipayung Jakarta Timur", lat: -6.3000, lng: 106.9000, stock: "Butuh 150kg", wasteStock: 150, status: "Aktif", lastActivity: "Hari ini", avatar: "BS" },
  // Peternak Maggot
  { id: "jkt-pm-1", city: "Jakarta", category: "Peternak Maggot", role: "peternak_manggot", name: "Maggot Sunter (RW 01)", address: "Sunter Agung Tanjung Priok", lat: -6.1400, lng: 106.8700, stock: "Butuh 50kg", wasteStock: 50, status: "Aktif", lastActivity: "2 jam lalu", avatar: "MS" },
  { id: "jkt-pm-2", city: "Jakarta", category: "Peternak Maggot", role: "peternak_manggot", name: "Biomagg", address: "Wilayah Jakarta (Base Depok)", lat: -6.3800, lng: 106.8000, stock: "Butuh 300kg", wasteStock: 300, status: "Penuh", lastActivity: "Hari ini", avatar: "BM" },
  { id: "jkt-pm-3", city: "Jakarta", category: "Peternak Maggot", role: "peternak_manggot", name: "Rumah Maggot Pesanggrahan", address: "Binaan LH Pesanggrahan", lat: -6.2500, lng: 106.7600, stock: "Butuh 80kg", wasteStock: 80, status: "Aktif", lastActivity: "Kemarin", avatar: "RM" },
  // Waste to Energy
  { id: "jkt-wte-1", city: "Jakarta", category: "Waste to Energy", role: "waste_to_energy", name: "PSEL Sunter (ITF)", address: "Sunter Agung Jakarta Utara", lat: -6.1300, lng: 106.8700, stock: "Butuh 1000kg", wasteStock: 1000, status: "Aktif", lastActivity: "Setiap Hari", avatar: "PS" },
  { id: "jkt-wte-2", city: "Jakarta", category: "Waste to Energy", role: "waste_to_energy", name: "PLTSa Bantargebang", address: "Jl. Pangkalan 5 Bantargebang", lat: -6.4000, lng: 106.9900, stock: "Butuh 5000kg", wasteStock: 5000, status: "Aktif", lastActivity: "Setiap Hari", avatar: "PB" },

  // --- SURABAYA ---
  // SPPG
  { id: "sby-sppg-1", city: "Surabaya", category: "SPPG", role: "sppg", name: "SPPG Simorejo", address: "Jl. Simorejo VII No. 27", lat: -7.2600, lng: 112.7200, stock: "Ada 35kg", wasteStock: 35, status: "Tersedia", lastActivity: "3 jam lalu", avatar: "SS" },
  { id: "sby-sppg-2", city: "Surabaya", category: "SPPG", role: "sppg", name: "SPPG Wonocolo", address: "Kawasan Kec. Wonocolo", lat: -7.3100, lng: 112.7400, stock: "Ada 50kg", wasteStock: 50, status: "Proses Penjemputan", lastActivity: "Hari ini", avatar: "SW" },
  { id: "sby-sppg-3", city: "Surabaya", category: "SPPG", role: "sppg", name: "SPPG Kenjeran", address: "Pesisir Bulak Kenjeran", lat: -7.2300, lng: 112.7800, stock: "Ada 40kg", wasteStock: 40, status: "Tersedia", lastActivity: "Kemarin", avatar: "SK" },
  // Sekolah
  { id: "sby-sch-1", city: "Surabaya", category: "Sekolah", role: "sekolah", name: "SMA Negeri 5 Surabaya", address: "Jl. Kusuma Bangsa No. 21", lat: -7.2550, lng: 112.7500, stock: "Ada 25kg", wasteStock: 25, status: "Tersedia", lastActivity: "1 jam lalu", avatar: "S5" },
  { id: "sby-sch-2", city: "Surabaya", category: "Sekolah", role: "sekolah", name: "SMA Katolik St. Louis 1", address: "Jl. Polisi Istimewa No. 7", lat: -7.2800, lng: 112.7400, stock: "Ada 18kg", wasteStock: 18, status: "Aktif", lastActivity: "Hari ini", avatar: "SL" },
  // Peternak Hewan
  { id: "sby-ph-1", city: "Surabaya", category: "Peternak Hewan", role: "peternak_hewan", name: "Bahari Farm", address: "Jl. Memet Sastrowiryo Kenjeran", lat: -7.2200, lng: 112.7900, stock: "Butuh 120kg", wasteStock: 120, status: "Aktif", lastActivity: "2 jam lalu", avatar: "BF" },
  { id: "sby-ph-2", city: "Surabaya", category: "Peternak Hewan", role: "peternak_hewan", name: "Sobaternak Surabaya", address: "Jl. Ngagel Jaya No. 30", lat: -7.2850, lng: 112.7600, stock: "Butuh 90kg", wasteStock: 90, status: "Aktif", lastActivity: "Hari ini", avatar: "ST" },
  // Peternak Maggot
  { id: "sby-pm-1", city: "Surabaya", category: "Peternak Maggot", role: "peternak_manggot", name: "Maggot BSF Lakarsantri", address: "Jl. Raya Lakarsantri", lat: -7.3200, lng: 112.6500, stock: "Butuh 200kg", wasteStock: 200, status: "Penuh", lastActivity: "Kemarin", avatar: "ML" },
  { id: "sby-pm-2", city: "Surabaya", category: "Peternak Maggot", role: "peternak_manggot", name: "Kampung Kedungturi", address: "Kedungturi Kec. Tegalsari", lat: -7.2700, lng: 112.7300, stock: "Butuh 60kg", wasteStock: 60, status: "Aktif", lastActivity: "Hari ini", avatar: "KK" },
  // Waste to Energy
  { id: "sby-wte-1", city: "Surabaya", category: "Waste to Energy", role: "waste_to_energy", name: "PSEL Benowo", address: "TPA Benowo Kec. Pakal", lat: -7.2400, lng: 112.6200, stock: "Butuh 2000kg", wasteStock: 2000, status: "Aktif", lastActivity: "Setiap Hari", avatar: "PB" },

  // --- SEMARANG ---
  // SPPG
  { id: "smg-sppg-1", city: "Semarang", category: "SPPG", role: "sppg", name: "SPPG Banyumanik", address: "Kawasan Kodam IV/Diponegoro", lat: -7.0600, lng: 110.4200, stock: "Ada 55kg", wasteStock: 55, status: "Tersedia", lastActivity: "1 jam lalu", avatar: "SB" },
  { id: "smg-sppg-2", city: "Semarang", category: "SPPG", role: "sppg", name: "SPPG Ngaliyan", address: "Kawasan Kec. Ngaliyan", lat: -7.0000, lng: 110.3500, stock: "Ada 40kg", wasteStock: 40, status: "Proses Penjemputan", lastActivity: "4 jam lalu", avatar: "SN" },
  { id: "smg-sppg-3", city: "Semarang", category: "SPPG", role: "sppg", name: "SPPG Tembalang", address: "Kawasan Tembalang", lat: -7.0500, lng: 110.4500, stock: "Ada 30kg", wasteStock: 30, status: "Tersedia", lastActivity: "Hari ini", avatar: "ST" },
  // Sekolah
  { id: "smg-sch-1", city: "Semarang", category: "Sekolah", role: "sekolah", name: "SMA Negeri 3 Semarang", address: "Jl. Pemuda No. 149", lat: -6.9800, lng: 110.4100, stock: "Ada 20kg", wasteStock: 20, status: "Tersedia", lastActivity: "30 menit lalu", avatar: "S3" },
  { id: "smg-sch-2", city: "Semarang", category: "Sekolah", role: "sekolah", name: "SMA Negeri 1 Semarang", address: "Jl. Taman Menteri Supeno No. 1", lat: -6.9900, lng: 110.4200, stock: "Ada 18kg", wasteStock: 18, status: "Aktif", lastActivity: "Hari ini", avatar: "S1" },
  // Peternak Hewan
  { id: "smg-ph-1", city: "Semarang", category: "Peternak Hewan", role: "peternak_hewan", name: "Green Fresh Farm", address: "Desa Jatirejo Gunungpati", lat: -7.0800, lng: 110.3800, stock: "Butuh 80kg", wasteStock: 80, status: "Aktif", lastActivity: "Kemarin", avatar: "GF" },
  { id: "smg-ph-2", city: "Semarang", category: "Peternak Hewan", role: "peternak_hewan", name: "K.T.T Rejeki Lumintu", address: "Sumurrejo Gunungpati", lat: -7.1000, lng: 110.4000, stock: "Butuh 100kg", wasteStock: 100, status: "Aktif", lastActivity: "Hari ini", avatar: "RL" },
  // Peternak Maggot
  { id: "smg-pm-1", city: "Semarang", category: "Peternak Maggot", role: "peternak_manggot", name: "Bank Sampah Purwokeling", address: "RW 10 Purwoyoso", lat: -6.9950, lng: 110.3600, stock: "Butuh 40kg", wasteStock: 40, status: "Aktif", lastActivity: "2 jam lalu", avatar: "BP" },
  { id: "smg-pm-2", city: "Semarang", category: "Peternak Maggot", role: "peternak_manggot", name: "Maggot BSF Mijen", address: "Wilayah Mijen", lat: -7.0500, lng: 110.3200, stock: "Butuh 120kg", wasteStock: 120, status: "Penuh", lastActivity: "Hari ini", avatar: "MM" },
  // Waste to Energy
  { id: "smg-wte-1", city: "Semarang", category: "Waste to Energy", role: "waste_to_energy", name: "PLTSa Jatibarang", address: "TPA Jatibarang Mijen", lat: -7.0300, lng: 110.3300, stock: "Butuh 1500kg", wasteStock: 1500, status: "Aktif", lastActivity: "Setiap Hari", avatar: "PJ" },

  // --- BANDUNG ---
  // SPPG
  { id: "bdg-sppg-1", city: "Bandung", category: "SPPG", role: "sppg", name: "SPPG Cicendo", address: "Lanud Husein Sastranegara", lat: -6.9000, lng: 107.5800, stock: "Ada 30kg", wasteStock: 30, status: "Tersedia", lastActivity: "5 jam lalu", avatar: "SC" },
  { id: "bdg-sppg-2", city: "Bandung", category: "SPPG", role: "sppg", name: "SPPG Margahayu Raya", address: "Jl. Merkuri Tengah No. 6", lat: -6.9500, lng: 107.6600, stock: "Ada 50kg", wasteStock: 50, status: "Proses Penjemputan", lastActivity: "Hari ini", avatar: "SM" },
  { id: "bdg-sppg-3", city: "Bandung", category: "SPPG", role: "sppg", name: "SPPG Baleendah", address: "Kawasan Baleendah", lat: -7.0000, lng: 107.6300, stock: "Ada 65kg", wasteStock: 65, status: "Tersedia", lastActivity: "1 jam lalu", avatar: "SB" },
  // Sekolah
  { id: "bdg-sch-1", city: "Bandung", category: "Sekolah", role: "sekolah", name: "SMA Negeri 3 Bandung", address: "Jl. Belitung No. 8", lat: -6.9100, lng: 107.6100, stock: "Ada 22kg", wasteStock: 22, status: "Tersedia", lastActivity: "2 jam lalu", avatar: "S3" },
  { id: "bdg-sch-2", city: "Bandung", category: "Sekolah", role: "sekolah", name: "SMA Alfa Centauri", address: "Jl. Diponegoro No. 48", lat: -6.9000, lng: 107.6200, stock: "Ada 15kg", wasteStock: 15, status: "Aktif", lastActivity: "Kemarin", avatar: "AC" },
  // Peternak Hewan
  { id: "bdg-ph-1", city: "Bandung", category: "Peternak Hewan", role: "peternak_hewan", name: "KPSBU Lembang", address: "Jl. Raya Lembang No. 153", lat: -6.8100, lng: 107.6100, stock: "Butuh 300kg", wasteStock: 300, status: "Penuh", lastActivity: "Hari ini", avatar: "KL" },
  { id: "bdg-ph-2", city: "Bandung", category: "Peternak Hewan", role: "peternak_hewan", name: "Pesona Satwa Farm", address: "Cipatat Kab. Bandung Barat", lat: -6.8500, lng: 107.4500, stock: "Butuh 100kg", wasteStock: 100, status: "Aktif", lastActivity: "3 jam lalu", avatar: "PS" },
  // Peternak Maggot
  { id: "bdg-pm-1", city: "Bandung", category: "Peternak Maggot", role: "peternak_manggot", name: "Kang Pisman Maggot", address: "Kel. Mekarjaya Rancasari", lat: -6.9500, lng: 107.6800, stock: "Butuh 60kg", wasteStock: 60, status: "Aktif", lastActivity: "4 jam lalu", avatar: "KP" },
  { id: "bdg-pm-2", city: "Bandung", category: "Peternak Maggot", role: "peternak_manggot", name: "ABS Maggot Center", address: "Baleendah Bandung", lat: -7.0100, lng: 107.6300, stock: "Butuh 150kg", wasteStock: 150, status: "Aktif", lastActivity: "Hari ini", avatar: "AM" },
  // Waste to Energy
  { id: "bdg-wte-1", city: "Bandung", category: "Waste to Energy", role: "waste_to_energy", name: "PLTSa Legok Nangka", address: "Nagreg Kab. Bandung", lat: -7.0200, lng: 107.8800, stock: "Butuh 3000kg", wasteStock: 3000, status: "Aktif", lastActivity: "Setiap Hari", avatar: "PL" },
];

export const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  "Jakarta": { lat: -6.2000, lng: 106.8166 },
  "Surabaya": { lat: -7.2575, lng: 112.7521 },
  "Semarang": { lat: -6.9667, lng: 110.4167 },
  "Bandung": { lat: -6.9175, lng: 107.6191 }
};

// --- NEW DATA STRUCTURES FOR DASHBOARD V2 ---

export interface RegionalStats {
  wasteManaged: number;
  maggotProduction: number;
  co2Reduced: string;
  economicValue: number;
  distributionTarget: {
    percentage: number;
    current: number;
    total: number;
    unit: string;
  };
}

export interface RegionalGraphData {
  name: string;
  sekolah: number;
  sppg: number;
}

export interface RegionalActivity {
  id: number;
  source: string;
  target: string;
  amount: number;
  type: string;
  timestamp: string;
}

// Mock Data Generators per Region
const MOCK_STATS: Record<string, RegionalStats> = {
  "Jakarta": {
    wasteManaged: 12540,
    maggotProduction: 3200,
    co2Reduced: "18.5",
    economicValue: 45000000,
    distributionTarget: { percentage: 85, current: 850, total: 1000, unit: "Paket" }
  },
  "Surabaya": {
    wasteManaged: 8400,
    maggotProduction: 2100,
    co2Reduced: "12.2",
    economicValue: 28500000,
    distributionTarget: { percentage: 72, current: 540, total: 750, unit: "Paket" }
  },
  "Semarang": {
    wasteManaged: 6200,
    maggotProduction: 1500,
    co2Reduced: "9.1",
    economicValue: 19800000,
    distributionTarget: { percentage: 90, current: 450, total: 500, unit: "Paket" }
  },
  "Bandung": {
    wasteManaged: 7800,
    maggotProduction: 1950,
    co2Reduced: "11.5",
    economicValue: 24200000,
    distributionTarget: { percentage: 65, current: 390, total: 600, unit: "Paket" }
  }
};

const MOCK_GRAPH: Record<string, RegionalGraphData[]> = {
  "Jakarta": [
    { name: "Sen", sekolah: 400, sppg: 240 },
    { name: "Sel", sekolah: 300, sppg: 139 },
    { name: "Rab", sekolah: 200, sppg: 980 },
    { name: "Kam", sekolah: 278, sppg: 390 },
    { name: "Jum", sekolah: 189, sppg: 480 },
    { name: "Sab", sekolah: 239, sppg: 380 },
    { name: "Min", sekolah: 349, sppg: 430 },
  ],
  "Surabaya": [
    { name: "Sen", sekolah: 250, sppg: 180 },
    { name: "Sel", sekolah: 200, sppg: 300 },
    { name: "Rab", sekolah: 350, sppg: 220 },
    { name: "Kam", sekolah: 180, sppg: 250 },
    { name: "Jum", sekolah: 280, sppg: 310 },
    { name: "Sab", sekolah: 150, sppg: 200 },
    { name: "Min", sekolah: 300, sppg: 350 },
  ],
  "Semarang": [
    { name: "Sen", sekolah: 150, sppg: 120 },
    { name: "Sel", sekolah: 180, sppg: 140 },
    { name: "Rab", sekolah: 160, sppg: 180 },
    { name: "Kam", sekolah: 190, sppg: 150 },
    { name: "Jum", sekolah: 200, sppg: 210 },
    { name: "Sab", sekolah: 170, sppg: 190 },
    { name: "Min", sekolah: 220, sppg: 250 },
  ],
  "Bandung": [
    { name: "Sen", sekolah: 300, sppg: 280 },
    { name: "Sel", sekolah: 250, sppg: 320 },
    { name: "Rab", sekolah: 280, sppg: 290 },
    { name: "Kam", sekolah: 320, sppg: 250 },
    { name: "Jum", sekolah: 350, sppg: 380 },
    { name: "Sab", sekolah: 290, sppg: 310 },
    { name: "Min", sekolah: 380, sppg: 400 },
  ]
};

const MOCK_ACTIVITIES: Record<string, RegionalActivity[]> = {
  "Jakarta": [
    { id: 1, source: "SPPG Pejaten", target: "Biomagg", amount: 45, type: "Organik", timestamp: "20 min lalu" },
    { id: 2, source: "SMA N 8 Jakarta", target: "Maggot Sunter", target2: "Maggot Sunter", amount: 15, type: "Organik", timestamp: "1 jam lalu" },
    { id: 3, source: "SPPG Tanah Abang", target: "PSEL Sunter", amount: 100, type: "Residu", timestamp: "3 jam lalu" },
  ] as any, // casting to avoid minor type mismatch with target2 if strict
  "Surabaya": [
    { id: 1, source: "SPPG Simorejo", target: "Maggot Lakarsantri", amount: 35, type: "Organik", timestamp: "15 min lalu" },
    { id: 2, source: "SMA N 5 Surabaya", target: "Bahari Farm", amount: 10, type: "Organik", timestamp: "2 jam lalu" },
    { id: 3, source: "SPPG Kenjeran", target: "PSEL Benowo", amount: 80, type: "Residu", timestamp: "5 jam lalu" },
  ],
  "Semarang": [
    { id: 1, source: "SPPG Banyumanik", target: "Green Fresh Farm", amount: 30, type: "Organik", timestamp: "10 min lalu" },
    { id: 2, source: "SMA N 3 Semarang", target: "Bank Sampah Purwokeling", amount: 12, type: "Organik", timestamp: "1 jam lalu" },
    { id: 3, source: "SPPG Ngaliyan", target: "PLTSa Jatibarang", amount: 50, type: "Residu", timestamp: "4 jam lalu" },
  ],
  "Bandung": [
    { id: 1, source: "SPPG Cicendo", target: "Kang Pisman Maggot", amount: 25, type: "Organik", timestamp: "30 min lalu" },
    { id: 2, source: "SMA N 3 Bandung", target: "KPSBU Lembang", amount: 18, type: "Organik", timestamp: "1 jam lalu" },
    { id: 3, source: "SPPG Baleendah", target: "ABS Maggot Ctr", amount: 40, type: "Organik", timestamp: "2 jam lalu" },
  ]
};

export function getRegionalDashboardData(city: string) {
  // Fallback to Jakarta if city not found
  const key = MOCK_STATS[city] ? city : "Jakarta";
  
  return {
    stats: MOCK_STATS[key],
    chartData: MOCK_GRAPH[key],
    activities: MOCK_ACTIVITIES[key]
  };
}
