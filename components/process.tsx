import { MessageSquare, Ruler, Route, FileSearch, ClipboardCheck, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Contacto Inicial",
    description:
      "Realice un acercamiento definiendo el alcance del servicio por correo, telefono o WhatsApp.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Dimensiones de Carga",
    description:
      "Comparta las dimensiones de su carga: largo, ancho, alto, peso, centro de gravedad y puntos de apoyo.",
  },
  {
    icon: Route,
    number: "03",
    title: "Estudio de Ruta",
    description:
      "Evaluamos las posibles rutas de transporte entre origen y destino, analizando viabilidad y restricciones.",
  },
  {
    icon: FileSearch,
    number: "04",
    title: "Cotizacion y Permisos",
    description:
      "Enviamos una cotizacion detallada con terminos, cronograma y gestionamos los permisos necesarios.",
  },
  {
    icon: ClipboardCheck,
    number: "05",
    title: "Orden de Servicio",
    description:
      "Tras aprobacion, se genera la orden de servicio y compartimos documentos de equipos y personal.",
  },
  {
    icon: Truck,
    number: "06",
    title: "Ejecucion del Servicio",
    description:
      "Ejecutamos el transporte con reportes diarios, seguimiento en tiempo real y firma de entrega final.",
  },
]

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
            Proceso
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Como trabajamos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Un proceso claro y profesional desde el primer contacto hasta la entrega final.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-secondary/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <step.icon className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <span className="font-heading text-3xl font-bold text-border group-hover:text-secondary/20 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
