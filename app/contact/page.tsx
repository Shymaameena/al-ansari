import BannerSection from "@/components/banner-section";
import Bounded from "@/components/bounded";
import PillLabel from "@/components/PillLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function contact() {
  return (
    <div className="">
      <BannerSection title="Contact Us" />
      <Bounded className="grid md:grid-cols-2 gap-2">
        <div className="">
          <PillLabel className="" label="Contact Us" />
          <h2 className="">If You Have Any Query, Please Contact Us</h2>
          <Input placeholder="Your name" />
          <Input placeholder="Phone number" />
          <Input placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button>Send</Button>
        </div>
        <div className="h-full bg-muted-foreground border"></div>
      </Bounded>
    </div>
  );
}
