import { Clock, Truck, Calendar, AlertCircle } from 'lucide-react';

export default function TimingPage() {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Timing & Delivery</h1>
        <p className="text-white/90">Know when we're available</p>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-gray-900 text-lg">Restaurant Hours</h3>
              <p className="text-sm text-gray-600">We're open 7 days a week</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">Monday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">Tuesday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">Wednesday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">Thursday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">Friday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">Saturday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 12:00 AM</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-700 font-medium">Sunday</span>
              <span className="text-orange-600 font-bold">10:00 AM - 12:00 AM</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-gray-900 text-lg">Delivery Information</h3>
              <p className="text-sm text-gray-600">Fast and reliable delivery</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-900 mb-1">Standard Delivery</p>
              <p className="text-green-800 text-sm">30-45 minutes</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-semibold text-blue-900 mb-1">Peak Hours</p>
              <p className="text-blue-800 text-sm">45-60 minutes (Lunch & Dinner time)</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="font-semibold text-orange-900 mb-1">Free Delivery</p>
              <p className="text-orange-800 text-sm">On orders above ₹399</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-gray-900 text-lg">Peak Hours</h3>
              <p className="text-sm text-gray-600">When we're busiest</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Lunch Time</p>
                <p className="text-sm text-gray-600">12:00 PM - 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Dinner Time</p>
                <p className="text-sm text-gray-600">7:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">Note</p>
              <p className="text-sm text-yellow-800">
                Delivery times may vary during peak hours and adverse weather conditions.
                We appreciate your patience and promise to deliver fresh, hot food.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-sm p-6 text-white text-center">
          <Clock className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-xl mb-2">Currently Open</h3>
          <p className="text-white/90 text-lg font-semibold">
            10:00 AM - 11:00 PM
          </p>
          <p className="text-white/80 text-sm mt-2">
            Order now and get fresh food delivered hot
          </p>
        </div>
      </div>
    </div>
  );
}
