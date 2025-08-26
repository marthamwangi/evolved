import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Engineering Excellence, Operational Finesse
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A unique blend of high-level software engineering and hands-on digital operations. From high-performance web apps to strategic social media management, we provide not just execution, but insight to help your business thrive online.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Get a Proposal</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/evolved-agency-hero.jpg"
            width="600"
            height="600"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            data-ai-hint="abstract technology"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
}
