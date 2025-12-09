import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
        <p className="text-white/90">We're here to help you</p>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+919876543210" className="text-orange-600 font-medium">
                +91 98765 43210
              </a>
              <p className="text-sm text-gray-600 mt-1">Available 10 AM - 11 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium"
              >
                Chat with us
              </a>
              <p className="text-sm text-gray-600 mt-1">Quick response guaranteed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <a href="mailto:info@kabakitchen.com" className="text-blue-600 font-medium">
                info@kabakitchen.com
              </a>
              <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-700">
                Shop No. 12, Food Street,<br />
                Downtown Market,<br />
                Mumbai - 400001
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 12:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-sm p-6 text-white text-center">
          <h3 className="font-bold text-xl mb-2">Need Help?</h3>
          <p className="text-white/90 mb-4">
            Our customer support team is always ready to assist you
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Chat Now
          </a>
        </div>
      </div>
    </div>
  );
}
