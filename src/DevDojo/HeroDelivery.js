import React from "react";

export default function HeroDelivery() {
  return (
    <div className="flex min-h-screen">
      <section className="grid grid-cols-3 text-gray-900 bg-green-500 sm:grid-cols-2">
        <div className="z-10 h-full col-span-2 sm:col-span-1 place-self-end">
          <div className="flex items-center w-full h-full">
            <div className="max-w-xs p-4 text-sm text-right sm:max-w-xl sm:p-10 sm:text-base lg:max-w-2xl">
              <h1 className="mb-10 -mr-12 text-2xl font-bold leading-tight text-white sm:-mr-20 sm:text-3xl md:text-4xl lg:text-5xl">
                We Deliver at your
                <br />
                Doorstep.
              </h1>
              <p className="mb-10 lg:pl-32">
                With our award-winning delivery service, our personnel delivers
                food directly to your doorstep. With your safety in mind, all
                deliveries are tracked and recorded.
              </p>
              <a
                href="#"
                className="px-1 pb-1 font-semibold uppercase transition-colors duration-500 border-b-4 border-gray-800 text-md hover:border-green-700 hover:text-white"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="min-h-full">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1559941727-6fb446e7e8ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3936&h=2624&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            alt="Food delivery worker on a bycicle"
          />
        </div>
      </section>
    </div>
  );
}
