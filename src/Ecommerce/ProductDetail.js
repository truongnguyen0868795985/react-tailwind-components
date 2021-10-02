import React from "react";
import { FaChevronRight, FaHeart, FaStar } from "react-icons/fa";

export default function ProductDetail() {
  return (
    <article className="py-6">
      {/* Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <a href="/" className="hover:underline hover:text-gray-600">
            Home
          </a>

          <FaChevronRight className="h-5 w-5 leading-none text-gray-300" />

          <a href="/" className="hover:underline hover:text-gray-600">
            Products
          </a>

          <FaChevronRight className="h-5 w-5 leading-none text-gray-300" />

          <span>Cakes #1</span>
        </div>
      </section>
      {/* Breadcrumbs */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <article className="flex flex-col md:flex-row -mx-4">
          <section className="md:flex-1 px-4">
            <div>
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-5xl">1</span>
                </div>

                {/* <div className="hidden h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-5xl">2</span>
                </div>

                <div className="hidden h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-5xl">3</span>
                </div>

                <div className="hidden h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-5xl">4</span>
                </div> */}
              </div>

              <div className="flex -mx-2 mb-4">
                <div className="flex-1 px-2">
                  <button className="ring-2 ring-indigo-300 ring-inset focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl">aaaa</span>
                  </button>
                </div>
                {/* </template> */}
              </div>
            </div>
          </section>

          {/* isi product details */}
          <section className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              Contoh Judul atau Nama Product
            </h2>

            <p className="text-gray-500 text-sm">
              By{" "}
              <a href="/" className="text-indigo-600 hover:underline">
                ABC Company
              </a>
            </p>

            <div className="flex items-center space-x-1">
              <FaStar className="h-14 text-yellow-500" />
              <FaStar className="h-14 text-yellow-500" />
              <FaStar className="h-14 text-yellow-500" />
              <FaStar className="h-14 text-yellow-500" />
              <FaStar className="h-14 text-yellow-500" />
              <span className="pl-4 text-xs uppercase text-gray-400 tracking-wide font-semibold">
                147 reviews
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">Rp</span>
                  <span className="font-bold text-indigo-600 text-3xl line-through mr-2">
                    30.000
                  </span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    27.000
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">
                  Discount 10%
                </p>
                <p className="text-gray-400 text-sm">
                  Promo eksklusif hanya di bulan ramadhan.
                </p>
              </div>
            </div>

            <div className="flex items-center my-3">
              <label className="flex items-center mr-3">
                <span className=" text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  Quantity:
                </span>
                <select className="focus:outline-none focus:ring focus:border-indigo-300 cursor-pointer appearance-none rounded-xl border border-gray-200 ml-2 pl-4 pr-4 h-15">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </label>

              <span className="text-xs text-black tracking-wide font-bold">
                In stock ~ ready to ship
              </span>
            </div>

            <p className="text-gray-500">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>

            <div className="flex items-center py-4 space-x-4">
              <button className="h-10 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-400 text-white">
                Add to Cart
              </button>

              <div className="flex items-center cursor-pointer h-10 p-3 rounded-xl border-gray-200 border">
                <FaHeart className="h-14 text-gray-400 mr-2" />
                <span className="focus:outline-none focus:ring text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  Add to Wishlist
                </span>
              </div>
            </div>
          </section>
        </article>
      </section>
    </article>
  );
}
