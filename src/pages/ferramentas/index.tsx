import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calculator, FileCheck, Calendar, DollarSign, Clock, Target, CheckCircle, Star } from "lucide-react";

const FerramentasIndex = () => {
  const ferramentasDisponiveis = [
    {
      icon: Calculator,
      titulo: "Calculadora de Custos",
      descricao: "Calcule todos os custos envolvidos no seu processo de imigração",
      categoria: "Financeiro",
      link: "/ferramentas/calculadora-custos",
      disponivel: true,
      premium: false
    },
    {
      icon: FileCheck,
      titulo: "Checklist de Documentos",
      descricao: "Lista personalizada dos documentos necessários para seu visto",
      categoria: "Documentação",
      link: "/ferramentas/checklist-documentos",
      disponivel: true,
      premium: false
    },
    {
      icon: Calendar,
      titulo: "Cronograma de Aplicação",
      descricao: "Timeline personalizado para seu processo de visto",
      categoria: "Planejamento",
      link: "/ferramentas/cronograma",
      disponivel: true,
      premium: true
    },
    {
      icon: DollarSign,
      titulo: "Simulador de Renda",
      descricao: "Verifique se sua renda atende aos requisitos do visto",
      categoria: "Financeiro",
      link: "/ferramentas/simulador-renda",
      disponivel: true,
      premium: true
    }
  ];

  const ferramentasFuturas = [
    {
      icon: Clock,
      titulo: "Rastreador de Status",
      descricao: "Acompanhe o status do seu processo em tempo real",
      categoria: "Acompanhamento",
      previsao: "Q2 2024"
    },
    {
      icon: Target,
      titulo: "Otimizador de Perfil",
      descricao: "Sugestões para fortalecer seu perfil de candidato",
      categoria: "Consultoria",
      previsao: "Q3 2024"
    }
  ];

  const categorias = [
    { nome: "Financeiro", cor: "bg-green-100 text-green-800" },
    { nome: "Documentação", cor: "bg-blue-100 text-blue-800" },
    { nome: "Planejamento", cor: "bg-purple-100 text-purple-800" },
    { nome: "Acompanhamento", cor: "bg-orange-100 text-orange-800" },
    { nome: "Consultoria", cor: "bg-pink-100 text-pink-800" }
  ];

  const getCategoriaColor = (categoria: string) => {
    const cat = categorias.find(c => c.nome === categoria);
    return cat ? cat.cor : "bg-gray-100 text-gray-800";
  };

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
            Ferramentas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos práticos para simplificar e acelerar seu processo de imigração americana. 
            Desde calculadoras até checklists personalizados.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-baskerville font-bold text-petroleo mb-6">
            Ferramentas Disponíveis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {ferramentasDisponiveis.map((ferramenta, index) => {
              const IconComponent = ferramenta.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-petroleo to-lilas rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-baskerville text-petroleo">
                            {ferramenta.titulo}
                          </CardTitle>
                          <span className={`px-2 py-1 text-xs rounded-full ${getCategoriaColor(ferramenta.categoria)}`}>
                            {ferramenta.categoria}
                          </span>
                        </div>
                      </div>
                      {ferramenta.premium && (
                        <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                          <Star className="w-3 h-3" />
                          <span>Premium</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {ferramenta.descricao}
                    </CardDescription>
                    <Button 
                      asChild 
                      className="w-full bg-petroleo hover:bg-petroleo/90"
                      disabled={!ferramenta.disponivel}
                    >
                      <Link to={ferramenta.link || "#"}>
                        {ferramenta.disponivel ? 'Usar Ferramenta' : 'Em Breve'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-baskerville font-bold text-petroleo mb-6">
            Próximas Ferramentas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ferramentasFuturas.map((ferramenta, index) => {
              const IconComponent = ferramenta.icon;
              return (
                <Card key={index} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-baskerville text-gray-700">
                          {ferramenta.titulo}
                        </CardTitle>
                        <span className={`px-2 py-1 text-xs rounded-full ${getCategoriaColor(ferramenta.categoria)}`}>
                          {ferramenta.categoria}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {ferramenta.descricao}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Previsão: {ferramenta.previsao}</span>
                      <Button variant="outline" size="sm" disabled>
                        Em Desenvolvimento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-baskerville font-bold text-petroleo mb-4">
            Todas as Ferramentas Gratuitas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Começamos oferecendo ferramentas básicas gratuitas. Ferramentas premium 
            estarão disponíveis em breve com recursos avançados e personalizações.
          </p>
          <Button size="lg" className="bg-lilas hover:bg-lilas/90 text-white">
            Explorar Todas as Ferramentas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FerramentasIndex;