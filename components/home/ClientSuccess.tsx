import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import { ChevronRight } from 'lucide-react';

const successStories = [
  {
    id: 1,
    client: 'TechVision',
    industry: 'Technology',
    title: 'Increased organic traffic by 187%',
    description: 'We helped TechVision overhaul their content strategy, resulting in dramatic growth in organic search visibility and lead generation.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    slug: 'techvision-organic-growth',
  },
  {
    id: 2,
    client: 'GreenLife',
    industry: 'Eco-Friendly Products',
    title: 'Social media campaign drove 142% ROI',
    description: 'Our targeted social media strategy helped GreenLife connect with their ideal audience and significantly boost their return on ad spend.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    slug: 'greenlife-social-media-success',
  },
  {
    id: 3,
    client: 'Urban Finance',
    industry: 'Financial Services',
    title: 'Conversion rate increased by 64%',
    description: "By redesigning Urban Finance's digital funnel and optimizing their paid campaigns, we dramatically improved their conversion metrics.",
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    slug: 'urban-finance-conversion-improvement',
  },
];

export default function ClientSuccess() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle
          title="Client Success Stories"
          subtitle="See how we've helped companies like yours achieve exceptional digital growth"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {successStories.map((story) => (
            <Card key={story.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-60 w-full">
                <Image
                  src={story.image}
                  alt={story.client}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded">
                  {story.industry}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-primary font-medium mb-3">{story.client}</p>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <Button asChild variant="ghost" className="justify-start p-0 hover:bg-transparent">
                  <Link href={`/case-studies/${story.slug}`} className="flex items-center text-primary font-medium">
                    Read Case Study <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}