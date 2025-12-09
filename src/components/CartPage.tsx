import { useState } from 'react';
import { Plus, Minus, Trash2, Tag, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { coupons } from '../data/coupons';

interface CartPageProps {
  onCheckout: () => void;
}

export default function CartPage({ onCheckout }: CartPageProps) {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [showCoupons, setShowCoupons] = useState(false);

  const subtotal = getCartTotal();

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;

    const coupon = coupons.find(c => c.code === appliedCoupon);
    if (!coupon) return 0;

    if (coupon.type === 'percentage' && coupon.value) {
      return (subtotal * coupon.value) / 100;
    }

    if (coupon.code === 'BOGO399' && subtotal >= 399) {
      const cheapestItem = Math.min(...cart.map(item => item.price));
      return cheapestItem;
    }

    return 0;
  };

  const discount = calculateDiscount();
  const afterDiscount = subtotal - discount;
  const sgst = afterDiscount * 0.025;
  const cgst = afterDiscount * 0.025;
  const total = afterDiscount + sgst + cgst;

  const applyCoupon = (code: string) => {
    const coupon = coupons.find(c => c.code === code);
    if (!coupon) return;

    if (coupon.code === 'BOGO399' && subtotal < 399) {
      alert('Minimum order value of ₹399 required');
      return;
    }

    if (coupon.code === 'ROLLPEPSI') {
      const rollCount = cart.filter(item => item.category === 'roll').reduce((sum, item) => sum + item.quantity, 0);
      if (rollCount < 2) {
        alert('Add at least 2 kabab rolls to use this coupon');
        return;
      }
    }

    setAppliedCoupon(code);
    setShowCoupons(false);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pb-20">
        <div className="text-center px-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Tag className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600">Add some delicious items to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 bg-gray-50 min-h-screen">
      <div className="bg-white sticky top-0 z-30 border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-bold text-gray-900">Your Cart</h1>
        <p className="text-sm text-gray-600">{cart.length} items</p>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm mb-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center p-4 border-b border-gray-100 last:border-b-0">
              <div className={`w-3 h-3 border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                item.isVeg ? 'border-green-600' : 'border-red-600'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  item.isVeg ? 'bg-green-600' : 'bg-red-600'
                }`}></div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm font-bold text-gray-900 mt-1">₹{item.price}</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center border-2 border-orange-600 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 text-orange-600 hover:bg-orange-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 font-bold text-orange-600">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 text-orange-600 hover:bg-orange-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <button
            onClick={() => setShowCoupons(!showCoupons)}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center">
              <Tag className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold text-gray-900">
                {appliedCoupon ? `Coupon Applied: ${appliedCoupon}` : 'Apply Coupon'}
              </span>
            </div>
            <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${showCoupons ? 'rotate-90' : ''}`} />
          </button>

          {showCoupons && (
            <div className="mt-4 space-y-2">
              {coupons.map(coupon => (
                <div
                  key={coupon.code}
                  className="border border-orange-200 rounded-lg p-3 bg-orange-50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-bold text-orange-900">{coupon.code}</p>
                      <p className="text-sm text-orange-800 mt-1">{coupon.description}</p>
                      {coupon.conditions && (
                        <p className="text-xs text-orange-700 mt-1">{coupon.conditions}</p>
                      )}
                    </div>
                    <button
                      onClick={() => applyCoupon(coupon.code)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                        appliedCoupon === coupon.code
                          ? 'bg-green-600 text-white'
                          : 'bg-orange-600 text-white hover:bg-orange-700'
                      }`}
                    >
                      {appliedCoupon === coupon.code ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-bold text-gray-900 mb-3">Bill Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">₹{subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({appliedCoupon})</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">SGST (2.5%)</span>
              <span className="text-gray-900">₹{sgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CGST (2.5%)</span>
              <span className="text-gray-900">₹{cgst.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
        <div className="max-w-md mx-auto">
          <button
            onClick={onCheckout}
            className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-between px-6"
          >
            <span className="text-lg">₹{total.toFixed(2)}</span>
            <span className="text-lg">Proceed to Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
