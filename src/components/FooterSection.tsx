import { Mail, Phone } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="py-16 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

      <div className="flex flex-col items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:+914422574208" className="underline underline-offset-2">
            +91-44-2257-4208
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:+914422575576" className="underline underline-offset-2">
            +91-44-2257-5576
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href="mailto:ramya_coe@icsrpis.iitm.ac.in" className="underline underline-offset-2">
            ramya_coe@icsrpis.iitm.ac.in
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href="mailto:suzankagan@gmail.com" className="underline underline-offset-2">
            suzankagan@gmail.com
          </a>
        </div>
      </div>

      <p className="text-sm opacity-70 mb-8">
        Subject line: "Smart Water Workshop 2026 – Query"
      </p>

      {/* Partner logos */}
      <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
        <img src="/logo-iitm.png" alt="IIT Madras" className="h-14 object-contain brightness-0 invert opacity-70" />
        <img src="/logo-tau.png" alt="Tel Aviv University" className="h-12 object-contain brightness-0 invert opacity-70" />
        <img src="/logo-kmch.png" alt="KMCH Research Foundation" className="h-12 object-contain brightness-0 invert opacity-70" />
      </div>

      <p className="text-xs opacity-50">
        For updates, bookmark this page. Shortlisted participants will receive all instructions by email.
      </p>
    </div>
  </footer>
);

export default FooterSection;
