// using @tailwindcss/custom-forms
import React, { useState } from "react";

const locations = [
  {
    title: "Los Angeles",
    description:
      "Live like the stars in these luxurious Southern California estates.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4
      }
    ]
  },
  {
    title: "Phoenix",
    description:
      "Escape the cold and enjoy great weather without breaking the bank.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4
      }
    ]
  },
  {
    title: "Dallas",
    description: "Experience Texas living in these awesome ranch-style homes.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4
      }
    ]
  }
];

function SearchFilters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-800 xl:w-72">
      <div className="flex justify-between px-4 py-3 xl:hidden">
        <div className="relative max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            className="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
            placeholder="Search by keywords"
          />
        </div>
        <button
          className={`${
            isOpen ? "bg-gray-600" : "bg-gray-700"
          } ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6 fill-current text-gray-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
          </svg>
          <span className="ml-1 text-white font-medium">Filters</span>
        </button>
      </div>

      {/* form */}
      <form
        className={`${
          isOpen ? "block" : "hidden"
        } xl:block xl:h-full xl:flex xl:flex-col xl:justify-between`}
      >
        <div className="lg:flex xl:block xl:overflow-y-auto bg-gray-800">
          <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
            <div className="flex flex-wrap -mx-2">
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-500">
                  Bedrooms
                </span>
                <select className="bg-gray-600 rounded-md mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>4</option>
                </select>
              </label>
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-500">
                  Bathrooms
                </span>
                <select className="bg-gray-600 rounded-md mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>2</option>
                </select>
              </label>
              <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                <span className="text-sm font-semibold text-gray-500">
                  Price Range
                </span>
                <select className="bg-gray-600 rounded-md mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                  <option>Up to $2,000/wk</option>
                </select>
              </label>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
            <span className="block text-sm font-semibold text-gray-500">
              Property Type
            </span>
            <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700 text-lg"
                  type="radio"
                  name="propertyType"
                  value="house"
                />
                <span className="ml-2 text-white">House</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700 text-lg"
                  type="radio"
                  name="propertyType"
                  value="apartment"
                />
                <span className="ml-2 text-white">Apartment</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700 text-lg"
                  type="radio"
                  name="propertyType"
                  value="loft"
                />
                <span className="ml-2 text-white">Loft</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700 text-lg"
                  type="radio"
                  name="propertyType"
                  value="townhouse"
                />
                <span className="ml-2 text-white">Townhouse</span>
              </label>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
            <span className="block text-sm font-semibold text-gray-500">
              Amenities
            </span>
            <div className="sm:flex sm:-mx-2 sm:flex-wrap">
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="balcony"
                />
                <span className="ml-2 text-white">Balcony</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="pool"
                />
                <span className="ml-2 text-white">Pool</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="beach"
                />
                <span className="ml-2 text-white">Beach</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="petFriendly"
                />
                <span className="ml-2 text-white">Pet friendly</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="kidFriendly"
                />
                <span className="ml-2 text-white">Kid friendly</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="parking"
                />
                <span className="ml-2 text-white">Parking</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="airConditioning"
                />
                <span className="ml-2 text-white">Air conditioning</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 px-4 py-4 sm:text-right">
          <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">
            Update results
          </button>
        </div>
      </form>
    </section>
  );
}

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white xl:flex-shrink-0">
      <div className="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
        <div>
          <svg
            className="h-8 w-auto"
            viewBox="0 0 185 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M121.09 28.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336zM137.084 16v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V28h3.096V16h-3.096zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384zM149.851 18.976V16h-2.712v-3.36l-3.096.936V16h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712zM153.57 14.56c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896zM152.034 28h3.096V16h-3.096v12zM163.676 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM178.886 15.664c-1.608 0-2.856.6-3.576 1.68V16h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V28h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968z"
              fill="#A3BFFA"
            />
            <path
              d="M61.063 28h3.768l3.144-11.088L71.143 28h3.768l4.704-16.8h-3.48L72.92 23.656 69.391 11.2H66.56l-3.504 12.456L59.84 11.2h-3.48L61.063 28zM85.674 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM97.308 18.064V16h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V15.76c-1.512 0-3.024.672-3.648 2.304zM113.831 28l-4.968-6.072L113.687 16h-3.696l-4.128 5.28V11.2h-3.096V28h3.096v-5.448L110.231 28h3.6z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.911 12.604L36.213 8.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L1 15.078l21.09-5.273h3.122a9.552 9.552 0 0 0-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V8.161l-7.696 4.444a7.502 7.502 0 0 1 2.565-4.8h-4.12a7.489 7.489 0 0 1 6.646-2.973l-5.591-3.228a7.488 7.488 0 0 1 6.696.402c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 0 1 2.5-2.347 7.49 7.49 0 0 1 6.698-.402l-5.593 3.228a7.488 7.488 0 0 1 6.646 2.973h-4.12a7.498 7.498 0 0 1 2.567 4.8zM25.213 28.805v-10h-6v10h6zm-11-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
              fill="#A3BFFA"
            />
          </svg>
        </div>
        <div className="flex sm:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                v-if="isOpen"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between`}
      >
        <div className="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            className="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2"
            placeholder="Search by keywords"
          />
        </div>
        <div className="sm:flex sm:items-center">
          <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
            <a
              href="/"
              className="block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:hover:bg-gray-200"
            >
              List your property
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
            >
              Trips
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
            >
              Messages
            </a>
          </div>
          <div className="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
            <div className="flex items-center sm:hidden">
              <img
                className="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                alt=""
              />
              <span className="ml-4 font-semibold text-gray-200 sm:hidden">
                Isla Schoger
              </span>
            </div>
            <div className="mt-5 sm:hidden">
              <a
                href="#account"
                className="block text-gray-400 hover:text-white"
              >
                Account settings
              </a>
              <a
                href="#support"
                className="mt-3 block text-gray-400 hover:text-white"
              >
                Support
              </a>
              <a
                href="#sign-out"
                className="mt-3 block text-gray-400 hover:text-white"
              >
                Sign out
              </a>
            </div>

            {/* dropdown */}
            <section className="hidden sm:block">
              <div className="relative">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="block focus:outline-none"
                >
                  <span
                    className={`${
                      isOpen
                        ? "border-white xl:border-indigo-500"
                        : "border-gray-600 xl:border-gray-300"
                    } block h-8 w-8 overflow-hidden rounded-full border-2`}
                  >
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                      alt=""
                    />
                  </span>
                </button>

                <div className={`${isOpen ? "block" : "hidden"}`}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="z-30 block fixed inset-0 w-full h-full cursor-default"
                  >
                    X
                  </button>

                  <div className="absolute z-40 right-0">
                    <div className="mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl">
                      <a
                        href="#account"
                        className="block hover:text-white text-gray-800 px-4 py-2 hover:bg-indigo-500"
                      >
                        Account settings
                      </a>
                      <a
                        href="#support"
                        className="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500"
                      >
                        Support
                      </a>
                      <a
                        href="#sign-out"
                        className="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </nav>
    </header>
  );
}

