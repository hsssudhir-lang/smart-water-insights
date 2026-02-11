import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickFacts from "@/components/QuickFacts";
import AboutSection from "@/components/AboutSection";
import WhyAttend from "@/components/WhyAttend";
import SpeakersSection from "@/components/SpeakersSection";
import WhoShouldApply from "@/components/WhoShouldApply";
import ImportantDates from "@/components/ImportantDates";
import FeesSection from "@/components/FeesSection";
import HowToApply from "@/components/HowToApply";
import VenueSection from "@/components/VenueSection";
import PrerequisitesSection from "@/components/PrerequisitesSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <QuickFacts />
      <AboutSection />
      <WhyAttend />
      <SpeakersSection />
      <WhoShouldApply />
      <ImportantDates />
      <FeesSection />
      <HowToApply />
      <VenueSection />
      <PrerequisitesSection />
      <FAQSection />
      <FooterSection />
    </main>
  </>
);

export default Index;
