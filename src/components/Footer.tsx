
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { footerData } from '@/lib/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary py-8'>
      <div className='container-content'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-foreground/70 text-sm'>
            © {currentYear} {footerData.copyright}. All rights reserved.
          </div>

          <div className='flex items-center gap-6'>
            {footerData.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='text-sm text-foreground/70 hover:text-accent transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className='bg-accent/20 hover:bg-accent/30 text-accent p-3 rounded-full transition-colors'
            aria-label='Scroll to top'
          >
            <ArrowUp className='w-5 h-5' />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
