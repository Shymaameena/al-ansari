import Image from "next/image";

interface IBannerSection {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
}
export default function BannerSection({
  title,
  imageAlt,
  imageSrc,
}: IBannerSection) {
  return (
    <div className="h-max  w-full relative">
      {imageSrc && (
        <div className="absolute w-full h-full left-0 top-0 bg-secondary/70"></div>
      )}
      {imageSrc && (
        <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
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
        <div className="w-full h-96 bg-secondary"></div>
      )}
    </div>
  );
}
