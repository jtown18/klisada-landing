import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
          Certified Public Accountant
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
          Power Your Business
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Accounting becomes the driving force of your business, empowering you to take on new challenges freely
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-base px-8 py-6">
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
