import { Heart, Leaf, GraduationCap, Handshake, ShieldCheck, FileCheck2 } from "lucide-react"

const values = [
  {
    icon: Handshake,
    title: "Compromiso",
    description:
      "Comprometidos en entregar operaciones exitosas, seguras, rentables y con calidad a nuestros clientes.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    description:
      "Mantenemos los mas altos estandares de seguridad, salud en el trabajo y proteccion ambiental en cada operacion.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje Continuo",
    description:
      "Impulsamos dentro de nuestro equipo una mentalidad de mejora y capacitacion permanente en nuevas habilidades.",
  },
  {
    icon: Leaf,
    title: "Responsabilidad Ambiental",
    description:
      "Cuidamos nuestros procesos y tomamos medidas para reducir el impacto ambiental de nuestras operaciones.",
  },
  {
    icon: Heart,
    title: "Sentido de Pertenencia",
    description:
      "Nuestro equipo humano se identifica con la mision y vision de la empresa, generando resultados excepcionales.",
  },
  {
    icon: FileCheck2,
    title: "Gestión Eficiente",
    description:
      "Coordinamos eficientemente recursos tecnológicos, financieros y de talento humano para garantizar operaciones exitosas.",
  },
]

export function HSEQ() {
  return (
    <section id="hseq" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left intro */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
              HSEQ
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Calidad, Seguridad y Compromiso
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trailco esta firmemente comprometida con la cultura de Calidad, Seguridad, Salud
              en el trabajo, Ambiente y Responsabilidad Social en cada uno de los servicios que
              ofrecemos.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mantenemos los mas altos estandares para que nuestros clientes y colaboradores
              desarrollen sus objetivos de manera segura y eficiente.
            </p>
            <div className="mt-8 rounded-lg bg-muted p-4">
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Compromiso Normativo
              </p>
              <p className="mt-2 text-sm text-foreground font-medium leading-relaxed">
                Operamos bajo los más altos estándares del sector transporte en Colombia, cumpliendo
                toda la normativa vigente del Ministerio de Transporte.
              </p>
            </div>
          </div>

          {/* Right values grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-secondary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <value.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
