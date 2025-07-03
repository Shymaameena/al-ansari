import { StaticImageData } from "next/image";

export const carousalItems: TCarousalItems[] = [
  {
    image: "/images/carousal/carousel-image2.jpg",
    alt: "",
    carouselText: "HEAVY EQUIPMENT RENTAL SERVICES",
    href: "",
  },
  {
    image: "/images/carousal/carousel-image3.jpg",
    alt: "",
    carouselText: "CERTIFIED HEAVY EQUIPMENT OPERATORS",
    href: "",
  },
  {
    image: "/images/carousal/carousel-image4.jpg",
    alt: "",
    carouselText: "Heavy Equipment Transportation",
    href: "",
  },
  {
    image: "/images/carousal/carousel-image1.jpg",
    alt: "",
    carouselText: "Heavy Equipment Maintenance",
    href: "",
  },
];

type TCarousalItems = {
  image: StaticImageData | string;
  alt: string;
  carouselText: string;
  href: string;
};
