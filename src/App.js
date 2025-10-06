import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
//import Service from './components/Service';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portofolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;