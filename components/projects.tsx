import Image from "next/image"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Transporte de Transformador 120 Ton",
    specs: "Largo: 8.5m | Ancho: 4.2m | Alto: 4.3m | Peso: 120 Toneladas",
    equipment: "Cama baja hidraulica 4 ejes + Escoltas + Tecnico Vial",
    image: "/images/project-1.jpg",
  },
  {
    title: "Izaje de Estructura Industrial",
    specs: "Peso: 85 Toneladas | Altura de izaje: 25m",
    equipment: "Grua telescopica + Rigger certificado",
    image: "/images/project-2.jpg",
  },
  {
    title: "Movilizacion de Maquinaria Amarilla",
    specs: "Excavadoras, retroexcavadoras, piloteadoras",
    equipment: "Tractomula + Cama baja 3 ejes + Permisos INVIAS",
    image: "/images/project-3.jpg",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
              Proyectos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Nuestros proyectos
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              Cada proyecto es un reto que asumimos con profesionalismo, equipos de ultima
              generacion y personal altamente calificado.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
          >
            Ver todos los proyectos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      Especificaciones
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{project.specs}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      Equipos utilizados
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{project.equipment}</p>
                  </div>
                </div>
                <a
                  href="#contacto"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-secondary"
                >
                  Mas detalles
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
