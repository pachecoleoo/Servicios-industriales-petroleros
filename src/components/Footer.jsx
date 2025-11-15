// src/components/Footer.jsx
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b1220] text-gray-300">
      {/* Acento superior con tu color */}
      <div className="absolute inset-x-0 -top-1 h-1" style={{ backgroundColor: "#163cac" }} />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Superior: 3-4 columnas */}
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Marca / Descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              {/* Logo: reemplazá por <img src="/logo.png" .../> si ya lo tenés */}
              <div
                className="h-10 w-10 rounded-lg"
                style={{ backgroundColor: "#163cac" }}
                aria-hidden
              />
              <h3 className="text-xl font-semibold text-white">SIP</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Servicios Industriales Petroleros. Calibración certificada, soporte en campo
              y trazabilidad para operaciones seguras y eficientes.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">Enlaces</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Inicio</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Servicios</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Nosotros</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Calidad & Certificados</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-gray-400" />
                <a href="tel:+540000000000" className="hover:text-white transition-colors">
                  +54 0 0000-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-gray-400" />
                <a href="mailto:contacto@sip.com" className="hover:text-white transition-colors">
                  contacto@sip.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gray-400" />
                <span>Cipolletti, Río Negro, Argentina</span>
              </li>
            </ul>
            {/* Redes */}
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="rounded-md p-2 ring-1 ring-white/10 hover:bg-white/5">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-md p-2 ring-1 ring-white/10 hover:bg-white/5">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* CTA / Newsletter opcional */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide text-white">Solicitar asesoramiento</h4>
            <p className="mt-4 text-sm text-gray-400">
              Contanos tu necesidad de calibración o servicio en campo.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm"
              style={{ backgroundColor: "#163cac" }}
            >
              Escribir ahora
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 h-px bg-white/10" />

        {/* Inferior: legales */}
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-400 md:flex-row">
          <p>© {year} SIP. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
