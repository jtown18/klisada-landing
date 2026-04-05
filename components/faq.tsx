import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established corporations. Our expertise spans various industries including tech, e-commerce, manufacturing, and professional services.",
  },
  {
    question: "Do you work with startups and growing companies?",
    answer: "Yes. We help early-stage and scaling businesses build sound accounting and tax foundations—from setup and reporting to planning—so leadership can focus on growth with clear numbers.",
  },
  {
    question: "How do you charge for your services?",
    answer: "We offer flexible pricing models including monthly retainers, project-based fees, and hourly consulting. During our initial consultation, we will assess your needs and provide a transparent quote.",
  },
  {
    question: "Can you help with international tax matters?",
    answer: "Absolutely. We have extensive experience in cross-border taxation and can assist with international expansion, transfer pricing, and compliance with foreign tax regulations.",
  },
  {
    question: "What software and tools do you use?",
    answer: "We leverage the latest cloud accounting software, AI-powered tools, and secure communication platforms to ensure efficient, accurate, and timely service delivery.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
