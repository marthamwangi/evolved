
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';
import React from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold">Evolved Agency</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          <Link href="#expertise" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Expertise
          </Link>
          <Link href="#portfolio" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Portfolio
          </Link>
          <Link href="#team" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Team
          </Link>
          <Link href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Testimonials
          </Link>
          <Link href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#contact">Get a Proposal</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold" onClick={closeSheet}>
                  <Mountain className="h-6 w-6" />
                  <span>Evolved Agency</span>
                </Link>
                <Link href="#expertise" className="hover:text-foreground" onClick={closeSheet}>
                  Expertise
                </Link>
                <Link href="#portfolio" className="text-muted-foreground hover:text-foreground" onClick={closeSheet}>
                  Portfolio
                </Link>
                <Link href="#team" className="text-muted-foreground hover:text-foreground" onClick={closeSheet}>
                  Team
                </Link>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground" onClick={closeSheet}>
                  Testimonials
                </Link>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground" onClick={closeSheet}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
