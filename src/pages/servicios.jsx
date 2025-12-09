// src/pages/Servicios.jsx
import bannerServicios from "../assets/bannerServicios.jpeg";
import CallToAction from "../components/CallToAction";
function Servicios() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-1">
        {/* HERO / INTRO – mismo estilo que Nosotros */}

        
        <section
              className="relative py-16 text-white bg-cover bg-center"
             style={{ backgroundImage: `url(${bannerServicios})` }}
               >
             {/* Capa oscura encima para mejor contraste */}
               <div className="absolute inset-0 bg-black/60"></div>
       
                   {/* Contenido */}
            <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Servicios
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
               Calibramos equipos medidores de gas
            </h1>
            
            <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-300">
              Servicios industriales para una operación segura y confiable
              {/* Brindamos soluciones orientadas a garantizar mediciones precisas,
              equipamiento confiable y documentación trazable. */}
            </p>
          </div>
        </section>

        {/* BLOQUE 1 – Visión general de servicios */}
<section className="py-10 bg-white">
  <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* COLUMNA IZQUIERDA – Texto */}
    <div>
      <h2 className="text-3xl font-semibold text-slate-900">
        ¿Qué tipo de servicios ofrecemos?
      </h2>

      <p className="mt-3 max-w-3xl  text-base leading-relaxed text-slate-800">
        Brindamos un servicio de calibración de detectores de gas de la más alta calidad.
        Nuestra amplia experiencia y conocimientos en detectores de gas nos permiten
        brindar un servicio de calibración preciso y confiable para una amplia gama
        de detectores. Ofrecemos documentación y trazabilidad que requieren las áreas de
        calidad y seguridad.
      </p>
    </div>

    {/* COLUMNA DERECHA – Imagen */}
    <div className="flex justify-center">
      <img
        src="/src/assets/servicio.png"
        alt="Icono de calibración"
          className="
      w-40 md:w-52"
      />
    </div>

  </div>
</section>

        {/* BLOQUE 2 – Detalle por áreas */}
      <section className="py-15 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6">
    <div className="max-w-8xl">
       <h2 className="text-3xl font-semibold text-slate-900">
        ¿Por qué calibrar tus detectores con nosotros?
      </h2>
      <p className="mt-6 text-base text-slate-600">
         Trabajamos con procedimientos estandarizados, equipos certificados
        y trazabilidad documental completa. Nuestro objetivo es garantizar 
        que cada detector funcione con precisión, sea confiable en campo y 
        cumpla con los requisitos de seguridad de la industria.
      </p>
    </div>

    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
        <p className="flex items-center gap-10 text-xl font-semibold  tracking-wide text-[#2182a0]">
          
          <span>Calibración y verificación</span>
          <img
              src="/src/assets/check.png"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </p>
        <p className="mt-3 text-base text-slate-800 leading-relaxed">
          Planificación de calibraciones, registros por equipo,
          identificación de instrumentos y verificación posterior al ajuste
          para asegurar el correcto funcionamiento.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
        <p className="flex items-center gap-0 text-xl font-semibold  tracking-wide text-[#2182a0]">  
          <span >Mantenimiento e instrumentación</span> 
            <img
              src="/src/assets/check.png"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </p>
        <p className="mt-3 text-base text-slate-800 leading-relaxed">
          Diagnóstico de fallas, reemplazo de sensores, revisión de lazos de
          control y acompañamiento en puestas en marcha y pruebas de
          funcionamiento.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
        <p className="flex items-center gap-10 text-xl font-semibold  tracking-wide text-[#2182a0]">
           
          <span>Diagnóstico y trazabilidad</span>
           <img
              src="/src/assets/check.png"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </p>
        <p className="mt-3 text-base text-slate-800 leading-relaxed">
          Entrega de documentación clara, trazable y alineada a los requisitos
          de calidad, seguridad y ambiente de cada operador.
        </p>
      </div>
    </div>
  </div>
</section>
        <section className="py-10 bg-white">
            <CallToAction></CallToAction>
        </section> 
      </main>
    </div>
  );
}

export default Servicios;
