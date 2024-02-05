import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Benefits/>
    <Booking/>
    <Testimonials/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
