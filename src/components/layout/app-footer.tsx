import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/viniciusperico', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/viniciusperico/', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/viniciusperico/', icon: Instagram },
  { name: 'Email', href: 'mailto:viniciuspericoo@gmail.com', icon: Mail },
];

export function AppFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-foreground/70">
          &copy; {new Date().getFullYear()} Vinicius Perico.
        </p>
      </div>
    </footer>
  );
}
