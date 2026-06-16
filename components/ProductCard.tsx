// src/components/ProductCard.tsx
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
      {/* Container รูปภาพสินค้า */}
      <div className="relative p-6 bg-slate-50/50 flex items-center justify-center aspect-square overflow-hidden border-b border-slate-50">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-44 w-full group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
          loading="lazy"
        />
      </div>

      {/* ข้อมูลรายละเอียดในการ์ด */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 bg-indigo-50 px-2 py-0.5 rounded-md w-max">
          {product.category}
        </span>
        
        <h2 className="font-semibold text-slate-800 text-sm sm:text-base line-clamp-2 mb-3 min-h-[2.5rem] group-hover:text-indigo-600 transition-colors">
          {product.title}
        </h2>
        
        {/* ส่วนราคากับปุ่มกด */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          
          <Link 
            href={`/products/${product.id}`}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-sm hover:shadow transition-all"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}