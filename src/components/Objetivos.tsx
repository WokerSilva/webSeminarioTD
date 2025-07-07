import React from 'react';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import Section from './Section';

const Objetivos: React.FC = () => {
  const specificObjectives = [
    "Dominar los fundamentos de las tecnologías en la nube y su aplicación en el sector actuarial",
    "Desarrollar habilidades prácticas en AWS, Azure, Google Cloud y Huawei",
    "Implementar estrategias de gobernanza de datos y arquitecturas modernas",
    "Aplicar metodologías ágiles como Scrum en proyectos de transformación digital"
  ];

  return (
    <Section
      id="objetivos"
      title="Objetivos del Curso"
      className="bg-gray-50"
      titleClassName="text-blue-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* General Objective */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-orange-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Objetivo General</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Capacitar a los estudiantes en el uso estratégico de tecnologías en la nube 
            para impulsar la transformación digital en la profesión actuarial, 
            desarrollando competencias técnicas y metodológicas que les permitan 
            liderar procesos de innovación en sus organizaciones.
          </p>
        </div>

        {/* Specific Objectives */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Objetivos Específicos</h3>
          <div className="space-y-4">
            {specificObjectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.scrumstudy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Conoce Scrum
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Objetivos;