export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'kabab' | 'roll' | 'biryani' | 'starter' | 'drink' | 'dessert';
  image: string;
  isVeg: boolean;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Coupon {
  code: string;
  description: string;
  type: 'percentage' | 'bogo' | 'freebie';
  value?: number;
  minAmount?: number;
  conditions?: string;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  paymentMode: 'COD' | 'UPI';
}
