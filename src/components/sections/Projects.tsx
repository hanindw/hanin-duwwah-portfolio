import { ExternalLink, Eye, Lightbulb, Target, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'solution'>('overview');

  return (
    <ScrollReveal
      animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
      delay={index * 100}
      className="group"
    >
      <div
        className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
        
        {/* Floating decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-t ${project.accentColor} opacity-20 z-10`} />
            <img
              src={project.image}
              alt={project.title}
              loading="eager"
              decoding="sync"
              className={`w-full h-64 lg:h-96 object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r ${project.accentColor} text-white shadow-lg`}>
                {project.category}
              </span>
            </div>

            {/* Project Number */}
            <div className="absolute bottom-4 right-4 z-20">
              <span className="text-6xl lg:text-8xl font-display font-bold text-white/20">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8 flex flex-col justify-between relative z-20">
            {/* Header */}
            <div>
              <h3 className={`text-2xl lg:text-3xl font-display font-bold mb-2 bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{project.subtitle}</p>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {[
                  { key: 'overview', label: 'Overview', icon: Sparkles },
                  { key: 'problem', label: 'Problem', icon: Target },
                  { key: 'solution', label: 'Solution', icon: Lightbulb }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as typeof activeTab)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === key
                        ? `bg-gradient-to-r ${project.accentColor} text-white shadow-lg`
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[140px] transition-all duration-300">
                {activeTab === 'overview' && (
                  <div className="animate-fade-in">
                    <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
                  </div>
                )}
                {activeTab === 'problem' && (
                  <div className="animate-fade-in">
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
                    </div>
                  </div>
                )}
                {activeTab === 'solution' && (
                  <div className="animate-fade-in space-y-2">
                    {project.solution.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.accentColor} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-foreground/80 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/project/${project.id}`}
                className={`inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r ${project.accentColor} text-white text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 group/btn`}
              >
                <Eye className="w-4 h-4" />
                <span>Take Fast View</span>
              </Link>
              {project.behanceLink && project.behanceLink.trim() !== "" && project.behanceLink !== "#" && (
                <a
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border-2 border-current text-foreground text-sm font-semibold transition-all duration-300 hover:bg-muted group/btn"
                >
                  <span>View on Behance</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Creative Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover my journey through design challenges, where each project tells a unique story of 
            <span className="text-primary font-medium"> innovation</span>, 
            <span className="text-accent font-medium"> creativity</span>, and 
            <span className="text-secondary font-medium"> impact</span>.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <ScrollReveal animation="zoom-in" delay={300} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-border/50">
            <div className="flex -space-x-3">
              {projects.slice(0, 7).map((p, i) => (
                <div
                  key={p.id}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${p.accentColor} border-2 border-background flex items-center justify-center text-white text-xs font-bold`}
                  style={{ zIndex: 7- i }}
                >
                  {p.title[0]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-foreground">7 Creative Projects</p>
              <p className="text-sm text-muted-foreground">Crafted with passion & precision</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}