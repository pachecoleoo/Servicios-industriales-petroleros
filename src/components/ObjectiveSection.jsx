// src/components/ObjectiveSection.jsx
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { Link } from "react-router-dom";

 function ObjectiveSection() {
  return (
    <section id="objetivo" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-9 grid gap-10 md:grid-cols-2 items-center">
        {/* Bloque de texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          {/* Acento superior en tu color */}
          
<div className="relative pb-4">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Nuestro servicio
  </h2>

  <div
    className="absolute left-0 bottom-0 h-[3px] w-32 rounded-full"
    style={{ backgroundColor: "#163cac" }}
  />
</div>
          <p className="mt-5 text-base text-gray-900 leading-relaxed">
            Asegurar precisión, trazabilidad y eficiencia en cada intervención.
            Integramos tecnología, método y experiencia para que tus operaciones
            trabajen con equipos confiables.
          </p>
          <p className="mt-4 text-base text-gray-900 leading-relaxed">
            Nuestro enfoque es simple: cumplir
            normas, optimizar tiempos y acompañarte con soporte técnico claro.
          </p>

          <div className="mt-6">
            <Link
              to="../servicios"
              className="inline-flex items-center rounded-lg px-4 py-2 text-white shadow-sm"
              style={{ backgroundColor: "#163cac" }}
            >
              Conocer más
            </Link>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
            <img
              src="/images/objetivo.jpg"  // coloca tu imagen en public/images/objetivo.jpg
              alt="Operación y control de calidad"
              className="block w-full h-[300px] md:h-[420px] object-cover object-center"
            />
          </div>
          {/* Halo sutil */}
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-20"
                style={{ background: "radial-gradient(600px circle at 80% 30%, #163cac33, transparent 40%)" }} />
          </motion.div>
        </div>
    </section>
  );
}
export default ObjectiveSection;