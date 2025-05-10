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
                "Sou Ilton Batista, engenheiro de software que busca aliar espiritualidade, ciência e tecnologia para criar soluções de impacto. Acredito que programar é mais do que codar: é construir pontes entre pessoas, ideias e o futuro."
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
                  <p>Pretendo alcançar o mestrado e doutorado no futuro.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Desejo participar de pesquisas científicas, projetos de inovação e iniciação científica.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Sonho em me destacar como pesquisador e criador de novas soluções em computação.</p>
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
                  <p>Quero atuar na prática, enfrentando desafios técnicos do dia a dia.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Busco resolver problemas reais de negócios com tecnologia.</p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Pretendo trabalhar em várias frentes: backend, automação, dados e integrações.</p>
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