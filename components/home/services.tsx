import Bounded from "../bounded";
import MachineryCards from "./machinery-cards";

export default function Services() {
  return (
    <Bounded className="flex flex-col py-24">
      <div className="">
        <p className="text-lg text-primary rounded-3xl bg-[#fff0e6] mx-auto w-fit px-4 font-medium ">
          Fleets on Rental
        </p>
        <h1 className="w-fit mx-auto text-center font-saira font-bold text-[38px] max-w-[475px] leading-12 pt-3 pb-7">
          Our fleet includes equipment from top global manufacturers
        </h1>
        <MachineryCards />
      </div>
    </Bounded>
  );
}
