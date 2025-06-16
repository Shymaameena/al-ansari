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
    role: "Director"
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
    <div>
      <PillLabel label=" Team Members" className="mx-auto" />
      <h2 className="mx-auto w-fit">Let&apos;s Meet Our Management Team</h2>
      <div className="flex justify-between">
        {team.map((item, index) => {
          return (
            <Card
              key={`${index}-${item.imageSrc}`}
              className="w-full flex flex-col py-0"
            >
              <Image
                src={item.imageSrc}
                alt=""
                height={1080}
                width={1920}
                className="object-cover w-full h-full "
              />
              <CardDescription>
                <div className="">
                  <h4 className="w-fit mx-auto">{item.name}</h4>
                  <p className="w-fit mx-auto">{item.role}</p>
                </div>
              </CardDescription>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
