import React from 'react';
import { Cloud, Database, TrendingUp } from 'lucide-react';
import Section from './Section';

const Introduccion: React.FC = () => {
  return (
    <Section
      id="introduccion"
      title="¿Por qué la Transformación Digital?"
      className="bg-white"
      titleClassName="text-blue-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            En el mundo actual, la transformación digital no es una opción, es una necesidad. 
            La profesión actuarial está experimentando una revolución impulsada por tecnologías 
            en la nube que están redefiniendo cómo analizamos, procesamos y utilizamos los datos.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Las plataformas como AWS, Azure, Google Cloud y Huawei ofrecen arquitecturas 
            avanzadas como Data Lakehouse, Data Mesh y Data Fabric que permiten a los 
            profesionales actuariales crear soluciones más eficientes, escalables y innovadoras.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
              AWS
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
              Azure
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
              Google Cloud
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
              Huawei
            </span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Cloud className="w-12 h-12 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Tecnologías en la Nube</h3>
              <p className="text-gray-600">Aprovecha el poder de las plataformas cloud líderes</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Database className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Arquitecturas de Datos</h3>
              <p className="text-gray-600">Domina Data Lakehouse, Data Mesh y Data Fabric</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <TrendingUp className="w-12 h-12 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Crecimiento Profesional</h3>
              <p className="text-gray-600">Lidera la transformación en tu organización</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Introduccion;