import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/header/Navbar";
import Footer from "./components/custom/footer/Footer";
import DetailProduct from "./pages/DetailProduct";
import SearchProduct from "./pages/SearchProduct";
import DetailProductsByType from "./pages/DetailProductsType";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/custom/auth/ProtectedRoute";
import Login from "./pages/Login";
import ProductsAdmin from "./pages/admin/ProductsAdmin";
import ScrollToTop from "./components/custom/utils/ScrollToTop";

function App() {
  const { pathname } = useLocation();

  console.log(pathname);
  const hideNavbar = ["/product/", "/dashboard"];

  const isHide = hideNavbar.some((route) => pathname.startsWith(route));

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {!isHide && <Navbar />}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<SearchProduct />} />
            <Route path="/product/:slug/:id" element={<DetailProduct />} />
            <Route path="/products/:slug" element={<DetailProductsByType />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/products" element={<ProductsAdmin />} />
            </Route>
          </Routes>
        </main>

        {!isHide && <Footer />}
      </div>
    </>
  );
}

export default App;
