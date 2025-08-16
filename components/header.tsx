import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <Link href={"/"}>
            <h1 className="font-heading font-bold text-xl text-foreground">JobTracker</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Precios
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonios
            </a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Soporte
            </a>
          </nav>

          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Comenzar Gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
