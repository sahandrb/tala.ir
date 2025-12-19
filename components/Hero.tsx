
import React from 'react';
import { GoldSealIcon } from '../constants';

interface HeroProps {
  onSilverClick: () => void;
  onBrowseClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSilverClick, onBrowseClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] py-16 lg:py-24">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 gold-gradient opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 gold-gradient opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-right order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 space-x-reverse mb-6">
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
              <span className="text-[#d4af37] uppercase tracking-widest text-xs font-bold">مجموعه اختصاصی سهند</span>
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
            </div>
            
            <h1 className="font-serif-lux text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              درخشش <span className="gold-text">اصالت</span> در هر جزئیات
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              ارائه دهنده نفیس‌ترین زیورآلات نقره و بدلیجات درجه یک با ضمانت کیفیت و طراحی‌های منحصر به فرد جهانی.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={onBrowseClick}
                className="px-10 py-4 bg-[#1a1a1a] text-[#fdfbf7] font-bold text-sm hover:bg-gray-800 transition-all seal-shadow"
              >
                مشاهده محصولات
              </button>
              <button 
                onClick={onSilverClick}
                className="px-10 py-4 border border-[#d4af37] text-[#d4af37] font-bold text-sm hover:bg-[#d4af37] hover:text-[#fdfbf7] transition-all"
              >
                کالکشن نقره
              </button>
            </div>
          </div>

          {/* Image/Seal Area */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 luxury-border rounded-lg rotate-3 opacity-30"></div>
              <div className="absolute inset-0 luxury-border rounded-lg -rotate-2 opacity-50"></div>
              <div className="relative h-full w-full bg-[#fdfbf7] p-4 luxury-border shadow-2xl overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/luxury/800/800" 
                  alt="Exclusive Accessory" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <GoldSealIcon />
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-sm border border-[#d4af37]/30 text-center">
                  <p className="font-serif-lux text-xl font-bold gold-text uppercase">Certificate of Authenticity</p>
                  <p className="text-[10px] text-gray-500 mt-1">Guaranteed Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
