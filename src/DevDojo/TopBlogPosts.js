import React from "react";

export default function TopBlogPosts() {
  return (
    <main className="min-h-screen bg-white">
      {/* title */}
      <article className="p-12 text-center">
        <h1 className="text-2xl font-bold text-pink-700 ">
          Our featured blogs
        </h1>
        <p className="text-sm text-purple-700">
          have a look at our most popular blogs specially picked up for you
        </p>
      </article>

      {/* card content */}
      <article className="lg:flex lg:justify-around lg:items-center">
        {/* first card */}
        <section className="m-6">
          <div className="max-w-xl m-auto bg-gray-100 rounded-lg shadow-sm ">
            <div>
              <div className="py-4 mx-8 text-3xl sm:flex sm:items-center">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                >
                  <defs>
                    <linearGradient
                      x1="0"
                      y1="-21.333"
                      y2="85.333"
                      id="A"
                      x2="64"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6b46c1" offset="0%" />
                      <stop stop-color="#b83280" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                    fill="url(#A)"
                    fill-rule="evenodd"
                  />
                </svg>
                <h1 className="p-4 text-pink-700">
                  Getting Started with Tailwindcss
                </h1>
              </div>
              <div>
                <p className="px-8 pb-4 text-justify text-purple-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-16 bg-gray-100">
                <h1 className="absolute bottom-0 right-0 m-8 text-purple-700 cursor-pointer text-md hover:text-pink-700 hover:underline">
                  Read full article
                </h1>
                <h1 className="absolute bottom-0 right-0 mx-8 my-3 text-sm text-gray-500">
                  posted on 1st Oct. 2020 | 5 min. read
                </h1>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 mb-8 ml-8 border-2 border-gray-200 rounded-full bg-gradient-to-r from-purple-700 to-pink-700">
                <svg
                  className="pl-1 m-2 text-gray-100 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="40px"
                  height="40px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="h-16 text-gray-100 rounded-b-lg bg-gradient-to-r from-purple-700 to-pink-700">
                <h1 className="absolute bottom-0 left-0 pb-4 pl-32 text-xl font-semibold cursor-pointer hover:underline sm:hover:no-underline sm:cursor-default">
                  Nitish Kumar Sharma
                </h1>
                <div className="absolute bottom-0 right-0 hidden px-2 py-1 mx-8 my-4 text-sm text-gray-100 border-2 border-gray-100 border-solid rounded opacity-100 cursor-pointer sm:flex hover:opacity-75">
                  <h2>View Profile</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* second card */}
        <section className="m-6">
          <div className="max-w-xl m-auto bg-gray-100 rounded-lg shadow-sm">
            <div>
              <div className="py-4 mx-8 text-3xl sm:flex sm:items-center">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                >
                  <defs>
                    <linearGradient
                      x1="0"
                      y1="-21.333"
                      y2="85.333"
                      id="A"
                      x2="64"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6b46c1" offset="0%" />
                      <stop stop-color="#b83280" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                    fill="url(#A)"
                    fill-rule="evenodd"
                  />
                </svg>
                <h1 className="p-4 text-pink-700">
                  Getting Started with Tailwindcss
                </h1>
              </div>
              <div>
                <p className="px-8 pb-4 text-justify text-purple-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-16 bg-gray-100">
                <h1 className="absolute bottom-0 right-0 m-8 text-purple-700 cursor-pointer text-md hover:text-pink-700 hover:underline">
                  Read full article
                </h1>
                <h1 className="absolute bottom-0 right-0 mx-8 my-3 text-sm text-gray-500">
                  posted on 1st Oct. 2020 | 5 min. read
                </h1>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 mb-8 ml-8 border-2 border-gray-200 rounded-full bg-gradient-to-r from-purple-700 to-pink-700">
                <svg
                  className="pl-1 m-2 text-gray-100 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="40px"
                  height="40px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="h-16 text-gray-100 rounded-b-lg bg-gradient-to-r from-purple-700 to-pink-700">
                <h1 className="absolute bottom-0 left-0 pb-4 pl-32 text-xl font-semibold cursor-pointer hover:underline sm:hover:no-underline sm:cursor-default">
                  Nitish Kumar Sharma
                </h1>
                <div className="absolute bottom-0 right-0 hidden px-2 py-1 mx-8 my-4 text-sm text-gray-100 border-2 border-gray-100 border-solid rounded opacity-100 cursor-pointer sm:flex hover:opacity-75">
                  <h2>View Profile</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* view all */}
      <article className="">
        <p className="m-10 p-2 w-24 mx-auto rounded text-center text-white cursor-pointer text-lg hover:opacity-50 bg-gradient-to-r from-purple-700 to-pink-700">
          View All
        </p>
      </article>
    </main>
  );
}
