import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Users, Briefcase, GraduationCap, Home, Heart } from "lucide-react";

const VisaMatch = () => {
  const visaTypes = [
    {
      icon: Briefcase,
      category: "Vistos de Trabalho",
      types: ["H-1B", "L-1", "O-1", "E-2"],
      description: "Para profissionais qualificados e investidores"
    },
    {
      icon: GraduationCap,
      category: "Vistos de Estudo",
      types: ["F-1", "J-1", "M-1"],
      description: "Para estudantes e intercambistas"
    },
    {
      icon: Heart,
      category: "Vistos Familiares",
      types: ["K-1", "CR-1", "IR-1"],
      description: "Para cônjuges e familiares de cidadãos americanos"
    },
    {
      icon: Home,
      category: "Green Card",
      types: ["EB-1", "EB-2", "EB-3", "EB-5"],
      description: "Residência permanente nos Estados Unidos"
    },
    {
      icon: Users,
      category: "Vistos de Turismo",
      types: ["B-1/B-2", "ESTA"],
      description: "Para turismo e negócios de curta duração"
    },
    {
      icon: FileText,
      category: "Outros Vistos",
      types: ["P-1", "R-1", "TN"],
      description: "Categorias especiais e profissionais específicos"
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
            VisaMatch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubra qual visto americano é ideal para seu perfil. Nossa inteligência artificial 
            analisa suas qualificações e objetivos para recomendar o melhor caminho.
          </p>
          <Button size="lg" className="bg-lilas hover:bg-lilas/90 text-white mb-12">
            Iniciar Análise Gratuita
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaTypes.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-petroleo to-lilas rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-baskerville text-petroleo">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {category.types.map((type, typeIndex) => (
                        <span 
                          key={typeIndex}
                          className="px-2 py-1 bg-petroleo/10 text-petroleo text-xs font-medium rounded"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-baskerville font-bold text-petroleo mb-4">
              Como Funciona o VisaMatch?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-petroleo rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-600">Responda nosso questionário detalhado</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-lilas rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-600">IA analisa seu perfil e objetivos</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-petroleo rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-600">Receba recomendações personalizadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaMatch;