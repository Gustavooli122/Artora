import React, { createContext, useContext, useState, useEffect } from 'react';
import { slugify } from '../lib/utils';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};

const initialProducts = [
  // Halteres Ajustáveis
  {
    id: slugify('DALER ROWNEY Simply Sketchbook'),
    name: 'DALER ROWNEY Simply Sketchbook',
    description: `
### DALER ROWNEY Simply Sketchbook
- Sketchbook com papel de 100 g/m² ideal para desenhos, esboços e estudos. 
- Formato A5 com espiral para maior praticidade durante o uso. 
- Folhas resistentes que suportam lápis, canetas e técnicas secas. 
- Ótima opção para estudantes, iniciantes e artistas.
     `,

    price: 30.70,
    image: 'https://m.media-amazon.com/images/I/81lMs3U2x7L._AC_SL1500_.jpg',
    category: 'Sketchbooks',
    features:{frete:true,garantia:true, qualidade:false},
    rating: 4.8,
    reviewsCount: "500",
    affiliate_link: 'https://amzn.to/4ouIjID',
    relatedArticles: [slugify('Os 7 Melhores Sketchbooks para Iniciantes em 2026')]
  },
  {
    id: slugify('Sketchbook A5 100g') ,
    description: `
  ### Sketchbook A5 100g/m²
   - Sketchbook Canson ArTBook One com 98 folhas de alta qualidade. 
   - Papel 100 g/m² ideal para desenhos, rascunhos e ilustrações. 
   - Formato compacto A5, perfeito para levar na mochila. 
   - Excelente escolha para artistas, estudantes e amantes do desenho.
    `,
    name: 'Sketchbook A5 100g/m², Canson, ArTBook One, 98 Folhas',
    price: 42.30,
    image: 'https://m.media-amazon.com/images/I/71t5CLhl+ZL._AC_SL1500_.jpg',
    category: 'Sketchbooks',
    rating: 4.8,
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount:"12.000",
    affiliate_link: 'https://amzn.to/4aNA0ly',
    relatedArticles: [slugify('Os 7 Melhores Sketchbooks para Iniciantes em 2026')]
  },
  {
    id: slugify('Tilibra Caderno Espiral Capa Dura Universitário'),
    name: 'Tilibra - Caderno Espiral Capa Dura Universitário',
    description: `
### Tilibra - Caderno Espiral Capa Dura Universitário
   - Caderno universitário com 20 matérias e 320 folhas.
   - Capa dura resistente para maior durabilidade no dia a dia. 
   - Ideal para organizar diferentes disciplinas e projetos. 
   - Perfeito para estudantes que precisam de bastante espaço para anotações.
    `,
    price: 43.53,
     features:{frete:false,garantia:false, qualidade:false},
    image: 'https://m.media-amazon.com/images/I/41Y6r0eKP4L._AC_SL1200_.jpg',
    category: 'Cadernos',
    rating: 4.8,
    reviewsCount: "13.000",
    affiliate_link: 'https://amzn.to/4xwuLR7',
    relatedArticles: []
  },
  // Elásticos
  {
    id: slugify('Caderno Universitário Capa Dura Sem Pauta 1 Matéria 96 Folhas'),
    name: 'Caderno Universitário Capa Dura Sem Pauta 1 Matéria 96 Folhas',
    description: `
### Caderno Universitário Capa Dura Sem Pauta 
- Possui 96 folhas sem pauta para máxima liberdade criativa. 
- Ideal para desenhos, esboços, anotações e projetos. 
- Capa dura resistente e espiral para maior praticidade. 
- Tamanho universitário de 20 x 27,5 cm.`,
    price: 43.53,
     features:{frete:false,garantia:false, qualidade:false},
    image: 'https://m.media-amazon.com/images/I/41HAK6su-CL._AC_SL1000_.jpg',
    category: 'Cadernos',
    rating: 4.7,
    reviewsCount: 300,
    affiliate_link: 'https://amzn.to/3S6ACfS',
    relatedArticles: []
  },
  {
    id: slugify('Luva de Desenho para Mesa Digitalizadora Profissional'),
    name: 'Luva de Desenho para Mesa Digitalizadora Profissional',
    description: `para Tablet iPad e Papel Reduz Atrito Evita Manchas e Melhora Precisão.
### Marca	Genérico
 Sistema operacional	Windows
## Características especiais
Redução de atrito para traços mais suaves e precisos
## Usos específicos do produto	
Desenhar
Componentes incluídos	1 Luva para desenho
    `,
    price: 19.90,
    image: 'https://m.media-amazon.com/images/I/61PDY6MbiyL._AC_SL1500_.jpg',
    category: 'Arte digital',
    rating: 4.7,
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: 150,
    affiliate_link: 'https://amzn.to/43Dk6q4',
    relatedArticles: []
  },
  // Barras de Porta
  {
    id:slugify('MEKO Universal Stylus,Série Precision 2 em 1'),
    name: 'MEKO Universal Stylus,Série Precision 2 em 1',
    description: `
### MEKO Universal Stylus 2 em 1 
- Caneta touch compatível com celulares, tablets e notebooks. 
- Ponta precisa para desenhos, anotações e navegação. 
- Inclui 6 pontas de reposição para maior durabilidade. 
- Compatível com a maioria das telas capacitivas do mercado.
    `,
    price: 109.74,
    image: 'https://m.media-amazon.com/images/I/61RM7v6s+TL._AC_SL1151_.jpg',
    category: 'Arte digital',
    rating: 4.5,
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: "28.000",
    affiliate_link: 'https://amzn.to/4vRgGw0',
    relatedArticles: []
  },
  {
    id: slugify('Caderno Sem Pauta A5 Caderneta'),
    name: 'Caderno Sem Pauta A5 Caderneta',
    description: `
### Caderno Sem Pauta A5 Caderneta 
- Caderno compacto com 80 folhas sem pauta. 
- Capa dura com fechamento em elástico para maior proteção. 
- Ideal para anotações, desenhos e organização diária. 
- Formato portátil de 14 x 21 cm, fácil de transportar.
    `,
    price: 27.90,
    image: 'https://m.media-amazon.com/images/I/41IKH0t9GTL._AC_SL1192_.jpg',
    category: 'Cadernos',
    rating: 4.7,
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: 200,
    affiliate_link: 'https://amzn.to/4xQ281F',
    relatedArticles: [slugify('Os 7 Melhores Sketchbooks para Iniciantes em 2026')]
  },
  // Tapetes e Kettlebells
  {
    id: slugify('Lápis Grafite Nº 2HB'),
    name: 'Lápis Grafite Nº 2HB',
    description:` 
### Lápis Grafite Nº 2HB Faber-Castell 
- Kit com 6 EcoLápis grafite de alta qualidade. 
- Traço suave e preciso para escrita e desenho. 
- Fabricado com madeira reflorestada e acabamento resistente. 
- Ideal para estudantes, artistas e uso profissional.
    `
  ,
    price: 10.20,
    image: 'https://m.media-amazon.com/images/I/51Wys+21tmL._AC_SL1000_.jpg',
    category: 'Lapis grafite',
    rating: 4.8,
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: "Mais de 1.000",
    affiliate_link: 'https://amzn.to/449fisC',
    relatedArticles: []
  },{
    id: slugify('Kit de Desenho Profissional Completo com 42 Peças'),
    name: 'Kit de Desenho Profissional Completo com 42 Peças – Lápis Grafite para Desenho Artístico',
    description: `## Kit Lápis de Desenho Profissional – 42 Peças

* Conjunto completo com 42 peças para desenho artístico e técnico.
* Inclui lápis de diversas graduações: F, HB, B, 2H a 6H e 2B a 12B.
* Grafite de alta qualidade para traços suaves, precisos e uniformes.
* Acompanha estojo portátil em couro sintético para organização e transporte.
* Inclui acessórios essenciais como esfuminhos, borrachas e estilete.
* Ideal para iniciantes, estudantes de arte e artistas profissionais.

    `,
    price: 99.90,
    image: 'https://m.media-amazon.com/images/I/61zyeXZwH6L._AC_SL1325_.jpg',
    category: 'Lapis grafite',
    rating: "5.0",
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: "4",
    affiliate_link: 'https://amzn.to/449fisC',
    relatedArticles: []
  },
  {
    id: slugify('Confetti Caderno com divisórias, 8023 HPP, Capa Preto'),
    name: 'Confetti - Caderno com divisórias, 8023 HPP, Capa Preto',
    description: `
## Caderno Confetti 8023 HPP com Divisórias

* Caderno com divisórias internas para organizar matérias, projetos e anotações.
* Capa em polipropileno (PP), resistente a rasgos e à umidade.
* Facilita a separação de conteúdos e o acesso rápido às informações.
* Ideal para estudantes, profissionais e uso diário.
* Design prático e funcional para manter suas anotações sempre organizadas.
* Excelente opção para quem busca durabilidade e praticidade.`
,
    price: 41.58,
    image: 'https://m.media-amazon.com/images/I/61wmTaGXNGL._AC_SL1500_.jpg',
    category: 'Cadernos',
    rating: 4.9,
     features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: "2.400",
    affiliate_link: 'https://amzn.to/4exEH4f',
    relatedArticles: []
  },
  {
    id: slugify('Mesa Digitalizadora One By Wacom CTL472'),
    name: 'Mesa Digitalizadora One By Wacom CTL472',
    description: `# Wacom One CTL-472

A **Wacom One CTL-472** é uma mesa digitalizadora desenvolvida para proporcionar precisão, conforto e praticidade em desenhos, ilustrações, edições de imagem e anotações digitais.

## Principais Características

* Área ativa de **21,6 x 13,5 cm** para maior liberdade durante o uso.
* Caneta sensível à pressão para traços naturais e precisos.
* Ideal para desenho digital, design gráfico, edição de imagens e estudos.
* Design compacto, leve e confortável para uso prolongado.
* Compatível com diversos softwares criativos e educacionais.
* Excelente opção para iniciantes e profissionais.
`,
    price: 285.32,
    image: 'https://m.media-amazon.com/images/I/71+xzUu92ZL._AC_SL1500_.jpg',
    category: 'Arte digital',
    rating: 4.8,
    features:{frete:false,garantia:false, qualidade:false},
    reviewsCount: "20.000",
    affiliate_link: 'https://amzn.to/4a6xUgu',
    relatedArticles: []
  }
];

export const ProductProvider = ({ children }) => {

  const getProductById = (id) => initialProducts.find(p => p.id === id);
 
  const getProductsByCategory = (category) => {
    if (!category) return initialProducts;
    return initialProducts.filter(p => p.category === category);
  };

  const getAllCategories = () => [...new Set(initialProducts.map(p => p.category))];

  return (
    <ProductContext.Provider value={{
      initialProducts,
      getProductById,
      getProductsByCategory,
      getAllCategories
    }}>
      {children}
    </ProductContext.Provider>
  );
};