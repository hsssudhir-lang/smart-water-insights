import { CalendarDays, MapPin, Users, Clock } from "lucide-react";

const facts = [
  { icon: CalendarDays, label: "Dates", value: "06–08 Apr 2026" },
  { icon: MapPin, label: "Venue", value: "ICSR, IIT Madras" },
  { icon: Users, label: "Mode", value: "On-site" },
  { icon: Clock, label: "Deadline", value: "28 Feb 2026" },
];

const QuickFacts = () => (
  <section className="py-6 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {facts.map((f) => (
          <div key={f.label} className="flex items-center gap-2 text-sm">
            <f.icon size={18} className="opacity-80" />
            <div>
              <span className="opacity-70">{f.label}: </span>
              <span className="font-semibold">{f.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickFacts;
