import React from "react";

export default function ContentCourse() {
  return (
    <main className="py-12 bg-gray-100">
      <div className="container flex flex-col items-center justify-center px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">
        {/* title */}
        <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold leading-tight tracking-widest text-indigo-700 uppercase bg-indigo-200 rounded-full">
          Watch And Learn with
        </p>

        <h2 className="flex justify-center font-sans text-3xl font-bold leading-none tracking-tight text-center text-gray-900 b-6 sm:text-4xl md:mx-auto">
          <svg
            className="w-8 h-8 mt-1 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
          </svg>
          <span className="relative">Our Latest Courses</span>{" "}
        </h2>

        <a
          href="/"
          className="mt-3 text-sm font-semibold text-indigo-600 underline"
        >
          View Our Full Library of Courses
        </a>

        {/* content cards */}
        <article className="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
          {/* card 1 */}
          <section className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="relative flex-shrink-0">
              <img
                className="object-cover w-full h-56"
                src="https://cdn.devdojo.com/episode/images/August2020/laravel-livewire-introduction1.jpg"
                alt="Cover for livewire introduction course."
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">
                12 reviews
              </span>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div>
                  <a
                    href="/"
                    className="block text-xl font-semibold leading-7 text-gray-900"
                  >
                    Mastering Livewire
                  </a>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Tired of Vue or React? Why not try Livewire, the fullstack
                    framework for dynamic interfaces.
                  </p>
                </div>
                <p className="mt-3 text-sm font-medium leading-5">
                  <a href="/" className="inline-block">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full">
                      Livewire
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex items-center p-6 bg-gray-100">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900">
                    <a href="/" className="hover:underline">
                      Jane Cooper
                    </a>
                  </p>
                  <div className="text-xs leading-5 text-gray-600">
                    <time dateTime="2020-05-31">May 31, 2020</time>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* card 2 */}
          <section className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="relative flex-shrink-0">
              <img
                className="object-cover w-full h-56"
                src="https://cdn.devdojo.com/images/September2017/creating-a-laravel-package-sd.jpg"
                alt="Cover for creating a laravel package course."
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">
                16 reviews
              </span>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div>
                  <a
                    href="/"
                    className="block text-xl font-semibold leading-7 text-gray-900"
                  >
                    Create a Laravel Package
                  </a>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Join Richard on the adventure of creating and releasing a
                    new Laravel package.
                  </p>
                </div>
                <p className="mt-3 text-sm font-medium leading-5">
                  <a href="/" className="inline-block">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-red-800 bg-red-100 rounded-full">
                      Laravel
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex items-center p-6 bg-gray-100">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900">
                    <a href="/" className="hover:underline">
                      Richard Foster
                    </a>
                  </p>
                  <div className="text-xs leading-5 text-gray-600">
                    <time dateTime="2020-06-03">Jun 3, 2020</time>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* card 3 */}
          <section className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="relative flex-shrink-0">
              <img
                className="object-cover w-full h-56"
                src="https://cdn.devdojo.com//images/March2017/laravel-dusk-sd.jpg"
                alt="Cover for laravel dusk course."
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">
                22 reviews
              </span>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div>
                  <a
                    href="/"
                    className="text-xl font-semibold leading-7 text-gray-900"
                  >
                    Laravel Dusk
                  </a>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Learn how Laravel Dusk can help you to feature test your SPA
                    automatically with a simple API.
                  </p>
                </div>
                <p className="mt-4 text-sm font-medium leading-5">
                  <a href="/" className="inline-block">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-red-800 bg-red-100 rounded-full">
                      Laravel
                    </span>
                  </a>
                  <a href="/" className="inline-block">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-purple-800 bg-purple-100 rounded-full">
                      Dusk
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex items-center p-6 bg-gray-100">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900">
                    <a href="/" className="hover:underline">
                      John Cooper
                    </a>
                  </p>
                  <div className="text-xs leading-5 text-gray-600">
                    <time dateTime="2020-06-04">Jun 4, 2020</time>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
