import React, { useState } from 'react';
import { motion } from 'motion/react';
import SeoContent from './components/SeoContent';
import { 
  Phone, 
  Menu, 
  X, 
  Factory, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  PhoneCall, 
  Send, 
  Instagram,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  User,
  Award,
  Truck,
  Headset,
  AlignRight,
  Image as ImageIcon,
  Ruler
} from 'lucide-react';

const generateImages = (baseName: string, count: number) => 
  Array.from({ length: count }, (_, i) => `/images/${baseName}${i + 1}.jpg`);

const galleryImages = {
  whiteboardAluminum: generateImages('aluminiumwhiteboard', 10),
  whiteboardPvc: generateImages('pvcwhiteboard', 10),
  binderFantasy: generateImages('fantasybinder', 10),
  binderSlant: generateImages('slantbinder', 10),
  binderTriangle: generateImages('trianglebinder', 10),
  binderA3: generateImages('a3binder', 10),
  canvasPro: generateImages('procanvas', 10),
  canvasStudent: generateImages('studentcanvas', 10),
};

const sizingData = {
  whiteboardAluminum: [
    "۲۰ × ۳۰", "۳۰ × ۴۰", "۳۰ × ۵۰", "۴۰ × ۵۰", "۴۰ × ۶۰", "۵۰ × ۷۰", "۶۰ × ۸۰", "۶۰ × ۹۰", "۷۰ × ۱۰۰", "۸۰ × ۱۰۰", "۸۰ × ۱۲۰", "۹۰ × ۱۲۰", "۱۰۰ × ۱۵۰", "۱۰۰ × ۲۰۰", "۱۲۰ × ۲۰۰", "۱۲۰ × ۲۴۰"
  ],
  whiteboardPvc: [
    "۲۰ × ۳۰", "۳۰ × ۴۰", "۳۰ × ۵۰", "۴۰ × ۵۰", "۴۰ × ۶۰", "۵۰ × ۷۰", "۶۰ × ۸۰", "۶۰ × ۹۰", "۷۰ × ۱۰۰"
  ]
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [galleryState, setGalleryState] = useState<{ isOpen: boolean, images: string[] }>({ isOpen: false, images: [] });
  const [sizingState, setSizingState] = useState<{ isOpen: boolean, title: string, sizes: string[] }>({ isOpen: false, title: '', sizes: [] });
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openGallery = (images: string[]) => {
    setGalleryState({ isOpen: true, images });
  };

  const closeGallery = () => {
    setGalleryState({ isOpen: false, images: [] });
  };

  const openSizing = (title: string, sizes: string[]) => {
    setSizingState({ isOpen: true, title, sizes });
  };

  const closeSizing = () => {
    setSizingState({ isOpen: false, title: '', sizes: [] });
  };

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Adjust for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-digi-bg">
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Desktop & Mobile Top Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Right side: Logo & Hamburger */}
            <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-digi-dark hover:text-digi-red focus:outline-none"
              >
                <Menu className="h-7 w-7" />
              </button>

              {/* Logo */}
              <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <span className="text-3xl font-black text-digi-red tracking-tighter">
                  OMID
                </span>
              </div>
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
              <div className="w-full bg-digi-bg rounded-lg flex items-center px-4 py-3">
                <Search className="w-6 h-6 text-digi-light ml-3" />
                <input 
                  type="text" 
                  placeholder="جستجو در محصولات امید..." 
                  className="bg-transparent border-none outline-none w-full text-sm text-digi-dark placeholder-digi-light"
                />
              </div>
            </div>

            {/* Left side: Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="tel:02634813911" className="hidden sm:flex items-center justify-center px-4 py-2.5 border border-digi-border rounded-lg text-sm font-bold text-digi-dark hover:bg-gray-50 transition-colors">
                <User className="w-5 h-5 ml-2 text-digi-light" />
                ورود | ثبت‌نام
              </a>
              <div className="hidden sm:block w-px h-6 bg-digi-border"></div>
              <a href="tel:02634813911" className="group flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-digi-red to-red-500 text-white rounded-xl shadow-lg shadow-digi-red/30 hover:shadow-digi-red/50 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="relative flex items-center justify-center bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                </div>
                <div className="flex flex-col items-start hidden sm:flex">
                  <span className="text-[10px] font-medium text-white/90 leading-none mb-1">تماس مستقیم</span>
                  <span className="text-xs md:text-sm font-bold leading-none tracking-wider" dir="ltr">02634813911</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (Always visible under top bar on mobile) */}
        <div className="md:hidden px-4 pb-3">
          <div className="w-full bg-digi-bg rounded-lg flex items-center px-4 py-2.5">
            <Search className="w-5 h-5 text-digi-light ml-3" />
            <input 
              type="text" 
              placeholder="جستجو در امید..." 
              className="bg-transparent border-none outline-none w-full text-sm text-digi-dark placeholder-digi-light"
            />
          </div>
        </div>

        {/* Bottom Header (Desktop Navigation) */}
        <div className="hidden md:block border-t border-digi-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-6 space-x-reverse h-10 items-center text-sm font-medium text-digi-light">
              <div className="flex items-center text-digi-dark font-bold ml-4 cursor-pointer hover:text-digi-red transition-colors">
                <AlignRight className="w-4 h-4 ml-1" />
                محصولات (وایت‌برد و زونکن)
              </div>
              <div className="w-px h-4 bg-digi-border mx-2"></div>
              <button onClick={() => scrollToSection('whiteboards')} className="hover:text-digi-red hover:border-b-2 hover:border-digi-red h-full px-1 transition-colors">وایت‌برد</button>
              <button onClick={() => scrollToSection('binders')} className="hover:text-digi-red hover:border-b-2 hover:border-digi-red h-full px-1 transition-colors">زونکن</button>
              <button onClick={() => scrollToSection('canvases')} className="hover:text-digi-red hover:border-b-2 hover:border-digi-red h-full px-1 transition-colors">بوم نقاشی</button>
              <div className="w-px h-4 bg-digi-border mx-2"></div>
              <button onClick={() => scrollToSection('contact')} className="hover:text-digi-red hover:border-b-2 hover:border-digi-red h-full px-1 transition-colors">تماس با ما</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-digi-border">
          <span className="text-2xl font-black text-digi-red tracking-tighter">OMID</span>
          <button onClick={toggleMenu} className="p-2 text-digi-light hover:text-digi-dark bg-gray-50 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto py-4">
          <div className="px-4 mb-6">
            <a href="tel:02634813911" className="flex items-center justify-center w-full py-3 border border-digi-border rounded-xl text-sm font-bold text-digi-dark hover:bg-gray-50 transition-colors">
              <User className="w-5 h-5 ml-2 text-digi-light" />
              ورود | ثبت‌نام
            </a>
          </div>
          
          <h3 className="px-4 text-xs font-bold text-digi-light mb-2">محصولات (وایت‌برد و زونکن)</h3>
          <ul className="space-y-1">
            <li>
              <button onClick={() => scrollToSection('whiteboards')} className="w-full flex items-center px-4 py-3 text-sm font-medium text-digi-dark hover:bg-gray-50 hover:text-digi-red transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-digi-border ml-3"></div>
                وایت‌برد
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('binders')} className="w-full flex items-center px-4 py-3 text-sm font-medium text-digi-dark hover:bg-gray-50 hover:text-digi-red transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-digi-border ml-3"></div>
                زونکن
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('canvases')} className="w-full flex items-center px-4 py-3 text-sm font-medium text-digi-dark hover:bg-gray-50 hover:text-digi-red transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-digi-border ml-3"></div>
                بوم نقاشی
              </button>
            </li>
          </ul>

          <div className="h-px bg-digi-border my-4 mx-4"></div>
          
          <ul className="space-y-1">
            <li>
              <button onClick={() => scrollToSection('contact')} className="w-full flex items-center px-4 py-3 text-sm font-medium text-digi-dark hover:bg-gray-50 hover:text-digi-red transition-colors">
                <PhoneCall className="w-5 h-5 ml-3 text-digi-light" />
                تماس با ما
              </button>
            </li>
          </ul>
        </div>
        
        <div className="p-4 border-t border-digi-border bg-gray-50">
          <a href="tel:02634813911" className="flex items-center justify-center w-full py-3 bg-digi-red text-white rounded-xl text-sm font-bold hover:bg-digi-red-hover transition-colors shadow-md shadow-digi-red/20">
            <Phone className="w-5 h-5 ml-2" />
            تماس با کارخانه
          </a>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        
        {/* 2. Hero Section (Slider Style) */}
        <section className="mb-8">
          <div className="relative rounded-2xl overflow-hidden bg-digi-dark text-white h-[300px] md:h-[400px] flex items-center shadow-lg group">
            <div className="absolute inset-0">
              <img
                src="/images/hero-banner.jpg"
                alt="خط تولید امید"
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-digi-dark/95 via-digi-dark/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 px-8 md:px-16 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1.5 px-4 rounded-full bg-digi-red/20 text-digi-red border border-digi-red/30 text-xs font-bold mb-6 backdrop-blur-sm">
                  🔥 مرکز پخش عمده وایت‌برد و ملزومات بایگانی در ایران
                </span>
                <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white drop-shadow-md">
                  تامین‌کننده اصلی <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-digi-red">وایت‌برد و زونکن</span> در بازار تهران و البرز
                </h1>
                <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                  تامین مستقیم کالا برای فروشگاه‌های لوازم‌التحریر، سازمان‌ها و شرکت‌های پخش | فروش فقط به صورت کارتنی و تیراژ
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button onClick={openContact} className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-digi-red hover:bg-digi-red-hover font-bold transition-all shadow-lg shadow-digi-red/30 hover:-translate-y-0.5">
                    دریافت لیست قیمت همکار
                    <ChevronLeft className="w-5 h-5 mr-2" />
                  </button>
                  <button onClick={openContact} className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-white/10 hover:bg-white/20 font-bold transition-all backdrop-blur-sm">
                    استعلام موجودی انبوه
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Mock Slider Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
              <div className="w-8 h-1.5 bg-white rounded-full"></div>
              <div className="w-2 h-1.5 bg-white/40 rounded-full"></div>
              <div className="w-2 h-1.5 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us (Features Bar) */}
        <section className="mb-12 bg-white rounded-2xl py-8 px-4 border border-digi-border shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-x-reverse divide-digi-border/50">
            <FeatureIcon icon={<Award className="w-10 h-10 text-digi-red" />} title="تضمین حاشیه سود همکار" subtitle="قیمت‌گذاری رقابتی درب کارخانه برای سود حداکثری شما" />
            <FeatureIcon icon={<Truck className="w-10 h-10 text-digi-red" />} title="ارسال باربری به سراسر کشور" subtitle="بسته‌بندی صادراتی و ارسال ایمن با کمترین هزینه باربری" />
            <FeatureIcon icon={<Layers className="w-10 h-10 text-digi-red" />} title="تامین پایدار کالا" subtitle="بدون کسری جنس؛ تامین تیراژهای سنگین در کوتاه‌ترین زمان" />
            <FeatureIcon icon={<Factory className="w-10 h-10 text-digi-red" />} title="تولید سفارشی (OEM)" subtitle="امکان حک لوگوی شما روی وایت‌برد و زونکن (تیراژ بالا)" />
          </div>
        </section>

        {/* 3. Products Section */}
        
        {/* 3.1 Whiteboards (Special Offers Style) */}
        <section id="whiteboards" className="mb-12 scroll-mt-32">
          <div className="bg-digi-red rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center">
            {/* Title Block */}
            <div className="md:w-1/4 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-3xl font-black mb-2">وایت‌برد</h2>
              <p className="text-sm opacity-90 mb-4">تولیدات ویژه امید</p>
              <img src="/images/special-offer.jpg" alt="Special" className="w-32 h-32 object-contain mix-blend-multiply opacity-50 hidden md:block" referrerPolicy="no-referrer" loading="lazy" />
              <button className="mt-4 flex items-center text-sm font-bold hover:underline">
                مشاهده همه <ChevronLeft className="w-4 h-4 mr-1" />
              </button>
            </div>
            
            {/* Products Grid */}
            <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <DigiProductCard 
                title="وایت‌برد فریم آلومینیومی"
                description="استحکام و دوام بسیار بالا، مناسب برای مدارس و دانشگاه‌ها"
                image="/images/whiteboard-aluminum.jpg"
                badge="پرفروش"
                altText="وایت برد مغناطیسی فریم آلومینیومی تولید کرج"
                showActions={true}
                onOpenGallery={() => openGallery(galleryImages.whiteboardAluminum)}
                onOpenSizing={() => openSizing("وایت‌برد فریم آلومینیومی", sizingData.whiteboardAluminum)}
                specs={[
                  { label: "بسته‌بندی", value: "کارتن ۵ عددی" },
                  { label: "حداقل سفارش", value: "۱ کارتن" }
                ]}
                onContact={openContact}
              />
              <DigiProductCard 
                title="وایت‌برد فریم PVC"
                description="قیمت اقتصادی و مناسب، وزن سبک و ظاهر زیبا"
                image="/images/whiteboard-pvc.jpg"
                altText="وایت برد فریم PVC ارزان قیمت خرید از کارخانه البرز"
                showActions={true}
                onOpenGallery={() => openGallery(galleryImages.whiteboardPvc)}
                onOpenSizing={() => openSizing("وایت‌برد فریم PVC", sizingData.whiteboardPvc)}
                specs={[
                  { label: "بسته‌بندی", value: "کارتن ۱۰ عددی" },
                  { label: "حداقل سفارش", value: "۱ کارتن" }
                ]}
                onContact={openContact}
              />
            </div>
          </div>
        </section>

        {/* 3.1.5 Whiteboard Stands */}
        <section id="stands" className="mb-12 scroll-mt-32">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-digi-dark relative pr-4 before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-6 before:bg-digi-red before:rounded-full">
              پایه‌های وایت‌برد
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stand 1 */}
            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img src="/images/stand-mobile.jpg" alt="پایه وایت برد متحرک" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2">پایه متحرک</h4>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">چرخ‌دار و مقاوم، مناسب برای جابجایی آسان در کلاس‌ها و ادارات.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronLeft className="w-5 h-5 -rotate-45" />
              </div>
            </div>

            {/* Stand 2 */}
            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img src="/images/stand-reversible.jpg" alt="پایه وایت برد متحرک گردان" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2">پایه متحرک گردان</h4>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">قابلیت چرخش ۳۶۰ درجه و استفاده از هر دو سمت وایت‌برد.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronLeft className="w-5 h-5 -rotate-45" />
              </div>
            </div>

            {/* Stand 3 */}
            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img src="/images/stand-heavy.jpg" alt="پایه وایت برد متحرک سنگین" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2">پایه متحرک سنگین</h4>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">طراحی صنعتی و فوق‌العاده مستحکم برای وایت‌بردهای سایز بزرگ.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronLeft className="w-5 h-5 -rotate-45" />
              </div>
            </div>
          </div>
        </section>

        {/* 3.2 Binders */}
        <section id="binders" className="mb-12 scroll-mt-32">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-digi-dark relative pr-4 before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-6 before:bg-digi-red before:rounded-full">
              انواع زونکن بایگانی
            </h3>
            <a href="tel:02634813911" className="text-sm font-bold text-digi-red flex items-center hover:underline">
              مشاهده همه <ChevronLeft className="w-4 h-4 mr-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-digi-border rounded-2xl p-5 flex flex-col sm:flex-row items-center hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-digi-red/10 to-transparent rounded-bl-full z-0"></div>
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 overflow-hidden rounded-xl border border-gray-100 relative z-10 bg-white">
                <img src="/images/binder-fantasy.jpg" alt="خرید زونکن فانتزی در البرز" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col flex-grow text-center sm:text-right w-full relative z-10">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-lg font-bold text-digi-dark">زونکن‌های فانتزی</h4>
                  <span className="mr-2 bg-digi-red text-white text-[10px] px-2 py-0.5 rounded-full font-bold">جدید</span>
                </div>
                <p className="text-sm text-digi-light mb-4 flex-grow leading-relaxed">فانتزی کتان / A5 فانتزی ساده با طراحی‌های متنوع و جذاب برای محیط‌های اداری مدرن.</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-digi-bg">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); openGallery(galleryImages.binderFantasy); }} className="p-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg transition-colors border border-gray-200" title="مشاهده گالری تصاویر">
                      <ImageIcon className="w-4 h-4 text-digi-light" />
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-digi-red text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    سفارش عمده <ChevronLeft className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-digi-border rounded-2xl p-5 flex flex-col sm:flex-row items-center hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full z-0"></div>
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 overflow-hidden rounded-xl border border-gray-100 relative z-10 bg-white">
                <img src="/images/binder-slant.jpg" alt="تولیدی زونکن لب کج اداری کرج" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col flex-grow text-center sm:text-right w-full relative z-10">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-lg font-bold text-digi-dark">زونکن‌های لب‌کج</h4>
                </div>
                <p className="text-sm text-digi-light mb-4 flex-grow leading-relaxed">ساده / کتان، مناسب برای دسترسی سریع به اسناد و بایگانی‌های پرکاربرد.</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-digi-bg">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); openGallery(galleryImages.binderSlant); }} className="p-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg transition-colors border border-gray-200" title="مشاهده گالری تصاویر">
                      <ImageIcon className="w-4 h-4 text-digi-light" />
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-digi-red text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    سفارش عمده <ChevronLeft className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-digi-border rounded-2xl p-5 flex flex-col sm:flex-row items-center hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full z-0"></div>
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 overflow-hidden rounded-xl border border-gray-100 relative z-10 bg-white">
                <img src="/images/binder-triangle.jpg" alt="خرید عمده زونکن سه گوش از کارخانه" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col flex-grow text-center sm:text-right w-full relative z-10">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-lg font-bold text-digi-dark">زونکن‌های سه‌گوش</h4>
                  <span className="mr-2 bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">پرفروش</span>
                </div>
                <p className="text-sm text-digi-light mb-4 flex-grow leading-relaxed">سه‌گوش کتان با عطف ۷.۵، ۱۰ و ۱۵ سانتی‌متر برای حجم‌های مختلف بایگانی.</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-digi-bg">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); openGallery(galleryImages.binderTriangle); }} className="p-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg transition-colors border border-gray-200" title="مشاهده گالری تصاویر">
                      <ImageIcon className="w-4 h-4 text-digi-light" />
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-digi-red text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    سفارش عمده <ChevronLeft className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-digi-border rounded-2xl p-5 flex flex-col sm:flex-row items-center hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full z-0"></div>
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 overflow-hidden rounded-xl border border-gray-100 relative z-10 bg-white">
                <img src="/images/binder-a3.jpg" alt="زونکن سایز بزرگ A3 تولیدی امید" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col flex-grow text-center sm:text-right w-full relative z-10">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-lg font-bold text-digi-dark">زونکن‌های سایز بزرگ</h4>
                </div>
                <p className="text-sm text-digi-light mb-4 flex-grow leading-relaxed">A3 کتان (مخصوص نقشه‌کشی) با مقاومت بالا برای نگهداری اسناد سایز بزرگ.</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-digi-bg">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); openGallery(galleryImages.binderA3); }} className="p-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg transition-colors border border-gray-200" title="مشاهده گالری تصاویر">
                      <ImageIcon className="w-4 h-4 text-digi-light" />
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-digi-red text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    سفارش عمده <ChevronLeft className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.3 Canvases */}
        <section id="canvases" className="mb-12 scroll-mt-32">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-digi-dark relative pr-4 before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-6 before:bg-digi-red before:rounded-full">
              بوم‌های نقاشی
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-digi-border rounded-2xl p-5 flex flex-col sm:flex-row items-center hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-digi-red/10 to-transparent rounded-bl-full z-0"></div>
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 overflow-hidden rounded-xl border border-gray-100 relative z-10 bg-white">
                <img src="/images/canvas-pro.jpg" alt="بوم نقاشی حرفه ای کتان تولید کمالشهر کرج" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="flex flex-col flex-grow text-center sm:text-right w-full relative z-10">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-lg font-bold text-digi-dark">بوم نقاشی حرفه‌ای (کتان ۱۰۰٪)</h4>
                  <span className="mr-2 bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">ویژه اساتید</span>
                </div>
                <p className="text-sm text-digi-light mb-4 flex-grow leading-relaxed">بوم با پارچه کتان خالص و زیرسازی سه لایه جسو، مناسب برای نقاشان حرفه‌ای و تکنیک‌های رنگ روغن و اکریلیک.</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-digi-bg">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); openGallery(galleryImages.canvasPro); }} className="p-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg transition-colors border border-gray-200" title="مشاهده گالری تصاویر">
                      <ImageIcon className="w-4 h-4 text-digi-light" />
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-digi-red text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    سفارش عمده <ChevronLeft className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border border-digi-border rounded-2xl p-5 flex flex-col sm:flex-row items-center hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full z-0"></div>
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 overflow-hidden rounded-xl border border-gray-100 relative z-10 bg-white">
                <img src="/images/canvas-student.jpg" alt="بوم نقاشی هنرجویی ارزان قیمت البرز" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="flex flex-col flex-grow text-center sm:text-right w-full relative z-10">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-lg font-bold text-digi-dark">بوم نقاشی هنرجویی (پلی‌استر)</h4>
                  <span className="mr-2 bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">اقتصادی</span>
                </div>
                <p className="text-sm text-digi-light mb-4 flex-grow leading-relaxed">گزینه‌ای اقتصادی با کیفیت مطلوب برای هنرجویان و تمرینات روزمره. بافت ریز و جذب رنگ مناسب.</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-digi-bg">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); openGallery(galleryImages.canvasStudent); }} className="p-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg transition-colors border border-gray-200" title="مشاهده گالری تصاویر">
                      <ImageIcon className="w-4 h-4 text-digi-light" />
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-digi-red text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    سفارش عمده <ChevronLeft className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Section */}
        <SeoContent />

      </main>

      {/* 5. Footer & Contact */}
      <footer id="contact" className="bg-white border-t border-digi-border pt-10 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10">
            <div>
              <span className="text-3xl font-black text-digi-red tracking-tighter mb-2 block">
                OMID
              </span>
              <p className="text-sm text-digi-dark mb-4">
                تلفن پشتیبانی: <a href="tel:02634813911" className="font-bold mx-1" dir="ltr">02634813911</a> | شنبه تا پنج‌شنبه: ۹ صبح الی ۵ عصر
              </p>
            </div>
            <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="w-10 h-10 rounded-full bg-digi-bg flex items-center justify-center text-digi-light hover:text-digi-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-digi-bg flex items-center justify-center text-digi-light hover:text-digi-dark transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-digi-bg flex items-center justify-center text-digi-light hover:text-digi-dark transition-colors text-xs font-bold">
                ایتا
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-digi-border">
            
            {/* About */}
            <div className="md:col-span-2">
              <h4 className="text-base font-bold text-digi-dark mb-4">درباره تولیدی امید</h4>
              <p className="text-sm text-digi-light leading-loose text-justify">
                تولیدی امید؛ با ۳۵ سال سابقه در تجهیز بزرگترین مراکز آموزشی و اداری کشور. افتخار همکاری مستمر با بیش از ۵۰۰ فروشگاه لوازم‌التحریر و ۱۰ شرکت پخش سراسری در استان‌های البرز، تهران و قزوین. ظرفیت تولید روزانه ۵۰۰ تخته وایت‌برد و ۲۰۰۰ زونکن.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-bold text-digi-dark mb-4">ارتباط با واحد فروش عمده</h4>
              <ul className="space-y-3 text-sm text-digi-dark">
                <li className="flex items-start">
                  <PhoneCall className="w-5 h-5 text-digi-light ml-2 flex-shrink-0" />
                  <span>واحد فروش سازمانی و پخش: <a href="tel:+989120000000" className="hover:text-digi-red transition-colors font-bold" dir="ltr">۰۹۱۲ ۰۰۰ ۰۰۰۰</a></span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-digi-light ml-2 flex-shrink-0" />
                  <span>دفتر کارخانه (پیگیری سفارشات عمده): <a href="tel:02634813911" className="hover:text-digi-red transition-colors font-bold" dir="ltr">02634813911</a></span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-digi-light ml-2 flex-shrink-0" />
                  <span>آدرس انبار مرکزی: کرج، کمالشهر، شهرک صنعتی فجر ۳، پلاک ۱۰</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-digi-light">
            <p>
              برای استفاده از مطالب سایت، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق این سایت متعلق به برند OMID است.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Gallery Modal */}
      <ImageGalleryModal 
        isOpen={galleryState.isOpen} 
        images={galleryState.images} 
        onClose={closeGallery} 
      />

      {/* Sizing Modal */}
      <SizingModal
        isOpen={sizingState.isOpen}
        title={sizingState.title}
        sizes={sizingState.sizes}
        onClose={closeSizing}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
      />
    </div>
  );
}

