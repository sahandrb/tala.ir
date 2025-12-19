
import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Home } from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  cartCount: number;
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, currentView, onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-md border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20">
          
          {/* Right Side: Navigation (Desktop) / Hamburger (Mobile) */}
          <div className="flex items-center flex-1">
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1a1a1a] p-2 hover:bg-[#d4af37]/5 rounded-full transition-colors"
                aria-label="منو"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <nav className="hidden md:flex space-x-8 space-x-reverse text-xs font-bold uppercase tracking-widest">
              <button 
                onClick={() => onViewChange('home')}
                className={`transition-all duration-300 relative group ${currentView === 'home' ? 'text-[#d4af37]' : 'text-[#1a1a1a] hover:text-[#d4af37]'}`}
              >
                صفحه اصلی
                <span className={`absolute -bottom-1 right-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
              <button onClick={() => onViewChange('home')} className="text-[#1a1a1a] hover:text-[#d4af37] transition-colors">نقره</button>
              <button onClick={() => onViewChange('home')} className="text-[#1a1a1a] hover:text-[#d4af37] transition-colors">بدلیجات</button>
              <button onClick={() => onViewChange('home')} className="text-[#1a1a1a] hover:text-[#d4af37] transition-colors">درباره ما</button>
            </nav>
          </div>

          {/* Center: Logo (Mathematically centered on all screens) */}
          <div 
            onClick={() => onViewChange('home')}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group select-none"
          >
            <div className="relative">
              <span className="font-serif-lux text-2xl md:text-3xl lg:text-4xl font-bold gold-text tracking-[0.2em] uppercase transition-transform duration-500 group-hover:scale-105">
                SAHAND
              </span>
              {/* Decorative line under SAHAND */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[#d4af37] opacity-50 group-hover:w-full transition-all duration-500"></div>
            </div>
            <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-[#1a1a1a] font-light uppercase mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
              Luxury Jewelry
            </span>
          </div>

          {/* Left Side: Actions */}
          <div className="flex items-center justify-end flex-1 space-x-1 md:space-x-3 space-x-reverse">
            <button 
              onClick={() => onViewChange('home')}
              className="p-2 text-[#1a1a1a] hover:text-[#d4af37] transition-all hover:bg-[#d4af37]/5 rounded-full hidden sm:block"
            >
              {currentView === 'panel' ? <Home size={18} /> : <Search size={18} />}
            </button>
            
            <button 
              onClick={() => onViewChange('panel')}
              className={`p-2 transition-all hover:bg-[#d4af37]/5 rounded-full ${currentView === 'panel' ? 'text-[#d4af37]' : 'text-[#1a1a1a] hover:text-[#d4af37]'}`}
              aria-label="حساب کاربری"
            >
              <User size={18} />
            </button>

            <button 
              onClick={() => onViewChange('panel')}
              className="relative p-2 text-[#1a1a1a] hover:text-[#d4af37] transition-all hover:bg-[#d4af37]/5 rounded-full"
              aria-label="سبد خرید"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center w-4 h-4 text-[9px] font-black leading-none text-white bg-[#1a1a1a] border border-[#d4af37] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-t border-[#d4af37]/10 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            <button onClick={() => { onViewChange('home'); setIsMenuOpen(false); }} className="block w-full text-right text-sm font-bold text-[#1a1a1a] hover:text-[#d4af37] transition-colors">صفحه اصلی</button>
            <button onClick={() => { onViewChange('home'); setIsMenuOpen(false); }} className="block w-full text-right text-sm font-bold text-[#1a1a1a] hover:text-[#d4af37] transition-colors">کالکشن نقره</button>
            <button onClick={() => { onViewChange('home'); setIsMenuOpen(false); }} className="block w-full text-right text-sm font-bold text-[#1a1a1a] hover:text-[#d4af37] transition-colors">بدلیجات و اکسسوری</button>
            <button onClick={() => { onViewChange('panel'); setIsMenuOpen(false); }} className="block w-full text-right text-sm font-bold text-[#1a1a1a] hover:text-[#d4af37] transition-colors">سفارش‌های من</button>
            
            <div className="pt-6 border-t border-[#d4af37]/10">
               <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">Exclusive Craftsmanship</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
