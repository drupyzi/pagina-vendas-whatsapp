"use client"

import { Check, Shield, TrendingUp, Zap, MessageCircle, BarChart3, Lock, Gift, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            <MessageCircle className="h-4 w-4" />
            Agente Financeiro Inteligente
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Transforme suas Finanças com{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              um Clique
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:text-xl md:text-2xl">
            Conheça o <strong className="text-emerald-600">Friend IA</strong> – Seu Agente Financeiro Inteligente no WhatsApp que Organiza Seus Gastos em Minutos!
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-600 sm:text-lg">
            Diga adeus ao estresse financeiro! Com o Friend IA, você terá controle total sobre suas finanças e verá cada centavo em seu devido lugar, sem complicação.
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="group h-14 bg-gradient-to-r from-emerald-500 to-green-600 px-8 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Garantir Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-2 border-emerald-600 px-8 text-lg font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-50"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-green-600" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">+2.500 usuários ativos</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600">4.9/5 avaliação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Texto de Abertura */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
            Você já se sentiu perdido na hora de controlar seus gastos? Dias e noites pensando em onde foi seu dinheiro? 
            Conheça o <strong className="text-emerald-600">Friend IA</strong>, seu aliado no WhatsApp! Em apenas alguns cliques, 
            este Agente Financeiro Inteligente vai anotar e organizar suas despesas, trazendo clareza e tranquilidade à sua vida financeira.
          </p>
        </div>
      </section>

      {/* Conexão com o Leitor */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            A Falta de Controle Financeiro Está Te Prejudicando?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
            A falta de controle nas finanças pode levar ao <strong>estresse, dívidas e insegurança</strong>. 
            Você merece saber exatamente para onde seu dinheiro está indo! O Friend IA é a solução que você precisa 
            para conquistar a paz financeira e, finalmente, <strong className="text-emerald-600">viver com mais liberdade</strong>.
          </p>
        </div>
      </section>

      {/* Apresentação da Solução */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              O Novo Mecanismo que Vai{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Revolucionar suas Finanças
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 sm:text-xl">
              O Friend IA não é um aplicativo comum – é um assistente financeiro que funciona direto no seu WhatsApp. 
              Ele registra cada gasto seu, analisa seus hábitos e fornece relatórios simples e eficazes, tudo via mensagem. 
              <strong className="text-emerald-600"> Simples assim!</strong>
            </p>
          </div>

          {/* Demonstração Visual */}
          <div className="relative mx-auto max-w-md">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 shadow-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Friend IA</p>
                  <p className="text-xs text-white/80">online</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <p className="text-sm text-gray-700">Gastei R$ 45 no almoço</p>
                </div>
                <div className="ml-8 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                  <p className="text-sm font-medium text-emerald-600">✓ Registrado!</p>
                  <p className="text-xs text-gray-600 mt-1">Categoria: Alimentação</p>
                  <p className="text-xs text-gray-600">Total do mês: R$ 890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Por Que Escolher o Friend IA?
            </h2>
            <p className="text-lg text-gray-600">
              Benefícios que vão transformar sua relação com o dinheiro
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Organização Instantânea",
                description: "Anote seus gastos e categorize-os em segundos.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: BarChart3,
                title: "Relatórios Mensais",
                description: "Conheça seu padrão de despesas e saiba onde economizar.",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: MessageCircle,
                title: "Sem Complicação",
                description: "Utilize apenas o WhatsApp – nada de aplicativos complexos.",
                color: "from-emerald-400 to-green-500"
              },
              {
                icon: TrendingUp,
                title: "Dicas Personalizadas",
                description: "Dicas sobre economia baseadas no seu perfil de gastos.",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Lock,
                title: "Segurança Total",
                description: "Suas informações financeiras, protegidas e confidenciais.",
                color: "from-red-400 to-rose-500"
              },
              {
                icon: Shield,
                title: "Suporte Dedicado",
                description: "Acesso direto ao suporte via WhatsApp quando precisar.",
                color: "from-indigo-400 to-blue-500"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg`}>
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Vai Receber */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              O Que Você Vai Receber
            </h2>
          </div>

          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {[
                  "Cadastro no Friend IA",
                  "Análise mensal dos seus gastos",
                  "Relatórios simples e visuais",
                  "Dicas personalizadas para otimização de despesas",
                  "Acesso direto ao suporte via WhatsApp"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-lg text-gray-600">
              Histórias reais de transformação financeira
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                name: "Juliana S.",
                text: "O Friend IA mudou minha vida! Consegui economizar quase R$200 por mês só organizando melhor meus gastos!",
                avatar: "from-pink-400 to-rose-500"
              },
              {
                name: "Carlos T.",
                text: "Nunca pensei que seria tão fácil controlar minhas finanças. O assistente faz tudo por mim!",
                avatar: "from-blue-400 to-cyan-500"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.avatar}`} />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <div className="flex gap-1 text-yellow-500">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-4 border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Garantia Incondicional de 30 Dias
              </h2>
              <p className="text-lg text-gray-700 sm:text-xl">
                Experimente o Friend IA por 30 dias com <strong>Garantia Incondicional</strong>. 
                Se não estiver satisfeito, devolvemos seu dinheiro, <strong className="text-emerald-600">sem perguntas!</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bônus */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-xl animate-pulse">
            <Gift className="h-10 w-10 text-white" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Bônus Exclusivo por Tempo Limitado!
          </h2>
          <p className="mb-6 text-xl text-gray-700 sm:text-2xl">
            🎁 Inscreva-se agora e ganhe uma <strong className="text-purple-600">consultoria financeira personalizada de 30 minutos</strong>. 
            Vagas limitadas!
          </p>
          <p className="text-lg font-semibold text-red-600">
            ⏰ Apenas 12 vagas restantes!
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas sobre o Friend IA
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-lg border-2 bg-white px-6 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-emerald-600">
                É seguro compartilhar meus dados com o Friend IA?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Sim! Suas informações são criptografadas e 100% seguras. Utilizamos os mais altos padrões de segurança para proteger seus dados financeiros.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-lg border-2 bg-white px-6 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-emerald-600">
                Preciso baixar um aplicativo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Não! O Friend IA funciona diretamente no WhatsApp. Você não precisa baixar nenhum aplicativo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-lg border-2 bg-white px-6 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-emerald-600">
                Como funciona a garantia de 30 dias?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Se você não estiver satisfeito com o Friend IA nos primeiros 30 dias, basta nos contatar e faremos o reembolso completo, sem perguntas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-lg border-2 bg-white px-6 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-emerald-600">
                Quanto custa o Friend IA?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Entre em contato conosco para conhecer os planos disponíveis. Temos opções que cabem no seu bolso e que vão te ajudar a economizar muito mais!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Pronto para Transformar suas Finanças?
          </h2>
          <p className="mb-10 text-xl text-white/90 sm:text-2xl">
            👉 Clique aqui e comece a organizar suas finanças com o Friend IA AGORA! 
            A transformação financeira está a um clique de distância!
          </p>
          
          <Button 
            size="lg" 
            className="group h-16 bg-white px-12 text-xl font-bold text-emerald-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-white/50"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Garantir Agora
          </Button>

          <p className="mt-8 text-sm text-white/80">
            ✓ Sem cartão de crédito necessário para teste • ✓ Garantia de 30 dias • ✓ Suporte 24/7
          </p>
        </div>
      </section>

      {/* Finalização */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
            Não deixe que suas finanças controlem você! Com o <strong className="text-emerald-600">Friend IA</strong>, 
            você pode ter o controle total em minutos. Experimente sem risco e comece a transformar sua vida financeira hoje mesmo!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-gray-600">
            © 2024 Friend IA. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Seus dados são protegidos e criptografados. Política de Privacidade • Termos de Uso
          </p>
        </div>
      </footer>
    </div>
  )
}
