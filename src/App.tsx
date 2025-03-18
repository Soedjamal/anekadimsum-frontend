import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/Navbar";
import Products from "./pages/Products";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
