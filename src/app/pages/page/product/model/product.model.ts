export interface Product {
  id: string;
  name: string;
  description: string;
  productPrices: ProductPrice[];
  productImages: ProductImage[];
}

export interface ProductPrice {
  id: string;
  price: number;
  stock: number;
  isActive: boolean;
}

export interface ProductImage {
  id: string;
  imageUrl: string;
}
