import { AddJobForm } from "@/components/add-job-form"
import { JobManagementPanel } from "@/components/job-management-panel"
import { StatsPanel } from "@/components/stats-panel"
import { ChartsPanel } from "@/components/charts-panel"
import { Header } from "@/components/header"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Dashboard de Candidaturas</h1>
          <p className="text-muted-foreground">Gestiona y rastrea todas tus candidaturas laborales</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulario para añadir candidaturas */}
          <div className="lg:col-span-1">
            <AddJobForm />
          </div>

          {/* Panel de gestión y estadísticas */}
          <div className="lg:col-span-2 space-y-6">
            <StatsPanel />
            <JobManagementPanel />
            <ChartsPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
