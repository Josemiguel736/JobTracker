"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts"

const dailyApplicationsData = [
  { date: "2024-01-01", candidaturas: 2 },
  { date: "2024-01-02", candidaturas: 1 },
  { date: "2024-01-03", candidaturas: 3 },
  { date: "2024-01-04", candidaturas: 0 },
  { date: "2024-01-05", candidaturas: 2 },
  { date: "2024-01-06", candidaturas: 1 },
  { date: "2024-01-07", candidaturas: 4 },
  { date: "2024-01-08", candidaturas: 2 },
  { date: "2024-01-09", candidaturas: 1 },
  { date: "2024-01-10", candidaturas: 3 },
  { date: "2024-01-11", candidaturas: 0 },
  { date: "2024-01-12", candidaturas: 2 },
  { date: "2024-01-13", candidaturas: 1 },
  { date: "2024-01-14", candidaturas: 2 },
]

const statusData = [
  { name: "Pendientes", value: 8, color: "grey" },
  { name: "Entrevistas", value: 3, color: "cyan" },
  { name: "Rechazados", value: 10, color: "red" },
  { name: "Aceptados", value: 3, color: "green" },
]

const chartConfig = {
  candidaturas: {
    label: "Candidaturas",
    color: "hsl(var(--primary))",
  },
  pendientes: {
    label: "Pendientes",
    color: "hsl(var(--secondary))",
  },
  entrevistas: {
    label: "Entrevistas",
    color: "hsl(var(--chart-3))",
  },
  rechazados: {
    label: "Rechazados",
    color: "hsl(var(--destructive))",
  },
  aceptados: {
    label: "Aceptados",
    color: "hsl(var(--chart-1))",
  },
}

export function ChartsPanel() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Gráfica de candidaturas por día */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Candidaturas por Día</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyApplicationsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" tickFormatter={formatDate} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  labelFormatter={(value) => `Fecha: ${formatDate(value as string)}`}
                />
                <Line
                  type="monotone"
                  dataKey="candidaturas"
                  stroke="blue"
                  strokeWidth={2}
                  dot={{ fill: "grey", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Gráfica de estados */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Distribución por Estado</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value, name) => [`${value} candidaturas`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Leyenda personalizada */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-muted-foreground">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gráfica de barras semanal */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-heading">Resumen Semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyApplicationsData.slice(-7)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" tickFormatter={formatDate} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  labelFormatter={(value) => `Fecha: ${formatDate(value as string)}`}
                />
                <Bar dataKey="candidaturas" fill="orange" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
