# Meu Portfólio com Next.js

Este é um portfólio pessoal construído com Next.js, React, Tailwind CSS e ShadCN UI, desenvolvido no Firebase Studio.

## Como Rodar Localmente

1.  **Clone o repositório do GitHub:**
    ```bash
    git clone https://github.com/viniciusperico/perico.git
    ```
2.  **Acesse o diretório:**
    ```bash
    cd perico
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:9002](http://localhost:9002) no seu navegador para ver o site.

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
