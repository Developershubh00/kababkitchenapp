import { useState, useEffect } from 'react';
import { UtensilsCrossed } from 'lucide-react';

const quotes = [
  "Craving Something Delicious?",
  "Taste the Authentic Flavors of Kabab Kitchen",
  "Where Every Bite Tells a Story",
  "Satisfy Your Hunger with Us"
];

export default function LoadingScreen({ onLoadComplete }: { onLoadComplete: () => void }) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 800);

    const timeout = setTimeout(() => {
      onLoadComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 flex flex-col items-center justify-center z-50">
      <div className="text-center px-6">
        <div className="mb-8 animate-bounce">
          <UtensilsCrossed className="w-24 h-24 text-white mx-auto" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4 tracking-wider">
          KABAB KITCHEN
        </h1>

        <div className="h-16 flex items-center justify-center">
          <p className="text-xl text-white/90 font-medium animate-pulse">
            {quotes[quoteIndex]}
          </p>
        </div>

        <div className="mt-8 flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
