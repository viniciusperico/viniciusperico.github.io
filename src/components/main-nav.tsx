"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React from 'react';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export function MainNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          // Adaptação para destacar a seção visível ao rolar, se implementado no futuro.
          // Por ora, o destaque exato por href no pathname pode não funcionar perfeitamente com IDs de seção.
          (pathname === '/' && item.href === '#inicio') || pathname === item.href ? 'text-primary' : 'text-foreground/80',
          isMobile ? 'block py-2 text-lg' : ''
        )}
      >
        {item.label}
      </Link>
    ))
  );

  return (
    <>
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <NavLinks />
      </nav>
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <div className="flex flex-col space-y-4 p-6">
              <NavLinks isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
