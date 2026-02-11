import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/tvrF552Ye7kmvRcA6";

const navLinks = [
  { label: "Overview", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Speakers", href: "#speakers" },
  { label: "Apply", href: "#how-to-apply" },
  { label: "Logistics", href: "#venue" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src="/logo-pwd.png" alt="People's Water Data" className="h-14 w-auto object-contain" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-full">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
