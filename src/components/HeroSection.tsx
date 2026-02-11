import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/tvrF552Ye7kmvRcA6";

const HeroSection = () => (
  <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-10" style={{ minHeight: "calc(100vh - 3.5rem)" }}>
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
      backgroundSize: "32px 32px",
    }} />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

    <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
      <div className="flex justify-center mb-3">
        <img src="/logo-sparc.png" alt="SPARC" className="h-12 object-contain" />
      </div>
      <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
        SPARC-Sponsored Three-Day Hands-On Workshop
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-3">
        Smart Water:{" "}
        <span className="text-primary">From Technologies to Data Science</span>
      </h1>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-5">
        A focused, hands-on workshop connecting water technologies, monitoring, and modern data science—from water treatment concepts and sensing to reproducible analytics, modeling, and decision-ready insights.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-5">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={16} className="text-primary" />
          06–08 April 2026
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={16} className="text-primary" />
          ICSR, IIT Madras, Chennai
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Jointly organized by IIT Madras, Tel Aviv University &amp; KMCH Research Foundation
        <br className="hidden sm:block" />
        (under the People's Water Data initiative)
      </p>

      {/* Partner logos */}
      <div className="flex items-center justify-center gap-8 mb-5 flex-wrap">
        <img src="/logo-iitm.png" alt="IIT Madras" className="h-14 object-contain" />
        <img src="/logo-tau.png" alt="Tel Aviv University" className="h-12 object-contain" />
        <img src="/logo-kmch.png" alt="KMCH Research Foundation" className="h-12 object-contain" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
        <Button asChild size="lg" className="text-base px-8">
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            Apply / Submit EOI
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-base px-8">
          <a href="#program">View Program</a>
        </Button>
      </div>

      <Badge variant="secondary" className="text-xs">
        Seats limited · Selection-based
      </Badge>
    </div>
  </section>
);

export default HeroSection;
