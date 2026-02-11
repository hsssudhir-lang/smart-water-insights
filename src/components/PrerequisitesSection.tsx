import { Laptop, Calculator, Code } from "lucide-react";

const PrerequisitesSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Prerequisites & What to Bring</h2>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <Laptop size={28} className="mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground text-sm">Laptop</h3>
          <p className="text-xs text-muted-foreground">Preferred for hands-on sessions</p>
        </div>
        <div className="text-center">
          <Calculator size={28} className="mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground text-sm">Quantitative Skills</h3>
          <p className="text-xs text-muted-foreground">Basic comfort; mixed levels supported</p>
        </div>
        <div className="text-center">
          <Code size={28} className="mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground text-sm">Python (Optional)</h3>
          <p className="text-xs text-muted-foreground">Anaconda/Miniconda or shared setup provided</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border p-5">
        <h3 className="font-semibold text-foreground text-sm mb-2">Recommended Background (not mandatory)</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Basic Python / data handling (pandas)</li>
          <li>Basic plotting / visualization</li>
          <li>Interest in water systems and monitoring</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PrerequisitesSection;