// --- Subcomponents ---

function SizingModal({ isOpen, title, sizes, onClose }: { isOpen: boolean, title: string, sizes: string[], onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-digi-border bg-gray-50">
          <h3 className="text-lg font-bold text-digi-dark flex items-center">
            <Ruler className="w-5 h-5 ml-2 text-digi-red" />
            جدول سایزبندی {title}
          </h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-digi-red hover:bg-red-50 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 max-h-[70vh] overflow-y-auto bg-gray-50/50">
          {sizes.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sizes.map((size, index) => (
                <div key={index} className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-digi-red hover:shadow-md hover:shadow-digi-red/10 transition-all duration-300 cursor-default group">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gray-100 to-transparent group-hover:from-digi-red/10 transition-colors rounded-bl-full z-0"></div>
                  <Ruler className="w-6 h-6 text-gray-300 group-hover:text-digi-red/50 mb-2 relative z-10 transition-colors" />
                  <div className="flex items-baseline gap-1 relative z-10">
                    <span className="text-lg font-black text-digi-dark group-hover:text-digi-red transition-colors tracking-wider" dir="ltr">{size}</span>
                  </div>
                  <span className="text-[10px] font-bold text-digi-light uppercase tracking-widest mt-1 relative z-10">سانتی‌متر</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-digi-light flex flex-col items-center">
              <Ruler className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-lg font-medium">سایزبندی برای این محصول ثبت نشده است.</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-digi-border bg-gray-50 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-digi-dark text-white rounded-lg text-sm font-bold hover:bg-opacity-90 transition-colors">
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageGalleryModal({ isOpen, images, onClose }: { isOpen: boolean, images: string[], onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, images]);

  if (!isOpen) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full z-50">
        <X className="w-6 h-6" />
      </button>
      
      <div className="relative w-full max-w-5xl flex flex-col items-center h-full justify-center">
        {/* Main Image */}
        <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center mb-6">
          <img src={images[currentIndex]} alt={`تصویر ${currentIndex + 1}`} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
          
          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-2 md:left-8 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={nextImage} className="absolute right-2 md:right-8 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md">
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto max-w-full pb-4 px-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all snap-center ${currentIndex === idx ? 'ring-2 ring-digi-red opacity-100 scale-105' : 'opacity-50 hover:opacity-100'}`}
              >
                <img src={img} alt={`بندانگشتی ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
        
        <div className="text-white/70 text-sm mt-2 font-mono bg-black/50 px-4 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col items-center text-center p-2 group cursor-pointer">
      <div className="mb-4 p-3 rounded-full bg-digi-red/5 group-hover:bg-digi-red/10 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-bold text-digi-dark mb-1">{title}</span>
      {subtitle && <span className="text-xs text-digi-light">{subtitle}</span>}
    </div>
  );
}

function DigiProductCard({ title, description, image, badge, altText, showActions = false, onOpenGallery, onOpenSizing, specs, onContact }: { title: string, description: string, image: string, badge?: string, altText?: string, showActions?: boolean, onOpenGallery?: () => void, onOpenSizing?: () => void, specs?: { label: string, value: string }[], onContact?: () => void }) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col h-full relative group cursor-pointer">
      {badge && (
        <span className="absolute top-2 right-2 bg-digi-red text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
          {badge}
        </span>
      )}
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={altText || title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
      </div>
      <h4 className="text-sm font-bold text-digi-dark mb-2 line-clamp-2">{title}</h4>
      <p className="text-xs text-digi-light mb-3 flex-grow line-clamp-2">{description}</p>
      
      {specs && (
        <div className="bg-gray-50 rounded-lg p-2 mb-4 space-y-1 border border-gray-100">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between items-center text-[10px]">
              <span className="text-digi-light">{spec.label}:</span>
              <span className="font-bold text-digi-dark">{spec.value}</span>
            </div>
          ))}
        </div>
      )}
      
      {showActions && (
        <div className="flex flex-col gap-2 mb-4">
          <button onClick={(e) => { e.stopPropagation(); onOpenGallery?.(); }} className="flex items-center justify-center w-full py-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg text-xs font-bold transition-colors border border-gray-200">
            <ImageIcon className="w-4 h-4 ml-2 text-digi-light" />
            مشاهده گالری تصاویر
          </button>
          <button onClick={(e) => { e.stopPropagation(); onOpenSizing?.(); }} className="flex items-center justify-center w-full py-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg text-xs font-bold transition-colors border border-gray-200">
            <Ruler className="w-4 h-4 ml-2 text-digi-light" />
            مشاهده سایزبندی
          </button>
        </div>
      )}

      <div className="flex justify-between items-center mt-auto pt-3 border-t border-digi-bg">
        <span className="text-xs text-digi-light">قیمت:</span>
        <button onClick={(e) => { e.stopPropagation(); onContact?.(); }} className="text-xs font-bold text-digi-red hover:underline transition-colors">ویژه همکار (تماس بگیرید)</button>
      </div>
    </div>
  );
}

