import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Colores inversos según página
  const linkHome = "text-white hover:text-blue-300"; // para home
  const linkNormal = "text-gray-700 hover:text-blue-500"; // para páginas normales

  return (
    <nav className="hidden md:flex items-center gap-6 font-medium">
      <Link to="/" className={isHome ? linkHome : linkNormal}>Inicio</Link>
      <Link to="/servicios" className={isHome ? linkHome : linkNormal}>Servicios</Link>
      <Link to="/nosotros" className={isHome ? linkHome : linkNormal}>Nosotros</Link>
      <Link to="/contacto" className={isHome ? linkHome : linkNormal}>Contacto</Link>
    </nav>
  );
}

export default Navbar;
