
import React from 'react';
import { Instagram, Twitter, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#fdfbf7] pt-16 pb-8 border-t-4 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif-lux text-3xl font-bold gold-text tracking-widest mb-4 uppercase">SAHAND</span>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-right">
              جواهرات لوکس سهند، نمادی از ظرافت و درخشش در بازار اکسسوری ایران. ارائه بهترین کیفیت نقره و بدلیجات با طراحی‌های روز دنیا.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-6">
              <a href="#" className="hover:text-[#d4af37] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#d4af37] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#d4af37] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-[#d4af37]/30 pb-2 inline-block">دسترسی سریع</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">کالکشن نقره</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">بدلیجات لوکس</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">راهنمای سایز انگشتر</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">پیگیری سفارش</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-[#d4af37]/30 pb-2 inline-block">خدمات مشتریان</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">شرایط بازگشت کالا</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">پرسش‌های متداول</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">قوانین و مقررات</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">درباره ما</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-[#d4af37]/30 pb-2 inline-block">تماس با ما</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#d4af37]" />
                <span>تهران، خیابان شریعتی، مجتمع تجاری نگین</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4af37]" />
                <span className="dir-ltr">۰۲۱-۸۸۸۸۸۸۸۸</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#d4af37]" />
                <span>info@sahandjewelry.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-[10px] text-gray-500 uppercase tracking-[0.2em]">
          &copy; ۲۰۲۴ Sahand Luxury Jewelry. تمامی حقوق مادی و معنوی محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
