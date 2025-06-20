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
      <Bounded className="grid md:grid-cols-2 gap-10 py-20">
        <div className="">
          <PillLabel className="" label="Contact Us" />
          <h2 className="text-4xl tracking-wider font-bold pt-4 pb-8">
            If You Have Any Query, Please Contact Us
          </h2>
          <form className="space-y-4">
            <Input className="h-16 bg-input" placeholder="Your name" />
            <Input className="h-16 bg-input" placeholder="Phone number" />
            <Input className="h-16 bg-input" placeholder="Email" />
            <Textarea placeholder="Message" className="h-36 bg-input"/>
            <Button>Send</Button>
          </form>
        </div>
        <div className="h-full bg-muted-foreground border"></div>
      </Bounded>
    </div>
  );
}
