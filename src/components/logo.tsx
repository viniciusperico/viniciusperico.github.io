import Link from 'next/link';

export function Logo() {
  // O link agora é para a raiz. O `basePath` do Next.js cuidará de adicionar "/perico" no site publicado.
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
      <span className="font-headline">Vinicius Périco</span>
    </Link>
  );
}
