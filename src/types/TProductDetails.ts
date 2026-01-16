export interface TProductDetails {
  slug: string;
  image: string;
  gallery: string[];

  title: string;
  shortDescription: string;
  longDescription: string;

  category: string;
  tags: string[];

  pricing: {
    currency: string;
    originalPrice: number;
    discountPrice: number;
    discountPercent: number;
  };

  stock: {
    status: "In Stock" | "Out of Stock";
    quantity: number;
  };

  badge: {
    text: string;
    color: string;
  };

  timeLeft: string;

  rating: {
    average: number;
    totalReviews: number;
  };

  features: string[];

  specifications: {
    plantCount: number;
    potMaterial: string;
    lightRequirement: string;
    wateringFrequency: string;
    petFriendly: boolean;
  };

  careInstructions: string[];

  delivery: {
    estimatedTime: string;
    shippingCost: string;
    returnPolicy: string;
  };

  seller: {
    name: string;
    verified: boolean;
    supportEmail: string;
  };

  warranty: string;
  createdAt: string;
}