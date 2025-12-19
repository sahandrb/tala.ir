
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import UserPanel from './components/UserPanel';
import Footer from './components/Footer';
import { MOCK_PRODUCTS, GoldSealIcon } from './constants';
import { Product, CartItem, Category, AppView } from './types';
import { 
  ShieldCheck, Award, Truck, Heart, X, MessageCircle, 
  Gift, Sparkles, Zap, PackageOpen, ArrowLeft, ArrowRight,
  Gem, MousePointerClick
} from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [showSupport, setShowSupport] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const productsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSupport(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryFilter = (category: string | null) => {
    setFilter(category);
    if (currentView === 'home') {
      productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = filter 
    ? MOCK_PRODUCTS.filter(p => p.category === filter)
    : MOCK_PRODUCTS;

  const categories = Object.values(Category);

  return (
    <div className="min-h-screen bg-[#fdfbf7] selection:bg-[#d4af37] selection:text-white relative">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero 
              onSilverClick={() => handleCategoryFilter(Category.Silver)} 
              onBrowseClick={scrollToProducts} 
            />

            {/* Features Bar */}
            <section className="bg-[#1a1a1a] py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 luxury-border bg-[#1a1a1a] text-[#d4af37] transition-transform group-hover:-rotate-6">
                      <ShieldCheck size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">ضمانت اصالت</h4>
                      <p className="text-gray-400 text-xs mt-1">تضمین کیفیت و عیار نقره</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 luxury-border bg-[#1a1a1a] text-[#d4af37] transition-transform group-hover:-rotate-6">
                      <Award size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">برند اختصاصی</h4>
                      <p className="text-gray-400 text-xs mt-1">طراحی‌های منحصر به فرد سهند</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 luxury-border bg-[#1a1a1a] text-[#d4af37] transition-transform group-hover:-rotate-6">
                      <Truck size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">ارسال اکسپرس</h4>
                      <p className="text-gray-400 text-xs mt-1">ارسال سریع به سراسر کشور</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 luxury-border bg-[#1a1a1a] text-[#d4af37] transition-transform group-hover:-rotate-6">
                      <Heart size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">پشتیبانی VIP</h4>
                      <p className="text-gray-400 text-xs mt-1">مشاوره تخصصی خرید هدیه</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Products Section */}
            <section ref={productsSectionRef} className="py-20 scroll-mt-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-12 px-4">
                  <h2 className="font-serif-lux text-3xl md:text-4xl font-bold text-center mb-4">
                    {filter ? `کالکشن ${filter}` : 'تمامی محصولات'}
                  </h2>
                  <div className="h-1 w-24 gold-gradient mb-10"></div>
                  
                  <div className="w-full max-w-3xl">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                      <button
                        onClick={() => handleCategoryFilter(null)}
                        className={`group relative px-6 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 ${
                          filter === null 
                            ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white shadow-xl scale-105' 
                            : 'bg-white border-gray-100 text-gray-500 hover:border-[#d4af37] hover:text-[#d4af37]'
                        }`}
                      >
                        همه
                        {filter === null && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4af37] rounded-full"></span>}
                      </button>

                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategoryFilter(cat)}
                          className={`group relative px-6 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 whitespace-nowrap ${
                            filter === cat 
                              ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white shadow-xl scale-105' 
                              : 'bg-white border-gray-100 text-gray-500 hover:border-[#d4af37] hover:text-[#d4af37]'
                          }`}
                        >
                          {cat}
                          {filter === cat && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4af37] rounded-full"></span>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8 min-h-[400px]">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={addToCart} 
                      />
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center">
                      <p className="text-gray-400 italic">محصولی در این دسته‌بندی یافت نشد.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Light, Modern & Khofan Interactive Section */}
            <section className="py-24 bg-[#fcfaf7] relative overflow-hidden border-y border-[#d4af37]/10">
              {/* Subtle Decorative Elements */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-[10%] text-gray-100 animate-pulse"><Gem size={120} strokeWidth={0.5} /></div>
                <div className="absolute bottom-20 right-[5%] text-gray-100/50 rotate-12"><Gem size={200} strokeWidth={0.3} /></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                  
                  {/* Image/Visual Part */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="relative z-20 overflow-hidden bg-white p-4 shadow-2xl transition-transform duration-700 group-hover:-rotate-1">
                      <div className="aspect-square sm:aspect-video lg:aspect-square overflow-hidden bg-[#f3f0ec]">
                        <img 
                          src="https://picsum.photos/seed/luxurygift/800/800" 
                          alt="Unboxing Experience" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Floating Label */}
                      <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white p-6 shadow-xl border border-gray-50 flex flex-col items-center gap-2">
                        <div className="p-3 bg-[#fdfbf7] text-[#d4af37] border border-[#d4af37]/20 rounded-full">
                          <PackageOpen size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]">Elite Packaging</span>
                      </div>
                    </div>
                    {/* Background Soft Shadow */}
                    <div className="absolute inset-0 bg-[#d4af37]/5 blur-3xl rounded-full scale-75 -z-10"></div>
                  </div>

                  {/* Content Part */}
                  <div className="w-full lg:w-1/2 text-right">
                    <div className="inline-block bg-[#1a1a1a] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-[0.3em] mb-8">
                      Exclusive Service
                    </div>
                    
                    <h3 className="font-serif-lux text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-8 leading-tight">
                      تجربه‌ای فراتر از یک <br />
                      <span className="text-[#d4af37] italic">خرید ساده</span>
                    </h3>
                    
                    <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-xl ml-auto">
                      ما در سهند، هنر انتخاب و هدیه دادن را به یک تجربه VIP تبدیل کرده‌ایم. با تیمی از طراحان و کارشناسان، در هر قدم کنار شما هستیم.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Feature 1 */}
                      <div className="group bg-white p-8 border border-gray-100 hover:border-[#d4af37] transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer">
                        <div className="flex items-center gap-4 mb-4 justify-end">
                          <h4 className="text-[#1a1a1a] font-bold">هدیه‌یاب هوشمند</h4>
                          <div className="p-2 bg-gray-50 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                            <Gift size={20} />
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">با چند پرسش ساده، بهترین اکسسوری را متناسب با سلیقه طرف مقابل پیدا کنید.</p>
                      </div>

                      {/* Feature 2 */}
                      <div className="group bg-white p-8 border border-gray-100 hover:border-[#d4af37] transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer">
                        <div className="flex items-center gap-4 mb-4 justify-end">
                          <h4 className="text-[#1a1a1a] font-bold">ارسال اکسپرس ویژه</h4>
                          <div className="p-2 bg-gray-50 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                            <Zap size={20} />
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">تحویل سریع در بسته‌بندی معطر و ضد‌ضربه، آماده برای خوشحال کردن عزیزانتان.</p>
                      </div>

                      {/* Wide Feature */}
                      <div 
                        onClick={() => window.open('https://wa.me/989384958682')}
                        className="md:col-span-2 group relative overflow-hidden bg-[#1a1a1a] p-8 transition-all hover:bg-[#d4af37] cursor-pointer"
                      >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                           <button className="flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                             <MousePointerClick size={16} />
                             مشاوره استایل هدیه
                           </button>
                           <div className="text-center sm:text-right">
                             <h4 className="text-white font-bold text-lg mb-1">هنوز مردد هستید؟</h4>
                             <p className="text-gray-400 group-hover:text-white/80 text-xs">همین حالا با کارشناس استایل سهند در واتس‌اپ گفتگو کنید.</p>
                           </div>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </>
        ) : (
          <UserPanel 
            cart={cart} 
            onUpdateQuantity={updateQuantity} 
            onRemoveItem={removeItem} 
            onBackToStore={() => setCurrentView('home')}
          />
        )}
      </main>

      <Footer />

      {/* Support Button */}
      {showSupport && (
        <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-500 max-w-[280px]">
          <div className="bg-white luxury-border p-5 shadow-2xl relative group">
            <button onClick={() => setShowSupport(false)} className="absolute -top-3 -left-3 bg-[#1a1a1a] text-white p-1 rounded-full hover:bg-[#d4af37] transition-colors">
              <X size={14} />
            </button>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#fdfbf7] text-[#d4af37] border border-[#d4af37]/20 rounded-full">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1a1a] mb-1">نیاز به پشتیبانی دارید؟</p>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">کارشناسان ما آماده پاسخگویی هستند.</p>
                <a href="https://wa.me/989384958682" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#d4af37] text-white text-[10px] font-bold px-4 py-2 hover:bg-[#b8860b] transition-colors uppercase tracking-wider">
                  تماس با واتس‌اپ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
