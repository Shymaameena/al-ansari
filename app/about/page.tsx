import AboutHero from "@/components/about/AboutHero";
import Ideology from "@/components/about/Ideology";
import TeamMembers from "@/components/about/TeamMembers";
import BannerSection from "@/components/banner-section";
import Bounded from "@/components/bounded";

export default function about() {
  return (
    <div className="">
      <BannerSection
        imageAlt="Machinery"
        imageSrc="/images/about/Equipmet-rental.jpg"
        title="About Us"
      />
      <Bounded className="">
        <AboutHero />
        <Ideology />
        <TeamMembers />
      </Bounded>
    </div>
  );
}
