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
      <Bounded className="grid lg:grid-cols-2 gap-10 py-20">
        <div className="">
          <PillLabel className="" label="Contact Us" />
          <h2 className="text-4xl tracking-wider font-bold pt-4 pb-8">
            If You Have Any Query, Please Contact Us
          </h2>
          <form className="space-y-4">
            <Input className="h-16 bg-input" placeholder="Your name" />
            <Input className="h-16 bg-input" placeholder="Phone number" />
            <Input className="h-16 bg-input" placeholder="Email" />
            <Textarea placeholder="Message" className="h-36 bg-input" />
            <Button className="!px-7" variant={"primary"}>
              Send
            </Button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7004926008904!2d51.5332801!3d25.078138600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db3c2ab0bcd5%3A0x811ea21eb7725684!2sAL%20ANSARI%20TRANSPORT%20%26%20ENTERPRISES%20W.L.L!5e0!3m2!1sen!2sin!4v1750608794152!5m2!1sen!2sin"
          // width="600"
          // height="450"
          className="w-full h-full"
          // style="border:0;"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="h-150 lg:h-full bg-muted-foreground border"></div>
      </Bounded>
    </div>
  );
}
