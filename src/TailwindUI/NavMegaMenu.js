import React, { useState } from "react";
import {
  HiOutlineMenu,
  HiChevronDown,
  HiOutlineChartBar,
  HiOutlineCursorClick,
  HiOutlineShieldCheck,
  HiOutlineViewGrid,
  HiOutlineRefresh,
  HiOutlinePlay,
  HiOutlinePhone,
  HiOutlineSupport,
  HiOutlineBookmarkAlt,
  HiOutlineCalendar,
  HiX
} from "react-icons/hi";

export default function NavMegaMenu() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <section className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </section>

          <section className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <HiOutlineMenu className="h-6 w-6" />
            </button>
          </section>

          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                onClick={() => setToggle((prev) => !prev)}
                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Solutions</span>
                {/* <!--
              Heroicon name: chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            --> */}
                <HiChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              </button>

              {/* <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          --> */}
              <div
                className={`${
                  toggle ? "absolute" : "hidden"
                } z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/analytics"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <HiOutlineChartBar className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Analytics
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/engage"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: cursor-click --> */}
                      <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Engagement
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/security"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: shield-check --> */}
                      <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Security
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Your customers&#039; data will be safe and secure.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/integration"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: view-grid --> */}
                      <HiOutlineViewGrid className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Integrations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Connect with third-party tools that you&#039;re
                          already using.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/automation"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: refresh --> */}
                      <HiOutlineRefresh className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Automations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Build strategic funnels that will drive your customers
                          to convert
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <a
                        href="/watch-demo"
                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        {/* <!-- Heroicon name: play --> */}
                        <HiOutlinePlay className="flex-shrink-0 h-6 w-6 text-gray-400" />
                        <span className="ml-3">Watch Demo</span>
                      </a>
                    </div>

                    <div className="flow-root">
                      <a
                        href="/"
                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        {/* <!-- Heroicon name: phone --> */}
                        <HiOutlinePhone className="flex-shrink-0 h-6 w-6 text-gray-400" />

                        <span className="ml-3">Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/pricing"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>

            <a
              href="/docs"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Docs
            </a>

            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                onClick={() => setToggle2((prev) => !prev)}
                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>More</span>
                {/* <!--
              Heroicon name: chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            --> */}
                <HiChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              </button>

              {/* <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          --> */}
              <div
                className={`${
                  toggle2 ? "absolute" : "hidden"
                } z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0`}
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/help-center"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: support --> */}
                      <HiOutlineSupport className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Help Center
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get all of your questions answered in our forums or
                          contact support.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/guides"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: bookmark-alt --> */}
                      <HiOutlineBookmarkAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Guides
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Learn how to maximize our platform to get the most out
                          of it.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/events"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: calendar --> */}
                      <HiOutlineCalendar className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Events
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          See what meet-ups and other events we might be
                          planning near you.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/security"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* <!-- Heroicon name: shield-check --> */}
                      <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Security
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Understand how we take your privacy seriously.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                        Recent Posts
                      </h3>

                      <ul className="mt-4 space-y-4">
                        <li className="text-base truncate">
                          <a
                            href="/post-1"
                            className="font-medium text-gray-900 hover:text-gray-700"
                          >
                            Boost your conversion rate
                          </a>
                        </li>

                        <li className="text-base truncate">
                          <a
                            href="/post-2"
                            className="font-medium text-gray-900 hover:text-gray-700"
                          >
                            How to use search engine optimization to drive
                            traffic to your site
                          </a>
                        </li>

                        <li className="text-base truncate">
                          <a
                            href="/post-3"
                            className="font-medium text-gray-900 hover:text-gray-700"
                          >
                            Improve your customer experience
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-5 text-sm">
                      <a
                        href="/post-4"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {" "}
                        View all posts <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/signin"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>

            <a
              href="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>

      {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      <section
        className={`${
          menu ? "absolute" : "hidden"
        } top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <section className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>

              <div className="-mr-2">
                <button
                  onClick={() => setMenu((prev) => !menu)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: x --> */}
                  <HiX className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="/analytics"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/* <!-- Heroicon name: chart-bar --> */}
                  <HiOutlineChartBar className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                  <span className="ml-3 text-base font-medium text-gray-900">
                    Analytics
                  </span>
                </a>

                <a
                  href="/engage"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/* <!-- Heroicon name: cursor-click --> */}
                  <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                  <span className="ml-3 text-base font-medium text-gray-900">
                    Engagement
                  </span>
                </a>

                <a
                  href="/security"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/* <!-- Heroicon name: shield-check --> */}
                  <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                  <span className="ml-3 text-base font-medium text-gray-900">
                    Security
                  </span>
                </a>

                <a
                  href="/integrations"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/* <!-- Heroicon name: view-grid --> */}
                  <HiOutlineViewGrid className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                  <span className="ml-3 text-base font-medium text-gray-900">
                    Integrations
                  </span>
                </a>

                <a
                  href="/automations"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/* <!-- Heroicon name: refresh --> */}
                  <HiOutlineRefresh className="flex-shrink-0 h-6 w-6 text-indigo-600" />

                  <span className="ml-3 text-base font-medium text-gray-900">
                    Automations
                  </span>
                </a>
              </nav>
            </div>
          </section>

          <section className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="/pricing"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="/docs"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="/enterprise"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </a>

              <a
                href="/blog"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </a>

              <a
                href="/help"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </a>

              <a
                href="/guides"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </a>

              <a
                href="/security"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </a>

              <a
                href="/events"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </a>
            </div>
            <div>
              <a
                href="/signup"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a
                  href="/signin"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
