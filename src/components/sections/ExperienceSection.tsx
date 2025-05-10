import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { experiences } from '../../data/content';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experiências" emoji="💼" id="experiences" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-8`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {experience.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                      {experience.company}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex text-gray-600 dark:text-gray-400">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, i) => (
                          <Badge key={i} variant={i % 3 === 0 ? 'default' : i % 3 === 1 ? 'success' : 'secondary'}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
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