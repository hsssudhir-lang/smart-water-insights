import { GraduationCap, Building, BarChart3, Landmark } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Students, researchers & faculty in water, environment, engineering & data science" },
  { icon: Building, label: "Professionals from water utilities, government agencies, NGOs & industry" },
  { icon: BarChart3, label: "Data scientists & engineers interested in environmental and water applications" },
  { icon: Landmark, label: "Policymakers & practitioners in water governance and sustainability" },
];

const WhoShouldApply = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Who Should Apply</h2>

      <div className="space-y-4 mb-10">
        {audiences.map((a) => (
          <div key={a.label} className="flex items-start gap-3">
            <a.icon size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm">{a.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">You'll benefit most if you…</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Work with (or plan to work with) water quality datasets</li>
          <li>Want to move from "just analysis" to credible, evaluated models</li>
          <li>Want to understand real-world constraints behind monitoring and treatment—so models stay grounded</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhoShouldApply;
