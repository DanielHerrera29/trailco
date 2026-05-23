import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HSEQ } from "@/components/hseq"
import { Process } from "@/components/process"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <WhyChooseUs />
      <HSEQ />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  )
}
