// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import logo from "../assets/logosinletras.png"; // o la ruta correcta

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar fijo arriba */}
      <header
        className={
          isHome
            ? "bg-[#0b1220] "                 // 👉 Fondo oscuro para HOME
            : "bg-white border-b border-slate-200" // 👉 Fondo blanco para otras páginas
        }
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          
          {/* Logo + nombre (tal cual lo tenías) */}
          {/* font-titillium-web */}
          <div className="flex items-center gap-2 font-titillium-web">
            {/* <div className="h-8 w-8 rounded-md" style={{ backgroundColor: "#163cac" }} /> */}
             
             <img
         src={logo}
        alt="Logo"
        className="h-[60px] w-[110px] object-contain"         />
            <span className={isHome ? "text-white" : "text-slate-900"}>
              Servicios Industriales Petroleros
            </span>
          </div>

          <Navbar />
        </div>
      </header>

      {/* Contenido de cada página */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer abajo */}
      <Footer />
    </div>
  );
}
