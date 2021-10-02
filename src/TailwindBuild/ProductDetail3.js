import React from "react";

export default function ProductDetail3() {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap -mx-8">
        <div className="lg:w-1/2 px-8 mt-6 lg:mt-0 order-2 lg:order-none">
          <h2 className="text-4xl mb-2 font-heading">
            All Purpose Paper 80gsm - 500 sheets - 10 Reams
          </h2>
          <p className="mb-6">$9,99 (Ex. Tax)</p>
          <div className="flex mb-6">
            <ul className="flex list-reset">
              <li>
                <a
                  className="block py-2 px-3 mr-2 bg-gray-200 rounded"
                  href="/"
                >
                  Product Details
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 mr-2 hover:bg-gray-200 rounded"
                  href="/"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 mr-2 hover:bg-gray-200 rounded"
                  href="/"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-8 text-gray-500 leading-relaxed">
            Premium quality home and office paper for all printing and copying
            machines. It is a flexible paper capable of switching from one
            machine to another with great print results.
          </p>
          <table className="w-full mb-6">
            <tbody>
              <tr className="border-t">
                <td className="py-3">Sheets of paper per ream</td>
                <td className="text-right">500</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">Reams per box</td>
                <td className="text-right">5</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">Basis weight</td>
                <td className="text-right">80mg</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">Basis height</td>
                <td className="text-right">100mm</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">Colors</td>
                <td className="text-right">Red, Blue, Yellow</td>
              </tr>
            </tbody>
          </table>
          <button className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded">
            Buy Now!
          </button>
        </div>
        <div className="lg:w-1/2 px-8">
          <img
            className="mb-4 rounded shadow-md"
            src="https://assetscdn1.paytm.com/images/catalog/product/S/ST/STAMULTICOLOR-BVARD348061C672B2D5/1563560123444_0..jpg"
            alt=""
          />
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/3 px-2">
              <img
                className="rounded shadow-md"
                src="https://assetscdn1.paytm.com/images/catalog/product/S/ST/STAMULTICOLOR-BVARD348061C672B2D5/1563560123444_0..jpg"
                alt=""
              />
            </div>
            <div className="w-1/3 px-2">
              <img
                className="rounded shadow-md"
                src="https://assetscdn1.paytm.com/images/catalog/product/S/ST/STAMULTICOLOR-BVARD348061C672B2D5/1563560123444_0..jpg"
                alt=""
              />
            </div>
            <div className="w-1/3 px-2">
              <img
                className="rounded shadow-md"
                src="https://assetscdn1.paytm.com/images/catalog/product/S/ST/STAMULTICOLOR-BVARD348061C672B2D5/1563560123444_0..jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
