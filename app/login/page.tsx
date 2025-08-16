import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function LoginPage() {

  const cookiesHandler = await cookies()

 const isLogged = cookiesHandler.get("isLogged")
 if (isLogged) {
  redirect("/dashboard")
 }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to home button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-slate-600 hover:text-white hover:bg-cyan-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        {/* Login card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenido de vuelta</h1>
            <p className="text-slate-600">Accede a tu agenda de candidaturas</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              ¿No tienes cuenta?{" "}
              <Link href="/register" className="text-cyan-600 hover:text-cyan-700 font-medium">
                Regístrate gratis
              </Link>
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 mb-4">Más de 1,000 desarrolladores confían en JobTracker</p>
          <div className="flex justify-center items-center space-x-6 opacity-60">
            <div className="text-xs text-slate-400">🔒 Datos seguros</div>
            <div className="text-xs text-slate-400">⚡ Acceso instantáneo</div>
            <div className="text-xs text-slate-400">📱 Multiplataforma</div>
          </div>
        </div>
      </div>
    </div>
  )
}
