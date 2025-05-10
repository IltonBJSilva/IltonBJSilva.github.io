import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { objectives } from '../../data/content';
import { Target } from 'lucide-react';

const ObjectivesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Objetivos" emoji="🎯" id="objectives" />
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {objectives.map((objective, index) => (
              <li 
                key={index} 
                className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full mr-4">
                  <Target className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {objective}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;