import ShowCaseComponentWithBannerAndGridImages, { TGridImages } from "@/components/ShowCaseComponentWithBanner";
const LiftingImages: TGridImages[] = [
{imageSrc:"/images/lifting/25_ton_to_400_ton_Mobile_Crane.jpg",imageAlt:"",description:"",title:"Mobile Crane"}
,{imageSrc:"/images/lifting/Articulated_Manlift_Upto_24M.jpg",imageAlt:"",description:"",title:"Articulated Man lift"}
,{imageSrc:"/images/lifting/Boom_Lift_Up_to_12M.jpg",imageAlt:"",description:"",title:"Boom Lift"}
,{imageSrc:"/images/lifting/Crawler_Crane_Upto_250_Ton_Capacity.jpg",imageAlt:"",description:"",title:"Crawler Crane"}
,{imageSrc:"/images/lifting/Forklift_3_to_15_Ton_Capacity.jpg",imageAlt:"",description:"",title:"Fork lift"}
,{imageSrc:"/images/lifting/Man_Lift_Up_to_52M.jpg",imageAlt:"",description:"",title:"Man Lift Up"}
,{imageSrc:"/images/lifting/Rough_Terrain_Crane_Upto_80_Ton_Capacity.jpg",imageAlt:"",description:"",title:"Rough Terrain Crane"}
,{imageSrc:"/images/lifting/Scissorlift_Upto_24M.jpg",imageAlt:"",description:"",title:"Scissor lift"}
,{imageSrc:"/images/lifting/Telescopic_Forklift_13m_to_17m.jpg",imageAlt:"",description:"",title:"Telescopic Fork lift"}
]
export default function page() {
  return (
    <ShowCaseComponentWithBannerAndGridImages
      BannerImageAlt="lifting-equipment-banner"
      BannerImageSrc="/images/earth-moving/earthbanner.jpg"
      BannerTitle="Lifting Equipment"
      Images={LiftingImages}
      BannerGradient
      BannerGradientClassName="bg-[#2c1811]/90"
      BannerSectionClassName="bg-transparent"
    />
  );
}
