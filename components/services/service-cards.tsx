import Image from "next/image";
import { Card } from "../ui/card";

type ServiceProviders = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  description: string;
};

const serviceProviders: ServiceProviders[] = [
  {
    imageSrc: "/images/services/Equipmet-rental.jpg",
    imageAlt: "",
    label: "Heavy Equipment Rental",
    description:
      "We offer an extensive fleet of heavy equipment for rent, including Earth Moving, Lifting, Power, and Transport Equipment. ",
  },
  {
    imageSrc: "/images/services/heavy-equipment-operator-supply.jpg",
    imageAlt: "",
    label: "Skilled Operator Supply",
    description:
      "Our certified and experienced operators are proficient in a diverse range of heavy machinery.",
  },
  {
    imageSrc: "/images/services/heavy-equipment-maintenance.jpg",
    imageAlt: "",
    label: "Heavy Equipment Maintenance",
    description:
      "We provide comprehensive service solutions tailored to meet all equipment needs, ensuring reliability and performance excellence.",
  },
  {
    imageSrc: "/images/services/heavy-equipment-transportation.jpg",
    imageAlt: "",
    label: "Heavy Equipment Transportation",
    description:
      "Our transport services are designed to handle the safe and efficient movement of machinery to and from your project sites.",
  },
];

export default function ServiceCards() {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-4 py-8 pb-20">
      {serviceProviders.map((item, index) => {
        return (
          <div
            key={`${index}-${item.imageSrc}`}
            className="group w-full h-[350px]"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-full transition-transform duration-800 ease-in-out group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <Card
                className="absolute w-full h-[350px] py-0"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover rounded-lg"
                  width={1920}
                  height={1080}
                />
                <p className="absolute bottom-0 text-primary-foreground text-center w-full font-semibold text-2xl py-2 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                  {item.label}
                </p>
              </Card>

              {/* Back Face */}
              <Card
                className="absolute w-full h-[350px] py-20 px-3 border-0 rounded-md shadow-none bg-secondary text-primary-foreground font-sans"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h2 className="text-2xl px-3 font-semibold text-center">
                  {item.label}
                </h2>
                <p className="text-center">{item.description}</p>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}
