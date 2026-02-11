import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is this workshop online or in-person?", a: "This is an on-site workshop at IIT Madras (ICSR). Any remote participation, if offered, will be announced on this page." },
  { q: "How are participants selected?", a: "Participants are shortlisted based on the EOI form to ensure the workshop remains hands-on and interactive." },
  { q: "When will I know if I'm selected?", a: "Shortlisted candidates will be informed by email on 03 March 2026." },
  { q: "What does the fee cover?", a: "Workshop access, materials, and food + accommodation for selected participants (details shared via email)." },
  { q: "Will I get a certificate?", a: "Yes, certificates will be distributed during the closing session." },
  { q: "Will the schedule change?", a: "Minor updates are possible depending on speaker availability." },
];

const FAQSection = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible>
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-sm">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
