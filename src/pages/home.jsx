import CarouselLanding from '../components/Carousel';
import IntroThreeColumns from '../components/IntroThreeColumns';
import ObjectiveSection from '../components/ObjectiveSection';
import IconosSection from '../components/IconosSection';

function Home() {
  return (
    
    <main className="p-0">
      <CarouselLanding />         
      <ObjectiveSection/>
      <IconosSection/>
      <IntroThreeColumns/>
    </main>
    
  );
}

export default Home;
