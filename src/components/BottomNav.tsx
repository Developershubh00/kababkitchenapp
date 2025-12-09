import { Home, ShoppingCart, Phone, Clock, Receipt } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

export default function BottomNav({ currentPage, onNavigate, cartCount }: BottomNavProps) {
  const navItems = [
    { id: 'menu', icon: Home, label: 'Menu' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart', badge: cartCount },
    { id: 'contact', icon: Phone, label: 'Contact' },
    { id: 'orders', icon: Receipt, label: 'Orders' },
    { id: 'timing', icon: Clock, label: 'Timing' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map(({ id, icon: Icon, label, badge }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
              currentPage === id ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            <div className="relative">
              <Icon className="w-6 h-6" />
              {badge !== undefined && badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {badge > 9 ? '9+' : badge}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
