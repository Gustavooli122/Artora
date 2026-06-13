import React from "react"
import { Palette } from "lucide-react"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white mt-10">
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div>
         <div className="mb-2 flex gap-2"><div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
             <Palette className="w-6 h-6 text-white" />
            </div>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
        Artora
      </h3>
    </div>
   

      <p className="mt-5 text-gray-400 mb-5 max-w-lg">
        Arte, criatividade e aprendizado para todos.
        Descubra materiais, guias e recomendações para
        desenvolver suas habilidades artísticas.
      </p>
    </div>

    <div className="flex flex-wrap gap-6 mb-10">
      <Link to="/">Início</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/articles">Artigos</Link>
      <Link to="/sobre">Sobre</Link>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
      <h4 className="font-bold text-lg mb-3">
        Transparência e Afiliados
      </h4>

      <p className="text-gray-400">
        O Artora participa de programas de afiliados.
        Alguns links presentes neste site podem gerar
        uma comissão quando uma compra é realizada através
        deles. Isso não gera custos adicionais para você
        e ajuda a manter nosso conteúdo gratuito.
      </p>
    </div>

    <div className="border-t border-white/10 pt-6 text-sm text-gray-500">
      © 2026 Artora. Todos os direitos reservados.
    </div>

  </div>
</footer>
    )
}