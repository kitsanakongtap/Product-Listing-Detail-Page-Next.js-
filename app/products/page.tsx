// src/app/products/page.tsx
import axios from 'axios';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';

// ดึงข้อมูลสินค้าทั้งหมดจาก Fake Store API ผ่าน Server-side Fetching
async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('ไม่สามารถโหลดข้อมูลสินค้าได้ กรุณาลองใหม่อีกครั้ง');
  }
}

export default async function ProductListPage() {
  const products = await getProducts();

   //console.log('Fetched products:', products); // Debug: ตรวจสอบข้อมูลที่ดึงมาได้

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ส่วนหัวเว็บ (Header) */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            Our Catalog
          </h1>
        </div>

        {/* ตารางแสดงสินค้าแบบ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </main>
  );
}