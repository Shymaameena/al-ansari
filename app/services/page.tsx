import BannerSection from "@/components/banner-section";
import Bounded from "@/components/bounded";
import PillLabel from "@/components/PillLabel";
import ServiceCards from "@/components/services/service-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type ServiceContent = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};
const serviceContent: ServiceContent[] = [
  {
    title: "Proven Expertise and Experience",
    description:
      "With over two decades of industry experience, we understand the unique needs of various sectors, including government projects, Oil & Gas, and energy fields. Our expertise ensures tailored solutions that meet your specific project requirements. ",
    imageAlt: "",
    imageSrc: "/images/services/expertise1.png",
  },
  {
    title: "High-Quality Fleet and Certified Operators",
    description:
      "Our extensive fleet of well-maintained, cutting-edge equipment is complemented by certified, highly trained operators. This combination ensures optimal performance, safety, and efficiency for your projects.",
    imageAlt: "",
    imageSrc: "/images/services/quality2.png",
  },
  {
    title: "Commitment to Safety and Quality",
    description:
      "We adhere to international standards of safety and quality, ensuring that all operations are conducted with the highest levels of care and diligence. Our commitment to excellence guarantees reliable and top-tier service for all your heavy equipment needs. ",
    imageAlt: "",
    imageSrc: "/images/services/hse2.png",
  },
];

export default function services() {
  return (
    <div>
      <BannerSection title="Services" />
      <Bounded className="py-16">
        <p className="text-muted-foreground font-semibold font-sans text-lg tracking-wider px-5">
          Since 2004, we have been committed to supplying heavy equipment and
          providing certified operators on a rental basis in Qatar. We cater to
          a wide range of project needs across various sectors, including
          Government projects, Oil & Gas, and energy fields. Our services
          include:
        </p>
        <ServiceCards />

        <PillLabel label=" Why Choose Us?" className="mx-auto" />
        <h1 className="heading text-center w-fit mx-auto  max-w-[500px] pt-4 pb-14">
          Learn More What We Do And Get Involved
        </h1>
        <div className="flex md:flex-row flex-col justify-between gap-6">
          {serviceContent.map((item, index) => {
            return (
              <Card
                className="w-full rounded-md py-16"
                key={`${index}-${item.title}-${item.description}`}
              >
                <CardContent className="px-14">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-28 w-28 object-cover mx-auto"
                    width={1920}
                    height={1080}
                  />
                  <CardTitle className="w-fit mx-auto py-3">
                    <h3 className="text-secondary text-2xl font-sans max-w-[280px] tracking-wide font-semibold text-center line-clamp-2">
                      {item.title}
                    </h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="line-clamp-[8] text-center font-sans text-[16px] ">
                      {item.description}
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Bounded>
    </div>
  );
}
