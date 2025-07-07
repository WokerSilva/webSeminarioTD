import React from 'react';
import { Users, BookOpen, Cloud, ExternalLink } from 'lucide-react';
import Section from './Section';

const Dinamica: React.FC = () => {
  return (
    <Section
      id="dinamica"
      title="Dinámica del Curso"
      className="bg-white"
      titleClassName="text-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Formato Presencial</h3>
                <p className="text-gray-600">Clases interactivas con participación activa</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <BookOpen className="w-12 h-12 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Google Classroom</h3>
                <p className="text-gray-600">Plataforma para materiales y recursos del curso</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Cloud className="w-12 h-12 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Plataforma AWS</h3>
                <p className="text-gray-600">Práctica directa con servicios cloud</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Metodologías Aplicadas</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• Scrum para gestión ágil de proyectos</li>
                <li>• Data Governance para gobernanza de datos</li>
                <li>• Análisis del proceso de los datos en un Data Lake</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Recursos Multimedia
              </h4>
              <p className="text-gray-600 mb-6">
                Accede a fotos y videos capturados con drones que documentan 
                experiencias prácticas del curso
              </p>
              <a
                href="https://drive.google.com/drive/folders/1ftKGKl-JkARp_k0tva4umNaWgigem4nN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Ver Galería
                <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://aws.amazon.com/es/what-is-aws/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors"
              >
                AWS
              </a>
              <a
                href="https://www.dama.org/cpages/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Data Governance
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Dinamica;