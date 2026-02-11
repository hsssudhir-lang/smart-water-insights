import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type Session = { time: string; title: string; type: "Talk" | "Demo" | "Tutorial" | "Break" };

const day1: Session[] = [
  { time: "09:00–09:40", title: "Inauguration", type: "Talk" },
  { time: "09:40–10:20", title: "People's Water Data and Hydroinformatics", type: "Talk" },
  { time: "10:20–11:00", title: "Decentralized Water Technologies", type: "Talk" },
  { time: "11:00–11:20", title: "Tea Break", type: "Break" },
  { time: "11:20–13:00", title: "Decentralized Household UV Disinfection Unit", type: "Demo" },
  { time: "13:00–14:00", title: "Lunch", type: "Break" },
  { time: "14:00–15:00", title: "Sensors & IoT for Water Data Science", type: "Demo" },
  { time: "15:00–16:00", title: "Know Your Water Data", type: "Tutorial" },
  { time: "16:00–17:00", title: "Data Preprocessing, Harmonization & Multimodal Fusion", type: "Tutorial" },
];

const day2: Session[] = [
  { time: "09:00–09:40", title: "AI/ML & Data Science for Chemistry/Health", type: "Talk" },
  { time: "09:40–10:20", title: "Optimization & Mathematical Modeling", type: "Talk" },
  { time: "10:20–11:00", title: "Information Design & Data Visualization", type: "Talk" },
  { time: "11:00–11:20", title: "Tea Break", type: "Break" },
  { time: "11:20–13:00", title: "Problem Formulation & Evaluation Design", type: "Tutorial" },
  { time: "13:00–14:00", title: "Lunch", type: "Break" },
  { time: "14:00–15:00", title: "Modeling Approaches I — Time-series Models", type: "Tutorial" },
  { time: "15:00–16:00", title: "Modeling Approaches II — Vision Models", type: "Tutorial" },
  { time: "16:00–17:00", title: "Modeling Approaches III — Prediction & Classification", type: "Tutorial" },
];

const day3: Session[] = [
  { time: "09:00–09:40", title: "AI for Public Policy and Governance", type: "Talk" },
  { time: "09:40–10:20", title: "Digital Twins", type: "Talk" },
  { time: "10:20–11:00", title: "Water-Climate / Water-Health Nexus", type: "Talk" },
  { time: "11:00–11:20", title: "Tea Break", type: "Break" },
  { time: "11:20–13:00", title: "GenAI Use Cases in Water Quality", type: "Tutorial" },
  { time: "13:00–14:00", title: "Lunch", type: "Break" },
  { time: "14:00–15:00", title: "Geospatial Modeling in Water Quality", type: "Tutorial" },
  { time: "15:00–16:30", title: "Data Visualization & Storytelling", type: "Tutorial" },
  { time: "16:30–17:00", title: "Closing Ceremony & Certificate Distribution", type: "Talk" },
];

const typeBadgeVariant = (t: Session["type"]) => {
  if (t === "Break") return "secondary" as const;
  return "default" as const;
};

const DaySchedule = ({ sessions }: { sessions: Session[] }) => (
  <div className="space-y-2">
    {sessions.map((s, i) => (
      <div
        key={i}
        className={`flex items-start gap-4 p-3 rounded-lg ${s.type === "Break" ? "bg-muted/40" : "bg-card border"}`}
      >
        <span className="text-xs font-mono text-muted-foreground w-24 shrink-0 pt-0.5">{s.time}</span>
        <div className="flex-1">
          <span className="text-sm text-foreground">{s.title}</span>
        </div>
        <Badge variant={typeBadgeVariant(s.type)} className="text-[10px] shrink-0">
          {s.type}
        </Badge>
      </div>
    ))}
  </div>
);

const ProgramSchedule = () => (
  <section id="program" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Program Schedule</h2>
      <p className="text-muted-foreground text-center mb-10">Three days of talks, demos, and hands-on tutorials.</p>

      <Tabs defaultValue="day1">
        <TabsList className="w-full justify-center mb-6">
          <TabsTrigger value="day1">Day 1 — Technologies</TabsTrigger>
          <TabsTrigger value="day2">Day 2 — Modeling</TabsTrigger>
          <TabsTrigger value="day3">Day 3 — AI & Policy</TabsTrigger>
        </TabsList>
        <TabsContent value="day1"><DaySchedule sessions={day1} /></TabsContent>
        <TabsContent value="day2"><DaySchedule sessions={day2} /></TabsContent>
        <TabsContent value="day3"><DaySchedule sessions={day3} /></TabsContent>
      </Tabs>

      <p className="text-xs text-muted-foreground text-center mt-6 italic">
        Schedule and session titles may undergo minor updates based on speaker availability.
      </p>
    </div>
  </section>
);

export default ProgramSchedule;
