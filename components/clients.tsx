"use client"

const clients = [
  "Drummond",
  "Cerrejon",
  "EPM",
  "Frontera Energy",
  "Siemens",
  "ABB",
  "ENEL",
  "OHL",
  "DAKO",
]

export function Clients() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-10">
          Empresas que confian en nosotros
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-background px-8 py-4 min-w-[160px]"
              >
                <span className="font-heading text-sm font-bold text-muted-foreground/70 tracking-wider uppercase whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
