import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
      <span className="font-headline">Vinicius Périco</span>
    </Link>
  );
}
