import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer4() {
  return (
    <footer className="container px-4 py-12 mx-auto bg-white max-w-7xl sm:px-6 lg:py-10 lg:px-8 xl:px-10 dark:bg-dark-900 rounded-t-xl">
      <article className="xl:grid xl:grid-cols-3 xl:gap-8">
        {/* logo with description and social links */}
        <section className="xl:col-span-1 mt-4">
          {/* logo */}
          <img className="h-10 w-10" src="/images/rifandani-icon.png" />
          {/* description */}
          <p className="mt-4 text-base leading-6 text-black">
            BY a chocolate lover, TO all chocolate lovers.
          </p>
          {/* social links */}
          <div className="flex mt-8">
            <a
              href="/"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            </a>
            <a
              href="/"
              className="ml-6 text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-6 h-6 text-red-500 hover:text-red-700" />
            </a>
            <a
              href="/"
              className="ml-6 text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Whatsapp</span>
              <FaWhatsapp className="w-6 h-6 text-green-500 hover:text-green-700" />
            </a>
          </div>
        </section>

        <section className="grid grid-cols-2 mt-8 gap-8 xl:mt-0 xl:col-span-2">
          {/* left menu p-0 */}
          <menu className="p-0 md:grid md:grid-cols-2 md:gap-8">
            {/* watch */}
            <div>
              <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
                Watch
              </h4>
              <ul className="mt-4">
                <li>
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    All Videos
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Courses
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Episodes
                  </a>
                </li>
              </ul>
            </div>

            {/* learn */}
            <div className="mt-12 md:mt-0">
              <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
                Learn
              </h4>
              <ul className="mt-4">
                <li>
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Tutorials
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Questions
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Training
                  </a>
                </li>
              </ul>
            </div>
          </menu>

          {/* right menu p-0 */}
          <menu className="p-0 md:grid md:grid-cols-2 md:gap-8">
            {/* more */}
            <div>
              <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
                More
              </h4>
              <ul className="mt-4">
                <li>
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Guides
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Scripts
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Books
                  </a>
                </li>
              </ul>
            </div>

            {/* other */}
            <div className="mt-12 md:mt-0">
              <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
                Other
              </h4>
              <ul className="mt-4">
                <li>
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="/"
                    className="text-base leading-6 text-black hover:text-opacity-75"
                  >
                    Points
                  </a>
                </li>
              </ul>
            </div>
          </menu>
        </section>
      </article>

      {/* bottom copyright */}
      <article className="pt-8 mt-12 border-t border-gray-200 dark:border-dark-900">
        <p className="text-base leading-6 text-gray-400 xl:text-center">
          © {new Date().getFullYear()} Rifandani. All rights reserved.
        </p>
      </article>
    </footer>
  );
}
