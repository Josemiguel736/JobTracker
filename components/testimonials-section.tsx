import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-muted-foreground">
            Desarrolladores que han mejorado su proceso de búsqueda laboral
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "JobTracker me ayudó a organizar más de 50 candidaturas. Conseguí mi trabajo actual gracias a su sistema
                de seguimiento."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">AM</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Ana Martínez</p>
                  <p className="text-xs text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "La interfaz es súper intuitiva. Ahora puedo ver exactamente qué empresas no me han respondido y hacer
                seguimiento."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">CG</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Carlos García</p>
                  <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Los análisis me mostraron que estaba aplicando a muy pocas posiciones. Ahora tengo una estrategia más
                efectiva."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">LR</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Laura Rodríguez</p>
                  <p className="text-xs text-muted-foreground">Backend Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
