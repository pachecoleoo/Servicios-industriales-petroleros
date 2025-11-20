function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-1">

        {/* HERO / INTRO */}
        <section className="bg-[#0b1220] py-12 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Sobre nosotros
            </p>

            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Somos un equipo especializado en servicios industriales.
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-300">
              Acompañamos a nuestros clientes asegurando mediciones confiables, equipamiento
              calibrado y un soporte técnico.
            </p>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="py-10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                ¿Quiénes somos?
              </h2>

              <p className="mt-3 text-xl leading-relaxed text-slate-900">
                Nacida en el corazón del valle de Neuquén y Río Negro, 
                somos una empresa de servicios industriales enfocada en el sector petrolero,
                con fuerte presencia en la región. 
                Nuestro objetivo es brindar seguridad para cada operación.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                
                {/* Combinamos experiencia en campo con conocimiento técnico, normas vigentes y
                buenas prácticas de la industria para ofrecer un servicio confiable y adaptado
                a cada necesidad operativa. */}
              </p>
            </div>

            {/* TARJETAS RESUMEN */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#163cac]">
                  Experiencia
                </p>
                <p className="mt-2 text-sm text-slate-800">
                  Técnicos con trayectoria en calibración, mantenimiento e instrumentación
                  aplicada a la industria petrolera.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#163cac]">
                  Enfoque en seguridad
                </p>
                <p className="mt-2 text-sm text-slate-800">
                Calidad y seguridad  para que cada detector que calibramos cumpla con los estándares más exigentes.                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#163cac]">
                  Trazabilidad
                </p>
                <p className="mt-2 text-sm text-slate-800">
                  Registros, certificados y documentación clara.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#163cac]">
                  Cercanía
                </p>
                <p className="mt-2 text-sm text-slate-800">
                  Acompañamiento técnico y comunicación directa para resolver
                  las necesidades de cada operación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="py-10">
          {/* <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-semibold text-slate-900">Nuestros valores</h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Responsabilidad</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Cada servicio se realiza con foco en la seguridad, el cuidado de las personas
                  y del entorno, cumpliendo procedimientos y estándares exigidos.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Transparencia</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Información clara y trazable, con documentación disponible para auditorías,
                  controles internos y seguimiento técnico.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Compromiso</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Nos involucramos en la operación, entendemos el contexto y proponemos
                  soluciones técnicas que aportan valor real.
                </p>
              </div>
            </div>
          </div>   */}

           {/* CTA */}
          <div className="mx-auto max-w-7xl px-6">


           <div className="mt-8 flex flex-col gap-3 rounded-xl bg-[#0b1220] px-6 py-5 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">
                  ¿Querés conocer más sobre nuestro trabajo?
                </p>
                <p className="text-xs text-slate-300">
                  Escribinos y coordinamos una reunión técnica o comercial.
                </p>
              </div>

              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm"
                style={{ backgroundColor: "#163cac" }}
              >
                Contactar al equipo
              </a>
            </div></div>
        </section>
      </main>
    </div>
  );
}

export default Nosotros;
