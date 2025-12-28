import { Download, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/avatar.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="wave-bg" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-float delay-300" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-cyan/20 blur-xl animate-pulse-slow" />

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight animate-fade-in-up delay-100">
              Hi, I'm{" "}
              <span className="gradient-text">Hanin Duwwah</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-muted-foreground animate-fade-in-up delay-200">
              UI/UX Designer
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300">
              Specializing in creating intuitive, user-centered digital experiences. 
              Transforming complex problems into seamless interfaces through research, 
              prototyping, and iterative design.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up delay-400">
              <Button variant="gradient" size="lg" asChild>
                <a href="/Hanin_Duwwah_UIUX_CV.pdf" download>
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up delay-500">
              <a
                href="https://www.linkedin.com/in/hanin-duwwah-211835385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.behance.net/haninduwwah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:rotate-6"
                aria-label="Behance"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hanin_duwwah?igsh=ZGJ1cGthdmkzbnk5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:rotate-6"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CsDTtAMa6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:rotate-6"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
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
                <span className="text-white font-bold text-lg sm:text-3xl leading-none">+2</span>
                <span className="text-white/90 text-[10px] sm:text-base font-semibold">Years</span>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
