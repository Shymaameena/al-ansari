import BannerSection from "@/components/banner-section";
import Bounded from "@/components/bounded";
import PillLabel from "@/components/PillLabel";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {} from "@/public/images/services/Equipmet-rental.jpg";
import {} from "@/public/images/services/heavy-equipment-maintenance.jpg";
import {} from "@/public/images/services/heavy-equipment-operator-supply.jpg";
import {} from "@/public/images/services/heavy-equipment-transportation.jpg";

import {} from "@/public/images/services/hse2.png";
import {} from "@/public/images/services/quality2.png";
import {} from "@/public/images/services/expertise1.png";
import Image from "next/image";
type ServiceProviders = {
  imageSrc: string;
  imageAlt: string;
  label: string;
};
const serviceProviders: ServiceProviders[] = [
  {
    imageSrc: "/images/services/Equipmet-rental.jpg",
    imageAlt: "",
    label: "Heavy Equipment Rental",
  },
  {
    imageSrc: "/images/services/heavy-equipment-maintenance.jpg",
    imageAlt: "",
    label: "Skilled Operator Supply",
  },
  {
    imageSrc: "/images/services/heavy-equipment-operator-supply.jpg",
    imageAlt: "",
    label: "Heavy Equipment Transportation",
  },
  {
    imageSrc: "/images/services/heavy-equipment-transportation.jpg",
    imageAlt: "",
    label: "Heavy Equipment Maintenance",
  },
];

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
    imageSrc: "/images/services/hse2.png",
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
    imageSrc: "/images/services/expertise1.png",
  },
];
export default function services() {
  return (
    <div>
      <BannerSection title="Services" />
      <Bounded>
        <p>
          Since 2004, we have been committed to supplying heavy equipment and
          providing certified operators on a rental basis in Qatar. We cater to
          a wide range of project needs across various sectors, including
          Government projects, Oil & Gas, and energy fields. Our services
          include:
        </p>
        <div className="flex justify-between">
          {serviceProviders.map((item, index) => {
            return (
              <Card
                key={`${index}-${item.imageSrc}`}
                className="w-full py-0 relative"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1080}
                />
                <div className="absolute bottom-0 text-primary-foreground">
                  {item.label}
                </div>
              </Card>
            );
          })}
        </div>
        <PillLabel label=" Why Choose Us?" className="mx-auto" />
        <h1>Learn More What We Do And Get Involved</h1>
        <div className="flex md:flex-row flex-col justify-between">
          {serviceContent.map((item, index) => {
            return (
              <Card
                className="w-full"
                key={`${index}-${item.title}-${item.description}`}
              >
                <CardContent>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-20 w-20 mx-auto "
                    width={1920}
                    height={1080}
                  />
                  <CardTitle>
                    <h3>{item.title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <p>{item.description}</p>
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
