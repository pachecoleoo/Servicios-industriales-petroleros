import { useEffect, useState } from "react";

const slides = [
  { src: "/images/1.png", caption: "Soluciones integrales" },
  { src: "/images/2.png", caption: "Tecnología y seguridad" },
  { src: "/images/3.png", caption: "Excelencia energética" },
];

export default function CarouselSimple() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => {
    setI((n) => (n + dir + slides.length) % slides.length);
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg relative"
      style={{ aspectRatio: "2 / 1", maxHeight: "80vh" }}
    >
      <div
        className="h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slides.map((s, idx) => (
          <div key={idx} className="w-full shrink-0 relative h-full">
            <img
              src={s.src}
              alt={s.caption}
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black/35 flex items-end">
              <p className="text-white text-lg md:text-2xl font-semibold p-4 md:p-6 drop-shadow">
                {s.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded"
      >
        ›
      </button>

      {/* Puntos */}
      <div className="absolute left-0 right-0 bottom-2 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
