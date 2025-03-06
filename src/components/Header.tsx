import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-4 bg-background/90 backdrop-blur-lg shadow-sm'
          : 'py-6 bg-transparent',
      )}
    >
      <div className='container-content flex items-center justify-end md:justify-center'>
        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-foreground/80 hover:text-accent transition-colors link-underline'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-foreground/80 hover:text-accent transition-colors'
          onClick={toggleMobileMenu}
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen ? 'max-h-[500px] shadow-lg' : 'max-h-0',
        )}
      >
        <div className='container-content py-6 flex flex-col space-y-6'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-base font-medium text-foreground/80 hover:text-accent transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
