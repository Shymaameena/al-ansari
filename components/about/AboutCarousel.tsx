"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type CarouselItems = {
  imageSrc: string;
  imageAlt: string;
};
const CarouselItems: CarouselItems[] = [
  {
    imageAlt: "",
    imageSrc: "/images/about/carousel/carousal-item-1.jpg",
  },
  {
    imageAlt: "",
    imageSrc: "/images/about/carousel/carousal-item-2.jpg",
  },
  {
    imageAlt: "",
    imageSrc: "/images/about/carousel/carousal-item-3.jpg",
  },
  {
    imageAlt: "",
    imageSrc: "/images/about/carousel/carousal-item-4.jpg",
  },
];
export default function AboutCarousel() {
  return (
    <Carousel
      className=""
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
    >
      <CarouselContent>
        {CarouselItems.map((item, index) => {
          return (
            <CarouselItem key={`${index}-${item.imageSrc}`}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={1920}
                height={1080}
                className="object-cover sm:h-[500px] max-sm:aspect-square"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text- hover:bg-white/20 border-0 transition-all duration-300 hover:scale-110 shadow-lg" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text- hover:bg-white/20 border-0 transition-all duration-300 hover:scale-110 shadow-lg" />
    </Carousel>
  );
}
