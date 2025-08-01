import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The performance optimization work they did was a game-changer for our user engagement. We saw a 50% reduction in load times.",
    name: 'Emily Carter',
    company: 'CEO, Innovate Inc.',
  },
  {
    quote: "Their virtual assistant services are incredibly reliable. The efficiency and automation they brought to our admin tasks saved us countless hours.",
    name: 'Michael Rodriguez',
    company: 'Operations Director, Solutions Co.',
  },
  {
    quote: "As an SME, their advice on our digital strategy was invaluable. They helped us navigate complex technical decisions with clarity and confidence.",
    name: 'Jessica Nguyen',
    company: 'Founder, TechStart LLC',
  },
  {
    quote: 'The Angular application they built for us is robust, scalable, and a pleasure to maintain. True architectural excellence.',
    name: 'Ben Adams',
    company: 'CTO, Datawise',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to have partnered with amazing businesses. Here's what they have to say about our work.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-start justify-center p-6 space-y-4">
                      <Quote className="w-8 h-8 text-primary" />
                      <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                      <div className="pt-2">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
