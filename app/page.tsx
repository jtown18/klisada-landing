import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ScrollReveal } from "@/components/gsapScrollAnimation"
import { Mission } from "@/components/mission"
import { Services } from "@/components/services"
import { Strengths } from "@/components/strengths"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ScrollReveal className="w-full">
        <Mission />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <Services />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <Strengths />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <Process />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <FAQ />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <Contact />
      </ScrollReveal>
        <Footer />
    </main>
  )
}
