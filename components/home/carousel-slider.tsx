"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carousalItems } from "@/lib/constants/carousel";
import { ArrowRightCircleIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselSlider() {
  return (
    <Carousel
      className="relative"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
    >
      <CarouselContent className="">
        {carousalItems.map((item, index) => {
          return (
            <CarouselItem className="h-dvh relative text-white " key={index}>
              {/* overlay filter */}
              <div className="absolute inset-0 bg-secondary/40"></div>
              <div className="absolute inset-0 bg-black/50"></div>
              {/* radial gradient */}
              <div className="bg-radial absolute inset-0 from-transparent from-50% to-black to-100%"></div>
              <Image
                src={item.image}
                alt=""
                width={1920}
                height={1080}
                className="object-cover w-full h-full "
              />
              <div className="absolute inset-0 flex  justify-center items-center">
                <div className="flex flex-col justify-center gap-5 sm:gap-10">
                  <p className="font-black !text-2xl sm:!text-4xl md:!text-6xl max-w-[900px] heading text-center px-0 inset-0 w-full capitalize">
                    {item.carouselText}
                  </p>
                  <Button className="rounded-sm sm:py-6  sm:text-lg tracking-wide !px-3 inline-flex items-center sm:gap-2 border-2 border-primary mx-auto">
                    Read More
                    <ArrowRightCircleIcon className="!w-4 !h-4 sm:!w-8 sm:!h-8  fill-primary-foreground rounded-full stroke-primary" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-0 w-20 h-full rounded-none bg-transparent text-white hover:cursor-pointer border-0 hover:bg-transparent"/>
        <CarouselNext className="absolute right-0 w-20 h-full rounded-none bg-transparent text-white hover:cursor-pointer border-0 hover:bg-transparent"/> */}
      <CarouselPrevious className="sm:absolute hidden left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 border-0 transition-all duration-300 hover:scale-110 shadow-lg" />
      <CarouselNext className="sm:absolute hidden right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 border-0 transition-all duration-300 hover:scale-110 shadow-lg" />
    </Carousel>
  );
}
