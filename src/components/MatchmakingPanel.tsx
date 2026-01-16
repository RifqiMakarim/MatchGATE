"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Truck, CheckCircle2, X, Send, Calendar, Clock, DollarSign, User, MessageSquare } from "lucide-react";

// Mock Partners Data
const PARTNERS = [
  { id: 1, name: "Maggot Farm Jaya", role: "peternak_manggot", distance: "0.8 km", stock: "Butuh 50kg", lat: 30, lng: 40, avatar: "MF" },
  { id: 2, name: "Sumber Protein Alam", role: "peternak_manggot", distance: "2.1 km", stock: "Butuh 100kg", lat: 60, lng: 70, avatar: "SP" },
  { id: 3, name: "Energi Hijau Pekalongan", role: "mitra_energy", distance: "4.5 km", stock: "Butuh 200kg", lat: 80, lng: 20, avatar: "EH" },
  { id: 4, name: "SDN 1 Pekalongan", role: "mitra_sisa_pangan", distance: "1.2 km", stock: "Ada 30kg", lat: 20, lng: 80, avatar: "SD" },
  { id: 5, name: "Peternakan Sapi Sejahtera", role: "peternak_hewan", distance: "3.0 km", stock: "Butuh 500kg", lat: 50, lng: 50, avatar: "PS" },
];

// Mock Chat Initial Messages
const INITIAL_CHATS = [
  { sender: "partner", text: "Halo, apakah stok limbah hari ini masih tersedia?" },
];

