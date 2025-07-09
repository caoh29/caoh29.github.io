import React from 'react';
import RevealAnimation from './common/RevealAnimation';
import Section from './common/Section';
import { heroData } from '@/lib/constants';

const Hero: React.FC = () => {
  return (
    <Section
      id='home'
      className='min-h-screen flex items-center justify-center pt-28 pb-16'
    >
      <div className='flex flex-col items-center justify-center text-center'>
        <RevealAnimation animation='scale-in'>
          <div className='glass px-8 py-6 rounded-full mb-8 bg-accent'>
            <span className='text-background font-bold'>
              {heroData.subtitle}
            </span>
          </div>
        </RevealAnimation>

        <RevealAnimation animation='fade-in' delay={200}>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6'>
            <span className='block mb-4'>Hello, I'm </span>
            <span className='text-accent'>{heroData.name}</span>
          </h1>
        </RevealAnimation>

        <RevealAnimation animation='fade-in' delay={400}>
          <p className='text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12'>
            {heroData.description}
          </p>
        </RevealAnimation>

        <RevealAnimation animation='fade-in' delay={600}>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='#projects'
              className='bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg transition-colors'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='bg-secondary hover:bg-secondary/80 text-foreground font-medium py-3 px-8 rounded-lg transition-colors'
            >
              Contact Me
            </a>
          </div>
        </RevealAnimation>
      </div>
    </Section>
  );
};

export default Hero;
