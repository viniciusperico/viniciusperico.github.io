import Image from 'next/image';
import { PageSectionTitle } from '@/components/page-section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import { Badge } from '@/components/ui/badge';

const currentlyLearning = [
  'Git e GitHub',
  'Front-end - HTML, CSS, JavaScript, React',
  'Dashboards no Python com Streamlit e Dash',
  'N8N',
  'PHP',
];

export function AboutSection() {
  const profileImageUrl = "https://raw.githubusercontent.com/viniciusperico/perico/main/public/profile-photo.png";

  return (
    <SectionWrapper id="sobre" className="bg-card">
      <PageSectionTitle
        title="Sobre Mim"
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 group">
          <Image
            src={profileImageUrl}
            alt="Foto de Vinicius Perico"
            fill
            className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            data-ai-hint="young professional graduate"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed text-justify">
            Atualmente cursando <span className="font-semibold text-primary">Sistemas de Informação</span> no Instituto Federal do Paraná, sou um entusiasta da tecnologia com experiência em desenvolvimento web, incluindo <span className="font-semibold text-primary">JavaScript, React e Python</span>.</p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed text-justify">
            Acredito que a tecnologia tem o poder de transformar ideias em realidade e estou sempre em busca de aprender coisas novas. Se você tem um projeto bacana ou uma oportunidade que se encaixa no meu perfil, vamos conversar!
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Aprendizados em Andamento</h3>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <Badge key={item} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
