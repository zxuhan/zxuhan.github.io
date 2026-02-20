import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="border-t border-border px-6 py-20 sm:px-12 lg:px-32">
    <p className="font-mono text-2xl uppercase tracking-[0.3em] text-primary">Contact</p>
    <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
      Always open to connections and opportunities. Feel free to reach out.
    </p>
    <div className="mt-6 flex gap-5">
      <a href="mailto:zxuhan7@gmail.com" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
        <Mail className="h-5 w-5" />
      </a>
      <a href="https://linkedin.com/in/xuhan-zhuang" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href="https://github.com/zxuhan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
        <Github className="h-5 w-5" />
      </a>
    </div>
    <p className="mt-12 font-mono text-base text-muted-foreground">
      © {new Date().getFullYear()} Xuhan Zhuang. Built with passion.
    </p>
  </section>
);

export default ContactSection;