function PropertyCard({ prop, i }) {
  return (
    <div>
      <div key={i} className="relative h-96 sm:h-60 pb-5/6">
        <img
          className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
          src={prop.imageUrl}
          // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt={prop.title}
        />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block px-2 py-1 leading-none bg-purple-200 text-purple-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              Plus
            </span>
            <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
              {prop.beds} {prop.beds === 1 ? "bed" : "beds"} &bull; {prop.baths}{" "}
              {prop.baths === 1 ? "bath" : "baths"}
            </div>
          </div>
          <h4 className="mt-1 text-gray-900 font-semibold text-lg">
            {prop.title}
          </h4>
          <div className="mt-1">
            <span className="text-gray-900">{prop.price}</span>
            <span className="ml-1 text-sm text-gray-600">/wk</span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-600">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <svg
                  key={i}
                  className={`${
                    prop.rating >= i + 1 ? "text-purple-500" : "text-gray-400"
                  } h-4 w-4 fill-current`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                </svg>
              ))}
            <span className="ml-2">{prop.reviewCount} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Workcation() {
  return (
    <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      {/* site header */}
      <SiteHeader />

      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        {/* search filters */}
        <SearchFilters />

        <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
          {/* locations */}
          {locations.map((loc, i) => (
            <div key={i} className={i > 0 ? "mt-6" : ""}>
              <div className="px-4 xl:px-8">
                <h3 className="text-gray-900 text-xl">{loc.title}</h3>
                <p className="text-gray-600">{loc.description}</p>
              </div>

              <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
                <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                  {/* properties */}
                  {loc.properties.map((prop, i) => (
                    <div
                      key={i}
                      className={`${
                        i > 0 ? "mt-10 sm:ml-4" : ""
                      } sm:mt-0 sm:w-80 sm:flex-shrink-0`}
                    >
                      <PropertyCard prop={prop} i={i} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
