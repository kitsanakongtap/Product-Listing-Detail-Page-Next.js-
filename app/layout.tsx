// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
// หรือแบบสัญจรโฟลเดอร์: import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trainee Assignment - FakeStore",
  description: "Product Listing and Detail Page using Next.js",
};

// ⚠️ จุดสำคัญที่สุด: ต้องมี "export default function" ห้ามตกหล่นเด็ดขาด
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm backdrop-blur-md bg-white/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span className="text-xl font-black tracking-tight text-indigo-600">
              🛒 FAKE<span className="text-slate-800">STORE</span>
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
              Trainee Project #1
            </span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}