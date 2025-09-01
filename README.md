
# Site MarcosPVC

Site institucional moderno, responsivo e otimizado para campanhas de Google Ads para MarcosPVC, especialista em forros de PVC, portas e janelas sob medida.


## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processador CSS
- **Autoprefixer** - Plugin para compatibilidade de navegadores


## 📋 Funcionalidades

### 🎯 Landing Page Otimizada
- Hero section com título e chamada para ação
- Seção de serviços
- Galeria de fotos
- Seção "Sobre" com diferenciais
- Formulário de contato integrado
- WhatsApp flutuante

### 📱 Design Responsivo
- Layout mobile-first
- Menu hambúrguer para navegação mobile
- Componentes otimizados para todos os dispositivos

### 🔍 SEO Otimizado
- Meta tags completas
- Open Graph e Twitter Cards
- URLs amigáveis
- Títulos e descrições otimizados

### 📊 Integração de Marketing
- Google Analytics 4 preparado
- Google Ads conversion tracking
- Facebook Pixel integrado

git clone [URL_DO_REPOSITORIO]

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre no diretório
cd marcospvc

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```


## 📁 Estrutura do Projeto

```
marcospvc.com.br/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── send-form.php
│   ├── sitemap.xml
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo-marcospvc.png
│   │   └── react.svg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Analytics.jsx
│   │   ├── Catalog.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Location.jsx
│   │   ├── SEOHead.jsx
│   │   ├── Services.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── config/
│   │   └── institucional.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── .gitignore
```


## ⚙️ Configurações Necessárias

### 1. Analytics e Tracking
Edite o arquivo `src/components/Analytics.jsx` e substitua os IDs pelos valores reais:

```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Google Analytics
const AW_CONVERSION_ID = 'AW-XXXXXXXXXX'; // Google Ads
const FACEBOOK_PIXEL_ID = 'XXXXXXXXXX'; // Facebook Pixel
```

### 2. Formulário de Contato
Edite o arquivo `src/components/Contact.jsx` e configure o endpoint de envio:

```javascript
const formAction = '/send-form.php';
```

### 3. WhatsApp
Edite o arquivo `src/components/WhatsAppFloat.jsx`:

```javascript
const phoneNumber = '5511999999999'; // Número real
```


## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  amarelo: '#ffeb00',
  // Outras cores personalizadas
}
```

### Conteúdo
- **Logo**: Substitua o arquivo `src/assets/logo-marcospvc.png`
- **Informações institucionais**: Edite em `src/config/institucional.js`
- **Informações de contato**: Atualize no componente `Contact.jsx`


## 📈 Performance

- **Vite** para build otimizado
- **Tailwind CSS** para CSS eficiente
- **Lazy loading** para imagens
- **Code splitting** automático do React



## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS/Android)


## 🚀 Deploy

### Opções de Deploy
1. **Vercel**
2. **Netlify**
3. **GitHub Pages**
4. **Servidor próprio**

### Build de Produção
```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.



---

**Desenvolvido com ❤️ para MarcosPVC**

