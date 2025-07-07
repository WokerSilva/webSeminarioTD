import React from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import Section from './Section';

const Contacto: React.FC = () => {
  return (
    <Section
      id="contacto"
      title="¡Únete al Cambio!"
      className="bg-blue-900 text-white"
      titleClassName="text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl mb-8 text-blue-100">
          ¿Tienes preguntas sobre el curso? ¿Quieres conocer más sobre las oportunidades 
          de transformación digital en la profesión actuarial?
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-800 rounded-lg p-6 hover:bg-blue-700 transition-colors duration-300">
            <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Berenice Domínguez</h3>
            <a
              href="mailto:bds@ciencias.unam.mx"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              bds@ciencias.unam.mx
            </a>
          </div>
          
          <div className="bg-blue-800 rounded-lg p-6 hover:bg-blue-700 transition-colors duration-300">
            <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jessica Hernández</h3>
            <a
              href="mailto:jessica_hm@ciencias.unam.mx"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              jessica_hm@ciencias.unam.mx
            </a>
          </div>
        </div>
        
        <div className="mb-12">
          <a
            href="https://www.linkedin.com/in/berenice-dom%C3%ADnguez-s%C3%A1nchez-22376b260/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 mr-4"
          >
            <Linkedin className="mr-2" size={20} />
            Conecta en LinkedIn
          </a>
          <a
            href="mailto:bds@ciencias.unam.mx,jessica_hm@ciencias.unam.mx"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-2" size={20} />
            Contáctanos
          </a>
        </div>
        
        <div className="bg-blue-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Una Experiencia Transformadora
          </h3>
          <p className="text-lg text-blue-100 leading-relaxed">
            Prepárate para una clase disruptiva donde descubrirás nuevas formas de pensar, 
            aprender y crear. Este curso no solo te dará herramientas técnicas, sino que 
            transformará tu perspectiva sobre el futuro de la profesión actuarial.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contacto;