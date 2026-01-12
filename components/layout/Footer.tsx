import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import Logo from './Logo';

const services = [
  { name: 'Digital Strategy', href: '/services#digital-strategy' },
  { name: 'SEO & Content', href: '/services#seo-content' },
  { name: 'Social Media Marketing', href: '/services#social-media' },
  { name: 'Paid Advertising', href: '/services#paid-advertising' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Our Team', href: '/about#team' },
  { name: 'Careers', href: '/careers' },
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Guides', href: '/resources/guides' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <p className="mt-4 text-gray-300 max-w-md">
              Transform your digital presence with our data-driven marketing solutions. 
              We help ambitious brands achieve exceptional growth through strategic digital marketing.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-primary transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-primary transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-gray-300 hover:text-primary transition-colors duration-300">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="mr-3 text-primary" size={20} />
              <a href="mailto:info@brightedgemedia.com" className="text-gray-300 hover:text-primary transition-colors duration-300">
                info@brightedgemedia.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 text-primary" size={20} />
              <a href="tel:+15551234567" className="text-gray-300 hover:text-primary transition-colors duration-300">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 text-primary" size={20} />
              <span className="text-gray-300">123 Marketing St, Digital City, DC 10101</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} BrightEdge Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}