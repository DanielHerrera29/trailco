import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Trailco | Transporte Especial de Carga Pesada y Extradimensionada en Colombia',
  description:
    'Trailco - Transporte especial de carga pesada y extradimensionada. Gruas, tractomulas, cama bajas, escoltas, tecnico vial y permisos viales. Mas de 20 anos de experiencia en Colombia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
