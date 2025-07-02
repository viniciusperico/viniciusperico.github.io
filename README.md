# Meu Portfólio com Next.js

Este é um portfólio pessoal construído com Next.js, React, Tailwind CSS e ShadCN UI, desenvolvido no Firebase Studio.

## Como Publicar no GitHub Pages com GitHub Actions

Este projeto está configurado para ser publicado automaticamente no GitHub Pages sempre que você enviar alterações para a branch `main`.

**Passo 1: Enviar o Código Fonte para o GitHub**

Envie a versão mais recente do seu código para a branch principal (`main`) do seu repositório.

```bash
# Adiciona todos os arquivos modificados
git add .

# Cria um "ponto de salvamento" com uma mensagem
git commit -m "Minha última alteração"

# Envia para a branch principal do GitHub
git push origin main
```

**Passo 2: Configurar o GitHub Pages (apenas na primeira vez)**

Após o primeiro `push`, uma nova automação (Action) será iniciada. Para que ela publique seu site, você precisa configurar o GitHub Pages:

1.  No seu repositório no GitHub, vá em **Settings > Pages**.
2.  Em "Build and deployment", na seção "Source", selecione **GitHub Actions**.

Após alguns minutos, seu site estará disponível na URL do GitHub Pages: `https://viniciusperico.github.io/perico`.

A partir de agora, toda vez que você fizer um `git push origin main`, o site será atualizado automaticamente!

### Nota Importante Sobre Imagens

Se as imagens não estiverem aparecendo no seu site publicado, o motivo mais comum é que os arquivos de imagem (e.g., `.png`, `.jpg`) não foram adicionados ao seu repositório no GitHub.

**Como corrigir:**

1.  Na raiz do seu projeto (fora da pasta `src`), crie uma pasta chamada `public`.
2.  Dentro da pasta `public`, coloque sua foto de perfil (`profile-photo.png`).
3.  Ainda dentro de `public`, crie outra pasta chamada `projects` e mova todas as imagens dos seus projetos para dentro dela.
4.  Envie essas novas pastas e arquivos para o GitHub com os comandos `git add .`, `git commit`, e `git push`.

O GitHub Actions só consegue usar os arquivos que estão no repositório.
