import Image from "next/image"
import { ArrowRight, Truck, CableCar, ShieldCheck, FileCheck } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Tractomula y Cama Baja",
    subtitle: "Transporte Especial",
    description:
      "Contamos con tractomulas y cama-bajas hidraulicas de 3 y 4 ejes para el transporte de carga pesada y extradimensionada. Movilizamos maquinaria amarilla, tanques, plantas de asfalto, trituradoras, transformadores y mas. Todos nuestros equipos cuentan con perfecto estado tecnico mecanico.",
    image: "/images/service-truck.jpg",
    features: [
      "Cama baja 3 y 4 ejes hidraulica",
      "Maquinaria amarilla y pesada",
      "Carga extradimensionada",
      "Equipos en optimo estado",
    ],
  },
  {
    icon: CableCar,
    title: "Grúa e Izaje",
    subtitle: "Izaje Especializado",
    description:
      "Servicio de grua para izaje de cargas pesadas e industriales. Operaciones de cargue, descargue e instalacion de equipos y estructuras con personal certificado y maquinaria de alta capacidad. Planificacion de maniobras con estudios de ingenieria.",
    image: "/images/service-crane.jpg",
    features: [
      "Gruas de alta capacidad",
      "Personal certificado",
      "Estudios de ingenieria",
      "Maniobras especializadas",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Escoltas y Tecnico Vial",
    subtitle: "Acompanamiento en Ruta",
    description:
      "Vehiculos acompanantes (escoltas) y tecnicos viales especializados para la movilizacion segura de carga extradimensionada segun las normas vigentes del Ministerio de Transporte. Garantizamos la seguridad de su carga y de la infraestructura vial.",
    image: "/images/service-escort.jpg",
    features: [
      "Vehiculos acompanantes",
      "Tecnicos viales certificados",
      "Senalizacion normativa",
      "Coordinacion con autoridades",
    ],
  },
  {
    icon: FileCheck,
    title: "Permisos Viales",
    subtitle: "Gestion y Tramites",
    description:
      "Gestion integral de permisos de transito libre y permisos para carga extradimensionada ante el Ministerio de Transporte, Instituto Nacional de Vias (INVIAS) y Superintendencia de Transporte. Cumplimiento total de la normatividad vigente.",
    image: "/images/service-permits.jpg",
    features: [
      "Permisos de transito libre",
      "Carga extradimensionada",
      "Tramites ante INVIAS",
      "Normatividad vigente",
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
            Servicios Logisticos
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Soluciones integrales en transporte especial
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Ofrecemos un portafolio completo de servicios para la movilizacion de carga pesada,
            extradimensionada y maquinaria especial en toda Colombia.
          </p>
        </div>

        {/* Services alternating layout */}
        <div className="mt-20 flex flex-col gap-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col gap-12 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 shadow-lg">
                  <service.icon className="h-4 w-4 text-secondary-foreground" />
                  <span className="text-xs font-bold text-secondary-foreground uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Solicitar Cotizacion
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
