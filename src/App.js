
import Hero from "./Compo/hero";
import Navbar from "./Compo/nav"
import Skills from "./Compo/skill";
import About from "./Compo/about";
import Project from "./Compo/projects";
import ContactMe from "./Compo/cont";
import Footer from "./Compo/fotr";
import './App.css';

function App() {
  return (
 <div>
  <Navbar/>
  <Hero />
  <Skills />
  <About/>
  <Project />
  <ContactMe/>
  <Footer/>
 </div>
  );
}

export default App;
