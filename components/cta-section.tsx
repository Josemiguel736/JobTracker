import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary-foreground">
              ¿Listo para organizar tus candidaturas?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Únete a cientos de desarrolladores que ya están usando JobTracker para conseguir mejores oportunidades
              laborales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input placeholder="tu@email.com" className="bg-primary-foreground text-foreground border-0" />
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
            >
              Comenzar Gratis
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60">
            Prueba gratuita de 14 días • Sin compromiso • Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  )
}
