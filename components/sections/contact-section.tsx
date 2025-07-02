
import { PageSectionTitle } from '@/components/page-section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <SectionWrapper id="contato">
      <PageSectionTitle
        title="Entre em Contato"
        description=""
      />
      <div className="max-w-lg mx-auto bg-card/50 p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <ul className="space-y-4">
            <li className="flex items-center justify-start">
              <Mail className="h-6 w-6 mr-3 text-primary" />
              <a href="mailto:viniciusbritoperico12@gmail.com" className="text-base sm:text-lg text-foreground/90 hover:text-primary transition-colors">viniciusbritoperico12@gmail.com</a>
            </li>
            <li className="flex items-center justify-start">
              <Linkedin className="h-6 w-6 mr-3 text-primary" />
              <a href="https://www.linkedin.com/in/vinicius-périco-b6262329b/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-foreground/90 hover:text-primary transition-colors">LinkedIn</a>
            </li>
            <li className="flex items-center justify-start">
              <Github className="h-6 w-6 mr-3 text-primary" />
              <a href="https://github.com/viniciusperico" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-foreground/90 hover:text-primary transition-colors">GitHub</a>
            </li>
             <li className="flex items-center justify-start">
              <Instagram className="h-6 w-6 mr-3 text-primary" />
              <a href="https://www.instagram.com/vinicius_perico/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-foreground/90 hover:text-primary transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
