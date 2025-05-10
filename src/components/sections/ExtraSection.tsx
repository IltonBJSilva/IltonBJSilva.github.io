import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { extraItems } from '../../data/content';
import { Sparkles } from 'lucide-react';

const ExtraSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Extra" emoji="✨" id="extra" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraItems.map((item, index) => (
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