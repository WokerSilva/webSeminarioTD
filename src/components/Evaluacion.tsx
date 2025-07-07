import React from 'react';
import { Users, FileText, Award, ArrowRight } from 'lucide-react';
import Section from './Section';

const Evaluacion: React.FC = () => {
  const evaluationComponents = [
    {
      icon: Users,
      title: "Participación",
      percentage: "30%",
      description: "Participación activa en clases, debates y actividades grupales",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Tareas y Talleres",
      percentage: "50%",
      description: "Desarrollo de proyectos prácticos y talleres hands-on con tecnologías cloud",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Proyecto Final",
      percentage: "20%",
      description: "Implementación de una solución completa de transformación digital",
      color: "bg-orange-500"
    }
  ];

  return (
    <Section
      id="evaluacion"
      title="Propuesta de Evaluación"
      className="bg-gray-50"
      titleClassName="text-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {evaluationComponents.map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${component.color} text-white mr-4`}>
                  <component.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{component.title}</h3>
                  <span className="text-2xl font-bold text-orange-500">{component.percentage}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{component.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Criterios de Evaluación
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            La evaluación se enfoca en el desarrollo de competencias prácticas y 
            la aplicación de conocimientos en situaciones reales. Cada componente 
            está diseñado para medir diferentes aspectos del aprendizaje.
          </p>
          <a
            href="https://drive.google.com/file/d/1UtKkKO43RJM0a2UF7EbQjBWc4NhR7ebz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Detalles Completos
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Evaluacion;