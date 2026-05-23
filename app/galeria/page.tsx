"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Phone, 
  MessageCircle,
  Camera,
  Video,
  Truck,
  Loader2,
  MapPin,
  Award,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Types
interface Photo {
  id: number
  src: string
  alt: string
  category: Category
  featured: boolean
}

type Category = "Todo" | "Cargue y Descargue" | "Transporte en Vía" | "Operaciones Especiales" | "Video"

// Category colors
const categoryColors: Record<Category, string> = {
  "Todo": "bg-slate-600",
  "Cargue y Descargue": "bg-blue-600",
  "Transporte en Vía": "bg-orange-600",
  "Operaciones Especiales": "bg-green-600",
  "Video": "bg-red-600"
}

// Photo data - 24 fotos reales
const photoData: Photo[] = [
  { id: 1, src: "/images/gallery/foto-001.jpg", alt: "Transporte de excavadora CAT 320 en vía principal Bogotá-Medellín", category: "Transporte en Vía", featured: true },
  { id: 2, src: "/images/gallery/foto-003.jpg", alt: "Operación especial de izaje en zona industrial de Barranquilla", category: "Operaciones Especiales", featured: false },
  { id: 3, src: "/images/gallery/foto-005.jpg", alt: "Descargue de motoniveladora en proyecto vial Antioquia", category: "Cargue y Descargue", featured: false },
  { id: 4, src: "/images/gallery/foto-007.jpg", alt: "Cargue nocturno de compactador vibratorio", category: "Cargue y Descargue", featured: false },
  { id: 5, src: "/images/gallery/foto-009.jpg", alt: "Maniobra de descargue con grúa telescópica", category: "Operaciones Especiales", featured: false },
  { id: 6, src: "/images/gallery/foto-010.jpg", alt: "Cama baja extendida con excavadora de orugas", category: "Transporte en Vía", featured: false },
  { id: 7, src: "/images/gallery/foto-004.jpg", alt: "Tractomula Kenworth transportando bulldozer D6", category: "Transporte en Vía", featured: false },
  { id: 8, src: "/images/gallery/foto-006.jpg", alt: "Convoy de maquinaria pesada con escolta en Santander", category: "Operaciones Especiales", featured: false },
  { id: 9, src: "/images/gallery/foto-008.jpg", alt: "Transporte de grúa torre por carretera nacional", category: "Transporte en Vía", featured: false },
  { id: 10, src: "/images/gallery/foto-012.jpg", alt: "Operación de transporte extradimensionado en Meta", category: "Operaciones Especiales", featured: false },
  { id: 11, src: "/images/gallery/foto-013.jpg", alt: "Tractomula con plataforma especial para tanques", category: "Transporte en Vía", featured: false },
  { id: 12, src: "/images/gallery/foto-014.jpg", alt: "Descargue de rodillo compactador en obra civil", category: "Cargue y Descargue", featured: false },
  { id: 13, src: "/images/gallery/foto-015.jpg", alt: "Convoy nocturno con señalización especial", category: "Operaciones Especiales", featured: false },
  { id: 14, src: "/images/gallery/foto-016.jpg", alt: "Transporte de retroexcavadora por vía secundaria", category: "Transporte en Vía", featured: false },
  { id: 15, src: "/images/gallery/foto-017.jpg", alt: "Cargue de excavadora Komatsu en Bucaramanga", category: "Cargue y Descargue", featured: false },
  { id: 16, src: "/images/gallery/foto-018.jpg", alt: "Maniobra especial de giro en intersección", category: "Operaciones Especiales", featured: false },
  { id: 17, src: "/images/gallery/foto-019.jpg", alt: "Cama baja con bulldozer Caterpillar D8", category: "Transporte en Vía", featured: false },
  { id: 18, src: "/images/gallery/foto-020.jpg", alt: "Descargue de martillo hidráulico en cantera", category: "Cargue y Descargue", featured: false },
  { id: 19, src: "/images/gallery/foto-021.jpg", alt: "Operación de cruce de puente con carga especial", category: "Operaciones Especiales", featured: false },
  { id: 20, src: "/images/gallery/foto-023.jpg", alt: "Cargue de planta de asfalto móvil", category: "Cargue y Descargue", featured: false },
  { id: 21, src: "/images/gallery/foto-025.jpg", alt: "Tractomula International con miniexcavadora", category: "Transporte en Vía", featured: false },
  { id: 22, src: "/images/gallery/foto-026.jpg", alt: "Descargue de zanjadora en proyecto de alcantarillado", category: "Cargue y Descargue", featured: false },
  { id: 23, src: "/images/gallery/foto-002.jpg", alt: "Cargue de retroexcavadora John Deere en plataforma cama baja", category: "Cargue y Descargue", featured: true },
  { id: 24, src: "/images/gallery/foto-027.jpg", alt: "Maniobra de estacionamiento en espacio reducido", category: "Operaciones Especiales", featured: false },
]

// Categories with counts
const categories: Category[] = ["Todo", "Cargue y Descargue", "Transporte en Vía", "Operaciones Especiales", "Video"]

