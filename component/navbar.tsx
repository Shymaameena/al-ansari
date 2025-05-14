import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed my-2 rounded-md h-16 bg-white/10 p-2 flex items-center justify-center w-full">
      <div className="flex  text-lg font-semibold gap-8 justify-center ">
        <Link className="hover:text-blue-400 cursor-pointer" href={"/"}>
          HOME
        </Link>
        <Link className="hover:text-blue-400 cursor-pointer" href={"/about"}>
          ABOUT
        </Link>
        <Link className="hover:text-blue-400 cursor-pointer" href={"/contact"}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}
