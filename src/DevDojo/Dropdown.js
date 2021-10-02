import React, { useState } from "react";

export default function Dropdown() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <section className="flex flex-row justify-center min-h-screen pt-4 bg-gray-100 min-w-screen">
      <div className="flex-none p-2">
        <button
          onClick={() => setToggleDropdown((prevState) => !prevState)}
          className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600"
        >
          <span className="select-none">Select an item</span>

          <svg
            id="dropdown-arrow-down"
            className={`w-6 h-6 stroke-current ${
              toggleDropdown ? "" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            id="dropdown-arrow-up"
            className={`w-6 h-6 stroke-current ${
              toggleDropdown ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* content */}
        <div
          className={`w-48 py-2 mt-2 bg-white rounded-lg shadow-xl ${
            toggleDropdown ? "" : "hidden"
          }`}
        >
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Item 1
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Item 2
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Item 3
          </a>
        </div>
      </div>
    </section>
  );
}
