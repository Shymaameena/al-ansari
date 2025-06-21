"use client";

import { cn } from "@/lib/utils";
import React, { useRef} from "react";
// import { useInView } from "react-intersection-observer";

export default function CardDetailsAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
    // const InView = useInView({})
  //   const [isInView, setIsInView] = useState<boolean>(false);
  //   const [scroll, setScroll] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     function handleScroll() {
  //       setScroll(window.scrollY);
  //     }
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  return (
    <div
      ref={ref}
      className={cn(
        "group-hover:opacity-100 -translate-y-full group-hover:translate-y-0 transition-all duration-500 flex ease-in-out opacity-0 bg-secondary/95 w-full absolute top-0 left-0  items-center justify-center h-full flex-col rounded-md"
        // "":isInview
      )}
    >
      {children}
    </div>
  );
}
