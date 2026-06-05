import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WhyChoose from "./components/WhyChoose";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import About from "./components/About";
import Contact from "./components/Contact";
import Industrial from "./components/Industrial";
import ProductDetails from "./components/ProductDetails";
import Hospital from "./components/Hospital";
import Corporate from "./components/Corporate";
import Hotel from "./components/Hotel";
import CareerPage from "./components/CareerPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChoose />
      <TeamSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Industrial Category */}
        <Route
          path="/industrial"
          element={<Industrial />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        

        <Route
  path="/quote"
  element={<Quote />}
/>
<Route
  path="/about"
  element={<About />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
                <Route path="/careerspage" element={<CareerPage />} />
<Route
  path="/hospital"
  element={<Hospital />}
/>
    <Route
  path="/corporate"
  element={<Corporate />}
    />


<Route
  path="/hotel"
  element={<Hotel />}
/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;