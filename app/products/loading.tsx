// src/app/products/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* แถบหัวข้อโหลดหลอก */}
        <div className="h-8 bg-slate-200 rounded-md w-40 mb-3 animate-pulse"></div>
        <div className="h-4 bg-slate-200 rounded-md w-64 mb-10 animate-pulse"></div>
        
        {/* กริดจำลองการ์ดกะพริบระหว่างรอข้อมูล */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-100 p-5 space-y-4 animate-pulse">
              <div className="bg-slate-200 rounded-xl aspect-square w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              <div className="h-5 bg-slate-200 rounded w-5/6"></div>
              <div className="flex justify-between items-center pt-4">
                <div className="h-6 bg-slate-200 rounded w-1/4"></div>
                <div className="h-9 bg-slate-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}