export function MatchmakingPanel({ userRole, onClose }: { userRole: string, onClose: () => void }) {
  const [partners, setPartners] = useState(PARTNERS);
  const [selectedPartner, setSelectedPartner] = useState<any>(null);
  const [step, setStep] = useState<"search" | "negotiate" | "waiting" | "success">("search");
  
  // Negotiation State
  const [chats, setChats] = useState<{sender: string, text: string}[]>([]);
  const [inputText, setInputText] = useState("");
  const [appointment, setAppointment] = useState({ date: "", time: "", location: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter partners based on user role logic
  const relevantPartners = partners.filter(p => {
    if (["mitra_sisa_pangan", "mitra_sisa_pangan_sppg", "mitra_sisa_pangan_sekolah"].includes(userRole)) {
        return ["peternak_manggot", "mitra_energy", "peternak_hewan"].includes(p.role);
    }
    if (userRole === "peternak_manggot") return ["mitra_sisa_pangan", "peternak_hewan"].includes(p.role);
    return true; // Admin sees all
  });

  const handleConnect = (partner: any) => {
    setSelectedPartner(partner);
    setChats([...INITIAL_CHATS]); // Reset chat for new partner
    setAppointment({ date: "", time: "", location: partner.distance }); // Reset form
    setStep("negotiate");
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // User message
    const newChats = [...chats, { sender: "me", text: inputText }];
    setChats(newChats);
    setInputText("");

    // Simulate Partner Reply
    setTimeout(() => {
        setChats(prev => [...prev, { sender: "partner", text: "Baik, saya setuju dengan waktu tersebut. Silakan ajukan kesepakatan." }]);
    }, 1500);
  };
  
  // Auto-scroll chat
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chats]);

  const handleDeal = () => {
      // Transition to waiting state
      setStep("waiting");
  };

  const handleFinish = () => {
      setStep("success");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center pointer-events-none">
      <div className="fixed inset-0 bg-black/50 pointer-events-auto" onClick={onClose} />
      
      <div className="relative pointer-events-auto w-full max-w-4xl h-[95vh] sm:h-[85vh] bg-white dark:bg-slate-950 shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur">
            <div>
                <CardTitle className="text-xl">Matchmaking & Negosiasi</CardTitle>
                <CardDescription>
                    {step === "search" && "Pilih mitra di sekitar Anda"}
                    {step === "negotiate" && `Diskusi dengan ${selectedPartner?.name}`}
                    {step === "waiting" && "Menunggu pertemuan"}
                    {step === "success" && "Transaksi Selesai"}
                </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-5 w-5" />
            </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
            
            {/* STEP 1: MAP VISUALIZATION */}
            {step === "search" && (
                <div className="flex-1 grid md:grid-cols-2 h-full overflow-hidden">
                    {/* Map Simulation */}
                    <div className="bg-slate-100 dark:bg-slate-900 relative h-[300px] md:h-full flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r">
                        {/* Fake Map Background */}
                        <div className="absolute inset-0 opacity-10" style={{ 
                            backgroundImage: "radial-gradient(#444 1px, transparent 1px)", 
                            backgroundSize: "20px 20px" 
                        }}></div>
                        
                        {/* Radar Scan Effect */}
                        <div className="absolute w-96 h-96 border-2 border-primary/30 rounded-full animate-pulse flex items-center justify-center pointer-events-none">
                             <div className="w-64 h-64 border border-primary/50 rounded-full"></div>
                        </div>
                        
                        {/* User Pin */}
                        <div className="absolute z-10 flex flex-col items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                            <span className="text-xs font-bold bg-white px-2 py-0.5 rounded shadow mt-1">Anda</span>
                        </div>

                        {/* Partner Pins */}
                        {relevantPartners.map((p, i) => (
                             <div key={p.id} className="absolute flex flex-col items-center group cursor-pointer" 
                                  style={{ top: `${p.lat}%`, left: `${p.lng}%` }}
                                  onClick={() => handleConnect(p)}>
                                <MapPin className="h-8 w-8 text-primary drop-shadow-md group-hover:scale-125 transition-transform" />
                                <span className="text-[10px] font-medium bg-white/90 px-2 py-1 rounded shadow mt-0.5 max-w-[100px] truncate group-hover:bg-white">{p.name}</span>
                             </div>
                        ))}
                    </div>

                    {/* Partner List */}
                    <div className="flex-1 overflow-y-auto w-full border-t md:border-t-0 p-4 space-y-4">
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Mitra Terdekat ({relevantPartners.length})</h3>
                        <div className="space-y-3 pb-8">
                            {relevantPartners.map((partner) => (
                                <Card key={partner.id} className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer border-l-4 border-l-transparent hover:border-l-primary group"
                                      onClick={() => handleConnect(partner)}>
                                    <div className="p-3 flex items-start gap-3">
                                        <Avatar className="h-10 w-10 border">
                                            <AvatarFallback>{partner.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{partner.name}</h4>
                                                <Badge variant="outline" className="text-xs">{partner.distance}</Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">{partner.stock}</p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Verified</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 2: NEGOTIATION (FORM + CHAT) */}
            {step === "negotiate" && selectedPartner && (
                <div className="flex-1 grid md:grid-cols-2 h-full overflow-hidden">
                    {/* Left: Form */}
                    <div className="p-6 overflow-y-auto border-r bg-slate-50/50">
                        <div className="flex items-center gap-4 mb-6">
                            <Avatar className="h-12 w-12 border-2 border-primary">
                                <AvatarFallback>{selectedPartner.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-bold text-lg">{selectedPartner.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Badge variant="secondary">{selectedPartner.distance}</Badge>
                                    <span>•</span>
                                    <span>Verified Partner</span>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Buat Janji Temu</CardTitle>
                                <CardDescription>Sepakati waktu dan lokasi penjemputan.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Tanggal Penjemputan</Label>
                                    <div className="relative">
                                        <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="date" className="pl-9" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Waktu</Label>
                                    <div className="relative">
                                        <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="time" className="pl-9" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Lokasi / Titik Temu</Label>
                                    <div className="relative">
                                        <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Alamat lengkap..." defaultValue={`Titik Jemput (${selectedPartner.distance})`} className="pl-9" />
                                    </div>
                                </div>
                                
                                <div className="pt-4">
                                    <Button className="w-full" size="lg" onClick={handleDeal}>
                                        <CheckCircle2 className="mr-2 h-4 w-4" /> Sepakati & Lanjut
                                    </Button>
                                    <Button variant="ghost" className="w-full mt-2" onClick={() => setStep("search")}>
                                        Kembali
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right: Chat */}
                    <div className="flex flex-col h-full overflow-hidden bg-white">
                        <div className="p-3 border-b bg-slate-50 flex justify-between items-center">
                            <span className="text-sm font-medium flex items-center gap-2">
                                <MessageSquare className="h-4 w-4" /> Live Chat
                            </span>
                            <span className="text-xs text-green-600 flex items-center gap-1">
                                <span className="h-2 w-2 bg-green-500 rounded-full translate-y-[1px]"></span> Online
                            </span>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30" ref={scrollRef}>
                            {chats.map((chat, idx) => (
                                <div key={idx} className={`flex ${chat.sender === "me" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                                        chat.sender === "me" 
                                        ? "bg-primary text-primary-foreground rounded-br-none" 
                                        : "bg-white border rounded-bl-none"
                                    }`}>
                                        {chat.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 border-t bg-white">
                            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
                                <Input 
                                    placeholder="Tulis pesan kesepakatan..." 
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    className="flex-1"
                                />
                                <Button type="submit" size="icon">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: WAITING FOR MEETING */}
            {step === "waiting" && selectedPartner && (
                <div className="flex-1 overflow-y-auto w-full animate-in fade-in duration-500">
                    <div className="flex flex-col items-center justify-center min-h-full p-8 pb-20 text-center space-y-8">
                        <div className="relative">
                            <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
                                <Clock className="h-16 w-16 text-yellow-600" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
                                <Truck className="h-6 w-6 text-primary" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">Menunggu Pertemuan</h2>
                            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                                Kesepakatan telah dibuat. Silakan menuju titik temu untuk serah terima limbah/produk.
                            </p>
                        </div>

                        <Card className="w-full max-w-sm border-dashed bg-slate-50">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex justify-between items-center border-b pb-4">
                                    <span className="text-muted-foreground">Mitra</span>
                                    <span className="font-bold">{selectedPartner.name}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-4">
                                    <span className="text-muted-foreground">Estimasi Biaya</span>
                                    <span className="font-bold text-green-600 text-lg">Rp 25.000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Status</span>
                                    <Badge variant="warning">Menunggu</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex gap-4 w-full max-w-sm">
                            <Button variant="outline" className="flex-1" onClick={() => setStep("negotiate")}>Batal / Edit</Button>
                            <Button className="flex-1" size="lg" onClick={handleFinish}>Selesai (Bertemu)</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === "success" && (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-green-600">Transaksi Selesai!</h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Terima kasih telah berkontribusi pada sirkular ekonomi.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-8">
                         <div className="bg-slate-50 p-4 rounded-xl border text-left">
                            <div className="text-xs text-muted-foreground">Total Sampah</div>
                            <div className="font-bold text-xl">45 Kg</div>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-xl border text-left">
                            <div className="text-xs text-muted-foreground">Poin Earned</div>
                            <div className="font-bold text-xl text-primary">+120 XP</div>
                         </div>
                    </div>

                    <Button className="w-full max-w-sm mt-8" size="lg" onClick={onClose}>Kembali ke Dashboard</Button>
                </div>
            )}

        </div>
      </div>
    </div>
  );
}
