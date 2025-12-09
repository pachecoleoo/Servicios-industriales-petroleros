


export default function CallToAction() {
    return (

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
                href="https://wa.link/jpc1ep"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm"
                style={{ backgroundColor: "#163cac" }}
              >
                Contactar al equipo
              </a>
            </div>
          </div>
    );
}
