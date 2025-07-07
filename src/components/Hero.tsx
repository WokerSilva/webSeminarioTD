import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight hero-fade-in break-words">
          Transformación Digital en la Profesión Actuarial
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-3 sm:mb-4 hero-fade-in-delay">
          Fundamentos y Estrategias en la Nube
        </p>
        <div className="mb-8 hero-fade-in-delay">
          <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-orange-500 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Grupo 9267
          </span>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto hero-fade-in-delay-2 leading-relaxed px-2">
          También extendemos la invitación a estudiantes de otras carreras que deseen explorar y aprender sobre las tecnologías en la nube. ¡Todxs son bienvenidos!
        </p>
        
        <a
          href="https://drive.google.com/file/d/1UtKkKO43RJM0a2UF7EbQjBWc4NhR7ebz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hero-fade-in-delay-3"
        >
          Explora el Temario
          <ArrowRight className="ml-2" size={16} />
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;