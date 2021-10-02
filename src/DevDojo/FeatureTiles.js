import React from "react";
import { FcBookmark, FcAutomatic, FcBullish } from "react-icons/fc";

export default function FeatureTiles() {
  return (
    <section className="relative px-0 py-20 bg-white xl:px-20 min-w-screen animation-fade animation-delay">
      <div className="container px-10 mx-auto sm:px-0">
        <div className="sm:flex">
          <div className="flex-1 mr-12">
            <div className="text-sm text-gray-500 uppercase">
              Get to know us more
            </div>
            <div className="text-4xl">The Dream Team</div>
            <div className="mt-10">
              <div className="flex">
                <div className="flex-shrink">
                  <FcBookmark className="text-4xl" />
                </div>
                <div className="flex-grow ml-5">
                  <div className="text-2xl">Powerhouse</div>
                  <p className="mt-5 leading-7 text-gray-700 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex-shrink">
                  <FcBullish className="text-4xl" />
                </div>
                <div className="flex-grow ml-5">
                  <div className="text-2xl">Tenure</div>
                  <p className="mt-5 leading-7 text-gray-700 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex-shrink">
                  <FcAutomatic className="text-4xl" />
                </div>
                <div className="flex-grow ml-5">
                  <div className="text-2xl">Vision</div>
                  <p className="mt-5 leading-7 text-gray-700 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 mt-20 sm:flex-1 sm:mt-0 sm:px-0 sm:mt-48 lg:mt-0">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1">
                <img
                  className="min-w-full rounded-md"
                  width="245"
                  height="330"
                  src="https://picsum.photos/245/330?grayscale"
                  alt=""
                />
                <img
                  className="min-w-full mt-5 rounded-md"
                  width="245"
                  height="245"
                  src="https://picsum.photos/245/245?grayscale"
                  alt=""
                />
              </div>
              <div className="col-span-1 pt-10">
                <img
                  className="min-w-full rounded-md"
                  width="240"
                  height="240"
                  src="https://picsum.photos/240/240?grayscale"
                  alt=""
                />
                <img
                  className="min-w-full mt-5 rounded-md"
                  width="245"
                  height="335"
                  src="https://picsum.photos/245/335?grayscale"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
