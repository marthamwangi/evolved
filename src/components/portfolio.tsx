import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Scalable E-Commerce Platform',
    description: 'An Angular-based storefront with NGRX state management for a seamless shopping experience.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ecommerce website',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'A high-performance dashboard for visualizing complex data streams with optimized rendering.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'data dashboard',
  },
  {
    title: 'Corporate Website Redesign',
    description: 'A fully responsive and performance-optimized website for a leading tech company.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'corporate website',
  },
  {
    title: 'SaaS Application UI',
    description: 'Integrated a complex API to a user-friendly interface for a B2B software product.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'saas interface',
  },
    {
    title: 'Mobile-First Progressive Web App',
    description: 'Built a PWA ensuring flawless functionality and user experience on any device.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mobile app',
  },
  {
    title: 'Internal Admin Panel',
    description: 'Developed a secure and efficient admin panel with clean architecture for long-term maintainability.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'admin panel',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are a few examples of our work, showcasing our commitment to quality and performance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-0">
                <Image
                  src={item.image}
                  width={600}
                  height={400}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
