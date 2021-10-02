import React from "react";

export default function Portfolio() {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="flex flex-col h-full p-8 bg-gray-200 rounded">
            <h2 className="text-3xl font-heading">
              Dunder Friends, a.k.a Companies Who Work With Us
            </h2>
            <p className="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed">
              We don’t believe in paperless future - so do our Customers.
            </p>
            <a className="text-right text-blue-700 hover:underline" href="/">
              View all Dunder Mifflin customers
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 px-4">
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <img
                className="rounded shadow-md"
                src="https://wallpapercave.com/wp/wp3277792.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 p-2">
              <img
                className="rounded shadow-md"
                src="https://i.pinimg.com/originals/13/d6/81/13d681b20058a2d6261432a1b69cd781.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 p-2">
              <img
                className="rounded shadow-md"
                src="https://wallpaperaccess.com/full/1767710.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 p-2">
              <img
                className="rounded shadow-md"
                src="https://wallpapercave.com/wp/wp3277792.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
