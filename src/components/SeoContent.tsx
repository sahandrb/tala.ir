import React from 'react';

const SeoContent = () => {
  return (
    <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-digi-border shadow-sm leading-8 text-justify text-digi-light">
      
      {/* تیتر اصلی بخش سئو - شامل کلمات کلیدی اصلی */}
      <h2 className="text-2xl md:text-3xl font-bold text-digi-dark mb-6 text-center">
        تولیدی امید؛ مرکز پخش عمده وایت‌برد و زونکن
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* ستون اول: تمرکز روی وایت‌برد */}
        <article>
          <h3 className="text-xl font-bold text-digi-red mb-3">
            تولید تخصصی انواع وایت‌برد در استان البرز
          </h3>
          <p className="mb-4">
            تولیدی امید؛ با ۳۵ سال سابقه در تجهیز بزرگترین مراکز آموزشی و اداری کشور. افتخار همکاری مستمر با بیش از ۵۰۰ فروشگاه لوازم‌التحریر و ۱۰ شرکت پخش سراسری در استان‌های البرز، تهران و قزوین. ظرفیت تولید روزانه ۵۰۰ تخته وایت‌برد و ۲۰۰۰ زونکن. ما به عنوان یکی از تامین‌کنندگان اصلی بازار، محصولات خود را با بالاترین کیفیت و رقابتی‌ترین قیمت به صورت عمده و کارتنی در اختیار همکاران و شرکت‌های پخش قرار می‌دهیم.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 bg-digi-bg p-4 rounded-lg text-digi-dark">
            <li><strong>تضمین حاشیه سود همکار:</strong> قیمت‌گذاری رقابتی درب کارخانه برای سود حداکثری شما.</li>
            <li><strong>ارسال باربری به سراسر کشور:</strong> بسته‌بندی صادراتی و ارسال ایمن با کمترین هزینه باربری.</li>
            <li><strong>تامین پایدار کالا:</strong> بدون کسری جنس؛ تامین تیراژهای سنگین در کوتاه‌ترین زمان.</li>
            <li><strong>تولید سفارشی (OEM):</strong> امکان حک لوگوی شما روی وایت‌برد و زونکن (تیراژ بالا).</li>
          </ul>
        </article>

        {/* ستون دوم: تمرکز روی زونکن و لوازم اداری */}
        <article>
          <h3 className="text-xl font-bold text-digi-red mb-3">
            پخش عمده زونکن و ملزومات بایگانی
          </h3>
          <p className="mb-4">
            تولید و پخش انواع زونکن‌های اداری، فانتزی، کتان و سه‌گوش با کیفیت عالی و مقاومت بالا. محصولات ما با استفاده از بهترین متریال و یراق‌آلات تولید شده و مناسب برای بایگانی‌های سنگین و استفاده طولانی‌مدت در سازمان‌ها و ادارات می‌باشند. امکان سفارش در رنگ‌بندی‌های متنوع و تیراژ بالا برای همکاران فراهم است.
          </p>
          <div className="bg-red-50 border-r-4 border-digi-red p-4 mt-4 text-digi-dark">
            <p className="font-bold text-sm">
              🚛 ارسال باربری به سراسر کشور با بسته‌بندی ایمن و کارتنی.
            </p>
          </div>
        </article>
      </div>

      {/* بخش سوالات متداول (FAQ) */}
      <div className="mt-10 border-t border-digi-border pt-8">
        <h3 className="text-2xl font-bold text-digi-dark mb-6 text-center">سوالات متداول همکاران</h3>
        
        <div className="space-y-4">
          <details className="group bg-digi-bg rounded-lg p-4 cursor-pointer">
            <summary className="font-bold text-digi-dark flex justify-between items-center">
              آیا امکان خرید چکی و اعتباری وجود دارد؟
              <span className="text-digi-red group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-digi-light">
              بله، برای همکاران معتبر و شرکت‌های پخش، پس از اعتبارسنجی اولیه، امکان خرید چکی و اعتباری با شرایط ویژه فراهم می‌باشد. جهت کسب اطلاعات بیشتر با واحد فروش تماس بگیرید.
            </p>
          </details>

          <details className="group bg-digi-bg rounded-lg p-4 cursor-pointer">
            <summary className="font-bold text-digi-dark flex justify-between items-center">
              حداقل سفارش برای دریافت لیست قیمت همکاری چقدر است؟
              <span className="text-digi-red group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-digi-light">
              فروش ما صرفاً به صورت کارتنی و عمده می‌باشد. برای دریافت لیست قیمت همکار و اطلاع از حداقل تیراژ سفارش هر محصول، لطفاً با شماره‌های واحد فروش سازمانی تماس حاصل فرمایید.
            </p>
          </details>
        </div>
      </div>

    </section>
  );
};

export default SeoContent;
