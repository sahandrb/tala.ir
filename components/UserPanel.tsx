
import React from 'react';
import { CartItem } from '../types';
import { Trash2, Plus, Minus, ShoppingCart, Send, ArrowRight } from 'lucide-react';

interface UserPanelProps {
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onBackToStore: () => void;
}

const UserPanel: React.FC<UserPanelProps> = ({ cart, onUpdateQuantity, onRemoveItem, onBackToStore }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const finalizeOrder = () => {
    if (cart.length === 0) return;

    const phoneNumber = "989384958682";
    let message = "🌟 *درخواست ثبت سفارش از جواهرات لوکس سهند* 🌟\n\n";
    message += "سلام، من قصد ثبت سفارش محصولات زیر را دارم:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   تعداد: ${item.quantity} عدد\n`;
      message += `   قیمت واحد: ${item.price.toLocaleString('fa-IR')} تومان\n`;
      message += `   --------------------------\n`;
    });

    message += `\n💰 *جمع کل سفارش: ${totalPrice.toLocaleString('fa-IR')} تومان*`;
    message += `\n\nلطفاً جهت هماهنگی نهایی و ارسال، راهنمایی بفرمایید.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-[#d4af37]/30 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#1a1a1a] text-[#d4af37]">
            <ShoppingCart size={24} />
          </div>
          <div>
            <h2 className="font-serif-lux text-2xl md:text-3xl font-bold">پنل کاربری و سفارش‌ها</h2>
            <p className="text-gray-500 text-xs mt-1">مدیریت اقلام انتخابی و نهایی کردن خرید</p>
          </div>
        </div>
        
        <button 
          onClick={onBackToStore}
          className="flex items-center gap-2 text-[#d4af37] hover:text-[#1a1a1a] transition-colors font-bold text-sm"
        >
          <ArrowRight size={18} />
          بازگشت به فروشگاه
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white luxury-border flex flex-col items-center">
          <ShoppingCart size={48} className="mx-auto text-gray-200 mb-4" />
          <p className="text-gray-500">هنوز هیچ محصولی به لیست سفارش‌های خود اضافه نکرده‌اید.</p>
          <button 
            onClick={onBackToStore}
            className="mt-6 text-[#d4af37] font-bold underline hover:text-[#1a1a1a] transition-colors"
          >
            مشاهده محصولات و شروع خرید
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white luxury-border overflow-hidden">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover luxury-border" />
                
                <div className="flex-grow">
                  <h3 className="font-bold text-sm md:text-base">{item.name}</h3>
                  <p className="text-[#d4af37] text-xs font-bold mt-1">{item.price.toLocaleString('fa-IR')} تومان</p>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-1 border border-gray-100">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-1 hover:text-[#d4af37] transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-1 hover:text-[#d4af37] transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a1a] p-8 text-[#fdfbf7] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-400 text-xs mb-1 uppercase tracking-widest">مبلغ قابل پرداخت</p>
              <p className="font-serif-lux text-2xl md:text-3xl font-bold gold-text">
                {totalPrice.toLocaleString('fa-IR')} <span className="text-sm">تومان</span>
              </p>
            </div>
            
            <button 
              onClick={finalizeOrder}
              className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#d4af37] text-white font-bold hover:bg-[#b8860b] transition-all seal-shadow"
            >
              <Send size={18} />
              نهایی کردن در واتس‌اپ
            </button>
          </div>
          
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-4">
            با کلیک روی دکمه بالا، لیست سفارش شما جهت تایید نهایی به واتس‌اپ فروشگاه ارسال می‌شود.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
