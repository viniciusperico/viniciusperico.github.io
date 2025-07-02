import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <MainNav />
      </div>
    </header>
  );
}
