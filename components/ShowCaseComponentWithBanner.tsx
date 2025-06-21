import Image from "next/image";
import BannerSection from "./banner-section";
import Bounded from "./bounded";
import CardDetailsAnimationWrapper from "./wrapper/CardDetailsAnimationWrapper";
export type TGridImages = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};
interface IShowCaseComponentWithBannerAndGridImagesProps {
  BannerImageSrc: string;
  BannerImageAlt: string;
  BannerTitle: string;
  BannerGradient?: boolean;
  BannerGradientClassName?: string;
  BannerSectionClassName?: string;
  Images: TGridImages[];
}
export default function ShowCaseComponentWithBannerAndGridImages({
  BannerImageAlt,
  BannerImageSrc,
  BannerTitle,
  BannerGradient,
  Images,
  BannerGradientClassName,
  BannerSectionClassName,
}: IShowCaseComponentWithBannerAndGridImagesProps) {
  return (
    <div className="">
      <BannerSection
        title={BannerTitle}
        gradient={BannerGradient}
        gradientClassName={BannerGradientClassName}
        className={BannerSectionClassName}
        imageSrc={BannerImageSrc}
        imageAlt={BannerImageAlt}
      />
      <div className="bg-card">
        <Bounded className="">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 py-20 gap-5 ">
            {Images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-md"
                >
                  <CardDetailsAnimationWrapper>
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {item.title}
                      </h3>
                      <p className="text-primary">{item.description}</p>
                  </CardDetailsAnimationWrapper>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </Bounded>
      </div>
    </div>
  );
}
