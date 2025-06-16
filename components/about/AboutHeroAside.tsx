import PillLabel from "../PillLabel";
import { Card, CardContent, CardDescription } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
export default function AboutHeroAside() {
  return (
    <aside className="">
      <PillLabel className="" label="About Us" />
      <h1>Delivering Excellence in Equipment Rental</h1>
      <Card>
        <CardContent>
          <CardDescription>
            Established in 2004 and headquartered in Doha, Al Ansari Transport &
            Enterprises has earned a reputation for reliability and excellence
            in the heavy equipment rental industry. Under the visionary
            leadership of Mr. Abu Kombathayil, our journey embodies a legacy
            rooted in unwavering commitment, integrity, and a dedication to
            setting unmatched service standards.
          </CardDescription>
        </CardContent>
      </Card>
      <div className="flex">
        <Button>
          Learn More <ArrowRight className="border" />
        </Button>
        <Button>
          Contact Us <ArrowRight />
        </Button>
      </div>
    </aside>
  );
}
