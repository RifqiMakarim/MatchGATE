"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, MapPin, Building, BadgeCheck, School, Utensils } from "lucide-react";

export default function ProfilePage() {
  const [userRole, setUserRole] = useState("admin");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) setUserRole(role);
  }, []);

  const isSppg = userRole === "sppg" || userRole.includes("sppg");
  const isSchool = userRole === "school" || userRole === "sekolah";

  // Dynamic Profile Data
  const getProfileData = () => {
    if (isSppg) {
      return {
        name: "SPPG MBG-04",
        type: "Sentra Pangan & Penanganan Gizi",
        email: "admin@sppg-mbg04.com",
        phone: "+62 812-9988-7766",
        capacityLabel: "Kapasitas Masak",
        capacityValue: "1000 Porsi/Hari",
        secondaryLabel: "Target Distribusi",
        secondaryValue: "10 Sekolah",
        icon: Utensils
      };
    } else if (isSchool) {
      return {
        name: "SMAN 1 Pekalongan",
        type: "Sekolah (Peserta MBG)",
        email: "admin@sman1pgl.sch.id",
        phone: "+62 285-123456",
        capacityLabel: "Jumlah Siswa",
        capacityValue: "1,200 Siswa",
        secondaryLabel: "Sisa Makanan Harian",
        secondaryValue: "~45 Kg",
        icon: School
      };
    } else {
      return {
        name: userRole === 'admin' ? 'Admin Dinas LHK' : userRole.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        type: "Mitra MatchGATE",
        email: `admin@${userRole}.matchgate.id`,
        phone: "+62 812-3456-7890",
        capacityLabel: "Kapasitas Harian",
        capacityValue: "200 Kg",
        icon: Building
      };
    }
  };

  const profile = getProfileData();
  const Icon = profile.icon;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
       <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-slate-900 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
           <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
               <ArrowLeft className="h-4 w-4" /> Kembali
           </Link>
        </div>
        <div className="font-bold">Profil Pengguna</div>
        <div className="w-8"></div>
      </header>
      
      <main className="flex-1 container mx-auto p-4 md:p-8 flex flex-col items-center">
         <Card className="w-full max-w-2xl overflow-hidden">
             <div className="h-32 bg-primary/10 w-full"></div>
             <div className="px-8 pb-8">
                 <div className="relative -mt-16 mb-6 flex justify-between items-end">
                     <div className="rounded-full p-2 bg-white dark:bg-slate-900 shadow-xl">
                        <Avatar className="h-32 w-32 border-4 border-white dark:border-slate-900">
                            <AvatarImage src="/avatar-placeholder.png" alt="User" />
                            <AvatarFallback className="text-4xl bg-primary text-white">
                                <Icon className="h-12 w-12" />
                            </AvatarFallback>
                        </Avatar>
                     </div>
                     <Button>Edit Profil</Button>
                 </div>
                 
                 <div className="space-y-6">
                     <div>
                         <h1 className="text-3xl font-bold flex items-center gap-2">
                             {profile.name}
                             <BadgeCheck className="h-6 w-6 text-blue-500" />
                         </h1>
                         <p className="text-muted-foreground flex items-center gap-2 mt-1">
                             <MapPin className="h-4 w-4" /> Kota Pekalongan, Jawa Tengah
                         </p>
                         <Badge className="mt-2" variant="secondary">{profile.type}</Badge>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-4">
                         <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                             <CardContent className="p-4 space-y-3">
                                 <div className="flex items-center gap-3">
                                     <Mail className="h-5 w-5 text-muted-foreground" />
                                     <span className="text-sm">{profile.email}</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <Phone className="h-5 w-5 text-muted-foreground" />
                                     <span className="text-sm">{profile.phone}</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <Building className="h-5 w-5 text-muted-foreground" />
                                     <span className="text-sm">Terdaftar sejak Jan 2026</span>
                                 </div>
                             </CardContent>
                         </Card>
                         
                         <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                            <CardContent className="p-4">
                                <h3 className="font-semibold mb-2">Statistik Kontribusi</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between">
                                        <span>Total Transaksi</span>
                                        <span className="font-bold">128</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Rating</span>
                                        <span className="font-bold text-yellow-600">4.9/5.0</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Status Akun</span>
                                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Verified Partner</Badge>
                                    </li>
                                </ul>
                            </CardContent>
                         </Card>
                     </div>
                     
                     <div className="pt-6 border-t">
                         <h3 className="font-semibold mb-4">Informasi Operasional</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-3 border rounded-lg">
                                  <div className="text-xs text-muted-foreground">{profile.capacityLabel}</div>
                                  <div className="font-bold text-lg">{profile.capacityValue}</div>
                              </div>
                              <div className="p-3 border rounded-lg">
                                  <div className="text-xs text-muted-foreground">Jam Operasional</div>
                                  <div className="font-bold text-lg">07:00 - 15:00</div>
                              </div>
                          </div>
                     </div>
                 </div>
             </div>
         </Card>
      </main>
    </div>
  );
}
