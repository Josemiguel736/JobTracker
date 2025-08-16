"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Clock, CheckCircle, Users, TrendingUp, Calendar } from "lucide-react"

interface StatsData {
  total: number
  pendientes: number
  conRespuesta: number
  entrevistas: number
  rechazados: number
  aceptados: number
  estaSemanaCandidaturas: number
  promedioRespuesta: number
}

export function StatsPanel() {
  const stats: StatsData = {
    total: 24,
    pendientes: 8,
    conRespuesta: 16,
    entrevistas: 3,
    rechazados: 10,
    aceptados: 3,
    estaSemanaCandidaturas: 5,
    promedioRespuesta: 7, // días
  }

  const tasaRespuesta = ((stats.conRespuesta / stats.total) * 100).toFixed(1)
  const tasaExito = ((stats.aceptados / stats.total) * 100).toFixed(1)

  return (
    <div className="space-y-4">
      {/* Estadísticas principales */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <p className="text-xs text-muted-foreground">candidaturas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.pendientes}</div>
            <p className="text-xs text-muted-foreground">sin respuesta</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Con Respuesta</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-1">{stats.conRespuesta}</div>
            <p className="text-xs text-muted-foreground">respondidas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entrevistas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">{stats.entrevistas}</div>
            <p className="text-xs text-muted-foreground">programadas</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Respuesta</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">{tasaRespuesta}%</div>
            <p className="text-xs text-muted-foreground">de candidaturas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Éxito</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-1">{tasaExito}%</div>
            <p className="text-xs text-muted-foreground">aceptadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.estaSemanaCandidaturas}</div>
            <p className="text-xs text-muted-foreground">nuevas candidaturas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-muted-foreground">{stats.promedioRespuesta}</div>
            <p className="text-xs text-muted-foreground">días de respuesta</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading">Resumen de Estados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-secondary/10 rounded-lg">
              <div className="text-2xl font-bold text-secondary">{stats.pendientes}</div>
              <div className="text-sm text-muted-foreground">Pendientes</div>
            </div>
            <div className="text-center p-3 bg-chart-3/10 rounded-lg">
              <div className="text-2xl font-bold text-chart-3">{stats.entrevistas}</div>
              <div className="text-sm text-muted-foreground">Entrevistas</div>
            </div>
            <div className="text-center p-3 bg-destructive/10 rounded-lg">
              <div className="text-2xl font-bold text-destructive">{stats.rechazados}</div>
              <div className="text-sm text-muted-foreground">Rechazados</div>
            </div>
            <div className="text-center p-3 bg-chart-1/10 rounded-lg">
              <div className="text-2xl font-bold text-chart-1">{stats.aceptados}</div>
              <div className="text-sm text-muted-foreground">Aceptados</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
