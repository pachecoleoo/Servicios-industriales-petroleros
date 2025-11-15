import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    image: 'public/images/1.png',
    title: 'Soluciones integrales para la industria petrolera',
  },
  {
    image: '/images/2.png',
    title: 'Tecnología y seguridad en cada operación',
  },
  {
    image: '/images/3.png',
    title: 'Comprometidos con la excelencia energética',
  },
];

function CarouselLanding() {
  return (
<div className="mt-0 w-full overflow-hidden">
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showThumbs={false}
    showStatus={false}
    showArrows
    stopOnHover
    dynamicHeight={false}
  >
    {slides.map((slide, index) => (
      <div key={index}  className="relative w-full max-h-[500px]" // 👈 altura máxima del slide
 >
        <img 
        src={slide.image} // ✅ aquí usamos la imagen del array
        alt={`slide-${index}`}
       className="w-full h-full object-cover object-top" // 👈 foco arriba 
        />
      </div>
      
    ))}
  </Carousel>
</div>
  );
}

export default CarouselLanding;
