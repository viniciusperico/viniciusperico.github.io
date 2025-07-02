# Meu Portfólio com Next.js

Este é um portfólio pessoal construído com Next.js, React, Tailwind CSS e ShadCN UI, desenvolvido no Firebase Studio.

## Publicação Automática com GitHub Actions

Este projeto está configurado para ser publicado no seu repositório de usuário do GitHub (`viniciusperico.github.io`), o que o tornará disponível no endereço principal: **https://viniciusperico.github.io**.

A publicação é automática. Sempre que você enviar alterações para a branch `main`, o site será atualizado.

### Passo 1: Organizar Suas Imagens

Para que as imagens apareçam corretamente no site publicado, elas precisam estar no seu repositório do GitHub, dentro da pasta `public`.

1.  Na raiz do seu projeto (fora da pasta `src`), crie uma pasta chamada `public`.
2.  Dentro da pasta `public`, coloque sua foto de perfil (`profile-photo.png`).
3.  Ainda dentro de `public`, crie outra pasta chamada `projects` e mova todas as imagens dos seus projetos para dentro dela.

A estrutura final deve ser assim:
```
/
├── public/
│   ├── profile-photo.png
│   └── projects/
│       ├── site-cafe-do-urso.png
│       ├── recibo-cis.png
│       └── ... (outras imagens)
├── src/
└── ... (outros arquivos)
```

### Passo 2: Enviar o Código para o GitHub

Use os comandos Git para salvar e enviar suas alterações. Isso irá iniciar a publicação automática.

```bash
# Adiciona todos os arquivos
git add .

# Cria um "ponto de salvamento" com uma mensagem
git commit -m "Atualizando o site"

# Envia para a branch principal do GitHub
git push origin main
```

### Passo 3: Configurar o GitHub Pages (Apenas na Primeira Vez)

Após o primeiro `push`, você precisa dizer ao GitHub para usar o "GitHub Actions" para publicar seu site.

1.  No seu repositório no GitHub (`viniciusperico.github.io`), vá para **Settings > Pages**.
2.  Em "Build and deployment", na seção "Source", selecione a opção **GitHub Actions**.

É isso! Após alguns minutos, seu site estará no ar no endereço principal.
