import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.experiencesSection.title} emoji="💼" id="experiences" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 dark:before:via-blue-700 before:to-transparent">
            {t.experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-950 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-xs font-bold">{t.experiences.length - index}</span>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{exp.title}</h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                  
                  <ul className="mb-4 space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} text={tech} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;