"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, MapPin, Calendar, Weight, Ruler, Clock, ArrowRight, Phone, MessageCircle, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface Project {
  id: number
  title: string
  location: string
  department: string
  category: "Transporte Especial" | "Grúa e Izaje" | "Escolta" | "Proyecto Industrial"
  description: string
  challenge: string
  solution: string
  image: string
  stats: { label: string; value: string }[]
  year: string
  client: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Transporte de Excavadora CAT 390",
    location: "Bogotá a Medellín",
    department: "Antioquia",
    category: "Transporte Especial",
    description: "Movilización de excavadora de orugas CAT 390 de 95 toneladas entre Bogotá y Medellín para proyecto minero.",
    challenge: "Transportar una excavadora de 95 toneladas a lo largo de 420 km de carretera con tramos de alta pendiente y curvas cerradas.",
    solution: "Se utilizó una cama baja hidráulica de 4 ejes con tractora de alta potencia, acompañada de dos escoltas y un técnico vial. Se gestionaron permisos especiales ante INVIAS para circulación nocturna.",
    image: "/images/gallery/foto-001.jpg",
    stats: [
      { label: "Peso", value: "95 Ton" },
      { label: "Distancia", value: "420 km" },
      { label: "Duración", value: "3 días" },
    ],
    year: "2023",
    client: "Cliente Minero",
    featured: true,
  },
  {
    id: 2,
    title: "Izaje de Estructura Industrial",
    location: "Zona Franca Bogotá",
    department: "Cundinamarca",
    category: "Grúa e Izaje",
    description: "Izaje y montaje de estructura metálica de 65 toneladas en zona franca industrial de Bogotá.",
    challenge: "Maniobrar una estructura de 65 toneladas dentro de un espacio reducido con restricciones de altura y acceso limitado.",
    solution: "Se empleó una grúa telescópica de 120 toneladas con riggers certificados. Se realizó un estudio de ingeniería de izaje y se ejecutó la maniobra en horario nocturno para minimizar impacto.",
    image: "/images/gallery/foto-002.jpg",
    stats: [
      { label: "Peso", value: "65 Ton" },
      { label: "Altura Izaje", value: "28 m" },
      { label: "Personal", value: "8 operarios" },
    ],
    year: "2023",
    client: "Cliente Industrial",
    featured: false,
  },
  {
    id: 3,
    title: "Traslado de Grúa Torre",
    location: "Barranquilla",
    department: "Atlántico",
    category: "Grúa e Izaje",
    description: "Desmonte, transporte y reinstalación de grúa torre de 45 metros en obra de construcción.",
    challenge: "Desmontar una grúa torre de 45 m en una zona urbana densa con tráfico vehicular constante.",
    solution: "Se planificó el desmonte por secciones, transportando cada módulo en plataformas especiales con escoltas. La reinstalación se realizó con grúa auxiliar de 80 toneladas.",
    image: "/images/gallery/foto-003.jpg",
    stats: [
      { label: "Altura", value: "45 m" },
      { label: "Peso Total", value: "38 Ton" },
      { label: "Secciones", value: "12 módulos" },
    ],
    year: "2022",
    client: "Constructora",
    featured: false,
  },
  {
    id: 4,
    title: "Transporte de Transformador 180 Ton",
    location: "Bucaramanga",
    department: "Santander",
    category: "Transporte Especial",
    description: "Movilización de transformador eléctrico de 180 toneladas desde puerto hasta subestación eléctrica.",
    challenge: "Trasladar un transformador de 180 toneladas por carreteras con puentes de capacidad limitada y pendientes pronunciadas.",
    solution: "Se utilizó una cama baja modular hidráulica de 8 ejes con escolta policial. Se realizaron estudios de capacidad de puentes y se reforzaron tramos críticos.",
    image: "/images/gallery/foto-004.jpg",
    stats: [
      { label: "Peso", value: "180 Ton" },
      { label: "Distancia", value: "85 km" },
      { label: "Ejes", value: "8 ejes" },
    ],
    year: "2023",
    client: "Empresa Eléctrica",
    featured: false,
  },
  {
    id: 5,
    title: "Operación Multipiso - Cargadora Frontal",
    location: "Cali",
    department: "Valle del Cauca",
    category: "Proyecto Industrial",
    description: "Cargue y descargue de cargadora frontal CAT 966 en plataforma elevada para operación en piso superior de bodega.",
    challenge: "Izaje y posicionamiento de cargadora frontal de 28 toneladas en el segundo piso de una bodega industrial sin acceso mediante rampa.",
    solution: "Se implementó un sistema de izaje con grúa de 100 toneladas y vigas de distribución de carga. La operación se ejecutó con precisión milimétrica en 6 horas.",
    image: "/images/gallery/foto-005.jpg",
    stats: [
      { label: "Peso", value: "28 Ton" },
      { label: "Altura", value: "12 m" },
      { label: "Duración", value: "6 horas" },
    ],
    year: "2022",
    client: "Cliente Industrial",
    featured: false,
  },
  {
    id: 6,
    title: "Transporte de Módulo Prefabricado",
    location: "Cartagena",
    department: "Bolívar",
    category: "Transporte Especial",
    description: "Transporte de módulo prefabricado de 40 toneladas desde puerto hasta zona industrial de Cartagena.",
    challenge: "Manejar un módulo prefabricado de dimensiones especiales (18 m de largo) por calles urbanas estrechas.",
    solution: "Se realizó un estudio de ruta con identificación de obstáculos, se gestionaron permisos municipales y se ejecutó el transporte con escolta técnica y señalización especial.",
    image: "/images/gallery/foto-006.jpg",
    stats: [
      { label: "Peso", value: "40 Ton" },
      { label: "Largo", value: "18 m" },
      { label: "Ancho", value: "4.5 m" },
    ],
    year: "2023",
    client: "Cliente Industrial",
    featured: false,
  },
  {
    id: 7,
    title: "Traslado de Planta de Concreto",
    location: "Pereira",
    department: "Risaralda",
    category: "Proyecto Industrial",
    description: "Desmonte y traslado completo de planta de concreto móvil desde Pereira hasta Armenia.",
    challenge: "Desmontar una planta de concreto completa de 55 toneladas y trasladarla 45 km por carreteras de montaña.",
    solution: "Se desmontó la planta en 6 módulos principales. Cada módulo se transportó por separado en camas bajas con escoltas. El montaje final se completó en 5 días.",
    image: "/images/gallery/foto-007.jpg",
    stats: [
      { label: "Peso Total", value: "55 Ton" },
      { label: "Módulos", value: "6 viajes" },
      { label: "Montaje", value: "5 días" },
    ],
    year: "2022",
    client: "Empresa de Construcción",
    featured: false,
  },
  {
    id: 8,
    title: "Transporte de Retroexcavadora XL",
    location: "Villavicencio",
    department: "Meta",
    category: "Transporte Especial",
    description: "Movilización de retroexcavadora de gran porte John Deere 870 desde Villavicencio hasta finca en el Meta.",
    challenge: "Acceder a finca con vías terciarias no pavimentadas en condiciones de lluvia para entregar equipo de 32 toneladas.",
    solution: "Se utilizó tractora 6x4 con cama baja de 3 ejes. Se realizó reconocimiento previo de ruta y se coordinó con personal de la finca para preparar accesos temporales.",
    image: "/images/gallery/foto-008.jpg",
    stats: [
      { label: "Peso", value: "32 Ton" },
      { label: "Distancia", value: "180 km" },
      { label: "Tipo Vía", value: "Terciaria" },
    ],
    year: "2023",
    client: "Cliente Agrícola",
    featured: false,
  },
  {
    id: 9,
    title: "Izaje y Montaje de Tanque Industrial",
    location: "Yopal",
    department: "Casanare",
    category: "Grúa e Izaje",
    description: "Izaje y posicionamiento de tanque de almacenamiento de 22 toneladas en planta industrial.",
    challenge: "Izaje de tanque de 22 toneladas en espacio confinado dentro de una planta en operación, sin interrumpir actividades.",
    solution: "Se ejecutó el izaje con grúa de 80 toneladas en configuración de pluma completa. La operación se realizó durante parada programada de planta con plan de seguridad detallado.",
    image: "/images/gallery/foto-009.jpg",
    stats: [
      { label: "Peso", value: "22 Ton" },
      { label: "Capacidad", value: "80 Ton" },
      { label: "Duración", value: "4 horas" },
    ],
    year: "2022",
    client: "Cliente Petrolero",
    featured: false,
  },
  {
    id: 10,
    title: "Transporte de Cosechadora Agrícola",
    location: "Ibagué",
    department: "Tolima",
    category: "Transporte Especial",
    description: "Traslado de cosechadora agrícola John Deere S790 desde Ibagué hasta zona arrocera del Tolima.",
    challenge: "Transportar una cosechadora de 22 toneladas con dimensiones especiales (12 m de largo) por vías secundarias.",
    solution: "Se diseñó un plan de ruta optimizado para evitar restricciones de altura y ancho. Se utilizó escolta técnica con señalización móvil y se coordinaron cierres parciales temporales.",
    image: "/images/gallery/foto-010.jpg",
    stats: [
      { label: "Peso", value: "22 Ton" },
      { label: "Largo", value: "12 m" },
      { label: "Distancia", value: "95 km" },
    ],
    year: "2023",
    client: "Cliente Agrícola",
    featured: false,
  },
  {
    id: 11,
    title: "Traslado de Perforadora Minera",
    location: "Tunja",
    department: "Boyacá",
    category: "Transporte Especial",
    description: "Movilización de perforadora minera Atlas Copco desde Tunja hasta proyecto de explotación minera.",
    challenge: "Trasladar perforadora de 28 toneladas con altura de 5.2 m por carreteras de montaña con túneles y curvas cerradas.",
    solution: "Se realizó estudio de ruta identificando puntos críticos. Se utilizó cama baja con sistema de suspensión neumática para reducir altura. Escolta técnica permanente durante todo el trayecto.",
    image: "/images/gallery/foto-011.jpg",
    stats: [
      { label: "Peso", value: "28 Ton" },
      { label: "Altura", value: "5.2 m" },
      { label: "Distancia", value: "120 km" },
    ],
    year: "2023",
    client: "Empresa Minera",
    featured: false,
  },
  {
    id: 12,
    title: "Transporte de Puente Grúa",
    location: "Manizales",
    department: "Caldas",
    category: "Proyecto Industrial",
    description: "Transporte e instalación de puente grúa de 25 metros de luz para bodega industrial en Manizales.",
    challenge: "Transportar una viga principal de puente grúa de 18 toneladas y 25 m de largo por vías urbanas con pendientes pronunciadas.",
    solution: "Se empleó un vehículo especial con plataforma extensible para distribuir la carga. La instalación requirió dos grúas trabajando en tándem. La operación se completó en dos jornadas.",
    image: "/images/gallery/foto-012.jpg",
    stats: [
      { label: "Peso Viga", value: "18 Ton" },
      { label: "Largo", value: "25 m" },
      { label: "Capacidad", value: "15 Ton" },
    ],
    year: "2022",
    client: "Cliente Industrial",
    featured: false,
  },
]

