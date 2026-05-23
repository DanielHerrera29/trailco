"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      { label: "Tractomula y Cama Baja", href: "/#servicios" },
      { label: "Grua e Izaje", href: "/#servicios" },
      { label: "Escoltas y Tecnico Vial", href: "/#servicios" },
      { label: "Permisos Viales", href: "/#servicios" },
    ],
  },
  { label: "Galería", href: "/galeria" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "HSEQ", href: "/#hseq" },
  { label: "Contacto", href: "/#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden border-b border-primary-foreground/10 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+573123057705"
              className="flex items-center gap-2 text-xs text-primary-foreground/70 transition-colors hover:text-secondary"
            >
              <Phone className="h-3 w-3" />
              +57 312 305 7705
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a
              href="mailto:info@trailco.com.co"
              className="text-xs text-primary-foreground/70 transition-colors hover:text-secondary"
            >
              info@trailco.com.co
            </a>
          </div>
          <p className="text-xs font-medium text-secondary">
            Servicio 24/7 en toda Colombia
          </p>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/#inicio" className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-lg overflow-hidden">
            <Image
              src="/images/logo-trailco.jpg"
              alt="Trailco Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight tracking-tight text-primary-foreground">
              TRAILCO
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-primary-foreground/60 uppercase">
              Transporte Especial
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.href + link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-secondary"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && activeDropdown === link.label && (
                <div className="absolute left-0 top-full w-56 rounded-lg border border-border bg-card p-2 shadow-xl">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-secondary/10 hover:text-secondary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
          >
            <Link href="/#contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        <button
          className="text-primary-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <div key={link.href + link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-md px-3 py-2 text-xs text-primary-foreground/60 transition-colors hover:text-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-primary-foreground/10 pt-4">
              <a
                href="tel:+573123057705"
                className="flex items-center gap-2 text-sm text-primary-foreground/70"
              >
                <Phone className="h-4 w-4" />
                +57 312 305 7705
              </a>
              <Button
                asChild
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              >
                <Link href="/#contacto" onClick={() => setIsOpen(false)}>
                  Solicitar Cotización
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
