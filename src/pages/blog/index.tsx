import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, BookOpen, MessageCircle } from "lucide-react";

const BlogIndex = () => {
  const artigosRecentes = [
    {
      titulo: "Guia Completo do Visto H-1B em 2024",
      resumo: "Tudo que você precisa saber sobre o processo de aplicação, requisitos e dicas para aumentar suas chances de aprovação.",
      autor: "Dr. Maria Santos",
      data: "15 Jan 2024",
      categoria: "Vistos",
      tempoLeitura: "8 min",
      destaque: true,
      tags: ["H-1B", "Trabalho", "Processo"]
    },
    {
      titulo: "Como Escolher o Melhor Estado para Morar",
      resumo: "Análise comparativa dos principais estados americanos considerando custo de vida, oportunidades e qualidade de vida.",
      autor: "Carlos Rodriguez",
      data: "12 Jan 2024",
      categoria: "Destinos",
      tempoLeitura: "6 min",
      destaque: false,
      tags: ["Estados", "Mudança", "Planejamento"]
    },
    {
      titulo: "Green Card via EB-5: Vale a Pena?",
      resumo: "Análise detalhada do programa de investimento EB-5, custos, riscos e benefícios para investidores brasileiros.",
      autor: "Ana Thompson",
      data: "10 Jan 2024",
      categoria: "Investimento",
      tempoLeitura: "10 min",
      destaque: true,
      tags: ["EB-5", "Investimento", "Green Card"]
    },
    {
      titulo: "Preparando-se para a Entrevista Consular",
      resumo: "Dicas práticas e documentos necessários para ter sucesso na sua entrevista no consulado americano.",
      autor: "Dr. Maria Santos",
      data: "8 Jan 2024",
      categoria: "Processo",
      tempoLeitura: "5 min",
      destaque: false,
      tags: ["Entrevista", "Consulado", "Documentos"]
    }
  ];

  const categorias = [
    { nome: "Vistos", count: 15, icon: BookOpen, cor: "bg-blue-100 text-blue-800" },
    { nome: "Destinos", count: 8, icon: TrendingUp, cor: "bg-green-100 text-green-800" },
    { nome: "Processo", count: 12, icon: MessageCircle, cor: "bg-purple-100 text-purple-800" },
    { nome: "Investimento", count: 5, icon: Calendar, cor: "bg-orange-100 text-orange-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cinza-claro to-white">
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5 text-petroleo" />
            <span className="text-petroleo font-figtree font-medium">Voltar</span>
          </Link>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-baskerville font-bold text-petroleo mb-4">
            Blog LifeWayUSA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, guias e dicas de especialistas para sua jornada rumo aos Estados Unidos. 
            Conteúdo atualizado e estratégico para cada etapa do seu processo.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-baskerville font-bold text-petroleo mb-6">
                Artigos Recentes
              </h2>
              <div className="space-y-6">
                {artigosRecentes.map((artigo, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all ${artigo.destaque ? 'border-petroleo border-2' : ''}`}>
                    {artigo.destaque && (
                      <div className="bg-petroleo text-white px-3 py-1 text-xs font-medium">
                        ARTIGO EM DESTAQUE
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-baskerville text-petroleo mb-2 hover:text-petroleo/80 cursor-pointer">
                            {artigo.titulo}
                          </CardTitle>
                          <CardDescription className="text-gray-600 mb-3">
                            {artigo.resumo}
                          </CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{artigo.autor}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{artigo.data}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{artigo.tempoLeitura}</span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            artigo.categoria === 'Vistos' ? 'bg-blue-100 text-blue-800' :
                            artigo.categoria === 'Destinos' ? 'bg-green-100 text-green-800' :
                            artigo.categoria === 'Processo' ? 'bg-purple-100 text-purple-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {artigo.categoria}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {artigo.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              <Tag className="w-3 h-3" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                        <Button variant="outline" size="sm">
                          Ler Artigo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-baskerville text-petroleo">
                    Categorias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categorias.map((categoria, index) => {
                      const IconComponent = categoria.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="w-5 h-5 text-petroleo" />
                            <span className="font-medium text-gray-700">{categoria.nome}</span>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${categoria.cor}`}>
                            {categoria.count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-baskerville text-petroleo">
                    Newsletter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Receba os melhores conteúdos sobre imigração americana direto no seu email.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Seu email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-petroleo/20"
                    />
                    <Button className="w-full bg-petroleo hover:bg-petroleo/90">
                      Inscrever-se
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-baskerville text-petroleo">
                    Artigos Populares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="cursor-pointer hover:text-petroleo transition-colors">
                      <h4 className="font-medium text-sm">Como aumentar chances no H-1B</h4>
                      <p className="text-xs text-gray-500">5 min de leitura</p>
                    </div>
                    <div className="cursor-pointer hover:text-petroleo transition-colors">
                      <h4 className="font-medium text-sm">Custo real de morar nos EUA</h4>
                      <p className="text-xs text-gray-500">7 min de leitura</p>
                    </div>
                    <div className="cursor-pointer hover:text-petroleo transition-colors">
                      <h4 className="font-medium text-sm">Documentos para visto de estudante</h4>
                      <p className="text-xs text-gray-500">4 min de leitura</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;