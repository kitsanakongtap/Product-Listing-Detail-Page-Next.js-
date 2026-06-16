// src/components/ProductDetail.tsx
import { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
        
        {/* กล่องจัดแสดงรูปภาพสินค้า */}
        <div className="flex items-center justify-center bg-slate-50 rounded-2xl p-8 min-h-[300px] sm:min-h-[400px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-[380px] w-full mix-blend-multiply transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ส่วนเนื้อหาข้อมูลสินค้า */}
        <div className="flex flex-col justify-center">
          {/* หมวดหมู่สินค้า */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 w-max mb-4 uppercase tracking-wider">
            {product.category}
          </span>

          {/* ชื่อหัวข้อสินค้า */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug mb-3">
            {product.title}
          </h1>

          {/* เรตติ้งรีวิวสินค้า */}
          <div className="flex items-center mb-6">
            <span className="text-sm font-bold text-slate-800 bg-amber-100 px-2 py-0.5 rounded flex items-center gap-1">
              ⭐ {product.rating?.rate ?? '0.0'}
            </span>
            <span className="text-xs text-slate-400 ml-2">
              ({product.rating?.count ?? 0} reviews จากผู้ซื้อจริง)
            </span>
          </div>

          {/* ส่วนแสดงราคาสินค้า */}
          <div className="mb-6 pt-4 border-t border-slate-100">
            <span className="text-3xl font-black text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* บล็อกคำอธิบายสินค้า */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Product Description
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* ปุ่ม Call to Action เสริมความสวยงามของเว็บ */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-xl shadow-sm transition-all text-center text-sm">
              Add to Shopping Bag
            </button>
            <button className="sm:px-5 py-3 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-colors text-center text-sm">
              ❤️ Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}