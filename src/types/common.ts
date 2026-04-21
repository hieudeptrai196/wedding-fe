// ==========================================
// Common Types
// ==========================================

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp?: string;
}

export interface WeddingService {
  id: string;
  name: string;
  provider: string;
  category: string;
  price: string;
  location: string;
  rating: number;
  image?: string;
  description: string;
  isFeatured: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  slug: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
}
