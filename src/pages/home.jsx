// src/pages/Home.jsx
import Header from '../components/Header';
import CarouselLanding from '../components/Carousel';
import IntroThreeColumns from '../components/IntroThreeColumns';
import ObjectiveSection from '../components/ObjectiveSection';
import Footer from '../components/Footer';
import ContactForm from "../components/ContactForm";


function Home() {
  return (
    <div>
      <header>
    <Header />
    <CarouselLanding />
      </header>

    <main className="p-0">         
      <ObjectiveSection/>

      <IntroThreeColumns/>
    </main>

    <div>
      {/* ... otras secciones ... */}
      <ContactForm />
    </div>
    <footer>
    <Footer/>
    </footer>
    </div>
  );
}

export default Home;
