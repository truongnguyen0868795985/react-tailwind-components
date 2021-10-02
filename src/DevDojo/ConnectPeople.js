import React from "react";

export default function ConnectPeople() {
  return (
    <div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
      <div className="flex justify-center max-w-sm mx-auto">
        <div className="flex flex-col items-start justify-between w-4/5 h-auto my-20 overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="flex flex-row items-baseline justify-around w-full p-4 pb-0 mb-3">
            <h2 className="mr-auto text-lg font-semibold tracking-wide">
              Who to follow
            </h2>
            <div className="flex flex-row">
              <a href="/" className="text-xs text-blue-700 ">
                Refresh
              </a>
              <span className="self-center w-1 h-1 mx-2 bg-gray-500 rounded-full"></span>
              <a href="/" className="text-xs text-blue-700 ">
                See all
              </a>
            </div>
          </div>
          <div className="w-full p-4 pt-0 text-gray-800 bg-gray-100 divide-y divide-gray-400">
            <div className="flex flex-row items-center justify-between py-4">
              <img
                src="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                alt="user-1"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-sm">
                <span className="block font-semibold">Deltondo Matthew</span>
                <span className="block text-xs font-light text-gray-700">
                  8 mutual friends
                </span>
              </div>
              <a
                href="/"
                className="self-start block px-2 py-px mt-1 text-xs font-semibold tracking-wide uppercase border border-gray-400 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent"
              >
                follow
              </a>
            </div>
            <div className="flex flex-row items-center justify-between py-4">
              <img
                src="https://uifaces.co/our-content/donated/AVQ0V28X.jpg"
                alt="user-1"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-sm">
                <span className="block font-semibold">Adriana Cardoson</span>
                <span className="block text-xs font-light text-gray-700">
                  6 mutual friends
                </span>
              </div>
              <a
                href="/"
                className="self-start block px-2 py-px mt-1 text-xs font-semibold tracking-wide uppercase border border-gray-400 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent"
              >
                follow
              </a>
            </div>
            <div className="flex flex-row items-center justify-between pt-4">
              <img
                src="https://uifaces.co/our-content/donated/UZ0VIIh3.png"
                alt="user-1"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-sm">
                <span className="block font-semibold">Daniela Moreauno</span>
                <span className="block text-xs font-light text-gray-700">
                  2 mutual friends
                </span>
              </div>
              <a
                href="/"
                className="self-start block px-2 py-px mt-1 text-xs font-semibold tracking-wide uppercase border border-gray-400 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent"
              >
                follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
