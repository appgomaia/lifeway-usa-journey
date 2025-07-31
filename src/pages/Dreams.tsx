import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Star, Target, CheckCircle } from "lucide-react";

const Dreams = () => {
  const dreamSteps = [
    {
      icon: Heart,
      title: "Defina seu Sonho",
      description: "Conte-nos sobre seus objetivos e aspirações nos EUA",
      completed: false
    },
    {
      icon: Target,
      title: "Trace seu Plano",
      description: "Criamos um roadmap personalizado para sua jornada",
      completed: false
    },
    {
      icon: Star,
      title: "Acompanhe o Progresso",
      description: "Monitore cada marco conquistado rumo ao seu sonho",
      completed: false
    },
    {
      icon: CheckCircle,
      title: "Realize seu Objetivo",
      description: "Celebre cada conquista no caminho para os EUA",
      completed: false
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
            Criador de Sonhos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme seus sonhos americanos em um plano concreto e realizável. 
            Nossa ferramenta exclusiva te guia desde a concepção até a realização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {dreamSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-petroleo rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <CardTitle className="text-lg font-baskerville text-petroleo">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-petroleo hover:bg-petroleo/90 text-white px-8 py-3">
            Começar Meu Plano de Sonhos
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Gratuito para começar • Planos personalizados disponíveis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dreams;