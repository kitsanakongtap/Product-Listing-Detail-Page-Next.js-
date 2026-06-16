// src/app/products/[id]/page.tsx
import axios from 'axios';
import Link from 'next/link';
import { Product } from '@/types/product';
import ProductDetail from '@/components/ProductDetail';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product id ${id}:`, error);
    return null;
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md">
          <div className="text-amber-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">ไม่พบสินค้าที่คุณต้องการ</h2>
          <p className="text-slate-500 text-sm mb-6">รหัสสินค้าอาจไม่ถูกต้อง หรือเซิร์ฟเวอร์ขัดข้องชั่วคราว</p>
          <Link href="/products" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all">
            กลับหน้าสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link href="/products" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors group">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Catalog
          </Link>
        </div>
        <ProductDetail product={product} />
      </div>
    </main>
  );
}