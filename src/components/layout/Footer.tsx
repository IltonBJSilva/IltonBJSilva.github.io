import React from 'react';
import { socialLinks, contactInfo } from '../../data/content';
import { Github, Linkedin, Youtube, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 20 };
    switch (iconName) {
      case 'Github': return <Github {...iconProps} />;
      case 'Linkedin': return <Linkedin {...iconProps} />;
      case 'Youtube': return <Youtube {...iconProps} />;
      case 'ExternalLink': return <ExternalLink {...iconProps} />;
      case 'MapPin': return <MapPin {...iconProps} />;
      case 'Phone': return <Phone {...iconProps} />;
      case 'Mail': return <Mail {...iconProps} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Ilton Batista</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Desenvolvedor Backend apaixonado por ciência, filosofia e espiritualidade.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.platform}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-2">{getIcon(item.icon)}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#experiences" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experiências</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#objectives" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Objetivos</a></li>
              <li><a href="#extra" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Extra</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ilton Batista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;