import React from "react";
import { HiShieldCheck } from "react-icons/hi";
import { FaWrench, FaShoppingCart } from "react-icons/fa";

export default function SimpleFeature() {
  return (
    <section className="py-8 px-4">
      <div className="flex flex-wrap -mx-4 -mb-6">
        <div className="lg:w-1/3 px-4 mb-6">
          <HiShieldCheck className="text-3xl" />
          <h3 className="text-xl my-2 font-heading">High durability</h3>
          <p className="text-gray-500 leading-relaxed">
            Forget about paper jams with our increased stability product. Ideal
            for high-quality printing, colour printing and photocopying.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <FaWrench className="text-3xl" />
          <h3 className="text-xl my-2 font-heading">Versatility</h3>
          <p className="text-gray-500 leading-relaxed">
            Multi-functional paper for various office needs. Snow-white sheets
            will shine bright like diamond for many years.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <FaShoppingCart className="text-3xl" />
          <h3 className="text-xl my-2 font-heading">Value-based price</h3>
          <p className="text-gray-500 leading-relaxed">
            The best combination of quality and economy comes with Dunder
            Mifflin paper. The offer includes paper in wide range of density and
            sizes.
          </p>
        </div>
      </div>
    </section>
  );
}
