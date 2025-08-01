import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Lead Engineer & Founder',
    bio: 'A specialist in high-performance Angular applications and clean architecture. Alex provides the technical vision for all projects.',
    avatar: 'https://placehold.co/100x100.png',
    fallback: 'AR',
  },
  {
    name: 'Samantha Chen',
    role: 'Digital Operations Manager',
    bio: 'Samantha orchestrates social media strategies and virtual assistant services with an engineer’s precision and efficiency.',
    avatar: 'https://placehold.co/100x100.png',
    fallback: 'SC',
  },
  {
    name: 'David Lee',
    role: 'Frontend Developer & UI/UX Expert',
    bio: 'David focuses on creating intuitive, responsive designs and optimizing web performance for an exceptional user experience.',
    avatar: 'https://placehold.co/100x100.png',
    fallback: 'DL',
  },
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
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
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
