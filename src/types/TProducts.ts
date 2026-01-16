export interface TProducts {
  id: string;

  title: string;
  category: string;
  image: string;

  shortDescription: string;

  currency: string;

  originalPrice: number;
  discountPrice: number;
  discountPercent: number;

  warranty: string;
}
