const dates = [
  { date: "11 Feb 2026", label: "Applications Open" },
  { date: "28 Feb 2026", label: "Applications Close (11:59 PM IST)" },
  { date: "03 Mar 2026", label: "Shortlist Announcement (Email)" },
  { date: "10 Mar 2026", label: "Fee Payment Deadline" },
  { date: "06–08 Apr 2026", label: "Workshop Dates" },
];

const ImportantDates = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Important Dates</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary/20" />

        <div className="space-y-8">
          {dates.map((d, i) => (
            <div key={i} className="flex items-start gap-6 relative">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0 z-10">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-foreground">{d.date}</p>
                <p className="text-sm text-muted-foreground">{d.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-8 italic">
        Shortlisted participants will receive payment instructions by email. Please note that the workshop fee is non-refundable.
      </p>
    </div>
  </section>
);

export default ImportantDates;
