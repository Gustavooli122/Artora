import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ArticleCard from '../components/ArticleCard';
import ProductCard from '../components/ProductCard';
import { useArticles } from '../contexts/ArticlesContext';
import { useProducts } from '../contexts/ProductContext';

import { Dumbbell,Pencil,
  BookOpen,
  BadgeDollarSign,
  Palette, Home, DollarSign, ArrowRight, PencilRuler} from 'lucide-react';
import {
  
} from "lucide-react";

const HomePage = () => {
  const { initialArticles } = useArticles();
  const { initialProducts } = useProducts();

  // Get first 3 items for featured sections
  const featuredArticles = initialArticles.slice(0, 3);
  const featuredProducts = initialProducts.slice(0, 3);

 const features = [
{
  icon: <Pencil className="w-8 h-8" />,
  title: 'Materiais Selecionados',
  description: 'Produtos escolhidos para artistas e estudantes'
},
{icon: <BookOpen className="w-8 h-8" />,
  title: 'Guias para Iniciantes',
  description: 'Aprenda desenho e pintura passo a passo'
},
{
  icon: <BadgeDollarSign className="w-8 h-8" />,
  title: 'Melhor Custo-Benefício',
  description: 'Encontre materiais de qualidade sem gastar muito'
},
{
  icon: <Palette className="w-8 h-8" />,
  title: 'Criatividade Sem Limites',
  description: 'Ferramentas para desenvolver sua arte diariamente'
}
]

  return (
    <>
      <Helmet>
        <title>Artora - Materiais de Desenho, Arte e Papelaria</title>
        <meta name="description" content="Descubra os melhores materiais para desenho,
pintura e estudos. Guias completos, avaliações
e recomendações para artistas e estudantes." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/public/imgs/heroImageHomePage.png"
              alt="Home gym workout"
              className="hidden md:flex  w-full h-full object-cover"
            />
            <img
              src="/public/imgs/heroImageHomePageMobile.png"
              alt="Home gym workout"
              className="flex md:hidden  w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-black/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Desperte 


                <br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  Sua Criatividade
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubra os melhores materiais para desenho, pintura e estudos.
          Encontre lápis, sketchbooks, canetas e livros para evoluir suas habilidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/produtos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 text-white text-lg font-bold rounded-xl hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-900/50"
                >
                  <span>Ver materiais</span>
                  <PencilRuler className="w-5 h-5" />
                </Link>
                <Link
                  to="/articles"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>Explorar artigos</span>
                  <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Materiais Mais Procurados
</h2>
                <p className="text-gray-600 text-lg">Equipamentos Lápis, canetas, sketchbooks e acessórios favoritos dos artistas</p>
              </div>
              <Link to="/produtos" className="hidden md:flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                Ver Loja Completa <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/produtos" className="inline-block px-6 py-3  text-purple-700 font-semibold rounded-lg">
                Ver Todos os Materiais
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">Central de Aprendizado

</h2>
                <p className="text-gray-400 text-lg">Tutoriais, dicas e recomendações para desenhar e estudar melhor</p>
              </div>
              <Link to="/articles" className="hidden md:flex items-center gap-2 text-purple-400 font-semibold hover:gap-3 transition-all">
                Ler Todos os Artigos <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
             Sua jornada artística começa hoje
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Descubra os materiais ideais para desenhar,
              pintar e desenvolver sua criatividade.
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explorar Materiais
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
   
      </div>
    </>
  );
};

export default HomePage;