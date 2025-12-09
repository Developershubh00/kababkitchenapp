import { Package, Clock, CheckCircle, Phone } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Your Orders</h1>
        <p className="text-white/90">Track your order status</p>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No Orders Yet</h2>
          <p className="text-gray-600 mb-6">
            You haven't placed any orders yet. Start exploring our delicious menu!
          </p>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow-sm p-5">
          <h3 className="font-bold text-gray-900 mb-4">How It Works</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4">
                <Package className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">1. Order Placed</p>
                <p className="text-sm text-gray-600">Your order is confirmed and sent to kitchen</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">2. Preparing</p>
                <p className="text-sm text-gray-600">Your food is being freshly prepared</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">3. Out for Delivery</p>
                <p className="text-sm text-gray-600">Your order is on the way</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 rounded-full p-2 mr-4">
                <CheckCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">4. Delivered</p>
                <p className="text-sm text-gray-600">Enjoy your meal!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start">
            <Phone className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="font-semibold text-orange-900 mb-1">Need Help?</p>
              <p className="text-sm text-orange-800 mb-3">
                For any queries about your order, feel free to contact us
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block bg-orange-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
