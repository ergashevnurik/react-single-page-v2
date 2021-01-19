import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import { AboutData, AboutDataTwo } from "./Data/AboutData";
import { HeroData } from "./Data/HeroData";


function App() {
  return (
    <Router>
      <Navbar />
      <Hero {...HeroData} />
      <About {...AboutData} />
      <Team />
      <About {...AboutDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
