import Image from "next/image";
import Link from "next/link";
import Bromenz from "@/../public/assests/Bromenz.jpg";
import Foldec from "@/../public/assests/FOLDEC-Z.jpg";
import Levoment from "@/../public/assests/Levoment.jpg";
import Mnerve from "@/../public/assests/M-NERVE.jpg";
import Mplex from "@/../public/assests/M-Plex.jpg";
import Mcal from "@/../public/assests/Mcal-CT.jpg";
import Mpan from "@/../public/assests/Mpan-D.jpg";
import Podoxid from "@/../public/assests/Podoxid-100, 200.jpg";
import Prizone from "@/../public/assests/Pri-ZoneS.jpg";
import Telmetrio from "@/../public/assests/TELMITRIO-H.jpg";
import Prizyme from "@/../public/assests/Pri-Zyme.jpg";

const products = [
  Bromenz,
  Foldec,
  Levoment,
  Mnerve,
  Prizyme,
  Mplex,
  Mcal,
  Mpan,
  Podoxid,
  Prizone,
  Telmetrio,
];

const productNames = [
  "Bromenz",
  "Foldec",
  "Levoment",
  "M-NERVE",
  "Prizyme",
  "M-Plex",
  "Mcal-CT",
  "Mpan-D",
  "Podoxid-100, 200",
  "Pri-ZoneS",
  "TELMITRIO-H",
];

const itemsArray = products.map((product, index) => {
  return (
    <div key={index} className="w-4/5 h-4/5 my-8 bg-white shadow-xl">
      <Link href={product.src} passHref target="_blank">
        <Image
          className="h-full w-full object-fill"
          src={product}
          alt={productNames[index]}
        />
      </Link>
    </div>
  );
});

const ProductCard = () => {
  return (
    <>
      {/* {products.map((product, index) => {
        return (
          <div
            key={index}
            className="max-w-md my-8 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <Link href={product.src} passHref target="_blank">
              <div className="md:flex">
                <div className="md:shrink-0 m-auto">
                  <Image
                    className="h-48 w-full object-fill md:h-full md:w-48"
                    src={product} 
                    alt={productNames[index]}
                  />
                </div>
                <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                Incredible accommodation for your team
                </a>
                <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome food
                and take in some sunshine? We have a list of places to do just that.
                </p>
              </div>
              </div>
            </Link>
          </div>
        );
      })} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {itemsArray}
      </div>
    </>
  );
};

export default ProductCard;
