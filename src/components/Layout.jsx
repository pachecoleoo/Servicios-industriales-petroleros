// src/components/Layout.jsx 
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import logo from "../assets/logosinletras.png";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">

    {/* 🟦 BARRA SUPERIOR – LOGO + NOMBRE AL ESTILO CORPORATIVO */}
<header className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
    
    {/* IZQUIERDA: LOGO + NOMBRE */}
    <div className="flex items-center gap-4" ><a href="/">
      <img
        src={logo}
        alt="Logo"
        className="h-[59px] w-auto object-contain"
      />
      </a>

      <span className="text-2xl poppins-regular tracking-wide text-[#222]">
        Servicios Industriales Petroleros
      </span>
    </div>

    {/* DERECHA (Opcional): Slogan como SUREN */}
    <div className="text-xl font-medium text-gray-700">
     Tu industria a nuestro servicio
    </div>

  </div>
</header>

    

      {/* 🟧 NAVBAR INFERIOR */}
      <header >
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-end">

        <Navbar isHome={isHome} />        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
