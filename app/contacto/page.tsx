"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, Facebook, Twitter, MapPin, ChevronUp, CloudSun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactoPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" })

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = "Ingresa un correo válido"
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es requerido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate form submission
      console.log("[v0] Form submitted:", formData)
      setSubmitted(true)
      setFormData({ nombre: "", correo: "", asunto: "", mensaje: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
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
            <Link href="/proyectos" className="text-foreground hover:text-primary transition-colors">
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

      {/* Hero Section with gradient background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/20" />
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
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-chart-2/30 to-accent/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-chart-1 bg-clip-text text-transparent text-balance">
              Contactate con Jóvenes Creativos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nos encanta escuchar nuevas ideas y colaborar con nuestra comunidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envianos un mensaje</h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-chart-3/20 border border-chart-3 rounded-lg text-chart-3"
                    >
                      ¡Mensaje enviado con éxito! Te responderemos pronto.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className={errors.nombre ? "border-destructive" : ""}
                      />
                      {errors.nombre && <p className="text-destructive text-sm mt-1">{errors.nombre}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Correo <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={errors.correo ? "border-destructive" : ""}
                      />
                      {errors.correo && <p className="text-destructive text-sm mt-1">{errors.correo}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Asunto <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        placeholder="¿De qué querés hablar?"
                        className={errors.asunto ? "border-destructive" : ""}
                      />
                      {errors.asunto && <p className="text-destructive text-sm mt-1">{errors.asunto}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Mensaje <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos cómo quieres colaborar o qué ideas tenés..."
                        rows={6}
                        className={errors.mensaje ? "border-destructive" : ""}
                      />
                      {errors.mensaje && <p className="text-destructive text-sm mt-1">{errors.mensaje}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Enviar mensaje
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">gdjcreativos@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mt-1"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+54 9 3468 52-1095</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Parque Industrial - Corral de Bustos Ifflinger</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Seguinos en redes</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        icon: Instagram,
                        href: "https://www.instagram.com/jovenes__creativos?igsh=MWYzejdidTJoZXhxcA==",
                        label: "Instagram",
                      },
                      {
                        icon: Facebook,
                        href: "https://www.instagram.com/jovenes__creativos?igsh=MWYzejdidTJoZXhxcA==",
                        label: "Facebook",
                      },
                      {
                        icon: Twitter,
                        href: "https://www.instagram.com/jovenes__creativos?igsh=MWYzejdidTJoZXhxcA==",
                        label: "Twitter",
                      },
                      { icon: Mail, href: "mailto:gdjcreativos@gmail.com", label: "Email" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target={social.icon === Mail ? undefined : "_blank"}
                        rel={social.icon === Mail ? undefined : "noopener noreferrer"}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <h3 className="text-lg font-bold mb-2">¿Querés sumarte?</h3>
                  <p className="text-sm text-muted-foreground">
                    Estamos siempre buscando nuevos talentos y colaboradores. ¡Escribinos!
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 border-t border-border">
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
