"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Lightbulb,
  Users,
  Code,
  Sprout,
  ArrowRight,
  ChevronUp,
  CloudSun,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import Image from "next/image"

const profesores = [
  { name: "Fabián Bessone", role: "Profesor de Robótica y Programación" },
  { name: "Celeste Borrachia", role: "Profesora de Biología" },
]

const coaches = [
  { name: "Ciro Cafaratti", role: "Coach - Estudiante" },
  { name: "Joaquín Trejo", role: "Coach - Estudiante" },
  { name: "Pilar Vazquez Garbero", role: "Coach - Estudiante" },
]

const todosLosIntegrantes = [
  "Fabián Bessone",
  "Celeste Borrachia",
  "Ciro Cafaratti",
  "Joaquín Trejo",
  "Pilar Vazquez Garbero",
  "Arianna Gutierrez",
  "Gianella Del Santo",
  "Jeremías Vitanzi",
  "Lázaro Vitanzi",
  "Lao Tejedor",
  "Valentín Loprestti",
  "Maia Quevedo",
  "Marina Albornoz",
  "Octavio Bambini",
  "A Acevedo",
  "Agostina A",
  "Alejo A",
  "Ciro Sagen",
  "Flor A",
  "Juanjo A",
  "Juan Heredia",
  "Lorenzo Martinez",
  "Pilar Beltramo",
  "Sofía A",
  "Victor",
]

const values = [
  { icon: Lightbulb, title: "Innovación", description: "Pensamiento creativo y soluciones originales" },
  { icon: Users, title: "Comunidad", description: "Trabajamos para y con nuestra gente" },
  { icon: Code, title: "Software", description: "Tecnología al servicio del bien común" },
  { icon: Sprout, title: "Sostenibilidad", description: "Proyectos con impacto duradero" },
]

const testimonials = [
  {
    text: "Gracias a Jóvenes Creativos, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Persona X",
  },
  {
    text: "Gracias a Jóvenes Creativos, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Persona X",
  },
  {
    text: "Gracias a Jóvenes Creativos, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Persona X",
  },
]

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

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
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Jóvenes Creativos Logo" width={40} height={40} className="w-10 h-10" />
            <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-primary via-accent to-chart-1 bg-clip-text text-transparent">
              Jóvenes Creativos
            </span>
          </motion.div>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-2/20 via-background to-chart-1/20" />
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-chart-1/30 to-chart-2/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/30 to-chart-3/30 rounded-full blur-3xl"
          />
        </div>

        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent text-balance"
          >
            Jóvenes Creativos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-muted-foreground mb-4 text-balance"
          >
            Jóvenes creando soluciones para nuestra comunidad
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            Un proyecto escolar que trasciende las aulas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/proyectos">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Conocé nuestros proyectos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Quiénes Somos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Somos un grupo de estudiantes apasionados y dos profesores comprometidos que nos unimos para crear
              soluciones tecnológicas que mejoren nuestra comunidad.
            </p>
          </motion.div>

          {/* Profesores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-center mb-6">Profesores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {profesores.map((profesor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image
                        src="/images/persona.jpg"
                        alt={profesor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-center">{profesor.name}</h4>
                    <p className="text-muted-foreground text-center text-sm">{profesor.role}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coaches */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-center mb-6">Coaches</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {coaches.map((coach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image
                        src="/images/ciro.jpg"
                        alt={coach.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-center">{coach.name}</h4>
                    <p className="text-muted-foreground text-center text-sm">{coach.role}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Nuestro Equipo</h2>

            {/* Imagen grupal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/naassom-azevedo-q-sei-tqslc-unsplash.jpg"
                alt="Equipo Jóvenes Creativos"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Accordion de integrantes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="integrantes">
                  <AccordionTrigger className="text-xl font-semibold">
                    Ver todos los integrantes ({todosLosIntegrantes.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                      {todosLosIntegrantes.map((nombre, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.02 }}
                          className="text-left text-muted-foreground hover:text-foreground transition-colors"
                        >
                          • {nombre}
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Misión y Visión</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Misión</h3>
                <p className="text-muted-foreground text-center text-pretty leading-relaxed">
                  Desarrollar soluciones tecnológicas innovadoras que aborden los desafíos reales de nuestra comunidad,
                  capacitando a jóvenes para que se conviertan en agentes de cambio a través del aprendizaje práctico y
                  la colaboración.
                </p>
              </Card>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-chart-2 flex items-center justify-center mb-6 mx-auto">
                  <Sprout className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Visión</h3>
                <p className="text-muted-foreground text-center text-pretty leading-relaxed">
                  Ser un referente de innovación juvenil en la región, demostrando que la educación combinada con
                  tecnología y compromiso social puede transformar comunidades y crear un futuro más sostenible e
                  inclusivo.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestro Propósito */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestro Propósito</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Utilizamos la tecnología, el software y la innovación para resolver las necesidades reales de nuestra
              comunidad, demostrando que la juventud tiene el poder de generar cambios significativos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-all">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="inline-block">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Carousel de frases */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-chart-1/20 to-chart-2/20 rounded-lg p-8">
              <motion.p
                key={Math.random()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold text-balance"
              >
                "La tecnología es nuestra herramienta, la comunidad es nuestro propósito"
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impacto y Logros */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Impacto y Logros</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Cada proyecto es un paso hacia una comunidad mejor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: 12, label: "Proyectos Realizados", suffix: "+" },
              { number: 150, label: "Personas Beneficiadas", suffix: "+" },
              { number: 500, label: "Horas de Trabajo", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-primary mb-2"
                  >
                    {stat.number}
                    {stat.suffix}
                  </motion.div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground mb-4 italic text-pretty">"{testimonial.text}"</p>
                  <p className="font-semibold text-sm">— {testimonial.author}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-1/10 rounded-2xl p-12 border-2 border-primary/20"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">¿Querés comunicarte con nosotros?</h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Estamos con muchas ganas y dispuestos a todo. ¡Sumate a Jóvenes Creativos!
                </p>
                <Link href="/contacto">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground group text-lg px-8 py-6"
                  >
                    Contactate con nosotros
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
