
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsByCategory from "./components/ProductsByCategory";





export default function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/:name" element={<ProductsByCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
