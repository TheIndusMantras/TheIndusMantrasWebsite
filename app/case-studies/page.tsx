'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/ui/section-title';

// This would typically come from a CMS or API
const caseStudies = [
  {
    id: 'ecommerce-seo-revamp',
    title: 'E-commerce SEO Revamp',
    client: 'FashionForward',
    industry: 'Retail',
    service: 'SEO & Content',
    description: 'How we increased organic traffic by 215% and boosted conversions for a leading fashion retailer.',
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['215% organic traffic increase', '86% higher conversion rate', '143% revenue growth'],
  },
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    client: 'TechSolutions',
    industry: 'Technology',
    service: 'Paid Advertising',
    description: 'Implementing a multi-channel advertising strategy that slashed cost-per-lead by 53%.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['53% lower cost-per-lead', '128% increase in qualified leads', '76% higher close rate'],
  },
  {
    id: 'social-media-rebrand',
    title: 'Social Media Rebrand',
    client: 'Urban Eats',
    industry: 'Food & Beverage',
    service: 'Social Media',
    description: 'A complete social media transformation that energized the brand and drove customer engagement.',
    image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['165% growth in engagement', '94% increase in followers', '37% higher store traffic'],
  },
  {
    id: 'local-seo-campaign',
    title: 'Local SEO Campaign',
    client: 'CityDental',
    industry: 'Healthcare',
    service: 'SEO & Content',
    description: 'Boosting local visibility and appointment bookings for a dental practice with multiple locations.',
    image: 'https://images.pexels.com/photos/3912954/pexels-photo-3912954.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['320% increase in local search visibility', '73% more appointment requests', '4.8 average Google rating'],
  },
  {
    id: 'saas-growth-marketing',
    title: 'SaaS Growth Marketing',
    client: 'CloudManager',
    industry: 'Technology',
    service: 'Digital Strategy',
    description: 'Comprehensive marketing strategy that accelerated user acquisition for a B2B SaaS platform.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['96% increase in MQLs', '58% reduction in CAC', '23% higher trial-to-paid conversion'],
  },
  {
    id: 'nonprofit-fundraising',
    title: 'Nonprofit Digital Fundraising',
    client: 'EarthGuardians',
    industry: 'Nonprofit',
    service: 'Paid Advertising',
    description: 'Digital campaign that significantly increased donations and supporter acquisition.',
    image: 'https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    results: ['243% increase in online donations', '87% decrease in donation acquisition cost', '12,000+ new supporters'],
  },
];

const industries = ['All Industries', 'Retail', 'Technology', 'Food & Beverage', 'Healthcare', 'Nonprofit'];
const services = ['All Services', 'Digital Strategy', 'SEO & Content', 'Social Media', 'Paid Advertising'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedService, setSelectedService] = useState('All Services');

  const filteredCaseStudies = caseStudies.filter((study) => {
    const industryMatch = selectedIndustry === 'All Industries' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'All Services' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-lightgray">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Explore real results we've achieved for clients across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={selectedIndustry === industry ? "bg-primary" : ""}
                >
                  {industry}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <Button
                  key={service}
                  variant={selectedService === service ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedService(service)}
                  className={selectedService === service ? "bg-primary" : ""}
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
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
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {study.service}
                      </Badge>
                      <Badge variant="outline" className="bg-secondary/80">
                        {study.industry}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-primary mb-2 text-sm">Client: {study.client}</p>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    
                    <div className="mb-6">
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
                        View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No case studies match your filters</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your filters to see more results</p>
              <Button 
                onClick={() => {
                  setSelectedIndustry('All Industries');
                  setSelectedService('All Services');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve similar or even better results for your business.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}