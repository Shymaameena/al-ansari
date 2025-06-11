import AboutBanner from "@/public/images/about/Equipmet-rental.jpg";
import Image from "next/image";

export default function about() {
  return (
    <div className=" h-screen ">
      <div className="h-max  w-full relative">
        <div className="absolute w-full h-full left-0 top-0 bg-secondary/70"></div>
        <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
        <div className="absolute w-full h-full flex items-center justify-center text-white text-6xl font-bold">
          About Us
        </div>
        <Image
          src={AboutBanner}
          alt="About banner"
          width={1920}
          height={1080}
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
}
