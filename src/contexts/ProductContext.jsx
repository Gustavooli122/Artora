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
    description: 'Papel para Desenho em Caderneta, com Espiral, Tamanho A5, Gramatura 100 g/m²',
    price: 30.70,
    image: 'https://m.media-amazon.com/images/I/81lMs3U2x7L._AC_SL1500_.jpg',
    category: 'Desenho',
    rating: 4.8,
    reviewsCount: "500",
    affiliate_link: 'https://amzn.to/4ouIjID',
    relatedArticles: [slugify('Os 7 Melhores Sketchbooks para Iniciantes em 2026')]
  },
  {
    id: slugify('Sketchbook A5 100g') ,
    name: 'Sketchbook A5 100g/m²',
    description: 'Canson, ArTBook One, 98 Folhas',
    price: 42.30,
    image: 'https://m.media-amazon.com/images/I/71t5CLhl+ZL._AC_SL1500_.jpg',
    category: 'Desenho',
    rating: 4.8,
    reviewsCount:"12.000",
    affiliate_link: 'https://amzn.to/4aNA0ly',
    relatedArticles: [slugify('Os 7 Melhores Sketchbooks para Iniciantes em 2026')]
  },
  {
    id: slugify('Tilibra Caderno Espiral Capa Dura Universitário'),
    name: 'Tilibra - Caderno Espiral Capa Dura Universitário',
    description: '20 Matérias Zip Preto 320 Folhas',
    price: 43.53,
    image: 'https://m.media-amazon.com/images/I/41Y6r0eKP4L._AC_SL1200_.jpg',
    category: 'Papelaria',
    rating: 4.8,
    reviewsCount: "13.000",
    affiliate_link: 'https://amzn.to/4xwuLR7',
    relatedArticles: []
  },
  // Elásticos
  {
    id: slugify('Caderno Universitário Capa Dura Sem Pauta 1 Matéria 96 Folhas'),
    name: 'Caderno Universitário Capa Dura Sem Pauta 1 Matéria 96 Folhas',
    description: `Páginas em branco com Infinitas possibilidades Ideal para notas, esboços e muito mais!
96 folhas sem pauta com capa dura e espiral
Tamanho universitário(20 x 27,5 cm).`,
    price: 43.53,
    image: 'https://m.media-amazon.com/images/I/41HAK6su-CL._AC_SL1000_.jpg',
    category: 'Papelaria',
    rating: 4.7,
    reviewsCount: 300,
    affiliate_link: 'https://amzn.to/3S6ACfS',
    relatedArticles: []
  },
  {
    id: slugify('Luva de Desenho para Mesa Digitalizadora Profissional'),
    name: 'Luva de Desenho para Mesa Digitalizadora Profissional',
    description: `para Tablet iPad e Papel Reduz Atrito Evita Manchas e Melhora Precisão.
 ## Marca	Genérico
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
    reviewsCount: 150,
    affiliate_link: 'https://amzn.to/43Dk6q4',
    relatedArticles: []
  },
  // Barras de Porta
  {
    id:slugify('MEKO Universal Stylus,Série Precision 2 em 1'),
    name: 'MEKO Universal Stylus,Série Precision 2 em 1',
    description: `Canetas de tela sensível ao toque para todas as telas sensíveis ao toque capacitivas, celulares, tablets, laptops, pacote com 6 pontas de substituição
    `,
    price: 109.81,
    image: 'https://m.media-amazon.com/images/I/61RM7v6s+TL._AC_SL1151_.jpg',
    category: 'Arte digital',
    rating: 4.5,
    reviewsCount: "28.000",
    affiliate_link: 'https://amzn.to/4vRgGw0',
    relatedArticles: []
  },
  {
    id: 'p7',
    name: 'Barra Fixa Multifuncional Heavy Duty',
    description: 'Múltiplas pegadas para variações de exercícios. Estrutura reforçada que permite exercícios abdominais e flexões de braço no chão.',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1590239683542-02b00a999f50',
    category: 'Papelaria',
    rating: 4.9,
    reviewsCount: 98,
    affiliate_link: '#',
    relatedArticles: ['a6', 'a1']
  },
  // Tapetes e Kettlebells
  {
    id: slugify('Lápis Grafite Nº 2HB'),
    name: 'Lápis Grafite Nº 2HB',
    description: 'Faber-Castell, SM/1210AZ, EcoLápis, Azul, 6 Unidades',
    price: 10.20,
    image: 'https://m.media-amazon.com/images/I/51Wys+21tmL._AC_SL1000_.jpg',
    category: 'Desenho',
    rating: 4.8,
    reviewsCount: "Mais de 1.000",
    affiliate_link: 'https://amzn.to/449fisC',
    relatedArticles: ['a1', 'a3']
  },
  {
    id: 'p9',
    name: 'Kettlebell Ferro Fundido 8kg',
    description: 'Acabamento em pintura eletrostática e base plana para estabilidade. Perfeito para iniciantes em swings e agachamentos.',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1659134202480-800452946338',
    category: 'Papelaria',
    rating: 4.9,
    reviewsCount: 67,
    affiliate_link: '#',
    relatedArticles: ['a4']
  },
  {
    id: 'p10',
    name: 'Kettlebell Competição 16kg',
    description: 'Padrão oficial de competição com dimensões uniformes. Alça polida para transições suaves sem machucar as mãos.',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1659134202480-800452946338',
    category: 'Arte digital',
    rating: 5.0,
    reviewsCount: 45,
    affiliate_link: '#',
    relatedArticles: ['a4', 'a2']
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