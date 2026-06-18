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
    summary: "Descubra os 7 melhores sketchbooks para iniciantes em 2026. Compare gramatura, qualidade do papel, preço e durabilidade para escolher o caderno de desenho ideal para estudar e evoluir na arte.",
    publicationDate: '2023-10-15',
    author:'Gustavo Oliveira',
    readTime:"5 min",
    tags:["dicas"],
  },
   {
    id: slugify('Como Fazer Sombreamento em Desenhos: Guia Completo para Iniciantes'),
    title: 'Como Fazer Sombreamento em Desenhos: Guia Completo para Iniciantes',
    linksArticle:[],
   description: 'Aprenda como fazer sombreamento em desenhos utilizando técnicas como hachura, hachura cruzada, esfumado e pontilhismo. Descubra quais lápis usar, como criar profundidade e deixar seus desenhos mais realistas.',
content: `## Como Fazer Sombreamento em Desenhos: Guia Completo para Iniciantes

O sombreamento é uma das técnicas mais importantes do desenho. É ele que transforma formas simples em objetos com profundidade, volume e realismo. Mesmo desenhos feitos apenas com lápis podem ganhar uma aparência muito mais profissional quando o artista domina o uso das sombras.

Se você está começando a desenhar, aprender os fundamentos do sombreamento pode acelerar bastante sua evolução.

## O Que é Sombreamento?

Sombreamento é a técnica utilizada para representar luz e sombra em um desenho. Ao variar a intensidade dos tons, criamos a ilusão de profundidade e tridimensionalidade em uma superfície plana.

Sem sombras, os objetos parecem achatados. Com sombras bem aplicadas, eles ganham volume e parecem mais reais.

## Entenda a Fonte de Luz

Antes de começar a sombrear, é fundamental definir de onde vem a luz.

Imagine uma lanterna iluminando uma esfera. O lado mais próximo da luz ficará mais claro, enquanto o lado oposto ficará mais escuro. Essa diferença de valores é o que cria a sensação de volume.

Sempre pergunte a si mesmo:

* De onde a luz está vindo?
* Qual área recebe mais iluminação?
* Onde a sombra será projetada?

Responder essas perguntas ajuda a evitar sombras inconsistentes.

## Conheça os Diferentes Valores Tonais

No desenho, os valores tonais representam os diferentes níveis de claro e escuro.

Uma boa prática é criar uma escala tonal contendo:

1. Branco.
2. Cinza muito claro.
3. Cinza claro.
4. Cinza médio.
5. Cinza escuro.
6. Preto.

Treinar essas transições ajuda a desenvolver o controle do lápis e melhora significativamente a qualidade do sombreamento.

## Técnicas de Sombreamento

### Hachura
![Hahnemuhle D&S](/imgs/hachura.png)
A hachura consiste em criar sombras utilizando linhas paralelas.

Quanto mais próximas as linhas estiverem, mais escura será a área.

Essa técnica é muito utilizada em desenhos artísticos, quadrinhos e ilustrações.
## Hachura Cruzada
![Hahnemuhle D&S](/imgs/hachuraCruzada.png)
A hachura cruzada utiliza várias camadas de linhas em direções diferentes.

Ela permite criar sombras mais intensas e uma grande variedade de tons.

## Esfumado
![Hahnemuhle D&S](/imgs/esfumado.png)
O esfumado cria transições suaves entre áreas claras e escuras.

Pode ser feito utilizando esfuminhos, pedaços de papel, algodão ou até mesmo o dedo, embora muitos artistas prefiram ferramentas específicas para evitar manchas.

## Pontilhismo
![Hahnemuhle D&S](/imgs/pontilhismo.png)
O pontilhismo utiliza pontos para construir sombras.

Quanto maior a concentração de pontos, mais escura será a região.

Apesar de exigir paciência, produz resultados impressionantes.

## Quais Lápis Utilizar?

Os lápis grafite possuem diferentes níveis de dureza e maciez.

* **HB:** ideal para esboços e linhas gerais.
* **2B:** produz sombras suaves.
* **4B:** oferece tons mais escuros.
* **6B e 8B:** excelentes para contrastes intensos e áreas muito escuras.

Muitos artistas utilizam uma combinação de vários lápis para alcançar uma maior variedade tonal.

## Erros Comuns no Sombreamento

### Ignorar a direção da luz

Um dos erros mais frequentes é criar sombras sem considerar a posição da fonte de luz.

### Falta de contraste

Quando todas as áreas possuem tons parecidos, o desenho parece sem vida.

Não tenha medo de escurecer algumas regiões para aumentar a profundidade.

### Pressionar demais o lápis

Aplicar muita força pode danificar o papel e dificultar correções.

Prefira construir as sombras em camadas gradualmente.

## Exercício Prático para Treinar

Um ótimo exercício para iniciantes é desenhar formas simples:

* Esfera.
* Cubo.
* Cilindro.
* Cone.

Essas figuras ajudam a entender como a luz interage com diferentes superfícies e servem como base para desenhos mais complexos.

## Conclusão

O sombreamento é uma habilidade que melhora com a prática constante. Ao compreender a direção da luz, trabalhar diferentes valores tonais e experimentar técnicas como hachura e esfumado, seus desenhos ganharão mais profundidade e realismo.

Comece praticando formas simples e, com o tempo, você perceberá uma grande evolução na qualidade dos seus trabalhos.

## Materiais Recomendados para Sombreamento

Ter os materiais certos pode tornar o aprendizado do sombreamento muito mais agradável. Abaixo estão alguns itens recomendados para quem deseja praticar e evoluir nos desenhos.

### Sketchbooks e Cadernos de Desenho

Um bom caderno permite praticar diariamente e acompanhar sua evolução artística.

➡️ **Confira os sketchbooks disponíveis:** [Ver produtos](COLE_O_LINK_AQUI)

### Lápis Grafite

Lápis HB, 2B, 4B e 6B são excelentes para criar diferentes níveis de sombra e contraste.

➡️ **Ver lápis para desenho:** [Ver produtos](COLE_O_LINK_AQUI)

### Kits de Desenho

Os kits costumam incluir lápis de diferentes graduações, borracha, apontador e outros acessórios úteis para iniciantes.

➡️ **Ver kits de desenho:** [Ver produtos](COLE_O_LINK_AQUI)

### Esfuminhos

Os esfuminhos ajudam a criar transições suaves entre áreas claras e escuras, produzindo um acabamento mais profissional.

➡️ **Ver esfuminhos:** [Ver produtos](COLE_O_LINK_AQUI)

### Borrachas Artísticas

Uma boa borracha não serve apenas para apagar erros, mas também para criar pontos de luz e detalhes no desenho.

➡️ **Ver borrachas para desenho:** [Ver produtos](COLE_O_LINK_AQUI)

## Continue Praticando

O sombreamento é uma habilidade desenvolvida com prática constante. Quanto mais você desenhar formas simples, estudar a luz e experimentar diferentes técnicas, melhores serão seus resultados.

Lembre-se: a evolução acontece aos poucos. Guarde seus desenhos antigos e compare-os após algumas semanas de estudo. Você ficará surpreso com o progresso alcançado.

`

,
    coverImage: '/imgs/esferaComSombra.png',
    category: 'Aprendizagem',
    coverImageMobile:'/imgs/esferaComSombraMobile.png',
    summary: 'Aprenda os fundamentos do sombreamento e descubra técnicas essenciais para criar profundidade, contraste e realismo em seus desenhos.',
    publicationDate: Date.now(),
    author:'Gustavo Oliveira',
    readTime:"5 min",
    tags: [
  'desenho',
  'sombreamento',
  'arte',
  'lápis grafite',
  'sketchbook',
  'desenho para iniciantes'
],
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