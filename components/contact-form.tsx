"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefonos",
    values: [
      { text: "+57 312 305 7705", href: "tel:+573123057705" },
      { text: "+57 311 809 2301", href: "tel:+573118092301" },
    ],
  },
  {
    icon: Mail,
    label: "Correo Electronico",
    values: [{ text: "trctransporte.sas@gmail.com", href: "mailto:trctransporte.sas@gmail.com" }],
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    values: [{ text: "Colombia - Cobertura Nacional", href: "#" }],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    values: [
      {
        text: "Escribenos por WhatsApp",
        href: "https://wa.me/573123057705?text=Hola%2C%20necesito%20una%20cotizacion",
      },
    ],
  },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left info */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
              Contacto
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Solicite su cotizacion
            </h2>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              Nuestros asesores le guiaran en todo lo que necesite. Contactenos y reciba una
              cotizacion personalizada para su proyecto de transporte.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary-foreground/50 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <div className="mt-1 flex flex-col gap-1">
                      {item.values.map((val) => (
                        <a
                          key={val.text}
                          href={val.href}
                          className="text-sm font-semibold text-primary-foreground transition-colors hover:text-secondary"
                          target={val.href.startsWith("http") ? "_blank" : undefined}
                          rel={val.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {val.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/20 mb-6">
                    <Send className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                    Mensaje Enviado
                  </h3>
                  <p className="mt-3 text-primary-foreground/60 max-w-sm">
                    Hemos recibido su solicitud. Nos pondremos en contacto con usted en las
                    proximas horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-primary-foreground/80"
                      >
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Su nombre"
                        className="mt-2 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-primary-foreground/80"
                      >
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        placeholder="Nombre de su empresa"
                        className="mt-2 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-primary-foreground/80"
                      >
                        Celular
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+57 300 000 0000"
                        className="mt-2 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-primary-foreground/80"
                      >
                        Correo electronico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="correo@ejemplo.com"
                        className="mt-2 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="service"
                      className="text-sm font-medium text-primary-foreground/80"
                    >
                      Servicio requerido
                    </Label>
                    <select
                      id="service"
                      className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="" className="text-gray-500">Seleccione un servicio</option>
                      <option value="tractomula" className="text-gray-800">Tractomula y Cama Baja</option>
                      <option value="grua" className="text-gray-800">Grúa e Izaje</option>
                      <option value="escoltas" className="text-gray-800">Escoltas y Tecnico Vial</option>
                      <option value="permisos" className="text-gray-800">Permisos Viales</option>
                      <option value="integral" className="text-gray-800">Servicio Integral</option>
                    </select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-primary-foreground/80"
                    >
                      Describa su requerimiento
                    </Label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tipo de carga, dimensiones, peso, origen y destino..."
                      className="mt-2 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base py-6"
                  >
                    Enviar Solicitud de Cotizacion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
