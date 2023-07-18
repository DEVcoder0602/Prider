import Image from "next/image";
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

const ProductCard = () => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="max-w-md my-8 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div className="md:flex">
              <div className="md:shrink-0 m-auto">
                <Image
                  className="h-48 w-full object-fill md:h-full md:w-48"
                  src={product} // Use product instead of Logo here
                  alt="Modern building architecture"
                />
              </div>
              {/* <div className="p-8">
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
            </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
