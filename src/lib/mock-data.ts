
export interface PartnerData {
  id: string;
  name: string;
  type: 'Sekolah' | 'SPPG' | 'Peternak' | 'Mitra Energi' | 'Industri';
  location: string;
  wasteStock: number; // in Kg
  status: 'Tersedia' | 'Proses Penjemputan' | 'Selesai' | 'Aktif' | 'Butuh Suplai';
  lastActivity: string;
}

export const REGIONAL_DATA: PartnerData[] = [
  // Pekalongan
  {
    id: 'SCH-001',
    name: 'SMAN 1 Pekalongan',
    type: 'Sekolah',
    location: 'Pekalongan',
    wasteStock: 45.2,
    status: 'Tersedia',
    lastActivity: '10 menit yang lalu'
  },
  {
    id: 'SPPG-004',
    name: 'SPPG MBG-04',
    type: 'SPPG',
    location: 'Pekalongan',
    wasteStock: 120.0,
    status: 'Tersedia',
    lastActivity: '1 jam yang lalu'
  },
  {
    id: 'MAG-001',
    name: 'Maggot Farm Jaya',
    type: 'Peternak',
    location: 'Pekalongan',
    wasteStock: 0,
    status: 'Butuh Suplai',
    lastActivity: '5 menit yang lalu'
  },
  // Tegal
  {
    id: 'SCH-T01',
    name: 'SMAN 1 Tegal',
    type: 'Sekolah',
    location: 'Tegal',
    wasteStock: 30.5,
    status: 'Tersedia',
    lastActivity: '2 jam yang lalu'
  },
  // Pemalang
  {
    id: 'NRG-001',
    name: 'BioGas Pemalang',
    type: 'Mitra Energi',
    location: 'Pemalang',
    wasteStock: 0,
    status: 'Aktif',
    lastActivity: '1 hari yang lalu'
  },
   // Batang
   {
    id: 'SPPG-005',
    name: 'SPPG Batang Pusat',
    type: 'SPPG',
    location: 'Batang',
    wasteStock: 85.0,
    status: 'Proses Penjemputan',
    lastActivity: '30 menit yang lalu'
  },
  // Kendal
  {
    id: 'SCH-K01',
    name: 'SMPN 1 Kendal',
    type: 'Sekolah',
    location: 'Kendal',
    wasteStock: 15.0,
    status: 'Selesai',
    lastActivity: '3 jam yang lalu'
  }
];

export const IMPACT_STATS = {
  wasteManaged: 12450, // Kg
  maggotProduction: 4150, // Kg (approx 1/3 of waste)
  co2Reduced: 32.8, // Tons (estimated)
  economicValue: 18500000 // IDR
};

export const RECENT_ACTIVITY = [
  {
    id: 'TX-101',
    source: 'SPPG MBG-04',
    target: 'Peternak Hewan Sejahtera',
    amount: 120,
    type: 'Organik',
    timestamp: '10 menit yang lalu'
  },
  {
    id: 'TX-102',
    source: 'SMAN 1 Pekalongan',
    target: 'Mitra Energi Tegal',
    amount: 45,
    type: 'Organik',
    timestamp: '1 jam yang lalu'
  },
  {
    id: 'TX-103',
    source: 'Rumah Potong Ayam',
    target: 'Maggot Farm Jaya',
    amount: 200,
    type: 'Limbah Hewani',
    timestamp: '2 jam yang lalu'
  },
  {
    id: 'TX-104',
    source: 'SPPG Kendal',
    target: 'Peternak Lele Maju',
    amount: 80,
    type: 'Sia Pangan',
    timestamp: '1 hari yang lalu'
  }
];

export const GRAPH_DATA = [
  { name: 'Sen', sekolah: 400, sppg: 240, amt: 2400 },
  { name: 'Sel', sekolah: 300, sppg: 139, amt: 2210 },
  { name: 'Rab', sekolah: 200, sppg: 980, amt: 2290 },
  { name: 'Kam', sekolah: 278, sppg: 390, amt: 2000 },
  { name: 'Jum', sekolah: 189, sppg: 480, amt: 2181 },
  { name: 'Sab', sekolah: 239, sppg: 380, amt: 2500 },
  { name: 'Min', sekolah: 349, sppg: 430, amt: 2100 },
];
