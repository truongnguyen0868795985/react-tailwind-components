import React from "react";

export default function Dropdown() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/2 mx-auto my-6 text-gray-500">
        <section className="flex items-center justify-center h-20">
          <form className="flex items-center justify-center w-1/2">
            <label className="sr-only">Search this site</label>
            <input
              placeholder="Search"
              spellcheck="false"
              className="px-6 py-2 -mr-8 font-sans transition-colors duration-300 transform bg-gray-200 border-none rounded-full focus:outline-none focus:bg-gray-300"
            />

            <button className="transform border-none">
              <svg
                className="text-gray-500 duration-200 fill-current hover:text-gray-700 focus:text-gray-700"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>magnifying-glass</title>
                <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
              </svg>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
