import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type TagType = "Speaker" | "Chief Guest" | "Organiser";

const tagColors: Record<TagType, string> = {
  Speaker: "bg-primary text-primary-foreground",
  "Chief Guest": "bg-amber-500 text-white",
  "Organiser": "bg-emerald-600 text-white",
};

interface Speaker {
  name: string;
  position: string;
  affiliation: string;
  image: string;
  tags: TagType[];
  website: string;
}

const speakers: Speaker[] = [
  // Chief Guests first
  {
    name: "Prof. Supawan Tantayanon",
    position: "Professor",
    affiliation: "Department of Chemistry, Chulalongkorn University",
    image: "/speaker-supawan.png",
    tags: ["Speaker", "Chief Guest"],
    website: "https://web.chemcu.org/supawan-tantayanon/",
  },
  {
    name: "Prof. Rabibrata Mukherjee",
    position: "Professor & National Coordinator, SPARC",
    affiliation: "Department of Chemical Engineering, IIT Kharagpur",
    image: "/speaker-rabibrata.png",
    tags: ["Chief Guest"],
    website: "https://www.iitkgp.ac.in/department/CH/faculty/ch-rabibrata",
  },
  // Speakers second
  {
    name: "Prof. Thalappil Pradeep",
    position: "Institute Professor",
    affiliation: "Department of Chemistry, IIT Madras",
    image: "/speaker-pradeep.png",
    tags: ["Speaker"],
    website: "https://pradeepresearch.org/",
  },
  {
    name: "Prof. Hadas Mamane",
    position: "Full Professor",
    affiliation: "School of Mechanical Engineering, Tel Aviv University",
    image: "/speaker-hadas.png",
    tags: ["Speaker"],
    website: "https://english.tau.ac.il/profile/hadasmg",
  },
  {
    name: "Dr. Priyank J. Sharma",
    position: "Assistant Professor",
    affiliation: "Department of Civil Engineering, IIT Indore",
    image: "/speaker-priyank.png",
    tags: ["Speaker"],
    website: "https://sites.google.com/view/priyank2306/research-group?authuser=0",
  },
  {
    name: "Dr. Kandaswamy Paramasivan IPS",
    position: "Professor of Practice",
    affiliation: "IIT Madras (Formerly DGP/Director, Vigilance & Anti-Corruption)",
    image: "/speaker-kandaswamy.png",
    tags: ["Speaker"],
    website: "https://kandaswamyparamasivan.in/",
  },
  {
    name: "Mr. Arvind Kumar",
    position: "Director",
    affiliation: "Optym",
    image: "/speaker-arvind.png",
    tags: ["Speaker"],
    website: "https://www.linkedin.com/in/arviphd/?originalSubdomain=in",
  },
  // Organisers last
  {
    name: "Prof. Rajnish Kumar",
    position: "Professor",
    affiliation: "Department of Chemical Engineering, IIT Madras",
    image: "/speaker-rajnish.png",
    tags: ["Organiser"],
    website: "https://sites.google.com/site/rajnishresearchgroup/",
  },
  {
    name: "Dr. G. Velmurugan",
    position: "Researcher",
    affiliation: "KMCH Research Foundation",
    image: "/speaker-velmurugan.png",
    tags: ["Organiser"],
    website: "https://www.linkedin.com/in/velmurugan-%E0%AE%B5%E0%AF%87%E0%AE%B2%E0%AF%8D%E0%AE%AE%E0%AF%81%E0%AE%B0%E0%AF%81%E0%AE%95%E0%AE%A9%E0%AF%8D-7a8952268/",
  },
  {
    name: "Prof. Ligy Philip",
    position: "Institute Chair Professor",
    affiliation: "Department of Civil Engineering, IIT Madras",
    image: "/speaker-ligy.png",
    tags: ["Organiser"],
    website: "https://civil.iitm.ac.in/faculty/ligy/",
  },
];

const SpeakersSection = () => (
  <section id="speakers" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
        Speakers & Organisers
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-6">
        Leading experts from across India and internationally.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {Object.entries(tagColors).map(([label, color]) => (
          <span
            key={label}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${color}`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="group bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative aspect-[4/4] overflow-hidden bg-muted">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-foreground text-base mb-1">
                {s.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-1">
                {s.position}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {s.affiliation}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
                {s.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className={`text-[10px] px-2 py-0.5 font-semibold border-0 ${tagColors[tag]}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Website link */}
              <a
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
              >
                <ExternalLink size={12} />
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground italic">
          More exciting speakers are lined up and will be updated here. Stay tuned!
        </p>
      </div>
    </div>
  </section>
);

export default SpeakersSection;
