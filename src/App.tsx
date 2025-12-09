import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import ContactPage from './components/ContactPage';
import TimingPage from './components/TimingPage';
import OrdersPage from './components/OrdersPage';
import BottomNav from './components/BottomNav';
import { CartProvider, useCart } from './context/CartContext';
import { OrderDetails } from './types';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('menu');
  const [isCheckout, setIsCheckout] = useState(false);
  const { cart, clearCart, getCartCount, getCartTotal } = useCart();

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setIsCheckout(false);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleBackFromCheckout = () => {
    setIsCheckout(false);
    setCurrentPage('cart');
  };

  const calculateTotal = () => {
    const subtotal = getCartTotal();
    const sgst = subtotal * 0.025;
    const cgst = subtotal * 0.025;
    return subtotal + sgst + cgst;
  };

  const handlePlaceOrder = (details: OrderDetails) => {
    const subtotal = getCartTotal();
    const sgst = subtotal * 0.025;
    const cgst = subtotal * 0.025;
    const total = subtotal + sgst + cgst;

    let orderMessage = `*🍽️ NEW ORDER - KABAB KITCHEN*\n\n`;
    orderMessage += `*Customer Details:*\n`;
    orderMessage += `Name: ${details.name}\n`;
    orderMessage += `Phone: ${details.phone}\n`;
    orderMessage += `Address: ${details.address}\n\n`;

    orderMessage += `*Order Items:*\n`;
    cart.forEach((item, index) => {
      orderMessage += `${index + 1}. ${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });

    orderMessage += `\n*Bill Summary:*\n`;
    orderMessage += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
    orderMessage += `SGST (2.5%): ₹${sgst.toFixed(2)}\n`;
    orderMessage += `CGST (2.5%): ₹${cgst.toFixed(2)}\n`;
    orderMessage += `*Total: ₹${total.toFixed(2)}*\n\n`;

    orderMessage += `*Payment Mode:* ${details.paymentMode}\n`;
    orderMessage += `*Delivery Time:* 30-45 minutes\n`;

    const whatsappNumber = '919876543210';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

    clearCart();
    window.open(whatsappUrl, '_blank');

    alert('Order placed successfully! Redirecting to WhatsApp...');
    setIsCheckout(false);
    setCurrentPage('orders');
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {isCheckout ? (
        <CheckoutPage
          onBack={handleBackFromCheckout}
          onPlaceOrder={handlePlaceOrder}
          totalAmount={calculateTotal()}
        />
      ) : (
        <>
          {currentPage === 'menu' && <MenuPage />}
          {currentPage === 'cart' && <CartPage onCheckout={handleCheckout} />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'orders' && <OrdersPage />}
          {currentPage === 'timing' && <TimingPage />}

          <BottomNav
            currentPage={currentPage}
            onNavigate={handleNavigate}
            cartCount={getCartCount()}
          />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
