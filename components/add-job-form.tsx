"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export function AddJobForm() {
  const [formData, setFormData] = useState({
    puesto: "",
    description: "",
    empresa: "",
    url: "",
    recruiter: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Nueva candidatura:", formData)

    // Reset form
    setFormData({
      puesto: "",
      description: "",
      empresa: "",
      url: "",
      recruiter: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-heading">
          <Plus className="h-5 w-5 text-primary" />
          Nueva Candidatura
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="puesto">Puesto</Label>
            <Input
              id="puesto"
              name="puesto"
              value={formData.puesto}
              onChange={handleChange}
              placeholder="ej. Frontend Developer"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="ej. Google"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción del puesto..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL de la Candidatura</Label>
            <Input
              id="url"
              name="url"
              type="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="recruiter">Recruiter</Label>
            <Input
              id="recruiter"
              name="recruiter"
              value={formData.recruiter}
              onChange={handleChange}
              placeholder="Nombre del recruiter"
            />
          </div>

          <Button type="submit" className="w-full">
            Añadir Candidatura
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
