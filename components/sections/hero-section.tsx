import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDownCircle } from 'lucide-react'; // Sparkles para um toque inovador

export function HeroSection() {
  return (
    <section 
      id="inicio" // Adicionado ID para navegação
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden animate-fadeIn"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Olá, sou <span className="text-primary">Vinicius Périco</span>!
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-foreground/80 sm:text-xl md:mt-8 md:max-w-2xl">
        Tenho 23 anos, e estou no último ano da faculdade de Sistemas de Informação.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
            <Link href="#projetos">
              Meus Projetos <ArrowDownCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
            <Link href="#contato">
              Fale Comigo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
