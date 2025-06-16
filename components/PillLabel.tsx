import { cn } from "@/lib/utils";

export default function PillLabel({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <p
      className={cn(
        "text-lg text-primary rounded-3xl bg-[#fae6d9] w-fit px-4 font-medium",
        className
      )}
    >
      {label}
    </p>
  );
}
