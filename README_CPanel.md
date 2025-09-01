# Deploy do Site Confidence em Hospedagem Compartilhada (cPanel)

Este guia explica como publicar seu site React/Vite em uma hospedagem compartilhada com cPanel.

## 1. Build de Produção

No seu computador, execute:
```bash
npm run build
```
Isso irá gerar a pasta `dist` com os arquivos otimizados para produção.

## 2. Acesso ao cPanel

- Faça login no painel cPanel da sua hospedagem.
- Acesse o **Gerenciador de Arquivos**.
- Entre na pasta `public_html` (ou a pasta do seu domínio).

## 3. Upload dos Arquivos

- Faça upload de todo o conteúdo da pasta `dist` para a pasta `public_html`.
- Você pode compactar a pasta `dist` em um `.zip`, enviar e depois extrair no servidor.

## 4. Configuração de SPA (Single Page Application)

Para garantir que todas as rotas do site funcionem corretamente, crie um arquivo `.htaccess` na pasta `public_html` com o seguinte conteúdo:

```apacheconf
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Isso faz com que todas as URLs sejam redirecionadas para o `index.html`, permitindo navegação SPA.

## 5. Finalização

- Acesse seu domínio para verificar se o site está funcionando.
- Limpe o cache do navegador se necessário.

## 6. Dicas
- Sempre faça o build localmente antes de subir para o servidor.
- Se atualizar o site, repita o processo de build e upload.
- Para dúvidas, consulte o suporte da sua hospedagem ou a documentação do cPanel.

---
**Site desenvolvido com React, Vite e Tailwind CSS.**
