"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

export default function BackToTopButton() {
  return (
    <Button
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="absolute bottom-6 right-6 bg-orange-400 hover:bg-orange-500 text-white w-10 h-10 rounded flex items-center justify-center transition-colors"
    >
      <ChevronUp size={20} />
    </Button>
  );
}