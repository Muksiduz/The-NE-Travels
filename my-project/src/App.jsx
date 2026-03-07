import { Routes, Route } from "react-router-dom";
import AnimatedLayout from "./layout/AnimatedLayout";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactSection";

import PackageDetails from "./pages/PackageDetails";
import ScrollToTop from "./layout/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AnimatedLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/packages" element={<Packages />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/packages/:id" element={<PackageDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
