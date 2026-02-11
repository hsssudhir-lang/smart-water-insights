import { Sun, Wrench, BookOpen } from "lucide-react";

const WorkshopFormat = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How the Workshop Is Run</h2>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        <div className="text-center">
          <Sun size={28} className="mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground">Morning</h3>
          <p className="text-sm text-muted-foreground">Expert-led talks, case studies &amp; problem framing</p>
        </div>
        <div className="text-center">
          <Wrench size={28} className="mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground">Afternoon</h3>
          <p className="text-sm text-muted-foreground">Hands-on tutorials, datasets, modeling &amp; visualization</p>
        </div>
        <div className="text-center">
          <BookOpen size={28} className="mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground">Philosophy</h3>
          <p className="text-sm text-muted-foreground">Scaffolded learning with reproducibility focus</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border p-5 text-center">
        <p className="text-sm text-muted-foreground">
          The final lab syllabus and datasets will be shared with shortlisted participants closer to the workshop. The hands-on themes follow the learning tracks listed above.
        </p>
      </div>
    </div>
  </section>
);

export default WorkshopFormat;
