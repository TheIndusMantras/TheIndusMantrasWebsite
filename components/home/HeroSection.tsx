import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Marketing team working together"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl animate-fadeIn lg:ml-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Businesses Through Talent
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Strategic hiring solutions for scalable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 hover:font-bold text-white transition-all duration-300 text-lg">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:font-bold hover:text-primary transition-all duration-300 text-lg">
              <Link href="/case-studies">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}