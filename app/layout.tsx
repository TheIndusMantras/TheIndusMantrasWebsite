import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Open_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'TheIndusMantras | Data-Driven Digital Marketing Agency',
  description: 'Transform your digital presence with our data-driven marketing solutions for ambitious brands.',
  keywords: 'digital marketing, SEO, content marketing, social media, Industry-Specific Recruitment Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}