function DigiSimpleCard({ title, subtitle, image, badge, altText, onOpenGallery, onOpenSizing }: { title: string, subtitle: string, image: string, badge?: string, altText?: string, onOpenGallery?: () => void, onOpenSizing?: () => void }) {
  return (
    <div className="p-6 flex flex-col items-center text-center group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white h-full relative">
      {badge && (
        <span className="absolute top-4 right-4 bg-digi-red text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
          {badge}
        </span>
      )}
      <div className="aspect-square w-full max-w-[160px] mb-6 overflow-hidden rounded-xl bg-gray-50 p-2">
        <img src={image} alt={altText || title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" referrerPolicy="no-referrer" loading="lazy" />
      </div>
      <h4 className="text-sm font-bold text-digi-dark mb-2 group-hover:text-digi-red transition-colors">{title}</h4>
      <p className="text-xs text-digi-light leading-relaxed mb-4 flex-grow">{subtitle}</p>
      
      <div className="flex items-center gap-2 mt-auto w-full">
        <button onClick={(e) => { e.stopPropagation(); onOpenGallery?.(); }} className="flex-1 flex items-center justify-center py-2 bg-gray-50 hover:bg-gray-100 text-digi-dark rounded-lg text-[10px] font-bold transition-colors border border-gray-200">
          <ImageIcon className="w-3 h-3 ml-1 text-digi-light" />
          گالری
        </button>
      </div>
    </div>
  );
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl p-6 text-center" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-digi-dark">تماس با واحد فروش</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-digi-red hover:bg-red-50 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-digi-red/10 rounded-full flex items-center justify-center mb-2">
            <PhoneCall className="w-8 h-8 text-digi-red" />
          </div>
          <p className="text-digi-dark font-medium">با ما تماس بگیرید</p>
          <a href="tel:02634813911" className="text-2xl font-black text-digi-red hover:scale-105 transition-transform dir-ltr">
            02634813911
          </a>
          <p className="text-sm text-digi-light font-bold">تولیدی و پخش امید</p>
        </div>

        <button onClick={onClose} className="w-full py-3 bg-gray-100 text-digi-dark rounded-xl font-bold hover:bg-gray-200 transition-colors">
          بستن
        </button>
      </div>
    </div>
  );
}

