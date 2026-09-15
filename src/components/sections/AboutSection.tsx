import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.about.title} emoji="👤" id="about" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t.about.quote}
              </p>
            </Card>
          </div>
          
          <div>
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                {t.about.academic.title}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {t.about.academic.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <p dangerouslySetInnerHTML={{ __html: item }}></p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                {t.about.market.title}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {t.about.market.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <p dangerouslySetInnerHTML={{ __html: item }}></p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;