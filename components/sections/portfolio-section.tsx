import Image from 'next/image';
import { PageSectionTitle } from '@/components/page-section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Terminal } from 'lucide-react';
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

  const projects: GitHubRepo[] = [];
  let apiError: string | null = null;

  for (const repoName of repoNames) {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, { headers });
      if (!response.ok) {
        let errorMessage = `Erro ao buscar o projeto "${repoName}": ${response.status} ${response.statusText}.`;
        if (response.status === 403) {
          apiError = 'Você atingiu o limite de requisições da API do GitHub. Por favor, configure uma variável de ambiente GITHUB_TOKEN para aumentar o limite e visualizar seus projetos.';
        } else if (response.status === 404) {
            apiError = `Repositório "${repoName}" não encontrado. Verifique se o nome está correto e se o repositório é público.`;
        } else {
            apiError = errorMessage;
        }
        console.error(apiError);
        break; // Stop fetching if an error occurs
      }
      const data = await response.json();
      projects.push(data as GitHubRepo);
    } catch (error) {
      const errorMessage = `Falha ao buscar o projeto "${repoName}": ${error instanceof Error ? error.message : String(error)}`;
      console.error(errorMessage);
      apiError = "Ocorreu um erro de rede ao tentar buscar os projetos do GitHub.";
      break;
    }
  }
  return { projects, error: apiError };
}

const featuredProjectsConfig = [
    { name: 'SiteCafeDoUrso', image: '/projects/site-cafe-do-urso.png', "data-ai-hint": "coffee shop website" },
    { name: 'ReciboCIS', image: '/projects/recibo-cis.png', "data-ai-hint": "receipt generator app" },
    { name: 'FlipClocker', image: '/projects/flip-clocker.png', "data-ai-hint": "flip clock interface" },
    { name: 'GeradorQRCode', image: '/projects/gerador-qr-code.png', "data-ai-hint": "qr code generator" },
    { name: 'GeradorTabuadaJS', image: '/projects/tabuada.png', "data-ai-hint": "calculator app" },
    { name: 'LinkHub', image: '/projects/linkhub.png', "data-ai-hint": "linkhub" },
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
            // Encontra a imagem customizada para o projeto atual, ou usa um placeholder.
            const projectConfig = featuredProjectsConfig.find(p => p.name === item.name);
            const imageUrl = projectConfig?.image || "https://placehold.co/600x400.png";
            const imageHint = projectConfig?.['data-ai-hint'] || "software project abstract";

            return (
              <Card key={item.id} className="group overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col bg-card/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative aspect-video bg-muted/50">
                    <Image
                      src={imageUrl}
                      alt={`Imagem do projeto ${item.name}`}
                      fill
                      data-ai-hint={imageHint}
                      className="object-contain blur-sm group-hover:blur-none transition-all duration-300 p-2"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <CardTitle className="text-xl font-semibold text-primary mb-2 font-headline">{item.name}</CardTitle>
                  <p className="text-foreground/80 text-sm leading-relaxed min-h-[5rem]">
                    {item.description || 'Sem descrição disponível.'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                    <Link href={item.html_url} target="_blank" rel="noopener noreferrer">
                      Ver no GitHub <Github className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
