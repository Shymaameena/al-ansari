import Image from "next/image";
import PillLabel from "../PillLabel";
import { Card, CardDescription } from "../ui/card";
type Team = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
};
const team: Team[] = [
  {
    imageSrc: "/images/about/team/Ansari-photo.jpg",
    imageAlt: "",
    name: "Mr. Abdulrahman Abdulla I Al-Ansari",
    role: "Chairman",
  },
  {
    imageSrc: "/images/about/team/abu-photo.jpg",
    imageAlt: "",
    name: "Mr. Abu Kombathayil",
    role: "Founder & Director",
  },
  {
    imageSrc: "/images/about/team/kamal-photo.jpg",
    imageAlt: "",
    role: "CEO",
    name: "Mr. Ahammed Kamal",
  },
  {
    imageSrc: "/images/about/team/shaheen-photo.jpg",
    imageAlt: "",
    role: "Managing Director",
    name: "Mr. Mohammad Shaheen",
  },
];
export default function TeamMembers() {
  return (
    <div className="pb-24">
      <PillLabel label="Team Members" className="mx-auto" />
      <h2 className="mx-auto heading pt-4 pb-12 max-w-[400px] text-center w-fit">
        Let&apos;s Meet Our Management Team
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        {team.map((item, index) => {
          return (
            <Card
              key={`${index}-${item.imageSrc}`}
              className="w-full flex flex-col py-0 group overflow-hidden gap-0 bg-primary-foreground"
            >
              <Image
                src={item.imageSrc}
                alt=""
                height={1080}
                width={1920}
                className="object-cover w-full h-full group-hover:-translate-y-6 transition-transform ease-in-out duration-500"
              />
              <CardDescription className="group-hover:-translate-y-10 z-10  bg-primary-foreground pt-5 transition-all ease-out  duration-500 delay-150">
                <div className="">
                  <h4 className="px-4 text-center w-fit mx-auto heading-sm line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="w-fit mx-auto text-primary text-lg pb-4">
                    {item.role}
                  </p>
                </div>
              </CardDescription>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
