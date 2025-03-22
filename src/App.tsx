import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/header/Navbar";
import Footer from "./components/custom/footer/Footer";
import DetailProduct from "./pages/DetailProduct";
import SearchProduct from "./pages/SearchProduct";
import DetailProductsByType from "./pages/DetailProductsType";

function App() {
  const { pathname } = useLocation();

  console.log(pathname);
  const hideNavbar = ["/product/"];

  const isHide = hideNavbar.some((route) => pathname.startsWith(route));

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {!isHide && <Navbar />}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<SearchProduct />} />
            <Route path="/product/:slug/:id" element={<DetailProduct />} />
            <Route path="/products/:slug" element={<DetailProductsByType />} />
          </Routes>
        </main>

        {!isHide && <Footer />}
      </div>
    </>
  );
}

export default App;
