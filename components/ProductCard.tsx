
import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="group relative bg-white flex flex-col h-full transition-all duration-500 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f7f3ed]">
        {/* Badges */}
        <div className="absolute top-2 right-2 z-20 flex flex-col gap-1.5">
          {product.isExclusive && (
            <span className="bg-[#d4af37] text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter shadow-sm">
              Exclusive
            </span>
          )}
          {product.isNew && (
            <span className="bg-black text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Carousel Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/40 backdrop-blur-sm text-[#1a1a1a] rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="تصویر قبلی"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/40 backdrop-blur-sm text-[#1a1a1a] rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="تصویر بعدی"
            >
              <ChevronRight size={16} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1">
              {product.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 transition-all duration-300 rounded-full ${idx === currentImgIndex ? 'w-4 bg-[#d4af37]' : 'w-1 bg-white/60'}`}
                ></div>
              ))}
            </div>
          </>
        )}

        {/* Main Product Image with Smooth Transition */}
        <div className="w-full h-full relative">
          {product.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${product.name} - ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        {/* Professional Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Mobile Quick Action Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="absolute bottom-3 right-3 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md text-[#1a1a1a] flex items-center justify-center rounded-full shadow-lg border border-[#d4af37]/20 transform transition-all duration-300 hover:bg-[#d4af37] hover:text-white active:scale-90 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          aria-label="افزودن به سبد"
        >
          <ShoppingBag size={18} />
        </button>

        {/* Desktop Quick Add Bar */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-sm border-t border-white/20">
             <button 
              onClick={() => onAddToCart(product)}
              className="w-full py-2 bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#d4af37] transition-colors"
             >
               Quick Add to Cart
             </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3 md:p-5 flex flex-col flex-grow text-center border-x border-b border-gray-50 group-hover:border-[#d4af37]/20 transition-colors">
        <span className="text-[9px] md:text-[10px] text-[#d4af37] font-bold uppercase tracking-[0.2em] mb-1.5">
          {product.category}
        </span>
        <h3 className="text-xs md:text-sm font-bold text-[#1a1a1a] mb-2 line-clamp-1 group-hover:text-[#d4af37] transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto">
          <p className="text-[#1a1a1a] font-serif-lux text-sm md:text-lg font-bold">
            {product.price.toLocaleString('fa-IR')} 
            <span className="text-[10px] text-gray-400 mr-1 font-sans">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