const categories = ["Todos", "Transporte Especial", "Grúa e Izaje", "Escolta", "Proyecto Industrial"] as const

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos")
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const featuredProject = filteredProjects.find(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-orange-500">Proyectos</span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 text-balance">
              Cada operación es un logro. Conoce algunos de nuestros trabajos más destacados en transporte de maquinaria pesada a lo largo de Colombia.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <Truck className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-white">12 Proyectos</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-white">Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <Award className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-white">+10 Años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-12 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 group">
              <div className="relative aspect-[21/9] md:aspect-[3/1]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/images/logo-trailco.jpg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                      {featuredProject.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {featuredProject.year}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-300">
                      <MapPin className="h-3 w-3 mr-1" />
                      {featuredProject.department}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-2">
                    {featuredProject.title}
                  </h2>
                  <p className="text-slate-300 max-w-xl text-sm md:text-base">
                    {featuredProject.description}
                  </p>
                  <div className="flex gap-6 mt-4">
                    {featuredProject.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="text-orange-500 font-bold text-lg">{stat.value}</span>
                        <span className="text-slate-400 text-xs">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden bg-slate-800 border border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-orange-500/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/images/logo-trailco.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-orange-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-1">{project.client}</p>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-3">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-1">
                        <span className="text-orange-500 font-bold text-sm">{stat.value}</span>
                        <span className="text-slate-500 text-xs">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    {expandedId === project.id ? "Ocultar detalles" : "Ver detalle"}
                    {expandedId === project.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedId === project.id && (
                    <div className="mt-4 pt-4 border-t border-slate-700 space-y-3 animate-fade-in-up">
                      <div>
                        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                          Desafío
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                          Solución Trailco
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes un proyecto similar?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Contáctanos y te asesoramos sin costo. Servicio en todo Colombia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <Link href="/#contacto">
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Cotización
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-500 text-slate-200 bg-slate-800/50 hover:bg-slate-700 hover:text-white px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <Link href="/#servicios">
                Ver Servicios
              </Link>
            </Button>
          </div>
          <a
            href="https://wa.me/573123057705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-green-500 hover:text-green-400 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">+57 312 305 7705</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
