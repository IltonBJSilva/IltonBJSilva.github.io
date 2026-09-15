import React from 'react';
import Button from '../ui/Button';
import { Github, Linkedin, Youtube, ExternalLink, ChevronDown, Download } from 'lucide-react';
import profilePic from '../../photo/ilton.png';
import { useLanguage } from '../../context/LanguageContext';
import cvPt from '../../docs/Programador - CV - Curriculo.pdf';
import cvEn from '../../docs/Inglês - Programador - CV - Ilton - Curriculo.pdf';
import cvEs from '../../docs/Espanhol_Curriculo_Ilton.pdf';

const HomeSection: React.FC = () => {
  const { t, language } = useLanguage();

  const getCvUrl = () => {
    switch (language) {
      case 'en': return cvEn;
      case 'es': return cvEs;
      case 'pt':
      default: return cvPt;
    }
  };

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
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="mb-6 animate-fade-in relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto ring-4 ring-blue-500/30">
              <img 
                src={profilePic} 
                alt={t.home.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-blue-400 mb-4 animate-fade-in">
            {t.home.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-1">
            {t.home.subtitle}
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-10 shadow-sm animate-fade-in-delay-2">
            <p className="text-xl md:text-2xl italic text-blue-800 dark:text-blue-300 leading-relaxed">
              {t.home.quote}
            </p>
          </div>
          
          <div className="mb-10 animate-fade-in-delay-3">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t.home.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {t.socialLinks.map((link, index) => {
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
              <Button 
                href={getCvUrl()} 
                variant="primary" 
                icon={Download}
                download
              >
                {t.home.downloadCV}
              </Button>
            </div>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 animate-bounce-slow"
          >
            {t.home.readMore}
            <ChevronDown className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;