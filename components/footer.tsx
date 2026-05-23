import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "HSEQ", href: "/#hseq" },
  { label: "Contacto", href: "/#contacto" },
]

const serviceLinks = [
  "Tractomula y Cama Baja",
  "Grúa e Izaje",
  "Escoltas y Tecnico Vial",
  "Permisos Viales",
  "Maquinaria Amarilla",
  "Carga Extradimensionada",
]

export function Footer() {
  return (
    <footer className="bg-foreground">
      {/* CTA band */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="font-heading text-2xl font-bold text-background lg:text-3xl">
                {'Necesita transportar carga pesada?'}
              </h3>
              <p className="mt-2 text-background/60">
                Contactenos ahora y reciba una cotizacion sin compromiso.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                Solicitar Cotización
              </Link>
              <a
                href="https://wa.me/573123057705?text=Hola%2C%20necesito%20una%20cotizacion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-background/20 px-8 py-3.5 text-sm font-bold text-background transition-colors hover:bg-background/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-lg overflow-hidden">
                <Image
                  src="/images/logo-trailco.jpg"
                  alt="Trailco Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-background">
                  TRAILCO
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-background/50 uppercase">
                  Transporte Especial
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-background/50">
              Empresa especializada en transporte de carga pesada y extradimensionada. Gruas, 
              tractomulas, escoltas y permisos viales con cobertura nacional en Colombia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold text-background uppercase tracking-wider">
              Navegacion
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/50 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-background uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/#servicios"
                    className="text-sm text-background/50 transition-colors hover:text-secondary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-background uppercase tracking-wider">
              Contacto
            </h4>
            <div className="mt-6 flex flex-col gap-4">
              <a
                href="tel:+573214579601"
                className="flex items-center gap-3 text-sm text-background/50 transition-colors hover:text-secondary"
              >
                <Phone className="h-4 w-4 shrink-0 text-secondary/70" />
                +57 321 457 9601
              </a>
              <a
                href="tel:+573214579601"
                className="flex items-center gap-3 text-sm text-background/50 transition-colors hover:text-secondary"
              >
                <Phone className="h-4 w-4 shrink-0 text-secondary/70" />
                +57 321 457 9601
              </a>
              <a
                href="mailto:trctransporte.sas@gmail.com"
                className="flex items-center gap-3 text-sm text-background/50 transition-colors hover:text-secondary"
              >
                <Mail className="h-4 w-4 shrink-0 text-secondary/70" />
                trctransporte.sas@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/50">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-secondary/70" />
                Colombia - Cobertura Nacional
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-background/30">
            {`\u00A9 ${new Date().getFullYear()} Trailco - Transporte Especial. Todos los derechos reservados.`}
          </p>
          <p className="text-xs text-background/30">
            NIT: Colombia | Transporte Especial Nacional
          </p>
        </div>
      </div>
    </footer>
  )
}
