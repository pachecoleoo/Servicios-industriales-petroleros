// import Header from '../components/Header';
import CarouselLanding from '../components/Carousel';
import IntroThreeColumns from '../components/IntroThreeColumns';
import ObjectiveSection from '../components/ObjectiveSection';
import IconosSection from '../components/IconosSection';

function Home() {
  return (
    <div>
      <header>
    <CarouselLanding />
      </header>

    <main className="p-0">         
      <ObjectiveSection/>
      <IconosSection/>
      <IntroThreeColumns/>
    

    
    </main>
    </div>
  );
}

export default Home;
