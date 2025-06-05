import imageOne from "@/public/images/logo/1.png";
import aktorLogo from "@/public/images/logo/aktor-logo.jpg";
import albalaghLogo from "@/public/images/logo/albalagh-logo.jpg";
import cccLogo from "@/public/images/logo/ccc-logo.jpg";
import daewooLogo from "@/public/images/logo/daewoo-logo.jpg";
import dopetLogo from "@/public/images/logo/dopet-logo.jpg";
import elecoLogo from "@/public/images/logo/eleco-logo.jpg";
import gacLogo from "@/public/images/logo/gac-logo.jpg";
import galfarLogo from "@/public/images/logo/galfar-logo.jpg";
import hbkLogo from "@/public/images/logo/hbk-logo.jpg";
import hyundaiLogo from "@/public/images/logo/hyundai-logo.jpg";
import incoLogo from "@/public/images/logo/inco-logo.jpg";
import medgulfLogo from "@/public/images/logo/medgulf-logo.jpg";
import midmacLogo from "@/public/images/logo/midmac-logo.jpg";
import milahaLogo from "@/public/images/logo/milaha-logo.jpg";
import qdvcLogo from "@/public/images/logo/qdvc-logo.jpg";
import qeLogo from "@/public/images/logo/qe-logo.jpg";
import qrailLogo from "@/public/images/logo/qrail-logo.jpg";
import samsungLogo from "@/public/images/logo/samsung-logo.jpg";
import tragsLogo from "@/public/images/logo/trags-logo.jpg";
import woqodLogo from "@/public/images/logo/woqod-logo.jpg";
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

export const clients: TClients[] = clientLogos.map((item, i) => {
  return { image: item, alt: "CLient Logo" };
});
