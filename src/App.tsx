import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/Navbar";
import Products from "./pages/Products";
import Footer from "./components/custom/Footer";
import DetailProduct from "./pages/DetailProduct";

function App() {
  const { pathname } = useLocation();

  console.log(pathname);
  const hideNavbar = ["/product/"];

  const isHideNav = hideNavbar.some((route) => pathname.startsWith(route));

  return (
    <>
      {!isHideNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
