import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import resume from "../assets/resume.pdf";

const Hero = () => (
  <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden" id="hero">
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-3xl mx-auto px-6 py-24 w-full text-center">
      <div className="space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-muted-foreground">
            Open to ERP consulting & integration projects
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground text-lg md:text-xl">
            Hey, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Romeo Jr{" "}
            <span className="text-accent">Bardillon</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ERP Consultant & Integration Engineer building{" "}
            <span className="text-foreground font-medium">
              scalable enterprise integrations
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              backend systems
            </span>{" "}
            on the Infor M3 platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button size="lg" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <div className="h-px w-16 bg-border" />
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/romeo-jr-b-45bb0012a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rmbardillon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
          <div className="h-px w-16 bg-border" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
