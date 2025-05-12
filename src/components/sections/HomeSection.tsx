import React from 'react';
import { socialLinks, contactInfo } from '../../data/content';
import Button from '../ui/Button';
import { Github, Linkedin, Youtube, ExternalLink, ChevronDown } from 'lucide-react';

const HomeSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 20 };
    switch (iconName) {
      case 'Github': return Github;
      case 'Linkedin': return Linkedin;
      case 'Youtube': return Youtube;
      case 'ExternalLink': return ExternalLink;
      default: return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-blue-400 mb-4 animate-fade-in">
            Ilton Batista
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-1">
            Engenheiro de Software
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-10 shadow-sm animate-fade-in-delay-2">
            <p className="text-xl md:text-2xl italic text-blue-800 dark:text-blue-300 leading-relaxed">
              "Transformando ideias complexas em soluções eficientes com propósito, técnica e alma."
            </p>
          </div>
          
          <div className="mb-10 animate-fade-in-delay-3">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Sou desenvolvedor Backend com experiência em Python, Google Cloud Platform (GCP), 
              BigQuery, Pipefy, automações e integrações com APIs escaláveis. Tenho como objetivo 
              transformar desafios técnicos em soluções inteligentes, eficientes e sustentáveis. 
              Acredito que a tecnologia, quando bem aplicada, tem o poder de gerar impacto real e 
              positivo na vida das pessoas e nos processos de negócios.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {socialLinks.map((link, index) => {
                const Icon = getIcon(link.icon);
                return (
                  <Button 
                    key={index} 
                    href={link.url} 
                    variant="outline" 
                    icon={Icon}
                  >
                    {link.platform}
                  </Button>
                );
              })}
            </div>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 animate-bounce-slow"
          >
            Saiba mais
            <ChevronDown className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;