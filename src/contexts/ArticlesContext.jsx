import React, { createContext, useContext, useState } from 'react';

import { slugify } from '../lib/utils';
const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
};

const initialArticles = [
  {
    id: slugify('Os 7 Melhores Sketchbooks para Iniciantes em 2026'),
    title: 'Os 7 Melhores Sketchbooks para Iniciantes em 2026',
    linksArticle:[],
    description: 'Analisamos os principais sketchbooks de 2026, com prós, contras e dicas para ajudar você a fazer a melhor escolha.',
content: `
# Os 7 Melhores Sketchbooks para Iniciantes em 2026

Escolher um bom sketchbook é uma das decisões mais importantes para quem está começando a desenhar. O sketchbook será o lugar onde você praticará fundamentos, registrará ideias e acompanhará sua evolução ao longo do tempo.



---

## Como escolhemos os sketchbooks?

Antes de analisar os modelos, é importante entender alguns critérios:

### Gramatura

- 90g a 100g: ideal para grafite e estudos rápidos.
- 120g a 140g: suporta canetas e marcadores leves.
- 180g+: indicado para técnicas úmidas e aquarela.

### Tamanho

- A5: portátil e fácil de carregar.
- A4: mais espaço para estudos detalhados.

### Encadernação

- Espiral: abre completamente.
- Capa dura costurada: mais durabilidade.

---

# 1. Canson ArTBook One A5

![Canson ArtBook One](https://m.media-amazon.com/images/I/71t5CLhl+ZL._AC_SL1500_.jpg)

[Ver preço na Amazon](https://amzn.to/4aAPgCj)



O ArTBook One é um dos sketchbooks mais recomendados para iniciantes graças ao excelente equilíbrio entre qualidade e preço.

### Prós

- Excelente custo-benefício
- Papel resistente
- Boa quantidade de folhas
- Fácil de encontrar

### Contras

- Não é ideal para aquarela pesada
- Marcadores muito fortes podem atravessar

---

# 2. Canson XL Croquis

![Canson XL Croquis](https://m.media-amazon.com/images/I/917xFa9NUnL._AC_SL1500_.jpg)

[Ver preço na Amazon](https://amzn.to/4eaqgEb)


A linha XL Croquis foi criada especialmente para estudantes de arte.

### Prós

- Muito acessível
- Ótimo para grafite
- Fácil de apagar

### Contras

- Não suporta técnicas úmidas
- Papel relativamente fino

---

# 3. Strathmore Série 400 Sketch

![Strathmore 400](https://m.media-amazon.com/images/I/61b7RiUCW6L._AC_SL1000_.jpg)

 [Ver preço na Amazon](https://amzn.to/4eoVoi2)

Uma das linhas mais tradicionais entre artistas e estudantes.

### Prós

- Papel premium
- Boa durabilidade
- Excelente para estudos

### Contras

- Mais caro
- Menos comum no Brasil

---

# 4. Hahnemühle Sketch Book

![Hahnemuhle Sketchbook](https://m.media-amazon.com/images/I/71RB3G1R1VL._AC_SL1500_.jpg)

[Ver preço na Amazon](https://amzn.to/4oy57HM)

Modelo muito respeitado por artistas profissionais.

### Prós

- Papel de alta qualidade
- Excelente acabamento
- Boa resistência

### Contras

- Preço elevado
- Nem sempre disponível

---

# 5. Moleskine Art Plus Sketchbook

![Moleskine Sketchbook](https://m.media-amazon.com/images/I/81eCXweNwnL._AC_SL1500_.jpg)

[Ver preço na Amazon](https://amzn.to/4oqumeS)

Muito popular entre ilustradores e desenhistas urbanos.

### Prós

- Design elegante
- Fácil transporte
- Excelente encadernação

### Contras

- Preço acima da média
- Não indicado para muita água

---

# 6. Canson XL Mix Media

![Canson XL Mix Media](https://m.media-amazon.com/images/I/71z5rzEtR4S._AC_SL1500_.jpg)

[ Ver preço na Amazon](https://amzn.to/4gkQNA6)

Ideal para quem deseja experimentar diferentes técnicas.

### Prós

- Muito versátil
- Boa resistência
- Ótimo para testes

### Contras

- Não substitui papel de aquarela
- Algumas versões são mais caras

---

# 7. Hahnemühle D&S Sketchbook

![Hahnemuhle D&S](https://m.media-amazon.com/images/I/61QzHYlfMRL._AC_SL1500_.jpg)

[Ver preço na Amazon](https://amzn.to/4vNFBjU)

Excelente opção para quem deseja evoluir para materiais mais avançados.

### Prós

- Papel resistente
- Ótimo acabamento
- Boa durabilidade

### Contras

- Valor elevado
- Pode ser exagero para iniciantes absolutos

---

# Qual sketchbook escolher?

Se você está comprando seu primeiro sketchbook, o [Canson ArTBook One A5](https://amzn.to/4aAPgCj) oferece provavelmente o melhor equilíbrio entre qualidade, preço e durabilidade.

Já para quem deseja experimentar diferentes materiais, o [Canson XL Mix Media](https://amzn.to/4gkQNA6) é uma excelente escolha.

---

# Conclusão

O melhor sketchbook não é necessariamente o mais caro. O importante é escolher um modelo que incentive você a desenhar com frequência.

Um sketchbook cheio de estudos vale muito mais do que um caderno perfeito guardado na estante.

**Desenhe todos os dias e acompanhe sua evolução página após página.**
`

,
    coverImage: '/imgs/sketchbooks.png',
    category: 'Dicas',
    coverImageMobile:'/imgs/sketchbooksMobile.png',
    summary:"texto do blog",
    publicationDate: '2023-10-15',
    author:'Gustavo Oliveira',
    readTime:"5 min",
    tags:["dicas"],
  },

 
];

export const ArticlesProvider = ({ children }) => {


  const getArticleById = (id) => initialArticles.find(a => a.id === id)


  
  const getArticlesByCategory = (category) => {
    if (!category || category === 'Todos') return initialArticles;

    return initialArticles.filter(a => a.category === category);
  };

  const getRelatedArticles = (articleIds) => {
    if (!articleIds || articleIds.length === 0) return [];
    return initialArticles.filter(article => articleIds.includes(article.id));
  };

  const getAllCategories = () => ['Todos', ...new Set(initialArticles.map(a => a.category))];

  return (
    <ArticlesContext.Provider value={{ 
      initialArticles, 
      getArticleById, 
      getArticlesByCategory, 
      getAllCategories,
      getRelatedArticles
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};