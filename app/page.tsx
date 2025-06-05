import CarouselSlider from "@/components/home/carousel-slider";
import ClientLogos from "@/components/home/client-logos";
import Services from "@/components/home/services";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="">
      <CarouselSlider />
      <Services />
      <Projects/>
      <ClientLogos/>
    </div>
  );
}
