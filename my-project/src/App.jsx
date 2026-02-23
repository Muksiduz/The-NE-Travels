import { Routes, Route } from "react-router-dom";
import AnimatedLayout from "./layout/AnimatedLayout";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactSection";

const App = () => {
  return (
    <Routes>
      <Route element={<AnimatedLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/packages" element={<Packages />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
