import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: "/images/1.png",
    title: "Tu industria calibrada al milímetro",
    desc: "Seguridad y eficiencia en cada operación.",
  },
  {
    image: "/images/2.png",
    title: "Medir con precisión, operar con confianza",
    desc: "Comprometidos con procesos seguros y productivos.",
  },
  {
    image: "/images/3.png",
    title: "Tecnología que valida tu eficiencia",
    desc: "Trabajamos para un futuro responsable y sostenible.",
  },
];

// 🟦 Hook para efecto typing SOLO PARA EL TÍTULO
function useTypingEffect(text, speed = 40) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    if (!text) return;

    let i = -1;
    let cancelled = false;

    function typeNext() {
      if (cancelled) return;

      setDisplayed((prev) => prev + text.charAt(i));
      i++;

      if (i < text.length) {
        setTimeout(typeNext, speed);
      }
    }

    typeNext();

    return () => {
      cancelled = true;
    };
  }, [text, speed]);

  return displayed;
}

export default function CarouselLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔹 SOLO tipiado en el título
  const typedTitle = useTypingEffect(slides[currentSlide].title, 40);
  const currentDesc = slides[currentSlide].desc;

  return (
    <div className="w-full overflow-hidden relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showArrows
        stopOnHover={false}
        dynamicHeight={false}
        onChange={(index) => setCurrentSlide(index)}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const baseClasses =
            "mx-1 h-[3px] w-10 rounded-full transition-all duration-300";
          const selected = isSelected
            ? "bg-white opacity-100"
            : "bg-white opacity-40";

          return (
            <button
              key={index}
              type="button"
              onClick={onClickHandler}
              title={label}
              className={baseClasses + " " + selected}
            />
          );
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[520px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay con texto centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          {typedTitle}
        </h2>

        {/* 🔹 Subtítulo SIN typing, fijo */}
        <p className="text-lg md:text-xl mt-2 text-center drop-shadow-lg">
          {currentDesc}
        </p>
      </div>
    </div>
  );
}
