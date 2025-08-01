import Link from 'next/link';
import { Mountain, Twitter, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Link href="#" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="text-lg font-bold">Evolved Agency</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Engineering Excellence, Operational Finesse.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#expertise" className="text-sm hover:underline text-primary-foreground/80">Expertise</Link></li>
              <li><Link href="#portfolio" className="text-sm hover:underline text-primary-foreground/80">Portfolio</Link></li>
              <li><Link href="#team" className="text-sm hover:underline text-primary-foreground/80">Team</Link></li>
              <li><Link href="#contact" className="text-sm hover:underline text-primary-foreground/80">Contact</Link></li>
            </ul>
          </div>
           <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-sm hover:underline text-primary-foreground/80">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:underline text-primary-foreground/80">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Evolved Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
