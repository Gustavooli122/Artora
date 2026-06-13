import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import {
  PencilRuler,
  Palette,
  BookOpen,
  Lightbulb,
  Users,
  GraduationCap
} from 'lucide-react';

const AboutPage = () => {
const values = [
  {
    icon: <PencilRuler className="w-8 h-8" />,
    title: 'Materiais de Qualidade',
    description: 'Selecionamos produtos que oferecem boa experiência para artistas, estudantes e criativos.'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Criatividade',
    description: 'Acreditamos que qualquer pessoa pode desenvolver suas habilidades artísticas com prática e dedicação.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Aprendizado',
    description: 'Compartilhamos tutoriais, dicas e conteúdos para ajudar você a evoluir no desenho e na pintura.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Inspiração',
    description: 'Buscamos inspirar artistas iniciantes e experientes a explorar novas técnicas e ideias.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Comunidade',
    description: 'Criamos um espaço para pessoas apaixonadas por arte, desenho e papelaria.'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Desenvolvimento',
    description: 'Nosso objetivo é ajudar você a aprender, praticar e evoluir continuamente.'
  }
];

  return (
    <>
      <Helmet>
        <title>Sobre Nós -Artora | Arte, Desenho e Papelaria</title>
        <meta name="description" content="Conheça nossa missão de ajudar artistas, estudantes e criativos a encontrarem os melhores materiais para desenvolver suas habilidades." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Sobre o Projeto
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
               Criamos este espaço para ajudar artistas, estudantes e pessoas criativas a encontrarem materiais de qualidade, aprenderem novas técnicas e desenvolverem seu potencial através da arte.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl"
            >
              <h2 className="text-4xl font-bold mb-6 text-center">Nossa Missão</h2>
              <p className="text-xl text-center leading-relaxed opacity-95">
               Nossa missão é tornar o aprendizado artístico mais acessível, conectando pessoas aos melhores materiais, livros, ferramentas e conteúdos para desenho, pintura e criatividade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Nossos Pilares</h2>
              <p className="text-lg text-gray-600">
               Os valores que orientam nossas recomendações e conteúdos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Quem Somos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
               Somos apaixonados por desenho, criatividade e aprendizado. Nosso objetivo é compartilhar conteúdos úteis, recomendar materiais de qualidade e ajudar pessoas que desejam evoluir artisticamente, seja desenhando, pintando ou estudando.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-semibold shadow-sm">
                Materiais Artísticos

                </div>
                <div className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-semibold shadow-sm">
                Guias e Tutoriais

                </div>
                <div className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-semibold shadow-sm">
                  Criatividade
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default AboutPage;