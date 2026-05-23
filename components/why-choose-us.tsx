import { Shield, Award, Users, Wrench, Target, Globe } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Operamos con total respaldo legal y cobertura aseguradora, garantizando operaciones seguras, responsables y dentro del marco normativo colombiano.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description:
      "Más de 10 años en el mercado de transporte especial y carga extradimensionada a nivel nacional.",
  },
  {
    icon: Users,
    title: "Personal Certificado",
    description:
      "Conductores, riggers, tecnicos viales y escoltas con certificaciones vigentes y experiencia comprobada.",
  },
  {
    icon: Wrench,
    title: "Flota Moderna",
    description:
      "Equipos en optimo estado tecnico-mecanico. Camas bajas, gruas, tractomulas y vehiculos acompanantes.",
  },
  {
    icon: Target,
    title: "Cumplimiento Total",
    description:
      "Entregamos su carga en el tiempo pactado con seguimiento en tiempo real y comunicacion permanente.",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description:
      "Operamos en todo el territorio colombiano. Rutas principales y secundarias con planeacion logistica.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: Content + image */}
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
              Sobre Trailco
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Trabajamos para superar sus expectativas
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
              En Trailco nos especializamos en el manejo de cargas especiales, indivisibles,
              sobredimensionadas y extrapesadas. Operamos con altos estándares de seguridad y
              cumplimiento normativo a nivel nacional.
            </p>
            <p className="mt-4 text-primary-foreground/60 leading-relaxed">
              Operamos bajo los más altos estándares del sector transporte en Colombia, cumpliendo
              toda la normativa vigente del Ministerio de Transporte.
            </p>

            <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/images/service-machinery.jpg"
                alt="Operacion de transporte especial Trailco"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading text-xl font-bold text-primary-foreground">
                  {'"No competimos, servimos"'}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Nuestra filosofia de trabajo
                </p>
              </div>
            </div>
          </div>

          {/* Right: Feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all hover:bg-primary-foreground/10 hover:border-secondary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-primary-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
