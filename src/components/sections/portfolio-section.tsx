import Image from 'next/image';
import { PageSectionTitle } from '@/components/page-section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Terminal, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

interface FetchProjectsResult {
  projects: GitHubRepo[];
  error: string | null;
}

// Fetches specific repositories from GitHub for a given user.
async function getFeaturedGithubProjects(username: string, repoNames: string[], token?: string): Promise<FetchProjectsResult> {
  if (!username || username === 'seu-usuario-padrao') {
    const error = "O nome de usuário do GitHub não está configurado.";
    console.warn(error);
    return { projects: [], error };
  }
  if (repoNames.length === 0) {
    return { projects: [], error: null };
  }

  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };
  if (token && token !== 'COLE_SEU_TOKEN_AQUI') {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const projectPromises = repoNames.map(async (repoName) => {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, { headers, next: { revalidate: 3600 } });
      if (!response.ok) {
        // Create a custom error object to pass status info
        const error: any = new Error(`Erro ao buscar o projeto "${repoName}": ${response.status} ${response.statusText}.`);
        error.status = response.status;
        error.repoName = repoName;
        throw error;
      }
      return response.json();
    });

    const projectsData = await Promise.all(projectPromises);
    const projects = projectsData as GitHubRepo[];
    return { projects, error: null };

  } catch (error: any) {
    console.error(error.message);
    let apiError: string;
    
    if (error.status === 403) {
      apiError = 'Você atingiu o limite de requisições da API do GitHub. Por favor, configure uma variável de ambiente GITHUB_TOKEN para aumentar o limite e visualizar seus projetos.';
    } else if (error.status === 404) {
      apiError = `Repositório "${error.repoName}" não encontrado. Verifique se o nome está correto e se o repositório é público.`;
    } else if (error instanceof TypeError) { // This will catch network errors from fetch
      apiError = "Ocorreu um erro de rede ao tentar buscar os projetos do GitHub.";
    } else {
      apiError = "Ocorreu um erro desconhecido ao buscar os projetos do GitHub. Verifique o console de build.";
    }
    
    return { projects: [], error: apiError };
  }
}

// Adicione o link do seu projeto publicado em 'live_url'. Se o link estiver vazio ou for '#', o botão não aparecerá.
const featuredProjectsConfig = [
    { name: 'SiteCafeDoUrso', image: '/projects/site-cafe-do-urso.png', "data-ai-hint": "coffee shop website", live_url: '' },
    { name: 'ReciboCIS', image: '/projects/recibo-cis.png', "data-ai-hint": "receipt generator app", live_url: '' },
    { name: 'FlipClocker', image: '/projects/flip-clocker.png', "data-ai-hint": "flip clock interface", live_url: 'https://flip-clocker.vercel.app/' },
    { name: 'GeradorQRCode', image: '/projects/gerador-qr-code.png', "data-ai-hint": "qr code generator", live_url: 'https://gerador-qr-code-581l.vercel.app/' },
    { name: 'GeradorTabuadaJS', image: '/projects/tabuada.png', "data-ai-hint": "calculator app", live_url: 'https://calculadora-js-blush.vercel.app/' },
    { name: 'LinkHub', image: '/projects/linkhub.png', "data-ai-hint": "linkhub", live_url: 'https://link-hub-app-sand.vercel.app/' },
];

export async function PortfolioSection() {
  const githubUsername = 'viniciusperico';
  const githubToken = process.env.GITHUB_TOKEN;
  
  // Extrai os nomes dos repositórios para buscar na API do GitHub
  const featuredRepoNames = featuredProjectsConfig.map(p => p.name);

  const { projects, error } = await getFeaturedGithubProjects(githubUsername, featuredRepoNames, githubToken);

  const showNoProjectsListed = featuredRepoNames.length === 0 && !error;
  const showLoadingError = !!error;
  const showNoProjectsLoaded = projects.length === 0 && featuredRepoNames.length > 0 && !error;

  return (
    <SectionWrapper id="projetos">
      <PageSectionTitle
        title="Meus Projetos no GitHub"
      />

      {showLoadingError && (
        <Alert variant="destructive" className="mb-8">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erro ao Carregar Projetos</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}

      {showNoProjectsListed && (
        <div className="text-center text-foreground/70 bg-card/50 p-6 rounded-lg shadow">
          <p className="mb-2">Por favor, configure os repositórios que deseja exibir.</p>
          <p>Abra o arquivo <code>src/components/sections/portfolio-section.tsx</code> e adicione seus projetos na lista <code>featuredProjectsConfig</code>.</p>
        </div>
      )}
      
      {projects.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => {
            const projectConfig = featuredProjectsConfig.find(p => p.name === item.name);
            const imageUrl = projectConfig?.image ? projectConfig.image : `https://placehold.co/600x400.png`;
            const imageHint = projectConfig?.['data-ai-hint'] || "software project abstract";

            return (
              <Card key={item.id} className="group overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col bg-card/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden bg-muted/50">
                    <Image
                      src={imageUrl}
                      alt={`Imagem do projeto ${item.name}`}
                      fill
                      data-ai-hint={imageHint}
                      className="object-contain transition-all duration-500 group-hover:scale-110 blur-sm group-hover:blur-none"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <CardTitle className="text-xl font-semibold text-primary mb-2 font-headline">{item.name}</CardTitle>
                  <p className="text-foreground/80 text-sm leading-relaxed min-h-[5rem]">
                    {item.description || 'Sem descrição disponível.'}
                  </p>
                </CardContent>
                <CardFooter className="flex-col w-full gap-2 pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                    <Link href={item.html_url} target="_blank" rel="noopener noreferrer">
                      Ver no GitHub <Github className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {projectConfig?.live_url && projectConfig.live_url !== '#' && (
                     <Button asChild className="w-full">
                        <Link href={projectConfig.live_url} target="_blank" rel="noopener noreferrer">
                           Visualizar Projeto <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                     </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      {showNoProjectsLoaded && (
         <div className="text-center text-foreground/70 bg-card/50 p-6 rounded-lg shadow">
          <p>Nenhum projeto foi carregado.</p>
          <p>Verifique se os nomes dos repositórios em <code>featuredProjectsConfig</code> estão corretos, se eles são públicos e se a variável GITHUB_TOKEN está configurada corretamente.</p>
        </div>
      )}
    </SectionWrapper>
  );
}
