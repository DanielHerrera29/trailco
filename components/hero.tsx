import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-transport.jpg"
        alt="Transporte de carga extradimensionada"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2">
            <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
              Transporte Especial en Colombia
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl lg:text-7xl">
            Movemos lo que{" "}
            <span className="relative">
              <span className="text-secondary">otros no pueden</span>
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-secondary/40" />
            </span>
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-primary-foreground/80 max-w-xl">
            Especializados en transporte de carga pesada, extradimensionada y maquinaria especial.
            Gruas, tractomulas, escoltas y permisos viales con los mas altos estandares de
            seguridad.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 h-14"
            >
              <a href="#contacto">
                Solicitar Cotizacion
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold text-base px-8 h-14"
            >
              <a href="#servicios">Conocer Servicios</a>
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-px rounded-xl bg-primary-foreground/10 overflow-hidden sm:grid-cols-4 max-w-3xl">
          {[
            { value: "20+", label: "Anos de experiencia" },
            { value: "500+", label: "Proyectos completados" },
            { value: "24/7", label: "Disponibilidad total" },
            { value: "100%", label: "Compromiso y seguridad" },
          ].map((stat) => (
            <div key={stat.label} className="bg-primary/60 backdrop-blur-sm px-6 py-5 text-center">
              <p className="font-heading text-2xl font-bold text-secondary lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
