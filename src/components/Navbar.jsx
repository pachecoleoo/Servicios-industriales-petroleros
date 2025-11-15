// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
      <a href="#" className="hover:text-blue-500">Inicio</a>
      <br />
      <a href="#" className="hover:text-blue-500">Servicios</a>
      <a href="#" className="hover:text-blue-500">Nosotros</a>
      <a href="#" className="hover:text-blue-500">Contacto</a>
    </nav>
  );
}

export default Navbar;
