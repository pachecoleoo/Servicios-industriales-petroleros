import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className="relative">

      {/* NAV DESKTOP */}
      <nav className="hidden  md:flex items-center gap-8">
        {links.map((link) => {
          const isActive =
            link.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.to);

          return (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-sm font-medium text-slate-50 group"
            >
              {link.label}

              <span
                className={`
                  pointer-events-none absolute left-0 -bottom-1 h-[2px] bg-slate-50
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </Link>
          );
        })}
      </nav>

      {/* BOTÓN MOBILE */}
      <button
        className="md:hidden text-slate-50"
        onClick={toggleMenu}
      >
        <div className="space-y-1">
          <span className="block h-[3px] w-6 bg-white"></span>
          <span className="block h-[3px] w-6 bg-white"></span>
          <span className="block h-[3px] w-6 bg-white"></span>
        </div>
      </button>

      {/* MENU MOBILE (solo se despliega) */}
      {open && (
        <div className="absolute  right-0 mt-3 w-40 bg-[#0b1220] rounded-lg shadow-lg py-3 flex flex-col gap-3 md:hidden z-30">
          {links.map((link) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="relative px-4 text-sm font-medium text-white group"
              >
                {link.label}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>
      )}

    </div>
  );
}
