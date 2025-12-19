
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string; // Keep for backward compatibility/thumbnail
  images: string[]; // Array for the carousel
  isNew?: boolean;
  isExclusive?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  Silver = 'نقره',
  Costume = 'بدلیجات',
  Set = 'نیم‌ست',
  Ring = 'انگشتر'
}

export type AppView = 'home' | 'panel';
