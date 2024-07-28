import logo from './logo.svg';
import './App.css';
import Hero from './Components/main-page/MainPgae';
import AboutUs from './Components/about-us/AboutUs';
import Packages from './Components/packages/PackageWindow';
import TourGallery from './Components/tour-gallery/TourGallery';
import TestimonialsSection from './Components/testinimials/Testimonials';
import FAQ from './Components/faq/Faq';
import Footer from './Components/footer/Footer';
import ExploreSection from './Components/explore-section/ExploreMore';

function App() {
  return (
    <div className="App">
      <div className="">
        <Hero />
      </div>
      <AboutUs />
      <Packages/>
      <TourGallery/>
      <TestimonialsSection/>
      <FAQ/>
      <ExploreSection/>
      <Footer/>
      
    </div>
    
    
  );
}
export default App;
