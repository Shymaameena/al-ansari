import ShowCaseComponentWithBannerAndGridImages, {
  TGridImages,
} from "@/components/ShowCaseComponentWithBanner";

const PowerImages: TGridImages[] = [
  {
    imageSrc: "/images/power-equipment/Compressor_Up_to_1250_CFM.jpg",
    imageAlt: "",
    description: "",
    title: "Compressor",
  },
  {
    imageSrc:
      "/images/power-equipment/Generator_Up_to_1250_KVA_Open_and_Sound_Proof.jpg",
    imageAlt: "",
    description: "",
    title: "Generator",
  },
  {
    imageSrc: "/images/power-equipment/Tower_Light_1000W.jpg",
    imageAlt: "",
    description: "",
    title: "Tower Light",
  },
];
export default function page() {
  return (
    <ShowCaseComponentWithBannerAndGridImages
      BannerImageAlt="Power-Equipment-banner"
      BannerImageSrc="/images/earth-moving/earthbanner.jpg"
      BannerTitle="Power Equipment "
      Images={PowerImages}
      BannerGradient
      BannerGradientClassName="bg-[#2c1811]/90"
      BannerSectionClassName="bg-transparent"
    />
  );
}
