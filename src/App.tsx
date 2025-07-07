import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduccion from './components/Introduccion';
import Objetivos from './components/Objetivos';
import Dinamica from './components/Dinamica';
import Evaluacion from './components/Evaluacion';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduccion />
        <Objetivos />
        <Dinamica />
        <Evaluacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;