import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, User, Wrench, Sparkles, Target, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProjectById } from '@/data/projects';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useState, useEffect } from 'react';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = getProjectById(projectId || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-display font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[70vh] flex items-end pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent`} />
          <div className={`absolute inset-0 bg-gradient-to-r ${project.accentColor} opacity-20`} />
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Back Button */}
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Hero Content */}
        <div className="container relative z-10">
          <ScrollReveal animation="fade-up">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.accentColor} text-white mb-6`}>
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{project.category}</span>
            </div>
            <h1 className={`text-5xl lg:text-7xl font-display font-bold mb-4 bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
              {project.title}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">{project.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Meta Info */}
      <section className="py-12 border-b border-border/50">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: User, label: "Role", value: project.role },
                { icon: Clock, label: "Duration", value: project.duration },
                { icon: Wrench, label: "Tools", value: project.tools.slice(0, 2).join(", ") },
                { icon: Sparkles, label: "Category", value: project.category }
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.accentColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Overview</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                  About the Project
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${project.accentColor} overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white">Key Highlights</h3>
                  <ul className="space-y-3">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/90">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold">{i + 1}</span>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Challenge & Solution
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem */}
            <ScrollReveal animation="fade-right">
              <div className="h-full p-8 rounded-3xl bg-destructive/5 border border-destructive/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal animation="fade-left">
              <div className="h-full p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Lightbulb className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">The Solution</h3>
                  <div className="space-y-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.accentColor} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-xs font-bold text-white">{i + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery.length > 0 && (
        <section className="py-20">
          <div className="container">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Project Gallery</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                Design Showcase
              </h2>
            </ScrollReveal>

            {/* Main Gallery Carousel */}
            <ScrollReveal animation="zoom-in">
              <div className="relative max-w-4xl mx-auto">
                <div 
                  className="relative aspect-[9/16] max-h-[600px] mx-auto rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl cursor-pointer"
                  onClick={() => setIsImageExpanded(true)}
                >
                  <img
                    src={project.gallery[currentImageIndex]}
                    alt={`${project.title} screen ${currentImageIndex + 1}`}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-contain bg-gradient-to-b from-muted/50 to-muted"
                  />
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                    <span className="text-sm font-medium">{currentImageIndex + 1} / {project.gallery.length}</span>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${project.accentColor} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${project.accentColor} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex justify-center gap-3 mt-8 flex-wrap">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      i === currentImageIndex 
                        ? `border-primary shadow-lg scale-110` 
                        : 'border-border/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} loading="eager" decoding="sync" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Tools Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollReveal animation="fade-up" className="text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Tools & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${project.accentColor} text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal animation="zoom-in">
            <div className={`relative p-12 rounded-3xl bg-gradient-to-r ${project.accentColor} overflow-hidden text-center`}>
              <div className="absolute inset-0 bg-white/5" />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
                  Want to see the full case study?
                </h2>
                <p className="text-white/80 max-w-xl mx-auto">
                  Explore the complete design process, research insights, and detailed solutions on Behance.
                </p>
                <p className="text-white/60 text-sm max-w-md mx-auto italic">
                  Note: If you are in Syria, you will need a VPN to access Behance.
                </p>
                <a
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <span>View on Behance</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Expanded Modal */}
      {isImageExpanded && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <button
            onClick={() => setIsImageExpanded(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>
          <img
            src={project.gallery[currentImageIndex]}
            alt={`${project.title} screen ${currentImageIndex + 1}`}
            loading="eager"
            decoding="sync"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}
