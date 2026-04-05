const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Feel free to consult us about accounting, tax, or business matters. We take the time to understand your goals and concerns.",
  },
  {
    number: "02",
    title: "Service Proposal",
    description: "Based on your needs, we propose the most suitable services and a clear quotation. Please feel free to ask any questions.",
  },
  {
    number: "03",
    title: "Agreement",
    description: "Once you are satisfied with the service details and pricing, we proceed with the contract. We explain everything clearly so you can move forward with confidence.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Onboarding Flow
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            We listen carefully to your needs and propose the best solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground text-center mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
