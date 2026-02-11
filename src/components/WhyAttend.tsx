import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wrench, BarChart3, BrainCircuit, Eye, Waypoints } from "lucide-react";

const benefits = [
  { icon: Droplets, title: "Water Data & Hydroinformatics", desc: "A practical understanding of what is (and isn't) possible with typical monitoring datasets." },
  { icon: Wrench, title: "Hands-on Treatment Exposure", desc: "Decentralized / household-scale treatment and how technology constraints shape data and interventions." },
  { icon: BarChart3, title: "Data Preprocessing Skills", desc: "Clean, harmonize, and preprocess water datasets for analysis and modeling." },
  { icon: BrainCircuit, title: "Time-series & ML Foundations", desc: "Analysis, prediction, and classification foundations for water applications." },
  { icon: Eye, title: "GenAI & Geospatial", desc: "Introductory exposure to GenAI use-cases and geospatial approaches for water quality mapping." },
  { icon: Waypoints, title: "Digital Twin – Water Health Nexus", desc: "Explore digital twin frameworks linking water quality data with public health outcomes for predictive, real-time decision-making." },
];

const WhyAttend = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-foreground mb-4 text-center">What You Will Gain</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Six key takeaways that make this workshop worth your time.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <Card key={b.title} className="border-none shadow-sm bg-card">
            <CardContent className="pt-6">
              <b.icon size={28} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground italic max-w-xl mx-auto">
          Participants will be guided towards producing reproducible outputs such as well-documented notebooks, meaningful figures, and a structured summary of results.
        </p>
      </div>
    </div>
  </section>
);

export default WhyAttend;
