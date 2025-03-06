import React, { useState } from 'react';
import Section from './common/Section';
import RevealAnimation from './common/RevealAnimation';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { projectsData } from '@/lib/constants';

const ProjectCard: React.FC<{
  project: (typeof projectsData)[0];
  index: number;
}> = ({ project, index }) => {
  return (
    <RevealAnimation
      animation='scale-in'
      delay={index * 100}
      className='h-full'
    >
      <div className='glass rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:translate-y-[-8px]'>
        <div className='aspect-[16/9] overflow-hidden'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
          />
        </div>
        <div className='p-6 flex flex-col flex-grow'>
          <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
          <p className='text-foreground/70 text-sm mb-4 flex-grow'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='flex gap-4'>
            <a
              href={project.demoUrl}
              className='flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors'
              aria-label={`Live demo of ${project.title}`}
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.repoUrl}
              className='flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors'
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={16} />
              <span>Repository</span>
            </a>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
  };

  return (
    <Section id='projects' className='bg-secondary/50'>
      <RevealAnimation>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold mb-4'>
            My Projects
          </h2>
          <p className='text-foreground/80 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on. Each one presented
            unique challenges and opportunities for growth.
          </p>
        </div>
      </RevealAnimation>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {visibleProjects < projectsData.length && (
        <RevealAnimation animation='fade-in'>
          <div className='flex justify-center mt-12'>
            <button
              onClick={loadMore}
              className='flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground font-medium py-3 px-8 rounded-lg transition-colors'
            >
              <span>Load More</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </RevealAnimation>
      )}
    </Section>
  );
};

export default Projects;
