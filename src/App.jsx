// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/home.jsx";
import Nosotros from "./pages/nosotros.jsx";
import Contacto from "./pages/contacto.jsx";
import Servicios from "./pages/servicios.jsx";

export default function App() {
  return (
    <div>
      
      {/* 🔥 Siempre que cambie la ruta, vuelve arriba */}
      <ScrollToTop />

      {/* Layout envuelve a TODAS las rutas correctamente */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </Layout>
    </div>
  );
}
