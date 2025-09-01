# Guia de Configuração - Site Confidence

Este documento contém instruções detalhadas para configurar o site após o desenvolvimento.

## 🔧 Configurações Obrigatórias

### 1. Google Analytics 4

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma nova propriedade para o site
3. Copie o ID de medição (formato: G-XXXXXXXXXX)
4. Edite `src/components/Analytics.jsx`:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-SEU_ID_AQUI';
   ```

### 2. Google Ads

1. Acesse [Google Ads](https://ads.google.com/)
2. Configure o acompanhamento de conversões
3. Copie o ID de conversão (formato: AW-XXXXXXXXXX)
4. Edite `src/components/Analytics.jsx`:
   ```javascript
   const AW_CONVERSION_ID = 'AW-SEU_ID_AQUI';
   ```

### 3. Facebook Pixel

1. Acesse [Facebook Business](https://business.facebook.com/)
2. Vá em Gerenciador de Eventos > Pixels
3. Copie o ID do Pixel
4. Edite `src/components/Analytics.jsx`:
   ```javascript
   const FACEBOOK_PIXEL_ID = 'SEU_PIXEL_ID_AQUI';
   ```

### 4. Formulário de Contato (Formspree)

1. Acesse [Formspree](https://formspree.io/)
2. Crie uma conta e um novo formulário
3. Copie a URL do endpoint
4. Edite `src/components/Contact.jsx`:
   ```javascript
   const formspreeUrl = 'https://formspree.io/f/SEU_FORM_ID';
   ```

### 5. WhatsApp

1. Edite `src/components/WhatsAppFloat.jsx`:
   ```javascript
   const phoneNumber = '5511999999999'; // Formato: 55 + DDD + número
   ```

## 📝 Configurações de Conteúdo

### Informações da Empresa

Edite `src/components/Contact.jsx` para atualizar:

```javascript
// Endereço
Rua das Empresas, 123
Centro Empresarial
São Paulo - SP, 01234-567

// Telefone
(11) 9999-9999

// E-mail
contato@confidence.com.br

// Horários
Segunda a Sexta: 8h às 18h
Sábado: 8h às 12h
```

### Logo da Empresa

1. Substitua o arquivo `src/assets/logo.png`
2. Mantenha o formato PNG com fundo transparente
3. Tamanho recomendado: 200x60px

### Prova Social

Edite `src/components/Hero.jsx` para adicionar logos de clientes reais:

```javascript
// Substitua "Empresa A", "Empresa B", etc. por nomes reais
// Ou adicione logos reais das empresas
```

## 🎨 Personalização Visual

### Cores

Edite `tailwind.config.js` para personalizar a paleta:

```javascript
colors: {
  primary: {
    50: '#f0fdf4',   // Verde muito claro
    100: '#dcfce7',  // Verde claro
    // ... até
    900: '#14532d',  // Verde escuro
  }
}
```

### Fontes

Para alterar a fonte, edite `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'SuaFonte', system-ui, sans-serif;
}
```

## 🗺️ Google Maps

Para adicionar um mapa real:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Ative a API do Google Maps
3. Gere uma chave de API
4. Edite `src/components/Contact.jsx` e substitua:

```javascript
// Substitua o placeholder por um iframe real do Google Maps
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="256"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

## 📊 Configuração de Eventos de Conversão

### Google Ads

Configure eventos de conversão para:
- Envio de formulário
- Clique no WhatsApp
- Tempo de permanência na página

### Facebook Pixel

Configure eventos personalizados:
- Lead (envio de formulário)
- Contact (clique no WhatsApp)
- ViewContent (visualização de serviços)

## 🔒 Políticas de Privacidade

1. Crie páginas para:
   - Política de Privacidade
   - Termos de Uso
   - Política de Cookies

2. Atualize os links no footer (`src/components/Footer.jsx`)

## 🚀 Deploy e Domínio

### 1. Build de Produção

```bash
npm run build
```

### 2. Upload dos Arquivos

Faça upload da pasta `dist/` para seu servidor web.

### 3. Configuração do Servidor

Para SPAs (Single Page Applications), configure o servidor para:
- Redirecionar todas as rotas para `index.html`
- Habilitar compressão gzip
- Configurar cache para assets estáticos

### 4. SSL/HTTPS

- Configure certificado SSL
- Redirecione HTTP para HTTPS
- Atualize URLs nas configurações de analytics

## ✅ Checklist Pré-Launch

- [ ] Google Analytics configurado e testado
- [ ] Google Ads tracking funcionando
- [ ] Facebook Pixel ativo
- [ ] Formulário de contato testado
- [ ] WhatsApp com número correto
- [ ] Logo da empresa atualizado
- [ ] Informações de contato corretas
- [ ] Teste de responsividade completo
- [ ] Teste de velocidade (PageSpeed Insights)
- [ ] SSL configurado
- [ ] Domínio apontando corretamente

## 📞 Suporte Técnico

Para dúvidas sobre a configuração, consulte:
- Documentação do Google Analytics
- Documentação do Google Ads
- Documentação do Facebook Business
- Documentação do Formspree

---

**Importante**: Teste todas as configurações em ambiente de desenvolvimento antes de fazer deploy em produção.

