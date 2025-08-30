
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsByCategory from "./components/ProductsByCategory";
import type { Product } from "./model/Product";
import { createContext, useState } from "react";
import CartView from "./components/CartView";



interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [] as Product[],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
})

export default function App() {
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);

const addToCart = (product: Product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: string) => {
    setCartItems(cartItems.filter((item) => item.id !== product));
  }
  const increaseQuantity = (name: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (name: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart

  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <CartContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/:name" 
          element={<ProductsByCategory />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
        </CartContext.Provider>
        <Footer />
      </BrowserRouter>

    </>
  )
}
