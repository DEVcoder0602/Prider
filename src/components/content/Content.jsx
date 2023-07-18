import Image from "next/image";
import Logo from "@/../public/assests/Logo.jpg";
import ProductCard from "../Products/ProductCard";

const Content = () => {
  return (
    <div>
      <span className="flex flex-row justify-center items-center font-bold text-2xl">
        <Image
          src={Logo}
          alt=""
          style={{ width: "60px", height: "60px"}}
        />
        Prider Pharmaceuticals by Ram Mohan Sharma
      </span>
      <ProductCard />
    </div>
  );
};

export default Content;
