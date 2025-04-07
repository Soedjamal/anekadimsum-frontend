import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/header/Navbar";
import Footer from "./components/custom/footer/Footer";
import DetailProduct from "./pages/DetailProduct";
import SearchProduct from "./pages/SearchProduct";
import DetailProductsByType from "./pages/DetailProductsType";
import ProtectedRoute from "./components/custom/auth/ProtectedRoute";
import Login from "./pages/Login";
import ProductsAdmin from "./pages/admin/ProductsAdmin";
import ScrollToTop from "./components/custom/utils/ScrollToTop";
import SuccessPayment from "./pages/SuccessPayment";
import NotFoundPage from "./pages/notFound/_404";
import Sidebar from "./components/custom/header/Sidebar";
import Dashboard from "./pages/Dashboard";
import EditProductForm from "./components/custom/admin/EditProduct";
import CreateProductForm from "./components/custom/admin/CreateProduct";

function App() {
  const { pathname } = useLocation();

  const hideNavbar = [
    "/product/",
    "/dashboard",
    "/payment-success",
    "/auth/admin/login",
  ];

  const isHide = hideNavbar.some((route) => pathname.startsWith(route));

  const routes = [
    "/",
    "/products",
    "/product/:slug/:id",
    "/products/:slug",
    "/auth/admin/login",
    "/payment-success",
    "/dashboard",
    "/dashboard/products",
  ];

  const is404 = !routes.some((route) => {
    const regex = new RegExp(`^${route.replace(/:[^\s/]+/g, "[^/]+")}$`);
    return regex.test(pathname);
  });

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {!isHide && !is404 && <Navbar />}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<SearchProduct />} />
            <Route path="/product/:slug/:id" element={<DetailProduct />} />
            <Route path="/products/:slug" element={<DetailProductsByType />} />
            <Route path="/auth/admin/login" element={<Login />} />
            <Route path="/payment-success/:id" element={<SuccessPayment />} />

            <Route
              element={
                <div className="md:flex">
                  <Sidebar />
                  <div className=" ml-0 p-6 transition-all duration-30">
                    <ProtectedRoute />
                  </div>
                </div>
              }
            >
              <Route path="/admin/dashboard" element={<Dashboard />} />

              <Route path="/admin/products" element={<ProductsAdmin />} />
              <Route
                path="/admin/product/:id/edit"
                element={<EditProductForm />}
              />
              <Route
                path="/admin/product/create"
                element={<CreateProductForm />}
              />
            </Route>

            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {!isHide && !is404 && <Footer />}
      </div>
    </>
  );
}

export default App;
