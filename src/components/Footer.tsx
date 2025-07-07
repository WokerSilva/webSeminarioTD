import React from 'react';

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Introducción', href: '#introduccion' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Dinámica', href: '#dinamica' },
    { name: 'Evaluación', href: '#evaluacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Transformación Digital</h3>
            <p className="text-gray-300 leading-relaxed">
              Preparando a los profesionales actuariales para liderar 
              la transformación digital en la era de la nube.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos Externos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://aws.amazon.com/es/what-is-aws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  AWS
                </a>
              </li>
              <li>
                <a
                  href="https://www.scrumstudy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Scrum Study
                </a>
              </li>
              <li>
                <a
                  href="https://www.dama.org/cpages/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Data Governance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Transformación Digital en la Profesión Actuarial. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;