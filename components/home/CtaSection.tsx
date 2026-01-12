import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-48 -left-48"></div>
        <div className="absolute w-80 h-80 bg-white/5 rounded-full top-40 -right-20"></div>
        <div className="absolute w-64 h-64 bg-white/5 rounded-full -bottom-20 left-1/3"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s discuss how we can help you achieve your business goals with our data-driven marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:font-bold transition-all duration-300">
              <Link href="/contact">
                Get Started Now <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10 hover:font-bold hover:border-black transition-all duration-300">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}