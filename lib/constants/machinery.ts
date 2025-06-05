import Truck from "@/public/images/machinery/dump-truck.jpg";
import EarthMover from "@/public/images/machinery/earth-moving.jpg";
import Lifting from "@/public/images/machinery/lifting-equipment.jpg";
import Power from "@/public/images/machinery/power-e.jpg";
import { StaticImageData } from "next/image";

type TMachineryCards = {
  image: string | StaticImageData;
  alt: string;
  title: string;
  href: string;
};

export const machineryCards: TMachineryCards[] = [
    {alt:'',image:EarthMover,href:'',title:'Earth Moving'},
    {alt:'',image:Lifting,href:'',title:'Lifting Equipment'},
    {alt:'',image:Power,href:'',title:'Power Equipment'},
    {alt:'',image:Truck,href:'',title:'Transport Equipment'},
];
