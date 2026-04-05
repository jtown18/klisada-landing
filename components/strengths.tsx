import { Rocket, Wallet, Monitor, Globe, Users, ShieldCheck } from "lucide-react"

const strengths = [
  {
    icon: Rocket,
    title: "Future-focused Business Support",
    description: "Strategic support tailored to fast-growing companies, from fundraising to building management structures.",
  },
  {
    icon: Wallet,
    title: "Cash Flow Management",
    description: "Tax optimization as a tool to maximize cash flow and strengthen your financial position.",
  },
  {
    icon: Monitor,
    title: "DX / AX Enablement",
    description: "Active use of the latest technologies including cloud accounting and AI-powered solutions.",
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Support for both international expansion and domestic growth with cross-border expertise.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Insights that drive management, built through experience as CFOs, consultants, and auditors.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Internal Controls",
    description: "Clear processes and documentation that keep you audit-ready and aligned with regulatory expectations.",
  },
]

export function Strengths() {
  return (
    <section id="strengths" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our Strengths
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength) => (
            <div 
              key={strength.title} 
              className="flex gap-4 p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <strength.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
