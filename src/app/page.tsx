import Header from '@/components/header';
import Hero from '@/components/hero';
import ExpertiseGrid from '@/components/expertise-grid';
import Portfolio from '@/components/portfolio';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import ProjectProposalForm from '@/components/project-proposal-form';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <ExpertiseGrid />
        <Portfolio />
        <Team />
        <Testimonials />
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center space-y-4">
                 <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Build Together</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Have a project in mind? Fill out the form to get an AI-generated proposal, or send us a message for any other inquiries.
                    </p>
                  </div>
                  <ProjectProposalForm />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                 <Card>
                    <CardContent className="pt-6">
                      <ContactForm />
                    </CardContent>
                  </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
