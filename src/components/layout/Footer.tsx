import { Mail, Phone, MapPin, Heart, Linkedin, Github } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const BehanceIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hanin-duwwah-211835385",
    label: "LinkedIn",
  },
  {
    icon: BehanceIcon,
    href: "https://www.behance.net/haninduwwah43",
    label: "Behance",
  },
  {
    icon: Github,
    href: "https://github.com/hanindw",
    label: "GitHub",
  },
];

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-accent/5 rounded-full blur-xl" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & About */}
          <div className="space-y-5">
            <a
              href="#home"
              className="text-2xl font-display font-bold gradient-text inline-block"
            >
              Hanin Duwwah
            </a>
            <p className="text-muted-foreground leading-relaxed">
              UI/UX Designer passionate about creating beautiful, functional,
              and user-friendly digital experiences through research-driven
              design.
            </p>

            {/* Social icons — same style as Hero */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="w-11 h-11 rounded-full bg-muted/50 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Damascus, Syria</span>
              </div>
              <a
                href="tel:+963993544123"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+963 993 544 123</span>
              </a>
              <a
                href="mailto:hanindowah@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>hanindowah@gmail.com</span>
              </a>
            </div>

            {/* Available status */}
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar — creative closing */}
        <div className="mt-14 pt-8 border-t border-border/50">
          <div className="relative flex flex-col items-center gap-4 text-center">
            {/* Decorative gradient line */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-foreground">
                Eng. Hanin Duwwah
              </span>
            </p>

            {/* Creative tagline */}
            <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-1.5 max-w-md leading-relaxed">
              <span>Crafted with</span>
              <Heart className="h-3.5 w-3.5 text-pink-500 fill-pink-500 animate-pulse shrink-0" />
              <span>&amp; a passion for detail</span>
              <span className="hidden sm:inline text-primary/60">•</span>
              <span className="gradient-text font-medium">
                Turning ideas into pixel-perfect experiences
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}