import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const portfolioItems = 
[
  {
    "title": "Shopify Website Enhancement",
    "description": "Successfully updated a client's Shopify ambassador page for flawless desktop and mobile formatting. The project included implementing an easily editable page widget to streamline internal team workflows.",
    "image": "/portfolio/shopify-developer.png",
    "aiHint": "shopify website",
    "keywords": ["Shopify", "web design", "e-commerce", "ambassador page", "responsive design"],
    "skills": ["HTML", "CSS", "Shopify Liquid", "UI/UX"],
    "technologies": ["Shopify", "Pipeline Theme"],
    "client": "E-commerce Business"
  },
  {
    "title": "Micro-Frontend Application",
    "description": "Developed an Angular 15 application with a micro-frontend architecture (NX) and localization for four languages. Implemented and redesigned pages from existing Figma designs using Bootstrap and Material UI.",
    "image": "/portfolio/angular-microfrontend.png",
    "aiHint": "angular application, micro-frontend",
    "keywords": ["Angular", "micro-frontend", "localization", "Figma", "web development"],
    "skills": ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    "technologies": ["NX", "Bootstrap", "Material UI"],
    "client": "Software Company"
  },
  {
    "title": "Blockchain Crowdsourcing Wallet",
    "description": "Designed a crowdsourcing wallet leveraging the Celo and Circle blockchains. The project focused on integrating Circle’s fiat-to-crypto infrastructure with Celo’s mobile-first smart contract environment.",
    "image": "/portfolio/blockchain.png",
    "aiHint": "blockchain wallet, smart contracts",
    "keywords": ["Blockchain", "Web3", "cryptocurrency", "crowdsourcing", "smart contracts"],
    "skills": ["Node.js", "JavaScript", "HTML", "CSS", "Technical Writing"],
    "technologies": ["Celo", "Circle", "MongoDB", "Node.js"],
    "client": "FinTech Startup"
  },
  {
    "title": "E-commerce Website Development",
    "description": "Engineered a custom e-commerce platform using HTML, CSS, JavaScript, and PHP. The project involved comprehensive testing, debugging, and integrating key e-commerce marketing functionalities.",
    "image": "/portfolio/wordpress-developer.png",
    "aiHint": "e-commerce website, php",
    "keywords": ["e-commerce", "PHP", "custom website", "online sales", "SEO"],
    "skills": ["PHP", "JavaScript", "HTML", "CSS", "Ecommerce Marketing"],
    "technologies": ["PHP", "MySQL", "Apache"],
    "client": "Small Business"
  },
  {
    "title": "Responsive Angular App",
    "description": "Built a responsive, three-page Angular application. The project prioritized a clean user interface and optimized performance across all devices.",
    "image": "/portfolio/angular-15-developer.png",
    "aiHint": "responsive web app, angular",
    "keywords": ["responsive design", "Angular", "web app", "UI/UX", "performance optimization"],
    "skills": ["Angular", "TypeScript", "CSS", "HTML"],
    "technologies": ["Angular", "Webpack"],
    "client": "B2B Service Provider"
  },
  {
    "title": "AI-Powered EdTech Platform",
    "description": "Developed AI-driven solutions to enhance content creation at OnlineCourseHost.com. Projects included streamlining course outlines and automating content to improve learner engagement and scale course materials.",
    "image": "/portfolio/edtech-developer.png",
    "aiHint": "ai in education, online learning platform",
    "keywords": ["AI", "EdTech", "online learning", "course creation", "content strategy"],
    "skills": ["Angular", "Node.js", "AI/ML", "JavaScript"],
    "technologies": ["Angular", "Node.js", "various AI libraries"],
    "client": "Educational Platform"
  }
]

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
