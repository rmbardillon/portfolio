import {
  Briefcase,
  GraduationCap,
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";

const infoCards = [
  {
    icon: Briefcase,
    title: "Experience",
    detail: "Software Engineer at Infor PSSC",
    sub: "ERP integrations, M3 extensions, event-driven systems",
  },
  {
    icon: Layers,
    title: "ERP Expertise",
    detail: "Infor M3 / MEC / XtendM3",
    sub: "Infor OS, ION, H5 SDK, Experience Designer",
  },
  {
    icon: GraduationCap,
    title: "Education",
    detail: "BS Information Technology",
    sub: "PUP Santa Rosa Campus",
  },
];

const highlights = [
  "Designing and implementing M3 integrations using MEC and API Gateway",
  "Building custom business logic with XtendM3 extensions",
  "Building ION Workflows and event-driven integrations via Infor OS",
  "Customizing M3 UI with H5 Scripting, H5 SDK, and Experience Designer",
  "API integrations including Microsoft Graph and third-party services",
  "Full-stack development for internal tools and client-facing applications",
];

const techCategories = [
  {
    icon: Workflow,
    label: "Enterprise Systems",
    items: ["Infor M3", "Infor OS", "Infor ION", "ION Workflows", "MEC", "XtendM3", "API Gateway", "Datalake", "H5 Scripting", "H5 SDK", "Experience Designer"],
  },
  {
    icon: Server,
    label: "Backend",
    items: ["Java", "Spring Boot", "PHP", "Node.js", "Python", "C#"],
  },
  {
    icon: Code2,
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    label: "Database",
    items: ["SQL", "MongoDB", "MySQL"],
  },
  {
    icon: Wrench,
    label: "Tools",
    items: ["Git", "Postman", "Maven", "Vercel"],
  },
];

const About = () => (
  <section className="py-20" id="about">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="About"
        title="Enterprise systems & integration engineering"
        description="I specialize in ERP consulting and backend integrations within the Infor M3 ecosystem. My day-to-day involves designing scalable integration flows, extending ERP functionality, and building reliable systems that connect enterprise platforms."
      />

      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {infoCards.map((card) => (
          <Card
            key={card.title}
            className="group hover:border-accent/30 transition-colors duration-300"
          >
            <CardContent className="p-6">
              <card.icon className="h-5 w-5 text-accent mb-3" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {card.title}
              </p>
              <p className="font-semibold text-foreground mt-1">{card.detail}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{card.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* What I do */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          What I do
        </h3>
        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Tech Stack
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-2 mb-3">
                <cat.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
