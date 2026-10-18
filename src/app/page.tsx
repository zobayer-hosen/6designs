import { home } from "@/content/site";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";
import { ExpertiseSlider } from "@/components/home/ExpertiseSlider";
import { PackagesSection } from "@/components/home/PackagesSection";
import { FurnitureSection } from "@/components/home/FurnitureSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  const { hero, contact } = home;

  return (
    <main>
      <Hero
        lines={[
          { text: hero.lines[0], from: "top", className: "md:pl-[9vw]" },
          { text: hero.lines[1], from: "bottom", className: "pl-[6vw] md:pl-[30vw]" },
          { text: hero.lines[2], from: "bottom", className: "pl-[3vw] md:pl-[36vw]" },
        ]}
        headingClassName="text-[11.2vw] md:text-[min(6.6vw,8rem)]"
        copyOffsetClassName="ml-[3vw] md:ml-[36vw]"
        subheading={hero.subheading}
        links={[hero.button]}
        image={hero.image}
      />
      <AboutSection />
      <ExpertiseSlider />
      <PackagesSection />
      <FurnitureSection />
      <ContactSection eyebrow={contact.eyebrow} heading={contact.heading} text={contact.text} />
      <Footer />
    </main>
  );
}
