import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Coffee, UtensilsCrossed } from "lucide-react";

type SessionType = "Lecture" | "Practical" | "Ceremony" | "Break";

interface Session {
  time: string;
  title: string;
  speaker?: string;
  type: SessionType;
}

const day1: Session[] = [
  {
    time: "08:30 AM – 09:10 AM",
    title: "Inauguration",
    speaker: "Prof. Thalappil Pradeep, Prof. Hadas Mamane, Prof. Rabibrata Mukherjee & others",
    type: "Ceremony",
  },
  {
    time: "09:10 AM – 09:45 AM",
    title: "Vision of People's Water Data",
    speaker: "Prof. Thalappil Pradeep, IIT Madras",
    type: "Lecture",
  },
  {
    time: "09:45 AM – 10:20 AM",
    title: "Chemistry in Practice: Small-Scale Labs and the IUPAC Guiding Principles of Responsible Chemistry",
    speaker: "Prof. Supawan Tantayanon, Chulalongkorn University",
    type: "Lecture",
  },
  {
    time: "10:20 AM – 10:55 AM",
    title: "Decentralized Water Technologies",
    speaker: "Prof. Hadas Mamane, Tel-Aviv University",
    type: "Lecture",
  },
  {
    time: "10:55 AM – 11:10 AM",
    title: "The Hidden Ecology of Artificial Intelligence and Data Science",
    speaker: "Dr. G. Velmurugan, KMCH Research Foundation",
    type: "Lecture",
  },
  { time: "11:10 AM – 11:25 AM", title: "Tea Break", type: "Break" },
  {
    time: "11:25 AM – 01:00 PM",
    title: "Demonstration of a Decentralized Household UV Disinfection Unit",
    speaker: "Prof. Hadas Mamane, Tel-Aviv University",
    type: "Practical",
  },
  { time: "01:00 PM – 02:00 PM", title: "Lunch", type: "Break" },
  {
    time: "02:00 PM – 03:00 PM",
    title: "Demonstration of Sensors & IoT for Water Data Science",
    speaker: "Dr. Kamalesh Chowdhari, ICCW, IIT Madras",
    type: "Practical",
  },
  {
    time: "03:00 PM – 04:00 PM",
    title: "Know Your Water Data",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  {
    time: "04:00 PM – 05:00 PM",
    title: "Data Preprocessing, Harmonization & Multimodal Fusion",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
];

const day2: Session[] = [
  {
    time: "09:00 AM – 09:35 AM",
    title: "Artificial Intelligence, Machine Learning, and Data Science for Chemistry/Health",
    speaker: "Prof. Ramanathan Muthuganapathy, IIT Madras",
    type: "Lecture",
  },
  {
    time: "09:35 AM – 10:10 AM",
    title: "Optimization and Mathematical Modeling: Foundations and Applications",
    speaker: "Arvind Kumar, Director, Optym",
    type: "Lecture",
  },
  {
    time: "10:10 AM – 10:45 AM",
    title: "Information Design and Data Visualization for Scientific Insight",
    speaker: "Dr. Raja Biswas",
    type: "Lecture",
  },
  {
    time: "10:45 AM – 11:05 AM",
    title: "Introduction to Day 2 Practical Session & Instructions",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Lecture",
  },
  { time: "11:05 AM – 11:20 AM", title: "Tea Break", type: "Break" },
  {
    time: "11:20 AM – 01:00 PM",
    title: "Problem Formulation & Evaluation Design",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  { time: "01:00 PM – 02:00 PM", title: "Lunch", type: "Break" },
  {
    time: "02:00 PM – 03:00 PM",
    title: "Modelling Approaches I — Time Series Models",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  {
    time: "03:00 PM – 04:00 PM",
    title: "Modelling Approaches II — Vision Models",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  {
    time: "04:00 PM – 05:00 PM",
    title: "Modelling Approaches III — Prediction and Classification Models",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
];

const day3: Session[] = [
  {
    time: "09:00 AM – 09:35 AM",
    title: "Artificial Intelligence for Public Policy and Governance",
    speaker: "Dr. Kandaswamy Paramasivan, IIT Madras",
    type: "Lecture",
  },
  {
    time: "09:35 AM – 10:10 AM",
    title: "Digital Twins: Water-Climate Nexus",
    speaker: "Dr. Priyank J. Sharma, IIT Indore",
    type: "Lecture",
  },
  {
    time: "10:10 AM – 10:45 AM",
    title: "Data-Driven Strategies for Optimal Disinfection in Rural Water Supply Systems",
    speaker: "Prof. Manoj K. Tiwari, IIT Kanpur",
    type: "Lecture",
  },
  {
    time: "10:45 AM – 11:05 AM",
    title: "Introduction to Day 3 Practical Session & Instructions",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Lecture",
  },
  { time: "11:05 AM – 11:20 AM", title: "Tea Break", type: "Break" },
  {
    time: "11:20 AM – 01:00 PM",
    title: "Tutorial on Gen AI Use Cases in Water Quality",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  { time: "01:00 PM – 02:00 PM", title: "Lunch", type: "Break" },
  {
    time: "02:00 PM – 03:00 PM",
    title: "Geospatial Modeling in Water Quality",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  {
    time: "03:00 PM – 04:00 PM",
    title: "Data Visualization and Storytelling",
    speaker: "Dr. Vamanie, Mr. Sudhir & Team, IIT Madras",
    type: "Practical",
  },
  {
    time: "04:00 PM – 04:30 PM",
    title: "Concluding Remarks, Participants Feedback & Certificate Distribution",
    speaker: "Dr. Vamanie & Dr. G. Velmurugan",
    type: "Ceremony",
  },
];

const typeStyles: Record<SessionType, { bg: string; badge: string }> = {
  Lecture: { bg: "bg-card border", badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" },
  Practical: { bg: "bg-card border", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
  Ceremony: { bg: "bg-card border", badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" },
  Break: { bg: "bg-muted/40", badge: "bg-muted text-muted-foreground" },
};

const BreakIcon = ({ title }: { title: string }) =>
  title.toLowerCase().includes("tea") ? (
    <Coffee size={14} className="text-muted-foreground shrink-0" />
  ) : (
    <UtensilsCrossed size={14} className="text-muted-foreground shrink-0" />
  );

const DaySchedule = ({ sessions, date }: { sessions: Session[]; date: string }) => (
  <div>
    <p className="text-sm font-medium text-muted-foreground text-center mb-4">{date}</p>
    <div className="space-y-2">
      {sessions.map((s, i) => {
        const style = typeStyles[s.type];
        return (
          <div
            key={i}
            className={`flex items-start gap-4 p-3 rounded-lg transition-colors ${style.bg}`}
          >
            <span className="text-xs font-mono text-muted-foreground w-[150px] shrink-0 pt-0.5 leading-snug">
              {s.time}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {s.type === "Break" && <BreakIcon title={s.title} />}
                <span className={`text-sm ${s.type === "Break" ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                  {s.title}
                </span>
              </div>
              {s.speaker && (
                <p className="text-xs text-muted-foreground mt-1">{s.speaker}</p>
              )}
            </div>
            <Badge className={`text-[10px] shrink-0 border-0 ${style.badge}`}>
              {s.type}
            </Badge>
          </div>
        );
      })}
    </div>
  </div>
);

const ProgramSchedule = () => (
  <section id="program" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <Tabs defaultValue="day1">
        <TabsList className="w-full justify-center mb-8">
          <TabsTrigger value="day1" className="text-sm px-6">Day 1</TabsTrigger>
          <TabsTrigger value="day2" className="text-sm px-6">Day 2</TabsTrigger>
          <TabsTrigger value="day3" className="text-sm px-6">Day 3</TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <DaySchedule sessions={day1} date="06 April 2026 (Monday) — Technologies & Data Foundations" />
        </TabsContent>
        <TabsContent value="day2">
          <DaySchedule sessions={day2} date="07 April 2026 (Tuesday) — Modeling & Optimization" />
        </TabsContent>
        <TabsContent value="day3">
          <DaySchedule sessions={day3} date="08 April 2026 (Wednesday) — AI, Policy & Storytelling" />
        </TabsContent>
      </Tabs>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        {(Object.entries(typeStyles) as [SessionType, { bg: string; badge: string }][]).map(([label, s]) => (
          <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium ${s.badge}`}>
            {label}
          </span>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4 italic">
        Schedule may undergo minor updates based on speaker availability.
      </p>
    </div>
  </section>
);

export default ProgramSchedule;
