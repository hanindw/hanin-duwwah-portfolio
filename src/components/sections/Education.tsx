import { GraduationCap, Award, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Information Technology Engineering",
    institution: "Damascus University",
    period: "2021 – 2026 Expected",
    description: "Specialization in Software Engineering and Information Systems",
  },
  {
    icon: Award,
    title: "Advanced UI/UX Design Certificate",
    institution: "UNRWA - Damascus Training Center (DTC)",
    period: "2024",
    description: "Comprehensive UI/UX design program covering research, prototyping, and design systems",
  },
];

const languages = [
  { name: "Arabic", level: "Native Proficiency", percentage: 100 },
  { name: "English", level: "Professional Working Proficiency", percentage: 80 },
];

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Education & <span className="gradient-text">Languages</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <ScrollReveal
                key={item.title}
                animation="fade-right"
                delay={index * 150}
              >
                <div className="glass-card rounded-2xl p-6 hover-lift card-animate group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <item.icon className="h-7 w-7 text-primary group-hover:animate-wiggle" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Languages */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="glass-card rounded-2xl p-6 card-animate h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>

              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium group-hover:text-primary transition-colors">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Design Approach - Outside languages card */}
        <ScrollReveal animation="zoom-in" delay={300}>
          <div className="glass-card rounded-2xl p-6 card-animate bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-colors">
            <h4 className="font-semibold text-lg mb-3 gradient-text">Design Approach</h4>
            <p className="text-muted-foreground leading-relaxed">
              Research-driven designer who bridges user needs with business goals through technically 
              feasible solutions. My software engineering background enables seamless design-development 
              collaboration and implementation-ready deliverables.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
