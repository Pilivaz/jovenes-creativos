"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import {
  Code,
  Leaf,
  BookOpen,
  Recycle,
  Heart,
  Zap,
  ChevronUp,
  CloudSun,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const projects = [
  {
    id: 1,
    title: "Sistema de Biblioteca Digital",
    category: "software",
    icon: BookOpen,
    description: "Plataforma web para gestionar préstamos y catálogo de libros",
    longDescription:
      "Desarrollamos un sistema completo de gestión bibliotecaria que permite a los usuarios buscar libros, realizar reservas online y gestionar préstamos. Incluye panel administrativo para bibliotecarios.",
    impact: "+500 libros digitalizados",
    beneficiaries: "200+ usuarios activos",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/modern-library-digital-system-interface.jpg",
  },
  {
    id: 2,
    title: "App de Reciclaje Inteligente",
    category: "medio ambiente",
    icon: Recycle,
    description: "Aplicación móvil para clasificar residuos y encontrar puntos de reciclaje",
    longDescription:
      "Una app que usa IA para identificar tipos de residuos mediante la cámara del celular y muestra el punto de reciclaje más cercano. Incluye sistema de recompensas por reciclar.",
    impact: "+2 toneladas de residuos reciclados",
    beneficiaries: "150+ familias participantes",
    technologies: ["React Native", "TensorFlow", "Firebase"],
    image: "/recycling-mobile-app-interface-green.jpg",
  },
  {
    id: 3,
    title: "Portal Comunitario",
    category: "comunidad",
    icon: Heart,
    description: "Red social local para conectar vecinos y compartir recursos",
    longDescription:
      "Plataforma que conecta a los vecinos del barrio para compartir herramientas, organizar eventos comunitarios y ayudarse mutuamente. Fortalece los lazos comunitarios.",
    impact: "+50 eventos organizados",
    beneficiaries: "300+ vecinos conectados",
    technologies: ["Next.js", "Supabase", "Tailwind"],
    image: "/community-social-network-interface.jpg",
  },
  {
    id: 4,
    title: "Monitor de Calidad del Aire",
    category: "medio ambiente",
    icon: Leaf,
    description: "Sistema IoT para medir contaminación en tiempo real",
    longDescription:
      "Red de sensores distribuidos por la ciudad que miden la calidad del aire en tiempo real. Los datos se visualizan en un dashboard web accesible para todos.",
    impact: "10 sensores instalados",
    beneficiaries: "Toda la comunidad",
    technologies: ["Arduino", "Python", "React"],
    image: "/air-quality-monitoring-dashboard.jpg",
  },
  {
    id: 5,
    title: "Plataforma Educativa",
    category: "software",
    icon: Code,
    description: "Sistema de tutorías online para estudiantes",
    longDescription:
      "Conectamos estudiantes que necesitan ayuda con tutores voluntarios de la comunidad. Incluye videollamadas, chat y recursos educativos compartidos.",
    impact: "+100 sesiones de tutoría",
    beneficiaries: "80+ estudiantes ayudados",
    technologies: ["Vue.js", "WebRTC", "MongoDB"],
    image: "/online-tutoring-platform-interface.jpg",
  },
  {
    id: 6,
    title: "Sistema de Energía Solar",
    category: "medio ambiente",
    icon: Zap,
    description: "Monitoreo de paneles solares comunitarios",
    longDescription:
      "Dashboard para monitorear la producción de energía de los paneles solares instalados en edificios públicos. Muestra estadísticas de ahorro y reducción de CO2.",
    impact: "5000 kWh generados",
    beneficiaries: "3 edificios públicos",
    technologies: ["React", "InfluxDB", "Grafana"],
    image: "/solar-monitoring-dashboard.png",
  },
]

const categories = [
  { id: "todos", label: "Todos" },
  { id: "software", label: "Software" },
  { id: "comunidad", label: "Comunidad" },
  { id: "medio ambiente", label: "Medio Ambiente" },
]

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const filteredProjects =
    selectedCategory === "todos" ? projects : projects.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
              <Image src="/images/logo.png" alt="Jóvenes Creativos Logo" width={40} height={40} className="w-10 h-10" />
              <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-primary via-accent to-chart-1 bg-clip-text text-transparent">
                Jóvenes Creativos
              </span>
            </motion.div>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/proyectos" className="text-primary font-semibold">
              Proyectos
            </Link>
            <Link href="/contacto">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Contacto
              </Button>
            </Link>
            <div className="w-px h-6 bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 via-background to-chart-2/20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-chart-2/30 to-chart-3/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent text-balance"
          >
            Nuestros Proyectos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Soluciones tecnológicas creadas con pasión para transformar nuestra comunidad
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: 6, label: "Soluciones Implementadas", suffix: "+" },
              { number: 250, label: "Horas de Desarrollo", suffix: "+" },
              { number: 500, label: "Personas Impactadas", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-primary" : ""}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="overflow-hidden h-full cursor-pointer group hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <project.icon className="absolute w-16 h-16 text-white/80" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3">{project.category}</Badge>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors text-balance">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-semibold">{project.impact}</span>
                      <span className="text-muted-foreground">{project.beneficiaries}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl flex items-center gap-3">
                  <selectedProject.icon className="w-8 h-8 text-primary" />
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  <Badge className="mt-2">{selectedProject.category}</Badge>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Descripción</h4>
                  <p className="text-muted-foreground text-pretty">{selectedProject.longDescription}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h5 className="font-semibold mb-1">Impacto</h5>
                    <p className="text-primary font-bold">{selectedProject.impact}</p>
                  </Card>
                  <Card className="p-4">
                    <h5 className="font-semibold mb-1">Beneficiarios</h5>
                    <p className="text-primary font-bold">{selectedProject.beneficiaries}</p>
                  </Card>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Jóvenes Creativos</h3>
              <p className="text-muted-foreground text-sm text-pretty">
                Jóvenes creando soluciones tecnológicas para nuestra comunidad
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link href="/proyectos" className="block text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
                <Link href="/contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
                <a
                  href="https://app.weathercloud.net/@Fabianbessone#profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <CloudSun className="w-4 h-4" />
                  Estación Meteorológica
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="https://www.instagram.com/jovenes__creativos?igsh=MWYzejdidTJoZXhxcA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">© 2025 Jóvenes Creativos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  )
}
