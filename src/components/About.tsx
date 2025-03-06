import React from 'react';
import Section from './common/Section';
import RevealAnimation from './common/RevealAnimation';
import { aboutData } from '@/lib/constants';

const About: React.FC = () => {
  return (
    <Section id='about' className='bg-secondary/50'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <RevealAnimation animation='fade-in-right'>
          <div className='glass rounded-2xl p-1 md:p-2'>
            <div className='aspect-square rounded-xl bg-accent/10 overflow-hidden'>
              {aboutData.image ? (
                <img
                  src={aboutData.image}
                  alt={aboutData.details[0].value}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-accent/30 text-lg font-medium'>
                  Your Photo
                </div>
              )}
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation animation='fade-in-left'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-2'>
                About Me
              </h2>
              <div className='h-1 w-20 bg-accent rounded-full mb-6'></div>
            </div>

            {aboutData.description.map((paragraph, index) => (
              <p key={index} className='text-foreground/80'>
                {paragraph}
              </p>
            ))}

            <div className='pt-4'>
              <h3 className='text-xl font-semibold mb-4'>Personal Details</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {aboutData.details.map((detail, index) => (
                  <div key={index}>
                    <p className='text-sm text-foreground/60'>{detail.label}</p>
                    <p className='font-medium'>{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='pt-4'>
              <a
                href='#contact'
                className='inline-flex items-center bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg transition-colors'
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </Section>
  );
};

export default About;
