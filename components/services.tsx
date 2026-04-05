import { FileText, TrendingUp, Handshake } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Tax Advisory",
    description: "From company incorporation to accounting and tax filings, we provide end-to-end support for your core tax and accounting needs.",
  },
  {
    icon: TrendingUp,
    title: "External CFO Services",
    description: "We support the planning and execution of accounting and financial strategies, helping to strengthen your management capabilities.",
  },
  {
    icon: Handshake,
    title: "M&A Advisory",
    description: "We provide professional support at every stage of the M&A process to maximize corporate value.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            Business Activities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
