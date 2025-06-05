import imageOne from "@/public/images/icon/1.png";
import aktorLogo from "@/public/images/icon/aktor-logo.jpg";
import albalaghLogo from "@/public/images/icon/albalagh-logo.jpg";
import cccLogo from "@/public/images/icon/ccc-logo.jpg";
import daewooLogo from "@/public/images/icon/daewoo-logo.jpg";
import dopetLogo from "@/public/images/icon/dopet-logo.jpg";
import elecoLogo from "@/public/images/icon/eleco-logo.jpg";
import gacLogo from "@/public/images/icon/gac-logo.jpg";
import galfarLogo from "@/public/images/icon/galfar-logo.jpg";
import hbkLogo from "@/public/images/icon/hbk-logo.jpg";
import hyundaiLogo from "@/public/images/icon/hyundai-logo.jpg";
import incoLogo from "@/public/images/icon/inco-logo.jpg";
import medgulfLogo from "@/public/images/icon/medgulf-logo.jpg";
import midmacLogo from "@/public/images/icon/midmac-logo.jpg";
import milahaLogo from "@/public/images/icon/milaha-logo.jpg";
import qdvcLogo from "@/public/images/icon/qdvc-logo.jpg";
import qeLogo from "@/public/images/icon/qe-logo.jpg";
import qrailLogo from "@/public/images/icon/qrail-logo.jpg";
import samsungLogo from "@/public/images/icon/samsung-logo.jpg";
import tragsLogo from "@/public/images/icon/trags-logo.jpg";
import woqodLogo from "@/public/images/icon/woqod-logo.jpg";
import { StaticImageData } from "next/image";

type TClients = {
  image: string | StaticImageData;
  alt: string;
};

const clientLogos = [
  imageOne,
  aktorLogo,
  albalaghLogo,
  cccLogo,
  daewooLogo,
  dopetLogo,
  elecoLogo,
  gacLogo,
  galfarLogo,
  hbkLogo,
  hyundaiLogo,
  incoLogo,
  medgulfLogo,
  midmacLogo,
  milahaLogo,
  qdvcLogo,
  qeLogo,
  qrailLogo,
  samsungLogo,
  tragsLogo,
  woqodLogo,
];

export const clients: TClients[] = clientLogos.map((item) => {
  return { image: item, alt: "CLient Logo" };
});
