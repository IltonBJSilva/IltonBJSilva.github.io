import React from 'react';

interface SectionTitleProps {
  title: string;
  emoji?: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, emoji, id }) => {
  return (
    <h2 
      id={id} 
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-300 flex items-center scroll-mt-24"
    >
      {emoji && <span className="mr-2">{emoji}</span>}
      {title}
    </h2>
  );
};

export default SectionTitle;