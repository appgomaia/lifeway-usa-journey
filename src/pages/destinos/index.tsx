import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, TrendingUp, Users, DollarSign, Home, Briefcase, GraduationCap } from "lucide-react";

const DestinosIndex = () => {
  const estados = [
    {
      nome: "Califórnia",
      capital: "Sacramento",
      populacao: "39.5M",
      economia: "Tech, Entertainment",
      custoVida: "Alto",
      clima: "Mediterranean/Desert",
      destaques: ["Silicon Valley", "Hollywood", "Praias", "Universidades"],
      icon: TrendingUp,
      color: "from-blue-500 to-purple-600"
    },
    {
      nome: "Texas",
      capital: "Austin",
      populacao: "30.5M",
      economia: "Tech, Oil, Agriculture",
      custoVida: "Moderado",
      clima: "Continental/Subtropical",
      destaques: ["Sem imposto estadual", "Tech hubs", "BBQ", "Espaço"],
      icon: Briefcase,
      color: "from-red-500 to-orange-600"
    },
    {
      nome: "Florida",
      capital: "Tallahassee",
      populacao: "22.6M",
      economia: "Tourism, Aerospace",
      custoVida: "Moderado",
      clima: "Tropical/Subtropical",
      destaques: ["Sem imposto estadual", "Praias", "Disney World", "Aposentadoria"],
      icon: MapPin,
      color: "from-green-500 to-teal-600"
    },
    {
      nome: "Nova York",
      capital: "Albany",
      populacao: "19.4M",
      economia: "Finance, Tech, Media",
      custoVida: "Alto",
      clima: "Continental",
      destaques: ["Wall Street", "Broadway", "Diversidade", "Oportunidades"],
      icon: GraduationCap,
      color: "from-gray-600 to-blue-600"
    }
  ];

  const categorias = [
    {
      titulo: "Melhores para Trabalho",
      estados: ["Califórnia", "Texas", "Washington"],
      icon: Briefcase,
      descricao: "Estados com forte mercado de trabalho e oportunidades"
    },
    {
      titulo: "Custo de Vida Baixo",
      estados: ["Texas", "Tennessee", "Georgia"],
      icon: DollarSign,
      descricao: "Estados com custo de vida mais acessível"
    },
    {
      titulo: "Melhor para Estudantes",
      estados: ["Massachusetts", "Califórnia", "Nova York"],
      icon: GraduationCap,
      descricao: "Estados com universidades de prestígio"
    },
    {
      titulo: "Qualidade de Vida",
      estados: ["Colorado", "Utah", "Vermont"],
      icon: Home,
      descricao: "Estados com excelente qualidade de vida"
    }
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
            Destinos nos EUA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore os melhores estados americanos para viver, trabalhar e estudar. 
            Encontre o destino perfeito para sua nova vida nos Estados Unidos.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-baskerville font-bold text-petroleo mb-8 text-center">
            Estados Populares
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {estados.map((estado, index) => {
              const IconComponent = estado.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${estado.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-baskerville text-petroleo">
                          {estado.nome}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          Capital: {estado.capital}
                        </CardDescription>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-br ${estado.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">População:</span>
                          <p className="text-gray-600">{estado.populacao}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Custo de Vida:</span>
                          <p className="text-gray-600">{estado.custoVida}</p>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 text-sm">Economia:</span>
                        <p className="text-gray-600 text-sm">{estado.economia}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 text-sm">Destaques:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {estado.destaques.map((destaque, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-petroleo/10 text-petroleo text-xs rounded"
                            >
                              {destaque}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-baskerville font-bold text-petroleo mb-8 text-center">
            Encontre por Categoria
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map((categoria, index) => {
              const IconComponent = categoria.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-petroleo to-lilas rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-baskerville text-petroleo">
                      {categoria.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {categoria.descricao}
                    </CardDescription>
                    <div className="space-y-1">
                      {categoria.estados.map((estado, idx) => (
                        <div key={idx} className="text-sm text-petroleo font-medium">
                          {estado}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <MapPin className="w-16 h-16 text-petroleo mx-auto mb-4" />
          <h3 className="text-2xl font-baskerville font-bold text-petroleo mb-4">
            Planeje Sua Mudança
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Cada estado oferece oportunidades únicas. Use nosso guia completo 
            para encontrar o melhor destino baseado em seus objetivos e perfil.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-petroleo hover:bg-petroleo/90">
              Guia Completo de Estados
            </Button>
            <Button variant="outline">
              Comparar Destinos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinosIndex;