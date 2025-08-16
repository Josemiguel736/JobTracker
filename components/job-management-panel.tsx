"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Edit, Trash2, Building, User, Calendar, ExternalLink } from "lucide-react"

interface JobApplication {
  id: string
  puesto: string
  empresa: string
  recruiter: string
  fechaSolicitud: string
  estado: "pendiente" | "entrevista" | "rechazado" | "aceptado"
  description: string
  url: string
}

const mockJobs: JobApplication[] = [
  {
    id: "1",
    puesto: "Frontend Developer",
    empresa: "Google",
    recruiter: "Ana García",
    fechaSolicitud: "2024-01-15",
    estado: "entrevista",
    description: "Desarrollo de interfaces con React y TypeScript",
    url: "https://careers.google.com/jobs/123",
  },
  {
    id: "2",
    puesto: "Full Stack Developer",
    empresa: "Microsoft",
    recruiter: "Carlos López",
    fechaSolicitud: "2024-01-12",
    estado: "pendiente",
    description: "Desarrollo full stack con .NET y React",
    url: "https://careers.microsoft.com/jobs/456",
  },
  {
    id: "3",
    puesto: "React Developer",
    empresa: "Meta",
    recruiter: "María Rodríguez",
    fechaSolicitud: "2024-01-10",
    estado: "rechazado",
    description: "Desarrollo de componentes React para Facebook",
    url: "https://careers.meta.com/jobs/789",
  },
  {
    id: "4",
    puesto: "Backend Developer",
    empresa: "Amazon",
    recruiter: "Juan Pérez",
    fechaSolicitud: "2024-01-08",
    estado: "aceptado",
    description: "Desarrollo de APIs con Node.js y AWS",
    url: "https://amazon.jobs/jobs/101112",
  },
  {
    id: "5",
    puesto: "DevOps Engineer",
    empresa: "Netflix",
    recruiter: "Laura Martín",
    fechaSolicitud: "2024-01-05",
    estado: "pendiente",
    description: "Gestión de infraestructura cloud y CI/CD",
    url: "https://jobs.netflix.com/jobs/131415",
  },
]

export function JobManagementPanel() {
  const [jobs, setJobs] = useState<JobApplication[]>(mockJobs)
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const getStatusColor = (estado: JobApplication["estado"]) => {
    switch (estado) {
      case "pendiente":
        return "bg-secondary text-secondary-foreground"
      case "entrevista":
        return "bg-chart-3 text-white"
      case "rechazado":
        return "bg-destructive text-destructive-foreground"
      case "aceptado":
        return "bg-chart-1 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusText = (estado: JobApplication["estado"]) => {
    switch (estado) {
      case "pendiente":
        return "Pendiente"
      case "entrevista":
        return "Entrevista"
      case "rechazado":
        return "Rechazado"
      case "aceptado":
        return "Aceptado"
      default:
        return estado
    }
  }

  const handleStatusChange = (jobId: string, newStatus: JobApplication["estado"]) => {
    setJobs((prev) => prev.map((job) => (job.id === jobId ? { ...job, estado: newStatus } : job)))
  }

  const handleEdit = (job: JobApplication) => {
    setEditingJob({ ...job })
    setIsEditDialogOpen(true)
  }

  const handleSaveEdit = () => {
    if (editingJob) {
      setJobs((prev) => prev.map((job) => (job.id === editingJob.id ? editingJob : job)))
      setIsEditDialogOpen(false)
      setEditingJob(null)
    }
  }

  const handleDelete = (jobId: string) => {
    setJobs((prev) => prev.filter((job) => job.id !== jobId))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Gestión de Candidaturas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 overflow-y-auto space-y-3 pr-2">
          {jobs.map((job) => (
            <div key={job.id} className="border rounded-lg p-4 bg-card hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">{job.puesto}</h3>
                    <Select
                      value={job.estado}
                      onValueChange={(value: JobApplication["estado"]) => handleStatusChange(job.id, value)}
                    >
                      <SelectTrigger className="w-auto h-6 text-xs">
                        <Badge className={getStatusColor(job.estado)}>{getStatusText(job.estado)}</Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pendiente">Pendiente</SelectItem>
                        <SelectItem value="entrevista">Entrevista</SelectItem>
                        <SelectItem value="rechazado">Rechazado</SelectItem>
                        <SelectItem value="aceptado">Aceptado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="h-3 w-3" />
                      {job.empresa}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {job.recruiter}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(job.fechaSolicitud).toLocaleDateString("es-ES")}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>

                  {job.url && (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Ver candidatura
                    </a>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(job)} className="h-8 w-8 p-0">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(job.id)}
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Editar Candidatura</DialogTitle>
            </DialogHeader>
            {editingJob && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-puesto">Puesto</Label>
                  <Input
                    id="edit-puesto"
                    value={editingJob.puesto}
                    onChange={(e) => setEditingJob({ ...editingJob, puesto: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-empresa">Empresa</Label>
                  <Input
                    id="edit-empresa"
                    value={editingJob.empresa}
                    onChange={(e) => setEditingJob({ ...editingJob, empresa: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-recruiter">Recruiter</Label>
                  <Input
                    id="edit-recruiter"
                    value={editingJob.recruiter}
                    onChange={(e) => setEditingJob({ ...editingJob, recruiter: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-description">Descripción</Label>
                  <Textarea
                    id="edit-description"
                    value={editingJob.description}
                    onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-url">URL</Label>
                  <Input
                    id="edit-url"
                    value={editingJob.url}
                    onChange={(e) => setEditingJob({ ...editingJob, url: e.target.value })}
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSaveEdit} className="flex-1">
                    Guardar
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="flex-1">
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