function getCategoryCount(category: Category): number {
  if (category === "Todo") return photoData.length
  if (category === "Video") return 1
  return photoData.filter(p => p.category === category).length
}

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todo")
  const [visibleCount, setVisibleCount] = useState(24)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Filter photos by category
  const filteredPhotos = activeCategory === "Todo" || activeCategory === "Video"
    ? photoData
    : photoData.filter(p => p.category === activeCategory)

  const visiblePhotos = filteredPhotos.slice(0, visibleCount)
  const hasMorePhotos = visibleCount < filteredPhotos.length

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return
    if (e.key === "ArrowLeft") {
      setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : filteredPhotos.length - 1))
    } else if (e.key === "ArrowRight") {
      setCurrentPhotoIndex(prev => (prev < filteredPhotos.length - 1 ? prev + 1 : 0))
    } else if (e.key === "Escape") {
      setLightboxOpen(false)
    }
  }, [lightboxOpen, filteredPhotos.length])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredPhotos.length))
  }

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(24)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
              Galería de Servicios
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 text-balance">
              Transporte especializado de maquinaria pesada en todo el territorio colombiano
            </p>
            
            {/* Accent badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <Truck className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-white">Maquinaria Pesada</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-white">Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <Camera className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-white">{photoData.length} Fotos</span>
                <span className="text-slate-500">·</span>
                <Video className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-white">1 Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter/Tab Bar */}
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
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category
                    ? "bg-white/20 text-white"
                    : "bg-slate-800 text-slate-500"
                }`}>
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Video Section */}
      {(activeCategory === "Todo" || activeCategory === "Video") && (
        <section className="py-16 bg-slate-950">
          <div className="max-w-5xl mx-auto px-6">
            <Badge className="bg-orange-600 text-white mb-6 text-xs font-semibold">
              <Play className="h-3 w-3 mr-1" /> VIDEO DESTACADO
            </Badge>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
              {!isVideoPlaying ? (
                <>
                  {/* Video thumbnail placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                    <Image
                      src="/images/logo-trailco.jpg"
                      alt="Video de Operación Trailco"
                      fill
                      className="object-contain p-16 opacity-50"
                    />
                  </div>
                  {/* Play button overlay */}
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Reproducir video"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" fill="currentColor" />
                    </div>
                  </button>
                </>
              ) : (
                <video
                  src="/videos/trailco-operacion.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  Tu navegador no soporta videos HTML5.
                </video>
              )}
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Operación de Transporte — Trailco Colombia
              </h3>
              <p className="text-slate-400">
                Conoce nuestro proceso de transporte de maquinaria pesada a lo largo del territorio nacional
              </p>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-slate-400">Años de experiencia</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-slate-400">Operaciones exitosas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">32</p>
                <p className="text-sm text-slate-400">Departamentos cubiertos</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Photo Gallery Grid */}
      {activeCategory !== "Video" && (
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {visiblePhotos.map((photo, index) => {
                const isFeatured = photo.featured && index < 3
                return (
                  <div
                    key={photo.id}
                    className={`group relative rounded-xl overflow-hidden bg-slate-800 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                      isFeatured ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                    onClick={() => openLightbox(index)}
                  >
                    <div className={`relative ${isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/images/logo-trailco.jpg"
                        }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Badge className={`${categoryColors[photo.category]} text-white text-xs mb-2`}>
                          {photo.category}
                        </Badge>
                        <p className="text-white text-sm font-medium line-clamp-2">
                          {photo.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Load More */}
            {activeCategory !== "Video" && (
              <div className="mt-12 text-center">
                <p className="text-slate-400 mb-4">
                  Mostrando {Math.min(visibleCount, filteredPhotos.length)} de {filteredPhotos.length} fotos
                </p>
                {hasMorePhotos && (
                  <Button
                    onClick={loadMore}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold"
                  >
                    <Loader2 className="h-5 w-5 mr-2" />
                    Cargar más fotos
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesitas transportar maquinaria pesada?
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
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <Link href="/#servicios">
                Ver Más Servicios
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

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : filteredPhotos.length - 1))}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => setCurrentPhotoIndex(prev => (prev < filteredPhotos.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="relative w-full max-w-5xl max-h-[85vh] aspect-video mx-4">
              {filteredPhotos[currentPhotoIndex] && (
                <Image
                  key={filteredPhotos[currentPhotoIndex].src}
                  src={filteredPhotos[currentPhotoIndex].src}
                  alt={filteredPhotos[currentPhotoIndex].alt}
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/images/logo-trailco.jpg"
                  }}
                />
              )}
            </div>

            {/* Photo info */}
            <div className="absolute bottom-4 left-0 right-0 text-center px-4">
              <Badge className={`${categoryColors[filteredPhotos[currentPhotoIndex]?.category || "Todo"]} text-white text-xs mb-2`}>
                {filteredPhotos[currentPhotoIndex]?.category}
              </Badge>
              <p className="text-white text-sm md:text-base max-w-2xl mx-auto">
                {filteredPhotos[currentPhotoIndex]?.alt}
              </p>
              <p className="text-slate-500 text-sm mt-2">
                {currentPhotoIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
