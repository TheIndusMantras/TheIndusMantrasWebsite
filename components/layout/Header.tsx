'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white shadow-md dark:bg-dark dark:bg-opacity-95 h-20' 
          : 'bg-transparent h-20'
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-dark hover:text-primary-500 dark:text-white dark:hover:text-primary-300 font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary-600 text-white transition-colors duration-300">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-dark dark:text-white focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white dark:bg-dark shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={closeMenu}
              className="text-dark hover:text-primary-500 dark:text-white dark:hover:text-primary-300 py-2 font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary-600 text-white w-full transition-colors duration-300">
            <Link href="/contact" onClick={closeMenu}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}