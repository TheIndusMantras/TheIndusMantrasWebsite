import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Indus Mantras Media',
  description: 'Learn about our digital marketing agency, our mission, and the team behind our success.',
};

const leadership = [
  {
    name: 'Shivani Srivastava',
    position: 'CEO & Founder',
    bio: 'Former Google marketing strategist with 15+ years of experience in digital marketing leadership.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Shruti Srivastava',
    position: 'Chief Strategy Officer',
    bio: 'Data scientist turned marketing strategist with expertise in predictive analytics and growth marketing.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Priya Patel',
    position: 'Creative Director',
    bio: 'Award-winning creative with background in both traditional and digital brand development.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Marcus Wilson',
    position: 'Head of Client Success',
    bio: 'Customer experience expert dedicated to ensuring measurable results for every client engagement.',
    image: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  }
];

const team = [
  {
    name: 'Emily Rodriguez',
    position: 'SEO Specialist',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Jason Kim',
    position: 'Content Strategist',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Rachel Williams',
    position: 'Social Media Manager',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Michael Lee',
    position: 'PPC Specialist',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Sophia Garcia',
    position: 'Data Analyst',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'James Wilson',
    position: 'Web Developer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Olivia Taylor',
    position: 'UX/UI Designer',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  },
  {
    name: 'Daniel Brown',
    position: 'Account Manager',
    image: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-lightgray">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Indus Mantras</h1>
              <p className="text-xl text-muted-foreground mb-8">
                By working in close partnership with our clients, we proactively anticipate their needs and source talent with the skills that matter most. 
                Leveraging technology allows us to deliver added value and respond swiftly to changing workplace requirements.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Work With Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1000&h=800"
                  alt="The Indus Mantras Media Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl rounded-lg max-w-xs">
                <p className="text-xl font-bold text-primary mb-2">Founded in 2026</p>
                <p>From a small team of 3 to an award-winning agency of 25+ digital experts</p>
              </div>
            </div>

            <div>
              <SectionTitle
                title="Our Story"
                subtitle="How we became a leading voice in data-driven digital marketing"
              />
              
              <div className="space-y-6 text-lg">
                <p>
                  The Indus Mantras Media was founded in 2026 by a team of digital marketing veterans who shared a vision: to create a marketing agency that puts data and measurable results at the forefront of every strategy.
                </p>
                <p>
                  We noticed that most agencies were focused on vanity metrics rather than business outcomes. Our approach was different from day one – we promised clients specific results tied to their business goals, not just increased likes or impressions.
                </p>
                <p>
                  This results-first methodology quickly earned us the trust of ambitious brands looking for marketing partners who could actually deliver ROI. Five years later, our team has grown from 3 to 25+ digital experts, but our core mission remains unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-4">
                To empower businesses with data-driven marketing strategies that deliver measurable growth and meaningful customer connections.
              </p>
              <p>
                We believe marketing should be accountable, transparent, and directly tied to business outcomes. Our mission is to transform how businesses approach digital marketing by making data the foundation of every strategy we develop.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl mb-4">
                To be the most trusted digital marketing partner for ambitious brands seeking transformative growth.
              </p>
              <p>
                We envision a world where marketing decisions are driven by insights rather than assumptions, where strategies are continuously optimized based on performance data, and where clients have complete clarity on the return they're getting from their marketing investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20" id="team">
        <div className="container">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the experts guiding our strategy and operations"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {leadership.map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-80 w-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-primary font-medium mb-3">{person.position}</p>
                  <p className="text-muted-foreground">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-lightgray">
        <div className="container">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The talented specialists who bring our strategies to life"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {team.map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{person.name}</h3>
                  <p className="text-primary font-medium">{person.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about digital marketing and data-driven strategies.
          </p>
          <Button asChild size="lg" className="bg-white text-dark hover:bg-white/90">
            <Link href="/careers">
              View Open Positions
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}