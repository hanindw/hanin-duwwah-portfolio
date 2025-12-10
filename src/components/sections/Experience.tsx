import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const experiences = [
  {
    title: "Freelance UI/UX Designer",
    company: "Self-Employed",
    period: "Feb 2024 – Present",
    location: "Remote",
    description: [
      "Designed 8+ digital solutions (web apps, mobile interfaces, dashboards)",
      "Improved user task completion rates by an average of 35%",
      "Reduced design-development handoff time by 40%",
      "Conducted user research with 20+ participants, translating insights into data-driven design decisions",
    ],
    current: true,
  },
  {
    title: "UI/UX Design Intern",
    company: "Connect Agency",
    period: "Sep 2025 – Nov 2025",
    location: "Agency",
    description: [
      "Designed a multi-platform e-commerce system (web dashboard & mobile) serving 4 distinct user roles",
      "Created a unified design system adopted by 5+ developers",
      "Improved interface usability scores by 25% through iterative prototyping and testing",
    ],
    current: false,
  },
  {
    title: "UI/UX Design Volunteer",
    company: "Digit Innovation Center",
    period: "Dec 2025 – Present",
    location: "Damascus",
    description: [
      "Collaborated with developers to ensure design feasibility and implementation accuracy",
    ],
    current: true,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.title + exp.company}
                animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                delay={index * 150}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 transition-transform hover:scale-150 ${
                    exp.current
                      ? "bg-primary glow-pink"
                      : "bg-muted-foreground"
                  }`}
                />

                <div
                  className={`glass-card rounded-2xl p-6 hover-lift card-animate group ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform ${index % 2 === 0 ? "md:order-2" : ""}`}>
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
