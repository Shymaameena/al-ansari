import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function Ideology() {
  return (
    <div className="h-full">
      <h1 className="w-fit mx-auto heading max-w-[450px] text-center pb-16">Moving Your Business Forward</h1>
      <div className="grid md:grid-cols-2 gap-10 pb-20">
        <Card className="pt-0 border-t-4 border-primary border-x-0 border-b-0">
          <CardContent className="">
            <CardTitle className="mx-auto w-fit text-primary-foreground px-3 py-2 rounded-b-lg bg-primary">
              Vision
            </CardTitle>
            <CardDescription className="text-md text-justify pt-4 pb-10">
              Our vision extends beyond mere provision; it is dedicated to
              delivering reliable, value-added services. We aim to set the
              standard for quality, innovation, and customer satisfaction in the
              region, striving to exceed our clients&apos; expectations. We
              envision becoming a trusted industry leader, synonymous with
              integrity, reliability, and exceptional service, thereby
              contributing to the growth and prosperity of our clients.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="pt-0 border-t-4 border-primary border-x-0 border-b-0">
          <CardContent className="">
            <CardTitle className="mx-auto w-fit text-primary-foreground px-3 py-2 rounded-b-lg bg-primary">
              Mission
            </CardTitle>
            <CardDescription className="text-md text-justify pt-4 pb-10">
              Our mission is to lay the foundation for a brighter future,
              solidifying our position as the preferred choice for our clients.
              By adhering rigorously to international standards of quality and
              safety, we continually enhance our service reputation across the
              region. Our primary objective is to emerge as the premier supplier
              of safe, high-quality, and reliable heavy equipment rental
              services for our esteemed customers. We are committed to providing
              cutting-edge technology-equipped heavy equipment, ensuring
              unparalleled efficiency and productivity in both the Construction
              and Industrial sectors.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
