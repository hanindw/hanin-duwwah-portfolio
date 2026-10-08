import { Download, Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/avatar.png";
import { StarsBackground } from "@/components/ui/StarsBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-28 lg:pb-20"
    >
      {/* النجوم في الخلفية */}
      <StarsBackground sectionHeight={1000} intensity="medium" />

      {/* Animated background */}
      <div className="wave-bg" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-float delay-300" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-cyan/20 blur-xl animate-pulse-slow" />

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-[1.6rem] sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight animate-fade-in-up delay-100 whitespace-nowrap">
              Hi, I'm <span className="gradient-text">Hanin Duwwah</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-muted-foreground animate-fade-in-up delay-200">
              UI/UX Designer
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300">
              Specializing in creating intuitive, user-centered digital experiences.
              Transforming complex problems into seamless interfaces through research,
              prototyping, and iterative design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up delay-400">
              <Button
                variant="gradient"
                size="lg"
                asChild
                className="w-full sm:w-48 h-12"
              >
                <a href="/Hanin_Duwwah_UIUX_CV.pdf" download>
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-48 h-12"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Avatar with floating experience badge */}
          <div className="relative animate-scale-in delay-200">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float-sync">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl animate-pulse-slow" />

              {/* Avatar container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={avatarImage}
                  alt="Hanin Duwwah - UI/UX Designer"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge - Circle that floats with avatar */}
              <div className="absolute -top-2 -right-2 sm:-top-2 sm:-right-2 w-14 h-14 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-accent rounded-full flex flex-col items-center justify-center shadow-xl border-2 sm:border-4 border-background glow-pink">
                <span className="text-white font-bold text-lg sm:text-3xl leading-none">
                  +2
                </span>
                <span className="text-white/90 text-[10px] sm:text-base font-semibold">
                  Years
                </span>
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
            </div>

            {/* Social icons — half on image, half below */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              <a
                href="https://www.linkedin.com/in/hanin-duwwah-211835385"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.behance.net/haninduwwah43"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                title="Behance"
                className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>

              <a
                href="https://github.com/hanindw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="mailto:hanindowah@gmail.com"
                aria-label="Email"
                title="Email"
                className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}