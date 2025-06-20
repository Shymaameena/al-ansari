import ShowCaseComponentWithBannerAndGridImages, {
  TGridImages,
} from "@/components/ShowCaseComponentWithBanner";
const EarthMovingImages: TGridImages[] = [
  {
    imageSrc: "/images/earth-moving/10_Ton_Single-Drum_Roller.jpg",
    imageAlt: "",
    description: "10 TON",
    title: "Single Drum Roller",
  },
  {
    imageSrc: "/images/earth-moving/Backhoe_Loader.jpg",
    imageAlt: "",
    description: "",
    title: "Backhoe Loader",
  },
  {
    imageSrc: "/images/earth-moving/12m_to_22m_Long_Boom_Excavator.jpg",
    imageAlt: "",
    description: "12 M to 22 M",
    title: "Long Boom Excavator",
  },
  {
    imageSrc: "/images/earth-moving/20_Ton_Wheel_Excavator.jpg",
    imageAlt: "",
    description: "",
    title: "Wheel Excavator",
  },
  {
    imageSrc: "/images/earth-moving/3_to_-5_Ton_Double_Drum_Roller.jpg",
    imageAlt: "",
    description: "3 TON to 5 TON",
    title: "Double Drum Roller",
  },
  {
    imageSrc: "/images/earth-moving/Chain_Excavator_Up_to_40_Ton_Capacity.jpg",
    imageAlt: "",
    description: "20 Ton/ 30 Ton/ 42 Ton",
    title: "Chain Excavator",
  },
  {
    imageSrc: "/images/earth-moving/Dozer_D8_D9.jpg",
    imageAlt: "",
    description: "",
    title: "Dozer",
  },
  {
    imageSrc: "/images/earth-moving/Grader_12H_to_14H.jpg",
    imageAlt: "",
    description: "12 H to 14 H",
    title: "Grader",
  },
  {
    imageSrc:
      "/images/earth-moving/Mini_Excavator_2-Ton_3.5_Ton_6_Ton_Capacity.jpg",
    imageAlt: "",
    description: "",
    title: "Mini Excavator",
  },
  {
    imageSrc: "/images/earth-moving/Skid_Loader.jpg",
    imageAlt: "",
    description: "",
    title: "Skid Loader",
  },
  {
    imageSrc: "/images/earth-moving/Wheel_Loader.jpg",
    imageAlt: "",
    description: "",
    title: "Wheel Loader",
  },
];

export default function page() {
  return (
    <ShowCaseComponentWithBannerAndGridImages
      BannerImageAlt="earth-moving-equipment-banner"
      BannerImageSrc="/images/earth-moving/earthbanner.jpg"
      BannerTitle="Earth Moving Equipment"
      Images={EarthMovingImages}
      BannerGradient
      BannerGradientClassName="bg-[#2c1811]/90"
      BannerSectionClassName="bg-transparent"
    />
  );
}
