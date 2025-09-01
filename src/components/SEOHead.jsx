import { useEffect } from 'react';
import { textosInstitucionais } from '../config/institucional';

const SEOHead = ({ 
  title = textosInstitucionais.titulo,
  description = textosInstitucionais.descricao,
  keywords = "PVC, forros, divisórias, montagem, construção civil, Marcos PVC",
  ogImage = "/og-image.jpg",
  url = "https://marcospvc.com.br/"
}) => {
  useEffect(() => {
    // Atualizar título da página
    document.title = title;
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Atualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Atualizar Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    // Atualizar Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', url);
    }
  }, [title, description, keywords, ogImage, url]);

  return null;
};

export default SEOHead;

