import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carousalItems } from "@/lib/constants/carousel";

export default function CarouselSlider() {
  return (
    <Carousel className="relative" opts={{ loop: true }}>
      <CarouselContent>
        {carousalItems.map((item, index) => {
          return (
            <CarouselItem className="h-screen relative text-white" key={index}>
              <div className="absolute inset-0 bg-secondary/70">
                <div className="absolute inset-0 bg-black/50"></div>
              </div>{" "}
              <Image
                src={item.image}
                alt=""
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex  justify-center items-center">
                <div className="flex flex-col justify-center gap-10  ">
                  <p className="font-black text-6xl  max-w-2xl text-center px-0 inset-0 w-full capitalize">
                    {item.carouselText}
                  </p>
                  <Button className="w-fit mx-auto">
                    Read More
                    <BiRightArrow />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-0 w-20 h-full rounded-none bg-transparent text-white hover:cursor-pointer border-0 hover:bg-transparent"/>
        <CarouselNext className="absolute right-0 w-20 h-full rounded-none bg-transparent text-white hover:cursor-pointer border-0 hover:bg-transparent"/> */}
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 border-0 transition-all duration-300 hover:scale-110 shadow-lg" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 border-0 transition-all duration-300 hover:scale-110 shadow-lg" />
    </Carousel>
  );
}
