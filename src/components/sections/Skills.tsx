import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const skillCategories = [
  {
    title: "User Research & Strategy",
    skills: ["User Interviews", "Personas", "Problem Definition"],
    color: "from-primary to-primary/60",
  },
  {
    title: "UI/UX Design",
    skills: ["Wireframing", "Visual Design", "Interaction Design", "Mobile-First Design"],
    color: "from-accent to-accent/60",
  },
  {
    title: "Prototyping & Testing",
    skills: ["High-Fidelity Prototypes", "Usability Testing", "User Flow Validation", "Iterative Design"],
    color: "from-primary to-accent",
  },
  {
    title: "Design Systems",
    skills: ["Component Libraries", "Style Guides", "Documentation"],
    color: "from-accent to-primary",
  },
];

const tools = [
  { name: "Figma", level: 90 },
  { name: "Flutter", level: 80 },
  { name: "HTML5/CSS3", level: 75 },
  { name: "React.js", level: 70 },
];

const softSkills = ["Creativity", "Attention to Details", "Communication", "Empathizing with Users"];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
        </ScrollReveal>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 100}
            >
              <div className="glass-card rounded-2xl p-6 hover-lift card-animate group h-full">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                  <span className={cn("w-3 h-3 rounded-full bg-gradient-to-r transition-transform duration-300 group-hover:scale-150 group-hover:animate-pulse", category.color)} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-110 hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tools Progress */}
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal animation="fade-right" delay={200}>
            <div className="glass-card rounded-2xl p-6 card-animate h-full">
              <h3 className="text-lg font-semibold mb-6">Tools & Technologies</h3>
              <div className="space-y-5">
                {tools.map((tool) => (
                  <div key={tool.name} className="group">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium group-hover:text-primary transition-colors">{tool.name}</span>
                      <span className="text-muted-foreground">{tool.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                        style={{ width: `${tool.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={300}>
            <div className="glass-card rounded-2xl p-6 card-animate h-full">
              <h3 className="text-lg font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-[1.05] cursor-default group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-150 group-hover:animate-pulse transition-transform" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors">
                <h4 className="font-medium mb-2">Technical Awareness</h4>
                <p className="text-sm text-muted-foreground">
                  Frontend Fundamentals (HTML5, CSS3, JavaScript, TypeScript) • 
                  Frameworks (React.js, Flutter) • 
                  Component Architecture • API Integration • Responsive Implementation
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
