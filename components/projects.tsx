import Bounded from "./bounded";

export default function Projects() {
  return (
    <div className="bg-secondary py-20 text-primary-foreground">
      <Bounded className="flex flex-col md:flex-row gap-10 justify-around font-sans text-center">
        <div className="space-y-5">
            <p className="text-6xl font-semibold">1000+</p>
            <p className="text-2xl font-bold">Successful Projects</p>
        </div>
        <div className="space-y-5">
            <p className="text-6xl font-semibold">40+</p>
            <p className="text-2xl font-bold">Major Clients</p>
        </div>
        <div className="space-y-5">
            <p className="text-6xl font-semibold">10+</p>
            <p className="text-2xl font-bold">Ongoing Projects</p>
        </div>
      </Bounded>
    </div>
  );
}
