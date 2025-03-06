import React from 'react';
import Section from './common/Section';
import RevealAnimation from './common/RevealAnimation';
import { Code, Database, Layout, Server } from 'lucide-react';
import { skillCategories } from '@/lib/constants';

const Skills: React.FC = () => {
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
      default:
        return <Code className='w-8 h-8 text-accent' />;
    }
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
        {skillCategories.map((category, index) => (
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
    </Section>
  );
};

export default Skills;
