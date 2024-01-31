import Image from "next/image";
import Logo from "@/../public/assests/Logo.jpg";
import ProductCard from "../Products/ProductCard";
import Link from "next/link";

const Content = () => {
  return (
    <div>
      <div className="flex flex-row">
        <span className="flex flex-[10_10_0%] flex-row justify-center items-center font-bold text-2xl">
          <Image src={Logo} alt="" style={{ width: "60px", height: "60px" }} />
          Prider Pharmaceuticals by Ram Mohan Sharma
        </span>

        <button className="flex-1">
          <Link href="/invoices">Invoices</Link>
        </button>
      </div>
      <ProductCard />
    </div>
  );
};

export default Content;
