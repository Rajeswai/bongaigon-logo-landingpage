import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import FloorPlans from "./components/FloorPlans";
import LocationAdvantage from "./components/LocationAdvantage";
import ContactForm from "./components/ContactForm";
import AboutBuilder from "./components/AboutBuilder";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Highlights />

      <main className="page-shell">
        <AboutProject />
        <Amenities />
        <Walkthrough />
        <Gallery />
        <FloorPlans />
        <LocationAdvantage />
        <ContactForm />
        <AboutBuilder />
      </main>

      <Footer />
    </div>
  );
}

export default App;