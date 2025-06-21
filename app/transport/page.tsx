import ShowCaseComponentWithBannerAndGridImages, { TGridImages } from "@/components/ShowCaseComponentWithBanner";

const TransportImages: TGridImages[] = [
{imageSrc:"/images/transport/Boom_Truck_3_to_15_Ton_Capacity.jpg",description:"",imageAlt:"",title:"Boom Truck"}
,{imageSrc:"/images/transport/Bus_15_29_64_Seater.jpg",description:"",imageAlt:"",title:"Bus"}
,{imageSrc:"/images/transport/Dump_Truck_19_cum_to_32_cum.jpg",description:"",imageAlt:"",title:"Dump Truck"}
,{imageSrc:"/images/transport/Flatbed_trailer_Upto_45_Ton_capacity.jpg",description:"",imageAlt:"",title:"Flatbed Trailer"}
,{imageSrc:"/images/transport/Lowbed_Trailer_Up_to_100_Ton_Capacity.jpg",description:"",imageAlt:"",title:"Lowbed Trailer"}
,{imageSrc:"/images/transport/Recovery_Truck_Up_to_15_Ton.jpg",description:"",imageAlt:"",title:"Recovery Truck"}
,{imageSrc:"/images/transport/Single_and_Double_Cabin_Pickup_3_to_7_Ton.jpg",description:"",imageAlt:"",title:"Single and Double Cabin Picku"}
,{imageSrc:"/images/transport/Water_Tanker_Sewage_Tanker_Up_to_6000_GL.jpg",description:"",imageAlt:"",title:"Water Tanker Sewage Tanker"}
]
export default function page() {
  return (
    <ShowCaseComponentWithBannerAndGridImages
      BannerImageAlt="Transport-Equipment-banner"
      BannerImageSrc="/images/earth-moving/earthbanner.jpg"
      BannerTitle="Transport Equipment "
      Images={TransportImages}
      BannerGradient
      BannerGradientClassName="bg-[#2c1811]/90"
      BannerSectionClassName="bg-transparent"
    />
  )
}
