import { Mail } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="py-16 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <div className="flex items-center justify-center gap-2 mb-3">
        <Mail size={18} />
        <a href="mailto:peopleswaterdata@gmail.com" className="underline underline-offset-2">
          peopleswaterdata@gmail.com
        </a>
      </div>
      <p className="text-sm opacity-70 mb-8">
        Subject line: "Smart Water Workshop 2026 – Query"
      </p>

      {/* Partner logos placeholder */}
      <div className="flex items-center justify-center gap-6 opacity-40 mb-8">
        <div className="w-14 h-14 rounded bg-secondary-foreground/10 flex items-center justify-center text-[9px]">SPARC</div>
        <div className="w-14 h-14 rounded bg-secondary-foreground/10 flex items-center justify-center text-[9px]">IITM</div>
        <div className="w-14 h-14 rounded bg-secondary-foreground/10 flex items-center justify-center text-[9px]">TAU</div>
        <div className="w-14 h-14 rounded bg-secondary-foreground/10 flex items-center justify-center text-[9px]">KMCH</div>
      </div>

      <p className="text-xs opacity-50">
        For updates, bookmark this page. Shortlisted participants will receive all instructions by email.
      </p>
    </div>
  </footer>
);

export default FooterSection;
