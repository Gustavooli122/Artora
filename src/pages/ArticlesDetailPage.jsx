import React from "react"
import { useParams } from "react-router-dom"
import { useArticles } from "../contexts/ArticlesContext"
import ArticleCard from "../components/ArticleCard"
import { motion } from "framer-motion"
import Markdown from "../components/Markedown"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import { slugify } from '../lib/utils';
import { Calendar, User, Clock, Tag } from 'lucide-react';
const ArticlesDetailPages = ()=>{
const {id} = useParams();

const {getArticleById,getArticlesByCategory} = useArticles();
const slugId = slugify(id)
const artigoAtual = getArticleById(id);
const artigosRelacionados = getArticlesByCategory(artigoAtual.category)

const navegate = useNavigate()
  if (!artigoAtual) {
    
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigo não encontrado</h2>
            <button
              onClick={() => navegate('/produtos')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Voltar aos Artigos
            </button>
          </div>
        </div>
      </>
    );
  }
return(
    <main>
        <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={artigoAtual.coverImage} alt={artigoAtual.title} className="w-full h-full hidden md:flex object-cover" />
        <img src={artigoAtual.coverImageMobile} alt={artigoAtual.title} className="w-full h-full flex md:hidden object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-md mb-4">
                {artigoAtual.category}
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {artigoAtual.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-200 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-600" />
                  {artigoAtual.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  {new Date(artigoAtual.publicationDate).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  {artigoAtual.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
        <p className="text-xl text-gray-600 mb-8 border-l-4 border-indigo-600 pl-4">
          {artigoAtual.summary}
        </p>

        <Markdown contents={artigoAtual.content}/>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-2">
          <Tag className="w-5 h-5 text-gray-400" />
          {artigoAtual.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Relacionados */}
      {artigosRelacionados.length > 0 && (
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {artigosRelacionados.map(post => (
              <ArticleCard key={post.id} article={post} />
            ))}
          </div>

        </div>
      )}
    </div>
    <Footer/></main>
)
}
export default ArticlesDetailPages;