import { Coupon } from '../types';

export const coupons: Coupon[] = [
  {
    code: 'BOGO399',
    description: 'Buy 1 Get 1 Free',
    type: 'bogo',
    minAmount: 399,
    conditions: 'On orders above ₹399'
  },
  {
    code: 'ROLLPEPSI',
    description: 'Buy 2 Kabab Rolls Get 1 Pepsi Free',
    type: 'freebie',
    conditions: 'Buy any 2 kabab rolls'
  },
  {
    code: 'KKDEC10',
    description: '10% Off on Your Order',
    type: 'percentage',
    value: 10
  },
  {
    code: 'KKDEC20',
    description: '20% Off on Your Order',
    type: 'percentage',
    value: 20
  },
  {
    code: 'KKDEC30',
    description: '30% Off on Your Order',
    type: 'percentage',
    value: 30
  }
];
