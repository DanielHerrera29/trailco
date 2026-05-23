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
      { label: "Grúa e Izaje", href: "/#servicios" },
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
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`hidden border-b lg:block ${scrolled ? "border-gray-100" : "border-white/10"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+573214579601"
              className={`flex items-center gap-2 text-xs transition-colors ${
                scrolled ? "text-gray-500 hover:text-orange-500" : "text-white/70 hover:text-orange-300"
              }`}
            >
              <Phone className="h-3 w-3" />
              +57 321 457 9601
              </a>
            <span className={scrolled ? "text-gray-300" : "text-white/30"}>|</span>
            <a
              href="mailto:trctransporte.sas@gmail.com"
              className={`text-xs transition-colors ${
                scrolled ? "text-gray-500 hover:text-orange-500" : "text-white/70 hover:text-orange-300"
              }`}
            >
              trctransporte.sas@gmail.com
            </a>
          </div>
          <p className={`text-xs font-medium ${scrolled ? "text-orange-500" : "text-orange-400"}`}>
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
            <span className={`font-heading text-lg font-bold leading-tight tracking-tight transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}>
              TRAILCO
            </span>
            <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
              scrolled ? "text-gray-400" : "text-white/60"
            }`}>
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
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white/80 hover:text-orange-300"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && activeDropdown === link.label && (
                <div className="absolute left-0 top-full w-56 rounded-lg border bg-white p-2 shadow-xl border-gray-200">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
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
            className="bg-orange-500 text-white hover:bg-orange-600 font-semibold"
          >
            <Link href="/#contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <div key={link.href + link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
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
                        className="block rounded-md px-3 py-2 text-xs text-gray-500 transition-colors hover:text-orange-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
              <a
href="tel:+573214579601"
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Phone className="h-4 w-4" />
              +57 321 457 9601
              </a>
              <Button
                asChild
                className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold"
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
