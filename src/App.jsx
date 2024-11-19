import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import SmoothScroll from "./utils/SmoothScroll";
import BackToTop from "./utils/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <SmoothScroll />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
