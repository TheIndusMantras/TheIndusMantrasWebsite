import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ClientSuccess from '@/components/home/ClientSuccess';
import StatisticsSection from '@/components/home/StatisticsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import CtaSection from '@/components/home/CtaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BrightEdge Media | Data-Driven Digital Marketing Agency',
  description: 'Transform your digital presence with our data-driven marketing solutions for ambitious brands.',
  keywords: 'digital marketing, SEO, content marketing, social media, paid advertising',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ClientSuccess />
      <StatisticsSection />
      <CaseStudiesSection />
      <CtaSection />
    </>
  );
}