import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { projects } from '../../data/content';

const ProjectsSection: React.FC = () => {
  const categories = ['Todos', 'Backend', 'Frontend', 'Fullstack', 'Academic'];
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projetos" emoji="🛠️" id="projects" />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400">{project.title}</h3>
                <Badge variant={
                  project.category === 'Backend' ? 'default' : 
                  project.category === 'Frontend' ? 'secondary' : 
                  project.category === 'Fullstack' ? 'success' : 'warning'
                }>
                  {project.category}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;