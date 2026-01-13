import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, BarChart3, Search, Share2, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';

const services = [
  {
    id: 'digital-strategy',
    title: 'Executive Search & Leadership Hiring',
    description: 'We specialize in identifying seasoned and proven executives who drive long-term value. Our industry experts assess candidates on both technical and behavioral competencies, ensuring the right leadership fit for your organization’s culture and strategy.',
    icon: BarChart3,
    color: 'bg-blue-100 text-primary',
  },
  {
    id: 'seo-content',
    title: 'Mass & Volume Hiring Solutions',
    description: 'We deliver large-scale recruitment rollouts across multiple sectors with speed and reliability. Our proven mass hiring capabilities help organizations efficiently meet high-volume staffing needs while maintaining quality and consistency.',
    icon: Search,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'social-media',
    title: 'Talent Mapping & Strategic Workforce Planning',
    description: 'We enable clients to redistribute staffing needs and focus on core business growth. By anticipating workforce requirements, we help organizations build strong middle and senior management layers aligned with future goals.',
    icon: Share2,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'paid-advertising',
    title: 'Industry-Specific Recruitment Solutions',
    description: 'With over 100 years of combined executive search experience, we support hiring across industries such as technology, manufacturing, energy, healthcare, financial services, retail, education, real estate, and more—leveraging our extensive national network and validated talent database.',
    icon: LineChart,
    color: 'bg-orange-100 text-orange-600',
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-lightgray py-20" id="services">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="We offer comprehensive digital marketing solutions tailored to your business needs"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Button asChild variant="ghost" className="justify-start p-0 hover:bg-transparent">
                  <Link href={`/services#${service.id}`} className="flex items-center text-primary font-medium">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}