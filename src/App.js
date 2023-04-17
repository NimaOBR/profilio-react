
//components
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Heder from "./Components/Heder/Heder.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Profalio from "./Components/Profalio/Profalio.jsx";
import Servises from "./Components/Servises/Servises.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";


function App() {
  return (
    <>
    <Heder />
    <Nav />
    <About />
    <Experience />
    <Servises/>
    <Profalio/>
    <Testimonials />
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
