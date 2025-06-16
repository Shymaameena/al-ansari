import Bounded from "../bounded";
import PillLabel from "../PillLabel";
import MachineryCards from "./machinery-cards";

export default function Services() {
  return (
    <Bounded className="flex md:flex-col py-24 justify-center">
      <div className="">
        <PillLabel label="Fleets on Rental" className="mx-auto" />
        <h1 className="w-fit mx-auto text-center font-saira font-bold text-[38px] max-w-[475px] leading-12 pt-3 pb-7">
          Our fleet includes equipment from top global manufacturers
        </h1>
        <MachineryCards />
      </div>
    </Bounded>
  );
}
