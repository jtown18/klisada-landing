import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Tax Advisory", href: "#services" },
    { label: "External CFO Services", href: "#services" },
    { label: "Accounting & Bookkeeping", href: "#services" },
    { label: "M&A Advisory", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "News", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Legal Notice", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-transparent.png"
                alt="KL Isada Logo"
                width={40}
                height={40}
                className="h-10 w-auto bg-white rounded p-1"
              />
              <span className="text-lg font-bold">KL Isada</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transform accounting from a burden into a driving force for your business.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <Link
            href="https://www.facebook.com/p/KL-Isada-Tax-Accounting-Services-61566504865023/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <Link
            href="https://www.instagram.com/kli.tas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/kl-isada-tax-and-accounting-services/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2026 KL Isada. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
