import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "KL Isada Accounting and Tax Services transformed how we handle our finances. Their tax planning and reporting support saved us significant time and gave us real clarity for decisions.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "The team's proactive approach to financial planning has been instrumental in our company's growth strategy.",
    author: "Michael Torres",
    role: "Founder, GreenVentures",
  },
  {
    quote: "Professional, responsive, and incredibly knowledgeable. They make complex tax matters feel simple and manageable.",
    author: "Emily Nakamura",
    role: "CFO, Digital Solutions Co.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Insights from Our Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="bg-card border-border flex h-full min-h-0 flex-col"
            >
              <CardContent className="flex flex-1 flex-col gap-6 px-6 pt-6">
                <Quote
                  className="h-10 w-10 shrink-0 text-secondary/50"
                  aria-hidden
                />
                <p className="min-h-0 flex-1 text-card-foreground text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="shrink-0 border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
