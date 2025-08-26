import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, FastForward, Bot, Users, SearchCheck } from 'lucide-react';

const expertiseData = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Web Development & Engineering',
    description: 'Long Term & Short Term projects.',
    details: [
      'High-Performance Angular Applications with NGRX',
      'Responsive Design & RESTful API Integration',
      'Clean Architecture & Dependency Injection',
    ],
  },
  {
    icon: <FastForward className="h-8 w-8 text-primary" />,
    title: 'Web Performance Optimization',
    description: 'Making websites load faster to improve user experience and SEO.',
    details: [
        'Code splitting and lazy loading strategies',
        'Image and asset optimization',
        'Critical rendering path analysis',
    ]
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Virtual Assistant Services',
    description: 'Reliable and detail-oriented administrative support.',
    details: [
        'Efficient task management and scheduling',
        'Data entry and document preparation',
        'Automation of repetitive tasks',
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Social Media Management',
    description: 'Data-driven strategy and brand consistency.',
    details: [
        'Content scheduling and creation',
        'Community engagement and moderation',
        'Performance tracking and reporting',
    ]
  },
  {
    icon: <SearchCheck className="h-8 w-8 text-primary" />,
    title: 'Subject Matter Expertise (SME)',
    description: 'Knowledgeable advisory on web technology and digital strategy.',
    details: [
        'Technology stack consultation',
        'Digital strategy and roadmap planning',
        'Performance best practices and auditing',
    ]
  },
];

export default function ExpertiseGrid() {
  return (
    <section id="expertise" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do Best</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We combine technical mastery with operational support to deliver comprehensive digital solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
          {expertiseData.map((item) => (
            <Card key={item.title} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                {item.icon}
                <CardTitle className="mt-4">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.details.map(detail => (
                    <li key={detail} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
