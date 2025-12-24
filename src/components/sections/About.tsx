import { Sparkles, Target, Users, Code } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const highlights = [
  {
    icon: Target,
    title: "User-Centered",
    description: "Creating intuitive digital experiences through research and empathy",
  },
  {
    icon: Sparkles,
    title: "Creative Vision",
    description: "Transforming complex problems into seamless, elegant interfaces",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Seamless design-development collaboration for implementation-ready deliverables",
  },
  {
    icon: Code,
    title: "Tech-Savvy",
    description: "Technical understanding of frontend development for feasible solutions",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Bridging <span className="gradient-text">User Needs</span> with Business Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Research-driven designer who bridges user needs with business goals through technically 
            feasible solutions. My software engineering background enables seamless design-development 
            collaboration and implementation-ready deliverables.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="zoom-in"
              delay={index * 100}
            >
              <div className="group glass-card rounded-2xl p-6 hover-lift card-animate h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:animate-wiggle" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "12+", label: "Digital Solutions" },
            { value: "35%", label: "Improved Task Completion" },
            { value: "20+", label: "User Research Participants" },
            { value: "40%", label: "Reduced Handoff Time" },
          ].map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              animation="slide-up"
              delay={index * 150}
            >
              <div className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors card-animate hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
