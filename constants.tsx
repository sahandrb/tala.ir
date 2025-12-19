
import React from 'react';
import { Product, Category } from './types';

export const COLORS = {
  GOLD: '#D4AF37',
  CREAM: '#FDFBF7',
  DARK: '#1A1A1A',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'گردنبند نقره طرح کلاسیک',
    category: Category.Silver,
    price: 1850000,
    description: 'گردنبند تمام نقره با عیار ۹۲۵ و آبکاری رادیوم.',
    image: 'https://picsum.photos/seed/jewelry1/600/800',
    images: [
      'https://picsum.photos/seed/jewelry1/600/800',
      'https://picsum.photos/seed/jewelry1_alt/600/800',
      'https://picsum.photos/seed/jewelry1_detail/600/800'
    ],
    isExclusive: true
  },
  {
    id: 2,
    name: 'انگشتر طلایی نگین‌دار',
    category: Category.Costume,
    price: 450000,
    description: 'انگشتر با کیفیت عالی، رنگ ثابت و ضد حساسیت.',
    image: 'https://picsum.photos/seed/jewelry2/600/800',
    images: [
      'https://picsum.photos/seed/jewelry2/600/800',
      'https://picsum.photos/seed/jewelry2_side/600/800'
    ],
    isNew: true
  },
  {
    id: 7,
    name: 'انگشتر نقره سولیتیر',
    category: Category.Ring,
    price: 1200000,
    description: 'انگشتر تک نگین نقره با درخشش استثنایی.',
    image: 'https://picsum.photos/seed/jewelry7/600/800',
    images: [
      'https://picsum.photos/seed/jewelry7/600/800',
      'https://picsum.photos/seed/jewelry7_box/600/800',
      'https://picsum.photos/seed/jewelry7_hand/600/800'
    ],
    isExclusive: true
  },
  {
    id: 3,
    name: 'نیم‌ست مروارید اصل',
    category: Category.Set,
    price: 3200000,
    description: 'مجموعه گردنبند و گوشواره با مرواریدهای پرورشی درجه یک.',
    image: 'https://picsum.photos/seed/jewelry3/600/800',
    images: [
      'https://picsum.photos/seed/jewelry3/600/800',
      'https://picsum.photos/seed/jewelry3_alt1/600/800',
      'https://picsum.photos/seed/jewelry3_alt2/600/800'
    ],
    isExclusive: true
  },
  {
    id: 4,
    name: 'دستبند زنجیری نقره',
    category: Category.Silver,
    price: 980000,
    description: 'دستبند زنجیری ظریف مناسب استفاده روزانه.',
    image: 'https://picsum.photos/seed/jewelry4/600/800',
    images: [
      'https://picsum.photos/seed/jewelry4/600/800',
      'https://picsum.photos/seed/jewelry4_wrist/600/800'
    ]
  },
  {
    id: 8,
    name: 'انگشتر بندانگشتی استیل',
    category: Category.Ring,
    price: 150000,
    description: 'انگشتر ظریف استیل با طراحی مینیمال.',
    image: 'https://picsum.photos/seed/jewelry8/600/800',
    images: [
      'https://picsum.photos/seed/jewelry8/600/800',
      'https://picsum.photos/seed/jewelry8_stack/600/800'
    ],
    isNew: true
  },
  {
    id: 5,
    name: 'گوشواره آویز طرح گل',
    category: Category.Costume,
    price: 280000,
    description: 'گوشواره سبک و زیبا با نگین‌های زیرکنیا.',
    image: 'https://picsum.photos/seed/jewelry5/600/800',
    images: [
      'https://picsum.photos/seed/jewelry5/600/800',
      'https://picsum.photos/seed/jewelry5_white/600/800'
    ],
    isNew: true
  },
  {
    id: 6,
    name: 'پابند استیل ضد زنگ',
    category: Category.Costume,
    price: 195000,
    description: 'پابند ظریف با ماندگاری رنگ بالا.',
    image: 'https://picsum.photos/seed/jewelry6/600/800',
    images: [
      'https://picsum.photos/seed/jewelry6/600/800',
      'https://picsum.photos/seed/jewelry6_leg/600/800'
    ]
  }
];

export const GoldSealIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5L58.2 15.5H71L75 27.5L88 30L85 43L92 53L85 63L88 76L75 78.5L71 90.5H58.2L50 100L41.8 90.5H29L25 78.5L12 76L15 63L8 53L15 43L12 30L25 27.5L29 15.5H41.8L50 5Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="2"/>
    <circle cx="50" cy="52.5" r="30" fill="url(#paint0_linear_gold)"/>
    <defs>
      <linearGradient id="paint0_linear_gold" x1="20" y1="22.5" x2="80" y2="82.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F7E48B"/>
        <stop offset="0.5" stopColor="#D4AF37"/>
        <stop offset="1" stopColor="#B8860B"/>
      </linearGradient>
    </defs>
  </svg>
);
