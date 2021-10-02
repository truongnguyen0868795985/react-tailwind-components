import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function FeatureShowcase() {
  return (
    <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
      <div className="container px-10 mx-auto sm:px-5">
        <div className="w-full lg:flex">
          <div className="w-full lg:w-1/2 xl:w-2/3">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <img
                src="https://picsum.photos/300/300?grayscale&random=1"
                alt=""
              />
              <img
                src="https://picsum.photos/300/300?grayscale&random=2"
                alt=""
              />
              <img
                src="https://picsum.photos/300/300?grayscale&random=3"
                alt=""
              />
              <img
                src="https://picsum.photos/300/300?grayscale&random=4"
                alt=""
              />
              <img
                src="https://picsum.photos/300/300?grayscale&random=5"
                alt=""
              />
              <img
                src="https://picsum.photos/300/300?grayscale&random=6"
                alt=""
              />
            </div>
          </div>
          <div className="w-full mt-10 ml-0 lg:mt-0 lg:flex-1 lg:w-1/2 xl:w-1/3 lg:ml-10">
            <div className="px-20 py-8 text-white bg-black lg:h-full">
              <div className="mt-2 text-sm uppercase">Featured</div>
              <div className="mt-10 mb-5 text-2xl">Works of Arts</div>
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-10">
                <a
                  className="flex items-center text-green-500 hover:text-green-800"
                  href="/"
                >
                  <div className="flex-initial">Learn more about us</div>
                  <BsArrowRight className="flex-shrink w-4 ml-3 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
