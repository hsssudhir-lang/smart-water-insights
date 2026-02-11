import { Droplet, Wifi, Database, TrendingUp, Globe, Sparkles, Layers } from "lucide-react";

const themes = [
  { icon: Droplet, label: "Decentralized Water Treatment" },
  { icon: Wifi, label: "Sensors & IoT" },
  { icon: Database, label: "Data Preprocessing & Harmonization" },
  { icon: TrendingUp, label: "Time-series Modeling" },
  { icon: Globe, label: "Geospatial Analysis" },
  { icon: Sparkles, label: "Generative AI" },
  { icon: Layers, label: "Multimodal Fusion" },
];

const LearningThemes = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Practical Learning Themes</h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Seven hands-on tracks spanning the full water data lifecycle.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {themes.map((t) => (
          <div
            key={t.label}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/40 hover:bg-muted transition-colors"
          >
            <t.icon size={32} className="text-primary mb-3" />
            <span className="text-sm font-medium text-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningThemes;
