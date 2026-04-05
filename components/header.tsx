"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Strengths", href: "#strengths" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

const languages = [
  { code: "en", label: "English" },
  { code: "tl", label: "Filipino" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])

  const pillClass =
    "flex min-h-14 items-center justify-between gap-3 rounded-full border border-border/60 bg-background/65 px-4 py-2.5 shadow-[0_8px_32px_-4px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-border/40 dark:bg-background/55 dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)] sm:min-h-[3.75rem] sm:px-6 sm:py-3"

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        <div className={pillClass}>
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 sm:gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logo-transparent.png"
              alt="KL Isada Logo"
              width={44}
              height={44}
              className="h-9 w-auto sm:h-10"
            />
            <span className="text-base font-bold tracking-tight text-primary sm:text-lg">
              KL Isada
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-foreground/[0.06] hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex lg:gap-3">
            <Button
              asChild
              className="h-9 rounded-full border-0 bg-primary px-5 font-semibold text-primary-foreground shadow-[0_4px_14px_-2px_rgba(37,56,120,0.45)] transition-all hover:scale-[1.02] hover:bg-primary/92 hover:shadow-[0_6px_20px_-2px_rgba(37,56,120,0.5)] active:scale-[0.98] dark:shadow-[0_4px_18px_-2px_rgba(0,0,0,0.5)]"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 outline-none transition-colors hover:bg-foreground/[0.06] hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Language"
                >
                  <Globe className="size-4 shrink-0 opacity-80" />
                  <span className="hidden sm:inline">{lang.label}</span>
                  <ChevronDown className="size-3.5 shrink-0 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[10rem]">
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLang(l)}
                    className={lang.code === l.code ? "font-medium" : ""}
                  >
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asChild
              size="sm"
              className="h-8 rounded-full bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-md sm:h-9 sm:px-4 sm:text-sm"
            >
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </Button>
            <button
              type="button"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-foreground/[0.06]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="mt-3 rounded-3xl border border-border/60 bg-background/80 p-4 shadow-[0_8px_32px_-4px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-border/40 dark:bg-background/70 lg:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/[0.06] hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-3">
              <span className="text-xs font-medium text-muted-foreground">
                Language
              </span>
              <div className="flex gap-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      lang.code === l.code
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:bg-foreground/[0.06]"
                    }`}
                    onClick={() => setLang(l)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
