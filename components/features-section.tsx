import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar, BarChart3, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
            Todo lo que necesitas para organizar tus candidaturas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Campos personalizables, seguimiento automático y análisis detallado para maximizar tus oportunidades
            laborales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading">Seguimiento Completo</CardTitle>
              <CardDescription>
                Rastrea puesto, recruiter, empresa, fecha de solicitud y estado de respuesta en tiempo real.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-heading">Análisis Inteligente</CardTitle>
              <CardDescription>
                Obtén insights sobre tus candidaturas: tasas de respuesta, tiempos promedio y tendencias del mercado.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading">Gestión de Contactos</CardTitle>
              <CardDescription>
                Mantén un registro detallado de recruiters y contactos clave para futuras oportunidades.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
