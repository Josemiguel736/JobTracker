import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Building, User, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                Para Programadores
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-tight text-foreground">
                Organiza tus Candidaturas con <span className="text-primary">Facilidad</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                La agenda digital perfecta para desarrolladores. Rastrea puestos, recruiters, empresas y respuestas en
                un solo lugar organizado y eficiente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Prueba Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Configuración en 2 minutos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-card-foreground">Mis Candidaturas</h3>
                  <Badge className="bg-primary/10 text-primary">5 Activas</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Senior React Developer</p>
                        <p className="text-xs text-muted-foreground">TechCorp</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Pendiente
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Full Stack Engineer</p>
                        <p className="text-xs text-muted-foreground">StartupXYZ</p>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary">Entrevista</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Frontend Developer</p>
                        <p className="text-xs text-muted-foreground">InnovateLab</p>
                      </div>
                    </div>
                    <Badge variant="outline">Respuesta</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
