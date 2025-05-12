import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Sobre" emoji="👤" id="about" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                "Sou Ilton Batista, engenheiro de software que busca unir ciência e tecnologia para desenvolver soluções que gerem impacto real. Acredito que programar vai além do código: é conectar pessoas, ideias e transformar o futuro."
              </p>
            </Card>
          </div>
          
          <div>
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">🧪 Acadêmico</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Cursando Bacharelado em Sistemas de Informação na UFU (Universidade Federal de Uberlândia)</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Com objetivo solido em alcançar o mestrado e doutorado.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Desejo participar de pesquisas científicas, projetos de inovação e iniciação científica.</p>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">💼 Mercado</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Forte atuação no mecado, enfrentando desafios técnicos do dia a dia.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Resolvo problemas reais de negócios com tecnologia diaramente.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Trabalho em algumas frentes como: backend, automação, dados e integrações, porem com forte interesse em me aprimorar em IA.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Gosto de me envolver com tudo, indo além do código.</p>
                </li>
              </ul>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;