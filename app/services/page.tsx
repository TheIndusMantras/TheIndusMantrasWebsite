import Image from 'next/image';
import { Check, BarChart3, Search, Share2, LineChart, MousePointer, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | TheIndusMantras',
  description: 'Explore our comprehensive digital marketing services including SEO, content marketing, social media, and Industry-Specific Recruitment Solutions strategies.',
};

const services = [
  {
    id: 'digital-strategy',
    title: 'Executive Search & Leadership Hiring',
    description: 'We specialize in identifying seasoned and proven executives who drive long-term value. Our industry experts assess candidates on both technical and behavioral competencies, ensuring the right leadership fit for your organization’s culture and strategy.',
    icon: BarChart3,
    color: 'bg-blue-50 text-primary border-primary/20',
    benefits: [
      'Complete digital ecosystem audit',
      'Competitor and market analysis',
      'Custom KPI framework development',
      'Cross-channel integration planning'
    ],
    features: [
      'Current digital presence evaluation',
      'Target audience persona development',
      'Channel selection and prioritization',
      'Budget allocation recommendations',
      'Timeline and roadmap creation'
    ],
    caseStudy: {
      client: 'Global SaaS Company',
      result: 'Developed integrated strategy that increased lead quality by : 67% and improved CAC by 43%'
    },
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
  },
  {
    id: 'seo-content',
    title: 'Mass & Volume Hiring Solutions',
    description: 'We deliver large-scale recruitment rollouts across multiple sectors with speed and reliability. Our proven mass hiring capabilities help organizations efficiently meet high-volume staffing needs while maintaining quality and consistency.',
    icon: Search,
    color: 'bg-green-50 text-green-600 border-green-200',
    benefits: [
      'Higher organic search rankings',
      'Increased website traffic',
      'Improved content engagement',
      'Enhanced brand authority'
    ],
    features: [
      'Technical SEO audits and optimization',
      'Keyword research and strategy',
      'Content gap analysis',
      'Regular performance reporting',
      'Link building campaigns'
    ],
    caseStudy: {
      client: 'E-commerce Retailer',
      result: 'Achieved 215% increase in organic traffic and 86% higher conversion rate'
    },
    image: 'https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
  },
  {
    id: 'social-media',
    title: 'Talent Mapping & Strategic Workforce Planning',
    description: 'We enable clients to redistribute staffing needs and focus on core business growth. By anticipating workforce requirements, we help organizations build strong middle and senior management layers aligned with future goals.',
    icon: Share2,
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    benefits: [
      'Increased brand visibility',
      'Stronger community engagement',
      'Enhanced customer loyalty',
      'Improved social conversions'
    ],
    features: [
      'Platform-specific strategy development',
      'Content calendar creation',
      'Community management',
      'Influencer partnership coordination',
      'Social listening and reporting'
    ],
    caseStudy: {
      client: 'Direct-to-Consumer Brand',
      result: 'Drove 142% ROI on social campaigns with 165% growth in engagement'
    },
    image: 'https://images.pexels.com/photos/267482/pexels-photo-267482.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
  },
  {
    id: 'paid-advertising',
    title: 'Industry-Specific Recruitment Solutions',
    description: 'With over 100 years of combined executive search experience, we support hiring across industries such as technology, manufacturing, energy, healthcare, financial services, retail, education, real estate, and more—leveraging our extensive national network and validated talent database.',
    icon: LineChart,
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    benefits: [
      'Highly targeted audience reach',
      'Faster results than organic methods',
      'Precise performance measurement',
      'Flexible budget scaling'
    ],
    features: [
      'Multi-channel ad strategy',
      'A/B testing frameworks',
      'Custom audience development',
      'Conversion tracking setup',
      'Bid optimization management'
    ],
    caseStudy: {
      client: 'B2B Software Provider',
      result: 'Reduced cost-per-lead by 53% while increasing qualified leads by 128%'
    },
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
  }
];

const additionalServices = [
  {
    title: 'Conversion Rate Optimization',
    icon: MousePointer,
  },
  {
    title: 'Mobile Marketing',
    icon: Smartphone,
  },
  {
    title: 'International SEO',
    icon: Globe,
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-lightgray">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital marketing solutions designed to transform your online presence and drive measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="How We Help You Grow"
            subtitle="Explore our core service offerings tailored to your business needs"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${service.color}`}>
                      <service.icon className="w-6 h-6" />
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3">What&apos;s Included</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-lightgray p-4 rounded-lg mb-6">
                    <p className="font-medium mb-1">Success Story: {service.caseStudy.client}</p>
                    <p className="text-sm">{service.caseStudy.result}</p>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container">
          <SectionTitle
            title="Additional Offerings"
            subtitle="Specialized services to complement our core strategies"
            center
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 bg-primary-300">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-primary mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <Button asChild variant="outline" className="border-white text-white bg-white/20 hover:bg-primary-300">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Our Process"
            subtitle="How we approach every client engagement to ensure success"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {['Discovery', 'Strategy', 'Execution', 'Optimization'].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-lightgray p-6 rounded-lg h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step}</h3>
                  <p className="text-muted-foreground">
                    {index === 0 && 'We start by understanding your business, goals, audience, and competitive landscape.'}
                    {index === 1 && 'Based on discoveries, we develop custom strategies aligned with your specific objectives.'}
                    {index === 2 && 'Our team implements the strategies across selected channels with meticulous attention to detail.'}
                    {index === 3 && 'We continuously monitor performance, test variations, and refine tactics for ongoing improvement.'}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="h-0.5 w-8 bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Marketing?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule a consultation with our team to discuss your goals and how we can help you achieve them.
              </p>
              <Button asChild size="lg" className="bg-white text-dark hover:bg-white/90">
                <Link href="/contact">
                  Book a Free Consultation
                </Link>
              </Button>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Marketing consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}