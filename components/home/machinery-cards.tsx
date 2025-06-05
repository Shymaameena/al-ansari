import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import { machineryCards } from "@/lib/constants/machinery";
import { ArrowRight } from "lucide-react";

export default function MachineryCards() {
  return (
    <div className="flex gap-3 md:flex-row flex-col">
      {machineryCards.map(({ alt, image, title }, index) => {
        return (
          <Card
            key={`${index}`}
            className="flex flex-col w-full max-w-[420px] gap-0 py-2 rounded-none "
          >
            <CardTitle className="text-2xl font-extrabold text-center text-secondary">
              {title}
            </CardTitle>
            <div className="">
              <Image
                src={image}
                alt={alt}
                width={1920}
                height={1080}
                className="w-full h-full aspect-square object-contain "
              />
            </div>
            <div className="flex justify-end px-5">
              <ArrowRight
                className="bg-primary rounded-full stroke-[4px] stroke-white p-2"
                size={40}
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
