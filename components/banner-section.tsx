import { cn } from "@/lib/utils";
import Image from "next/image";

interface IBannerSection {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  gradient?: boolean;
  gradientClassName?: React.ComponentProps<'div'>['className'];
  className?:string
}
export default function BannerSection({
  title,
  imageAlt,
  imageSrc,
  gradient,
  className,
  gradientClassName,
}: IBannerSection) {
  return (
    <div className="h-max  w-full relative">
      {imageSrc && !gradient && (
        <div className="absolute w-full h-full left-0 top-0 bg-secondary/70" />
      )}
      {imageSrc && !gradient && (
        <div className="absolute w-full h-full left-0 top-0 bg-black/50" />
      )}
      {gradient && gradientClassName && (
        <div
          className={cn(
            "absolute w-full h-full left-0 top-0",
            gradientClassName
          )}
        />
      )}
      <div className="absolute w-full h-full flex items-center justify-center text-white text-6xl font-bold">
        {title}
      </div>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          width={1920}
          height={1080}
          className="w-full h-96 object-cover"
        />
      ) : (
        <div className={cn("w-full h-96 bg-secondary",className)}></div>
      )}
    </div>
  );
}
