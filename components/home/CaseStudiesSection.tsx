import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/ui/section-title';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'ecommerce-seo-revamp',
    title: 'E-commerce SEO Revamp',
    client: 'FashionForward',
    category: 'Mass & Volume Hiring Solutions',
    description: 'How we increased organic traffic by 215% and boosted conversions for a leading fashion retailer.',
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['215% organic traffic increase', '86% higher conversion rate', '143% revenue growth'],
  },
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    client: 'TechSolutions',
    category: 'Industry-Specific Recruitment Solutions',
    description: 'Implementing a multi-channel advertising strategy that slashed cost-per-lead by 53%.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['53% lower cost-per-lead', '128% increase in qualified leads', '76% higher close rate'],
  },
  {
    id: 'social-media-rebrand',
    title: 'Social Media Rebrand',
    client: 'Urban Eats',
    category: 'Social Media',
    description: 'A complete social media transformation that energized the brand and drove customer engagement.',
    image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['165% growth in engagement', '94% increase in followers', '37% higher store traffic'],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container">
        <SectionTitle
          title="Our Latest Work"
          subtitle="Explore recent projects where we've helped clients achieve remarkable results"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20">
                  {study.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-2 text-sm">Client: {study.client}</p>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                
                <div className="mt-4 mb-6">
                  <p className="font-medium mb-2">Key Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span> {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="w-full mt-auto">
                  <Link href={`/case-studies/${study.id}`}>
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/case-studies">Browse All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}