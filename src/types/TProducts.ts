export interface TProducts {
  id: string;

  title: string;
  category: string;
  image: string;

  shortDescription: string;
  stock: string;
  stockQuantity: number;
  currency: string;

  originalPrice: number;
  discountPrice: number;
  discountPercent: number;

  warranty: string;
}
