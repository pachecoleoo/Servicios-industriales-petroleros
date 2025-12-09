import { useEffect, useRef, useState } from "react";
import icono1 from "../assets/servicio2.png";
import icono2 from "../assets/economia.png";
import icono3 from "../assets/soporte.png";
import icono4 from "../assets/productividad.png";

function IconosSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // solo animar la primera vez
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            visible ? "fade-up" : "opacity-0"
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#163cac]">
            <span className="inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-gray-600">
              Beneficios
            </span>
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Todos los beneficios de nuestro servicio
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            La calibración profesional de tus detectores de gas te permite trabajar
            con mayor seguridad, eficiencia y respaldo documental ante auditorías.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="mt-14 grid gap-12 grid-cols-1 md:grid-cols-2 place-items-center">
          
          {[ 
            { icon: icono1, title: "Calibración ", text: "Diagnóstico y pruebas de funcionamiento." },
            { icon: icono2, title: "Economía de consumo", text: "Equipos calibrados que reducen errores." },
            { icon: icono3, title: "Soporte", text: "Información clara para decisiones operativas." },
            { icon: icono4, title: "Productividad", text: "Menos paradas y más rendimiento." }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center max-w-xs transition-all duration-700 delay-${
                idx * 150
              } ${visible ? "fade-up" : "opacity-0"}`}
            >
              <img src={item.icon} className="h-16 w-16 mb-4 drop-shadow-lg" />

              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IconosSection;
