import { Button } from "@/components/ui/button";
import { FileText, Search, ListChecks, CreditCard, CheckCircle } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/tvrF552Ye7kmvRcA6";

const steps = [
  { icon: FileText, label: "Submit EOI" },
  { icon: Search, label: "Review" },
  { icon: ListChecks, label: "Shortlist" },
  { icon: CreditCard, label: "Pay Fee" },
  { icon: CheckCircle, label: "Attend!" },
];

const HowToApply = () => (
  <section id="how-to-apply" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-foreground mb-8">How to Apply</h2>

      {/* Pipeline */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                <s.icon size={20} className="text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-6 h-0.5 bg-primary/30 mb-5" />
            )}
          </div>
        ))}
      </div>

      <div className="text-left bg-card rounded-lg border p-6 mb-8">
        <h3 className="font-semibold text-foreground mb-3">What we look for</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Alignment with the workshop theme (water / environment / sensing / data science / policy)</li>
          <li>Motivation and how you plan to use the learning</li>
          <li>Comfort with basic quantitative thinking (and willingness to learn)</li>
        </ul>
      </div>

      <Button asChild size="lg" className="text-base px-10">
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
          Apply / Submit EOI
        </a>
      </Button>
    </div>
  </section>
);

export default HowToApply;
