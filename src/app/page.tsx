"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Leaf, TrendingUp, Zap, Smartphone, CheckCircle2, ArrowDown } from "lucide-react";
import { LandingNavbar } from "@/components/LandingNavbar";
import { motion } from "framer-motion";

export default function LandingPage() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <LandingNavbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-slate-700">
             <div className="w-full h-full bg-[url('/bg_matchgate.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 container mx-auto px-4 text-center space-y-6"
        >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium mb-4 mx-auto">
                Sistem Matchmaking Sisa Pangan Berkelanjutan
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Ubah Sisa Pangan Menjadi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Ekonomi Sirkular</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
                MatchGATE menghubungkan penyedia sisa pangan, peternak maggot, dan industri energi untuk menciptakan sirkular ekonomi yang berkelanjutan.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12 text-base shadow-lg hover:shadow-green-500/25 transition-all">
                        Mulai Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
                <Link href="#flow">
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-white text-white hover:bg-white hover:text-slate-900 bg-transparent">
                        Pelajari Alur
                    </Button>
                </Link>
            </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
        >
            <ArrowDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* 2. GOALS & SDGs SECTION */}
      <section id="manfaat" className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                  <motion.div variants={fadeInUp} className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                          Mencapai Target <span className="text-green-600">SDGs 2030</span>
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                          Sistem ini dirancang untuk mendukung program Makan Bergizi Gratis (MBG) dengan memastikan 
                          bahwa setiap sisa pangan terkelola dengan bijak, tidak berakhir di TPA, melainkan kembali menjadi sumber daya.
                      </p>
                      
                      <div className="space-y-4 pt-4">
                          <div className="flex gap-4">
                              <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                                  <Recycle className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                  <h3 className="font-bold text-lg">Zero Waste to Landfill</h3>
                                  <p className="text-slate-600 text-sm">Mengurangi beban TPA dengan mengolah sisa organik.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                  <TrendingUp className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                  <h3 className="font-bold text-lg">Circular Economy</h3>
                                  <p className="text-slate-600 text-sm">Menciptakan nilai ekonomi baru dari limbah.</p>
                              </div>
                          </div>
                      </div>
                  </motion.div>

                  {/* SDGs Image Placeholder */}
                  <motion.div variants={fadeInUp} className="relative aspect-square w-full max-w-[400px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex items-center justify-center group">
                      <div className="absolute inset-0 bg-slate-100 pattern-grid-lg opacity-20"></div>
                      <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                          <img src="/SDGs12.png" alt="logo-SGDs12" className="max-w-full max-h-full object-contain" />
                      </div>
                  </motion.div>
              </motion.div>
          </div>
      </section>

      {/* 3. CIRCULAR ECONOMY FLOW SECTION */}
      <section id="flow" className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ekosistem Sirkular MatchGATE</h2>
                  <p className="text-slate-600">Integrasi hulu ke hilir: Dari sekolah hingga menjadi energi terbarukan.</p>
              </motion.div>

              {/* FLOW DIAGRAM */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="max-w-5xl mx-auto"
              >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
                       
                       {/* Connection Lines (Desktop Only) */}
                       <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -z-10 -translate-y-1/2"></div>

                       {/* NODE 1: SOURCE */}
                       <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center hover:border-green-500 transition-colors group h-full">
                           <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                               <Recycle className="h-8 w-8 text-green-600" />
                           </div>
                           <h3 className="font-bold text-lg mb-2">1. Sumber Limbah</h3>
                           <div className="text-sm font-medium text-slate-500 mb-1">Mitra Sisa Pangan</div>
                           <p className="text-xs text-slate-400">Bersumber dari sekolah dan SPPG yang melayani Makanan Bergizi Gratis</p>
                           <div className="mt-4 px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Sisa Makanan</div>
                           
                           {/* Mobile Arrow Down */}
                           <div className="md:hidden mt-4 text-slate-300"><ArrowDown /></div>
                       </motion.div>

                       {/* NODE 2: PROCESSOR */}
                       <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center hover:border-orange-500 transition-colors group h-full">
                           <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                               <Leaf className="h-8 w-8 text-orange-600" />
                           </div>
                           <h3 className="font-bold text-lg mb-2">2. Pengolahan Organik</h3>
                           <div className="text-sm font-medium text-slate-500 mb-1">Peternak Maggot</div>
                           <p className="text-xs text-slate-400">Biokonversi Black Soldier Fly dan dapat melakukan jual beli manggot dari peternak</p>
                           <div className="mt-4 px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">Maggot Fresh</div>

                           {/* Mobile Arrow Down */}
                           <div className="md:hidden mt-4 text-slate-300"><ArrowDown /></div>
                       </motion.div>

                       {/* NODE 3: CONSUMER */}
                       <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center hover:border-blue-500 transition-colors group h-full">
                           <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                               <TrendingUp className="h-8 w-8 text-blue-600" />
                           </div>
                           <h3 className="font-bold text-lg mb-2">3. Pemanfaatan</h3>
                           <div className="text-sm font-medium text-slate-500 mb-1">Peternak Hewan</div>
                           <p className="text-xs text-slate-400">Manggot sebagai pakan ternak berkualitas dan menjual hasil peternakan kepada mitra lainnya</p>
                           <div className="mt-4 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Produk Ternak</div>
                       </motion.div>
                  </div>

                  {/* WASTE TO ENERGY & LOOPS */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
                       {/* Return Arrow Visual (Desktop) */}
                       <div className="hidden md:block col-span-3 h-px border-t-2 border-dashed border-slate-200 relative">
                            <span className="absolute left-1/2 -top-3 bg-white px-2 text-xs text-slate-400 -translate-x-1/2"></span>
                       </div>
                       
                       {/* NODE 4: ENERGY */}
                       <motion.div variants={fadeInUp} className="md:col-start-2 bg-slate-900 text-white p-6 rounded-2xl shadow-xl relative z-10 flex flex-col items-center text-center">
                           <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                               <Zap className="h-8 w-8 text-yellow-400" />
                           </div>
                           <h3 className="font-bold text-lg mb-2">4. Waste to Energy</h3>
                           <p className="text-xs text-slate-400">Mengolah limbah sisa pangan dan hasil mitra peternakan menjadi energi, yang dapat disalurkan kembali ke Mitra Sisa Pangan</p>
                       </motion.div>
                  </div>

                  {/* LEGEND / DESCRIPTION OF FLOW */}
                  <motion.div variants={fadeInUp} className="mt-12 text-center">
                       <p className="text-sm text-slate-500 max-w-2xl mx-auto italic">
                           * Alur mencakup pengembalian nilai ekonomi ke Mitra Sisa Pangan, serta konversi limbah ternak menjadi energi.
                       </p>
                  </motion.div>
              </motion.div>
          </div>
      </section>

      {/* 4. MOBILE APP SECTION */}
      <section id="aplikasi" className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="flex flex-col md:flex-row items-center gap-16"
              >
                   {/* Phone Graphic Placeholder */}
                   <motion.div variants={fadeInUp} className="flex-1 relative flex justify-center">
                       <div className="relative w-[300px] h-[625px] bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl overflow-hidden">
                            {/* Screen Content Placeholder
                            <div className="absolute inset-0 bg-slate-100 flex flex-col">
                                <div className="h-16 bg-green-600 w-full"></div>
                                <div className="p-4 space-y-4">
                                    <div className="h-32 bg-slate-200 rounded-xl animate-pulse"></div>
                                    <div className="h-20 bg-slate-200 rounded-xl animate-pulse"></div>
                                    <div className="h-20 bg-slate-200 rounded-xl animate-pulse"></div>
                                </div>
                                <div className="mt-auto p-8 text-center text-slate-400 text-sm font-bold opacity-50">
                                    
                                </div>
                            </div> */}
                            <img src="/BerandaManggot.png" alt="BerandaManggot" />
                       </div>
                       {/* Decorative blobs */}
                       <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -z-10"></div>
                       <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                   </motion.div>

                   {/* Features List */}
                   <motion.div variants={fadeInUp} className="flex-1 space-y-8">
                       <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                           Kelola Limbah <br/>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Dalam Genggaman</span>
                       </h2>
                       <p className="text-slate-400 text-lg">
                           Pantau, jemput, dan kelola transaksi limbah organik Anda secara real-time hanya melalui satu aplikasi mobile MatchGATE.
                       </p>
                       
                       <ul className="space-y-4">
                           {[
                               "Sistem Matchmaking Cerdas",
                               "Pantau Data Real-Time",
                               "Antamuka Intuitif & User Friendly",
                               "Transaksi Aman di Tempat"
                           ].map((item, i) => (
                               <li key={i} className="flex items-center gap-3">
                                   <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                   <span className="text-lg">{item}</span>
                               </li>
                           ))}
                       </ul>

                       <div className="pt-4 flex gap-4">
                           <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-xl h-14 px-6">
                               <img src="/googlePlay.png" alt="Google Play" className="mr-2 h-5 w-10" /> Download Aplikasi
                              </Button>
                              
                              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 rounded-xl h-14 px-6">
                                  <img src="/appStore.png" alt="App Store" className="mr-2 h-5 w-10" /> Demo Aplikasi
                            </Button>
                       </div>
                   </motion.div>
              </motion.div>
          </div>
      </section>

      {/* 4.5 INNOVATION / WHY US SECTION */}
      <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                      Mengapa Ini Adalah <span className="text-green-600">Solusi?</span>
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-slate-600">
                      Inovasi MatchGATE menjawab tantangan global dengan pendekatan lokal yang berdampak nyata.
                  </motion.p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1: Food Waste */}
                  <motion.div 
                    variants={fadeInUp} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                  >
                      <div className="h-48 overflow-hidden bg-green-50 relative">
                          <img src="/food_waste_pile.png" alt="Tantangan Food Waste" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-xl font-bold mb-3 text-slate-900">Menjawab Tantangan Food Waste</h3>
                          <p className="text-slate-600 leading-relaxed text-sm">
                              Setiap tahun ton sisa pangan terbuang. Kami menyediakan sistem berbasis matchmaking yang efisien untuk mengelola sampah organik di lingkungan kita.
                          </p>
                      </div>
                  </motion.div>

                  {/* Card 2: Maggot */}
                  <motion.div 
                    variants={fadeInUp} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                  >
                      <div className="h-48 overflow-hidden bg-orange-50 relative">
                          <img src="/maggot_farming.png" alt="Budidaya Maggot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-xl font-bold mb-3 text-slate-900">Dukungan Budidaya Maggot</h3>
                          <p className="text-slate-600 leading-relaxed text-sm">
                              Memberdayakan peternak maggot (Black Soldier Fly) sebagai agen biokonversi utama, mengubah masalah sampah menjadi peluang pakan ternak berprotein tinggi.
                          </p>
                      </div>
                  </motion.div>

                  {/* Card 3: Economy */}
                  <motion.div 
                    variants={fadeInUp} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                  >
                      <div className="h-48 overflow-hidden bg-blue-50 relative">
                          <img src="/people_transacting.png" alt="Ekonomi Sirkular" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-xl font-bold mb-3 text-slate-900">Menciptakan Ekonomi Sirkular</h3>
                          <p className="text-slate-600 leading-relaxed text-sm">
                              Membangun ekosistem ekonomi baru dimana sampah memiliki nilai tukar. Transaksi transparan yang menguntungkan sekolah, peternak, dan lingkungan.
                          </p>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container mx-auto px-4 text-center max-w-3xl"
          >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Siap Berkontribusi?</h2>
              <p className="text-xl text-slate-600 mb-10">
                  Bergabunglah dengan ratusan sekolah dan mitra lainnya dalam mewujudkan Indonesia bebas sampah pangan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/login">
                      <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-lg rounded-full shadow-xl shadow-green-600/20">
                          Masuk Dashboard
                      </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-14 text-lg rounded-full">
                      Hubungi Kami
                  </Button>
              </div>
          </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t text-center text-slate-500 text-sm">
          <div className="container mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} MatchGATE System. Hak Cipta Dilindungi.</p>
              <p className="mt-2">Didukung oleh Dinas Lingkungan Hidup Kota Pekalongan</p>
          </div>
      </footer>
    </div>
  );
}
