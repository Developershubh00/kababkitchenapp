import { useState } from 'react';
import { Plus, Search, Star } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white pt-4 pb-6 px-4 sticky top-0 z-30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Kabab Kitchen</h1>
            <div className="flex items-center mt-1 text-sm">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span>4.5 (2.3K+ ratings)</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
      </div>

      <div className="sticky top-[140px] z-20 bg-white border-b border-gray-200 overflow-x-auto">
        <div className="flex space-x-2 px-4 py-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
          <p className="text-orange-800 text-sm font-medium">
            Free delivery on orders above ₹399
          </p>
        </div>

        <div className="space-y-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex p-3">
                <div className="flex-1 pr-3">
                  <div className="flex items-start">
                    <div className={`w-4 h-4 border-2 mr-2 mt-1 flex items-center justify-center ${
                      item.isVeg ? 'border-green-600' : 'border-red-600'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        item.isVeg ? 'bg-green-600' : 'bg-red-600'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      {item.description && (
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                      )}
                      <p className="text-lg font-bold text-gray-900 mt-2">₹{item.price}</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-28 h-28 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-orange-600 text-orange-600 font-bold px-6 py-1.5 rounded-lg shadow-md hover:bg-orange-50 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
