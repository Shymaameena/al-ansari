import carousal1 from "@/public/images/carousal/carousel-image1.jpg";
import carousal2 from "@/public/images/carousal/carousel-image2.jpg";
import carousal3 from "@/public/images/carousal/carousel-image3.jpg";
import carousal4 from "@/public/images/carousal/carousel-image4.jpg";
import { StaticImageData } from "next/image";

export const carousalItems: TCarousalItems[] = [
  {
    image: carousal1,
    alt: "",
    carouselText: "Heavy Equipment Maintenance",
    href: "",
  },
  {
    image: carousal2,
    alt: "",
    carouselText: "HEAVY EQUIPMENT RENTAL SERVICES",
    href: "",
  },
  {
    image: carousal3,
    alt: "",
    carouselText: "CERTIFIED HEAVY EQUIPMENT OPERATORS",
    href: "",
  },
  {
    image: carousal4,
    alt: "",
    carouselText: "Heavy Equipment Transportation",
    href: "",
  },
];

type TCarousalItems = {
  image: StaticImageData | string;
  alt: string;
  carouselText: string;
  href: string;
};
