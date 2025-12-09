import { useState } from 'react';
import { ArrowLeft, User, Phone, MapPin, Wallet } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderDetails } from '../types';

interface CheckoutPageProps {
  onBack: () => void;
  onPlaceOrder: (details: OrderDetails) => void;
  totalAmount: number;
}

export default function CheckoutPage({ onBack, onPlaceOrder, totalAmount }: CheckoutPageProps) {
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    phone: '',
    address: '',
    paymentMode: 'COD'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: keyof OrderDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onPlaceOrder(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-orange-600 text-white px-4 py-4 sticky top-0 z-30">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-3">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Checkout</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-bold text-gray-900 mb-4">Delivery Details</h2>

          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Delivery Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="House no., Street, Area, Landmark"
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="flex items-center font-bold text-gray-900 mb-4">
            <Wallet className="w-5 h-5 mr-2" />
            Payment Mode
          </h2>

          <div className="space-y-3">
            <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={formData.paymentMode === 'COD'}
                onChange={(e) => handleChange('paymentMode', e.target.value)}
                className="w-5 h-5 text-orange-600"
              />
              <div className="ml-3 flex-1">
                <p className="font-semibold text-gray-900">Cash on Delivery</p>
                <p className="text-sm text-gray-600">Pay when you receive</p>
              </div>
            </label>

            <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={formData.paymentMode === 'UPI'}
                onChange={(e) => handleChange('paymentMode', e.target.value)}
                className="w-5 h-5 text-orange-600"
              />
              <div className="ml-3 flex-1">
                <p className="font-semibold text-gray-900">UPI Payment</p>
                <p className="text-sm text-gray-600">PhonePe, Google Pay, Paytm</p>
              </div>
            </label>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm text-orange-900">
            <strong>Delivery Time:</strong> 30-45 minutes
          </p>
          <p className="text-xs text-orange-800 mt-1">
            Your order will be prepared fresh and delivered hot
          </p>
        </div>
      </form>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-between px-6"
          >
            <span className="text-lg">₹{totalAmount.toFixed(2)}</span>
            <span className="text-lg">Place Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
