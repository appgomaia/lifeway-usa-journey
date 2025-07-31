import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Award, Heart, Shield, Zap, CheckCircle } from "lucide-react";

const Sobre = () => {
  const valores = [
    {
      icon: Heart,
      titulo: "Compromisso Pessoal",
      descricao: "Cada cliente é único e merece uma abordagem personalizada para realizar seus sonhos americanos."
    },
    {
      icon: Shield,
      titulo: "Transparência Total",
      descricao: "Fornecemos informações claras e honestas sobre todos os aspectos do processo de imigração."
    },
    {
      icon: Zap,
      titulo: "Excelência",
      descricao: "Buscamos constantemente a melhoria de nossos serviços e a satisfação de nossos clientes."
    },
    {
      icon: Users,
      titulo: "Comunidade",
      descricao: "Construímos uma rede de apoio entre brasileiros que compartilham o mesmo sonho."
    }
  ];

  const equipe = [
    {
      nome: "Dr. Maria Santos",
      cargo: "Fundadora & CEO",
      experiencia: "Advogada de imigração há 15 anos",
      descricao: "Especialista em vistos de trabalho e Green Card, já ajudou mais de 2.000 brasileiros.",
      formacao: "JD - Harvard Law School"
    },
    {
      nome: "Carlos Rodriguez",
      cargo: "Diretor de Consultoria",
      experiencia: "Consultor educacional há 10 anos",
      descricao: "Expert em vistos de estudante e transferências universitárias.",
      formacao: "MBA - Stanford University"
    },
    {
      nome: "Ana Thompson",
      cargo: "Especialista em Vistos Familiares",
      experiencia: "Consultora há 12 anos",
      descricao: "Focada em reunificação familiar e vistos K-1.",
      formacao: "Master in Immigration Law - NYU"
    }
  ];

  const numeros = [
    { numero: "5.000+", descricao: "Consultas Realizadas" },
    { numero: "2.000+", descricao: "Vistos Aprovados" },
    { numero: "98%", descricao: "Taxa de Satisfação" },
    { numero: "15+", descricao: "Anos de Experiência" }
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-baskerville font-bold text-petroleo mb-4">
            Sobre a LifeWayUSA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nascemos da paixão por transformar sonhos em realidade. Somos especialistas 
            em tornar o processo de imigração americana mais simples, transparente e acessível 
            para brasileiros que desejam uma nova vida nos Estados Unidos.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-baskerville font-bold text-petroleo mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A LifeWayUSA foi fundada em 2009 pela Dra. Maria Santos, uma advogada brasileira 
                  que viveu na própria pele os desafios de imigrar para os Estados Unidos. Após 
                  enfrentar dificuldades e burocracias complexas em seu próprio processo, ela decidiu 
                  dedicar sua carreira a ajudar outros brasileiros.
                </p>
                <p>
                  O que começou como um pequeno escritório de consultoria se transformou na principal 
                  plataforma digital para brasileiros interessados em imigrar para os EUA. Nossa missão 
                  sempre foi clara: democratizar o acesso a informações de qualidade e consultoria 
                  especializada.
                </p>
                <p>
                  Hoje, orgulhamo-nos de ter ajudado milhares de famílias brasileiras a realizarem 
                  o sonho americano, oferecendo não apenas consultoria, mas uma plataforma completa 
                  com ferramentas, recursos e comunidade de apoio.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {numeros.map((item, index) => (
                  <Card key={index} className="text-center p-6">
                    <div className="text-3xl font-baskerville font-bold text-petroleo mb-2">
                      {item.numero}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.descricao}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-baskerville font-bold text-petroleo text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const IconComponent = valor.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-petroleo to-lilas rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-baskerville text-petroleo">
                      {valor.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {valor.descricao}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-baskerville font-bold text-petroleo text-center mb-12">
            Nossa Equipe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-petroleo to-lilas rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {membro.nome.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-baskerville text-petroleo">
                    {membro.nome}
                  </CardTitle>
                  <CardDescription className="text-lilas font-medium">
                    {membro.cargo}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    {membro.descricao}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500">
                      <strong>Experiência:</strong> {membro.experiencia}
                    </div>
                    <div className="text-xs text-gray-500">
                      <strong>Formação:</strong> {membro.formacao}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-baskerville font-bold text-petroleo text-center mb-12">
            Nossa Missão
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-16 h-16 text-petroleo mx-auto mb-4" />
                <CardTitle className="text-xl font-baskerville text-petroleo">
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Democratizar o acesso ao sonho americano, fornecendo ferramentas, 
                  conhecimento e suporte especializado para brasileiros em sua jornada de imigração.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-16 h-16 text-lilas mx-auto mb-4" />
                <CardTitle className="text-xl font-baskerville text-petroleo">
                  Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser a principal referência em consultoria de imigração para os EUA na América Latina, 
                  reconhecida pela excelência e inovação em nossos serviços.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-16 h-16 text-petroleo mx-auto mb-4" />
                <CardTitle className="text-xl font-baskerville text-petroleo">
                  Compromisso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manter a transparência, honestidade e dedicação em cada interação, 
                  tratando cada cliente como membro da nossa família.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-2xl font-baskerville font-bold text-petroleo mb-4">
            Pronto para Começar sua Jornada?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Junte-se aos milhares de brasileiros que já confiaram em nós para 
            tornar o sonho americano uma realidade. Comece sua jornada hoje mesmo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-petroleo hover:bg-petroleo/90">
              <Link to="/dreams">Criar Plano de Sonhos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contato">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;