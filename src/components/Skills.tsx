import React, { useState } from 'react';
import Section from './common/Section';
import RevealAnimation from './common/RevealAnimation';
import {
  Code,
  Database,
  Layout,
  Server,
  Cloud,
  SquareFunction,
  ArrowUpRight,
} from 'lucide-react';
import { skillCategories } from '@/lib/constants';

// Function to get the appropriate icon based on category name
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Layout':
      return <Layout className='w-8 h-8 text-accent' />;
    case 'Server':
      return <Server className='w-8 h-8 text-accent' />;
    case 'Database':
      return <Database className='w-8 h-8 text-accent' />;
    case 'Code':
      return <Code className='w-8 h-8 text-accent' />;
    case 'Cloud':
      return <Cloud className='w-8 h-8 text-accent' />;
    case 'Other':
      return <SquareFunction className='w-8 h-8 text-accent' />;
    default:
      return <Code className='w-8 h-8 text-accent' />;
  }
};

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState(4);

  const loadMore = () => {
    setVisibleSkills((prev) => Math.min(prev + 4, skillCategories.length));
  };

  return (
    <Section id='skills'>
      <RevealAnimation>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold mb-4'>
            Skills & Expertise
          </h2>
          <p className='text-foreground/80 max-w-2xl mx-auto'>
            I've cultivated a diverse skill set throughout my career, allowing
            me to create comprehensive software solutions from design to
            deployment.
          </p>
        </div>
      </RevealAnimation>

      <div className='grid md:grid-cols-2 gap-8'>
        {skillCategories.slice(0, visibleSkills).map((category, index) => (
          <RevealAnimation
            key={category.name}
            animation='fade-in'
            delay={index * 100}
          >
            <div className='glass rounded-xl p-6'>
              <div className='flex items-center gap-4 mb-6'>
                {getIconComponent(category.icon)}
                <h3 className='text-xl font-semibold'>{category.name}</h3>
              </div>
              <div className='space-y-4'>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm font-medium'>{skill.name}</span>
                      <span className='text-xs text-foreground/60'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-secondary rounded-full h-2'>
                      <div
                        className='bg-accent h-2 rounded-full transition-all duration-700 ease-out'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
      {visibleSkills < skillCategories.length && (
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

export default Skills;
