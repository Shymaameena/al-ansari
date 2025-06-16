import AboutCarousel from "./AboutCarousel";
import AboutHeroAside from "./AboutHeroAside";

export default function AboutHero() {
  return (
    <div className="grid md:grid-cols-2  ">
      <AboutCarousel />
      <AboutHeroAside />
    </div>
  );
}
