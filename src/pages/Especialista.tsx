import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, Clock, Shield, Star, CheckCircle, Users } from "lucide-react";

const Especialista = () => {
  const especialistas = [
    {
      nome: "Dr. Maria Santos",
      especialidade: "Advogada de Imigração",
      experiencia: "15+ anos",
      rating: 4.9,
      disponivel: true,
      areas: ["Vistos de Trabalho", "Green Card", "Naturalização"]
    },
    {
      nome: "Carlos Rodriguez",
      especialidade: "Consultor Educacional",
      experiencia: "10+ anos", 
      rating: 4.8,
      disponivel: true,
      areas: ["Vistos de Estudante", "Transferências", "OPT/CPT"]
    },
    {
      nome: "Ana Thompson",
      especialidade: "Especialista em Vistos Familiares",
      experiencia: "12+ anos",
      rating: 4.9,
      disponivel: false,
      areas: ["K-1", "Reunificação Familiar", "Petições I-130"]
    }
  ];

  const servicos = [
    {
      icon: MessageCircle,
      titulo: "Consulta Imediata",
      descricao: "Fale com um especialista em até 5 minutos",
      preco: "A partir de $50"
    },
    {
      icon: Clock,
      titulo: "Disponível 24/7",
      descricao: "Atendimento em português durante horário comercial brasileiro",
      preco: "Sem taxa extra"
    },
    {
      icon: Shield,
      titulo: "100% Confidencial",
      descricao: "Suas informações protegidas por criptografia",
      preco: "Segurança garantida"
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
            Especialista de Plantão
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tire suas dúvidas com especialistas qualificados em imigração americana. 
            Atendimento rápido, seguro e em português.
          </p>
          <Button size="lg" className="bg-lilas hover:bg-lilas/90 text-white">
            Falar com Especialista Agora
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {servicos.map((servico, index) => {
            const IconComponent = servico.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-petroleo to-lilas rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-baskerville text-petroleo">
                    {servico.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-2">
                    {servico.descricao}
                  </CardDescription>
                  <p className="text-sm font-medium text-petroleo">
                    {servico.preco}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-baskerville font-bold text-petroleo text-center mb-8">
            Nossos Especialistas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {especialistas.map((especialista, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-3 h-3 rounded-full ${especialista.disponivel ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{especialista.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-baskerville text-petroleo">
                    {especialista.nome}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {especialista.especialidade} • {especialista.experiencia}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Áreas de Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {especialista.areas.map((area, areaIndex) => (
                        <span 
                          key={areaIndex}
                          className="px-2 py-1 bg-petroleo/10 text-petroleo text-xs rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                    <Button 
                      size="sm" 
                      className={`w-full mt-4 ${
                        especialista.disponivel 
                          ? 'bg-petroleo hover:bg-petroleo/90' 
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!especialista.disponivel}
                    >
                      {especialista.disponivel ? 'Falar Agora' : 'Indisponível'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <Users className="w-16 h-16 text-petroleo mx-auto mb-4" />
          <h3 className="text-2xl font-baskerville font-bold text-petroleo mb-4">
            Mais de 5.000 consultas realizadas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Nossos especialistas já ajudaram milhares de brasileiros a realizarem 
            o sonho americano. Junte-se a essa comunidade de sucesso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Satisfação garantida</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Especialistas certificados</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Atendimento em português</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Especialista;