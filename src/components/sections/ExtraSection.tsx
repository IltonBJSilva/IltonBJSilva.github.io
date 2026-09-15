import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ExtraSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.extraSection.title} emoji="🛠️" id="extra" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.extraItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition duration-300"
            >
              <Sparkles className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-700 dark:text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;