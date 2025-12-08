import icono1 from "../assets/servicio2.png";
import icono2 from "../assets/economia.png";
import icono3 from "../assets/soporte.png";
import icono4 from "../assets/productividad.png";



function IconosSection() {
  return (
    // <section className="py-15 bg-slate-50">
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#163cac] ">
           
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

        {/* Grid 2x2 centrado */}
        <div className="mt-14 grid gap-12 grid-cols-1 md:grid-cols-2 place-items-center">

          {/* Ítem 1 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={icono1} alt="Servicio"   className="h-16 w-16 mb-4 drop-shadow-lg"/>
            <p className="text-sm font-semibold text-slate-900">
              Al servicios
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Texto breve explicando el beneficio.
            </p>
          </div>

          {/* Ítem 2 */}
          <div className="flex flex-col items-center text-center max-w-xs">
             <img src={icono2} alt="Servicio"   className="h-16 w-16 mb-4 drop-shadow-lg"/>
            <p className="text-sm font-semibold text-slate-900">
              Economía de consumo
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Equipos calibrados que reducen errores.
            </p>
          </div>

          {/* Ítem 3 */}
          <div className="flex flex-col items-center text-center max-w-xs">
             <img src={icono3} alt="Servicio"   className="h-16 w-16 mb-4 drop-shadow-lg"/>
            <p className="text-sm font-semibold text-slate-900">
              Soporte
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Información clara para decisiones operativas.
            </p>
          </div>

          {/* Ítem 4 */}
          <div className="flex flex-col items-center text-center max-w-xs">
             <img src={icono4} alt="Servicio"   className="h-16 w-16 mb-4 drop-shadow-lg"/>
            <p className="text-sm font-semibold text-slate-900">
              Productividad
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Menos paradas y más rendimiento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IconosSection;
