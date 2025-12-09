import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function IntroThreeColumns() {
  const items = [
    {
      title: "Calibración certificada",
      text:
        "Procesos trazables y cumplimiento normativo para garantizar precisión en cada instrumento.",
    },
    {
      title: "Compromiso",
      text:
        "Equipos y protocolos listos para condiciones exigentes en la industria energética.",
    },
    {
      title: "Soporte",
      text:
        "Reportes claros, tiempos comprometidos y asistencia técnica.",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // delays válidos para Tailwind
  const delays = ["delay-0", "delay-150", "delay-300"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // solo la primera vez
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Encabezado de sección */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            visible ? "fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-gray-600">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Precisión, eficiencia y soporte real
          </h2>
          <p className="mt-3 text-gray-600">
            La calibración de detectores de gas es esencial para garantizar la seguridad de tu entorno y la precisión de las mediciones.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-700 ${visible ? "fade-up" : "opacity-0"} ${delays[i]}`}
            >
              {/* Acento superior */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-80"
                style={{ backgroundColor: "#163cac" }}
              ></div>

              {/* Contenido */}
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.text}
              </p>

              {/* CTA sutil */}
           <div className="mt-6">
        <Link to="/servicios">
         <button
        type="button"
            className="
        rounded-lg border border-gray-300 
        px-4 py-2 text-sm font-medium 
        text-gray-800 transition-colors duration-200 
        hover:border-blue-600 hover:text-blue-700
      "
          >
         Ver más
        </button>
         </Link>
          </div>
              {/* Halo decorativo al hover */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
