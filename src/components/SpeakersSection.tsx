import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const speakers = [
  { name: "Prof. Hadas Mamane", affiliation: "Tel Aviv University", topic: "Water technologies & data" },
  { name: "Prof. Thalappil Pradeep", affiliation: "IIT Madras", topic: "Water purification" },
  { name: "Prof. Ligy Philip", affiliation: "IIT Madras", topic: "Environmental engineering" },
  { name: "Prof. Rajnish Kumar", affiliation: "IIT Madras", topic: "Water systems" },
  { name: "Dr. G. Velmurugan", affiliation: "KMCH Research Foundation", topic: "Health & water data" },
  { name: "Dr. Ramanathan Muthuganapathy", affiliation: "IIT Madras", topic: "AI/ML & data science" },
  { name: "Dr. Agastya Bhati", affiliation: "IIT Madras", topic: "AI for healthcare / digital twins" },
  { name: "Arvind Kumar", affiliation: "Director, Optym", topic: "Optimization & modeling" },
  { name: "Dr. Souvik Barat", affiliation: "TCS", topic: "Digital twins & simulation" },
  { name: "Rasagy Sharma", affiliation: "Capital One / NID", topic: "Information design & visualization" },
  { name: "Dr. Kandaswamy Paramasivan (IPS)", affiliation: "IIT Madras", topic: "AI for public policy" },
  { name: "Dr. Neha Karanjkar", affiliation: "IIT Goa", topic: "Digital twins" },
  { name: "Prof. Ravindra D. Gudi", affiliation: "IIT Bombay", topic: "Digital twins" },
  { name: "Dr. Priyank J. Sharma", affiliation: "IIT Indore", topic: "Water-climate nexus" },
  { name: "Prof. Varum Ramamohan", affiliation: "IIT Delhi", topic: "Probabilistic modeling" },
];

const SpeakersSection = () => (
  <section id="speakers" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Speakers & Resource Persons</h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Leading experts from across India and internationally.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {speakers.map((s) => (
          <Card key={s.name} className="border shadow-sm">
            <CardContent className="flex items-start gap-3 pt-5">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                <User size={18} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{s.name}</h3>
                <p className="text-xs text-muted-foreground">{s.affiliation}</p>
                <p className="text-xs text-primary mt-1">{s.topic}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground italic">
          Hands-on tutorials will be facilitated by the workshop instructional team.
        </p>
      </div>
    </div>
  </section>
);

export default SpeakersSection;
