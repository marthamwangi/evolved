import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
    {
      "name": "Simon Macharia",
      "role": "Founder & CEO",
      "bio": "As a seasoned expert in high-performance systems, Simon sets the technical vision for our projects, ensuring every solution is built for speed, scalability, and long-term success.",
      "avatar": "/evolved-agency-CEO.png",
      "fallback": "SM"
    },
    {
      "name": "Martha Macharia",
      "role": "Co-founder & CTO",
      "bio": "Martha is the force behind our agency's technology stack. She specializes in creating efficient, automated workflows that provide a competitive advantage for our clients.",
      "avatar": "/evolved-agency-CTO.png",
      "fallback": "MM"
    }
];

export default function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a small, dedicated team of professionals passionate about technology and client success.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 grid-cols-2">
        {teamMembers.map((member) => (
            <Card key={member.name} className="text-center h-full flex flex-col">
              <CardContent className="flex flex-col items-center justify-center p-6 flex-grow">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-4 text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
