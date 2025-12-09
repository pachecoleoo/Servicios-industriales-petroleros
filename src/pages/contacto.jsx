import ContactForm from "../components/ContactForm";
import bannerContacto from "../assets/bannerContacto.jpg"

function Contacto() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      <main className="flex-1">

        {/* HERO */}
      <section
             className="relative py-16 text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerContacto})` }}
              >
            {/* Capa oscura encima para mejor contraste */}
              <div className="absolute inset-0 bg-black/60"></div>
      
                  {/* Contenido */}
                  <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Contactanos
            </p>

            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Estamos para ofrecer un servicio confiable.
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-300">
              Escribinos para solicitar una calibración o 
              recibir asesoramiento técnico. Nuestro equipo está disponible
              para brindarte soporte.
            </p>
          </div>
        </section>

        {/* CONTENEDOR FORM + MAPA */}
        <section className="py-12 bg-white">
  <div className="mx-auto max-w-7xl px-6">

    {/* FILA PARA ALINEAR TITULOS */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-10">

      {/* 🗺️ Título del mapa */}
      <div className="md:col-span-3">
        <h2 className="text-3xl font-extrabold text-gray-900">Nuestra Ubicación </h2>
        <p className="mt-2 text-gray-600">
Saenz Peña 102, Cipolletti, Río Negro, Argentina        </p>
      </div>

      {/* 📬 Espacio reservado para el título del formulario */}
      <div className="md:col-span-3">
        {/* este div vacío hace que el título del form quede alineado */}
      </div>

    </div>

    {/* CONTENIDO: MAPA + FORM */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

      {/* MAPA — 50% */}
      <div className="md:col-span-3 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
        <iframe
          title="Ubicación SIP"
          width="100%"
          height="100%"
          style={{ minHeight: "400px", border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!4v1763248679139!6m8!1m7!1sZphRk0ajsQCl0ZIZeRdTEg!2m2!1d-38.94110320911292!2d-67.9911586522507!3f258.43904138367895!4f-0.656925543671349!5f0.7820865974627469"
        ></iframe>
      </div>

      {/* FORM — 50% */}
      <div  className="md:col-span-3 md:mt-[-110px]">
        <ContactForm />
      </div>

    </div>
  </div>
</section>

      </main>
    </div>
  );
}

export default Contacto;
