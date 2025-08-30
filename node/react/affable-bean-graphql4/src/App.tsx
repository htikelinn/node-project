
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsByCategory from "./components/ProductsByCategory";
import { createContext, useEffect, useState } from "react";
import type { Product } from "./model/Product";
import CartView from "./components/CartView";
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  clearCart: () => void;
  totalQuantity: number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: ()=>{},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  totalQuantity: 0,
});

export default function App() {

  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
   setTotalQuantity(cartItems.reduce((total, item) => total + item.quantity!, 0)); 
  });

  const [cartItems,setCartItems] = useState<Product[]>([]);

  const increaseQuantity = (product:Product) => {
    setCartItems(cartItems.map(item => item.id === product.id ? {...item,quantity:item.quantity! + 1} : item));
  }
  const decreaseQuantity = (product:Product) => {
    if(product.quantity === 1){
      return;
    }
    setCartItems(cartItems.map(item => item.id === product.id ? {...item,quantity:item.quantity! -1} : item));
  }

  const addToCart = (product:Product) => {
    // test duplicate
    if(testDuplicate(product)){
      return;
    }
    const newPorduct = {...product,quantity:1}
    setCartItems([...cartItems,newPorduct]);
  }
  const testDuplicate = (item:Product) =>{
      return cartItems.find(i => i.id === item.id);
  }
  const removeFromCart = (product:Product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  }
  const clearCart = () => {
    setCartItems([]);
  }

  const value={
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalQuantity
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <CartContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/:name" 
          element={<ProductsByCategory />} />
          <Route path="/view-cart"
          element={<CartView />} />
         </Routes>
        </CartContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  )
}
