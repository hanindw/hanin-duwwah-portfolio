import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hanindowah@gmail.com",
    href: "mailto:hanindowah@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+963 993 544 123",
    href: "tel:+963993544123",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Damascus, Syria",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hanin-duwwah-211835385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: () => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
      </svg>
    ),
    label: "Behance",
    href: "https://www.behance.net/haninduwwah",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/hanin_duwwah?igsh=ZGJ1cGthdmkzbnk5",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1CsDTtAMa6/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 wave-bg opacity-50" />

      <div className="container relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always open to discussing new opportunities 
            and creative challenges.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ScrollReveal
                  key={item.label}
                  animation="fade-right"
                  delay={index * 100}
                >
                  <div className="glass-card rounded-2xl p-5 hover-lift card-animate flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6">
              <ScrollReveal animation="fade-left" delay={100}>
                <div className="glass-card rounded-2xl p-6 card-animate">
                  <h3 className="font-semibold mb-4">Connect with me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:rotate-2 group"
                      >
                        <link.icon className="h-6 w-6" />
                        <span className="text-xs font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="zoom-in" delay={200}>
                <div className="glass-card rounded-2xl p-6 card-animate bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                    <h3 className="font-semibold">Let's Create Magic Together</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Transform your vision into stunning digital experiences. Download my CV to explore the full story.
                  </p>
                  <Button variant="gradient" className="w-full group" asChild>
                    <a href="/Hanin_Duwwah_UIUX_CV.pdf" download>
                      <Download className="h-4 w-4 group-hover:animate-bounce" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
