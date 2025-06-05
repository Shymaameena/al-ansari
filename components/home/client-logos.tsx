"use client";

import { clients } from "@/lib/constants/clinets";
import Bounded from "../bounded";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientLogos() {
  return (
    <div className="bg-primary-foreground py-24">
      <Bounded className="">
        <h2 className="mx-auto w-fit text-4xl font-bold mb-16">Our Clients</h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Repeat logos twice for seamless loop */}
            {[...Array(2)].map((_, repeatIndex) => (
              <div className="flex gap-10" key={repeatIndex}>
                {clients.map((item, index) => (
                  <div
                    className="min-w-[150px] h-full flex items-center justify-center"
                    key={`${repeatIndex}-${index}-${item.image}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-36 h-24 object-contain"
                      width={720}
                      height={480}
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        {/* <div className="overflow-x-auto  space-x-5 flex whitespace-nowrap">
              {clients.map((item, index) => {
                return (
                  <div
                    className="min-w-[150px] h-full flex items-center justify-center"
                    key={`${index}-${item.image}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-36 h-24 object-contain "
                      width={720}
                      height={480}
                    />
                  </div>
                );
              })}
            </div> */}
      </Bounded>
    </div>
  );
}

// function TestAnimation() {
//   return (
//     <div className="my-36">
//       <Bounded className="relative border h-24 overflow-hidden">
//         <div className="absolute border h-full w-36 bg-primary delay-[calc(3s/3*(3-1)*-1)] left-full animate-scroll">
//           hey
//         </div>
//         <div className="absolute border h-full w-36 bg-primary delay-[calc(3s/3*(3-2)*-1)] left-full animate-scroll">
//           hey
//         </div>
//         <div className="absolute border h-full w-36 bg-primary delay-[calc(3s/3*(3-3)*-1)] left-full animate-scroll">
//           hey
//         </div>
//       </Bounded>
//     </div>
//   );
// }
