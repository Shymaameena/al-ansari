import PillLabel from "../PillLabel";
import { Card, CardContent, CardDescription } from "../ui/card";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function AboutHeroAside() {
  return (
    <aside className="">
      <PillLabel className="" label="About Us" />
      <h1 className="text-4xl font-bold tracking-wider pt-4 pb-10">
        Delivering Excellence in Equipment Rental
      </h1>
      <Card className="rounded-md border-b-4 border-primary border-x-0 border-t-0">
        <CardContent className="">
          <CardDescription className="text-md text-justify py-4">
            Established in 2004 and headquartered in Doha, Al Ansari Transport &
            Enterprises has earned a reputation for reliability and excellence
            in the heavy equipment rental industry. Under the visionary
            leadership of Mr. Abu Kombathayil, our journey embodies a legacy
            rooted in unwavering commitment, integrity, and a dedication to
            setting unmatched service standards.
          </CardDescription>
        </CardContent>
      </Card>
      <div className="flex pt-10 border gap-4">
        <Button className="rounded-sm py-6 text-lg tracking-wide !px-3 inline-flex gap-2 border-2 border-primary">
          Learn More
          <ArrowRightCircle className="!w-8 !h-8  fill-primary-foreground rounded-full stroke-primary" />
        </Button>
        <Button className="rounded-sm py-6 text-lg tracking-wide !px-3 inline-flex gap-2 bg-primary-foreground text-primary border-2 border-primary hover:text-primary-foreground">
          Contact Us
          <ArrowRightCircle className="!w-8 !h-8  fill-primary rounded-full stroke-primary-foreground" />
        </Button>
      </div>
    </aside>
  );
}
