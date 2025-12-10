import logo from "../assets/logoconletras.png";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";

  
export default function Header(){
    // const location = useLocation();
//   const isHome = location.pathname === "/";
    return( 
        <div>

         {/* 🟦 BARRA SUPERIOR – LOGO + NOMBRE + SLOGAN */}
      <header className="bg-white">
        <div
          className="
            mx-auto max-w-7xl 
            px-4 py-4 
            flex flex-col gap-3
            md:flex-row md:items-center md:justify-between
          "
        >
          {/* IZQUIERDA: LOGO + NOMBRE */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-[59px] w-auto object-contain"
              />
            </Link>

            <span
              className="
                text-base poppins-regular tracking-wide text-[#222]
                md:text-xl
              "
            >
              Servicios Industriales Petroleros
            </span>
          </div>

          {/* DERECHA: SLOGAN */}
          <div
            className="
              text-sm font-medium text-gray-700
              text-left
              md:text-left md:text-xl
              hidden md:block
            "
          >
            Tu industria a nuestro servicio
          </div>
        </div>
      </header>

      {/* 🟧 NAVBAR INFERIOR */}
      <header
      >
        <div
          className="
            mx-auto max-w-7xl 
            px-6 py-6
            flex items-center justify-end
          "
        >
          <Navbar />
        </div>
      </header>         
    </div>     

      );
}