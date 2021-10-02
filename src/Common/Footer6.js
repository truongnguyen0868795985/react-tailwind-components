import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer6() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full md:w-1/3 my-4">
            <h2 className="text-xl mb-6">Contact</h2>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <div className="text-yellow-500 mr-4">
                  <FaMapMarkerAlt className="fill-current w-4 h-4" />
                </div>
                <div>
                  <a
                    href="http://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    Tailwindow Street, California, USA
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-2">
                <div className="text-yellow-500 mr-4">
                  <HiOutlineMail className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href="mailto:info@tailwindow.com"
                    className="hover:text-yellow-500"
                  >
                    info@tailwindow.com
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-2">
                <div className="text-yellow-500 mr-4">
                  <FaPhoneAlt className="fill-current w-4 h-4" />
                </div>
                <div>
                  <a href="tel:+18245946369" className="hover:text-yellow-500">
                    +1 8245 946 369
                  </a>
                </div>
              </li>
            </ul>

            {/* sosmed links */}
            <a
              href="/"
              className="inline-flex w-8 h-8 rounded-sm bg-gray-600 hover:bg-gray-700 items-center justify-center"
            >
              <FaTwitter className="w-4 h-4 fill-current" />
            </a>
            <a
              href="/"
              className="inline-flex w-8 h-8 rounded-sm bg-gray-600 hover:bg-gray-700 items-center justify-center"
            >
              <FaFacebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="/"
              className="inline-flex w-8 h-8 rounded-sm bg-gray-600 hover:bg-gray-700 items-center justify-center"
            >
              <FaInstagram className="w-4 h-4 fill-current" />
            </a>
            <a
              href="/"
              className="inline-flex w-8 h-8 rounded-sm bg-gray-600 hover:bg-gray-700 items-center justify-center"
            >
              <FaGithub className="w-4 h-4 fill-current" />
            </a>
            <a
              href="/"
              className="inline-flex w-8 h-8 rounded-sm bg-gray-600 hover:bg-gray-700 items-center justify-center"
            >
              <FaYoutube className="w-4 h-4 fill-current" />
            </a>
          </div>
          <div className="px-4 w-full md:w-1/3 my-4">
            <h2 className="text-xl mb-6">Latest Posts</h2>
            <ul>
              <li>
                <a href="/" className="flex mb-2 hover:text-yellow-500">
                  <img
                    className="rounded-sm"
                    src="https://picsum.photos/id/121/40"
                    alt="article 1"
                  />
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      How to use TailwindCSS with Vuejs and Laravel Mix
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      July 17, 2020
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="flex mb-2 hover:text-yellow-500">
                  <img
                    className="rounded-sm"
                    src="https://picsum.photos/id/122/40"
                    alt="article 2"
                  />
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      5 Tips to Make Responsive Website
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      June 06, 2020
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="flex mb-2 hover:text-yellow-500">
                  <img
                    className="rounded-sm"
                    src="https://picsum.photos/id/123/40"
                    alt="article 3"
                  />
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      What Is Flex And When to Use It?
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      May 28, 2020
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="flex mb-2 hover:text-yellow-500">
                  <img
                    className="rounded-sm"
                    src="https://picsum.photos/id/124/40"
                    alt="article 4"
                  />
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      How TailwindCSS Can Help Your Productivity?
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      March 15, 2020
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="flex mb-2 hover:text-yellow-500">
                  <img
                    className="rounded-sm"
                    src="https://picsum.photos/id/125/40"
                    alt="article 4"
                  />
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      Getting Started With HTML and CSS
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      February 14, 2020
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 w-full md:w-1/3 my-4">
            <h2 className="text-xl mb-6">Send Us Message</h2>

            <form>
              <div className="mb-2">
                <label for="email" className="text-xs text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full border border-gray-400 rounded-sm py-1 px-4 text-gray-700 text-md focus:outline-none focus:border-gray-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-2">
                <label for="message" className="text-xs text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  cols="30"
                  rows="3"
                  className="block w-full border border-gray-400 rounded-sm py-1 px-4 text-gray-700 text-md focus:outline-none focus:border-gray-500"
                  placeholder="I have something in mind"
                ></textarea>
              </div>
              <button className="rounded-sm py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="-mx-4 py-4 flex flex-wrap justify-between items-center">
          <div className="px-4 w-full text-center sm:w-auto">
            <a href="/" className="inline-flex">
              <svg
                className="w-40"
                version="1.1"
                viewBox="0 0 3368 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(0 -75)">
                    <g transform="translate(0 75)">
                      <rect
                        width="512"
                        height="512"
                        rx="128"
                        fill="#3D5AFE"
                      ></rect>
                      <rect
                        x="149"
                        y="176"
                        width="220"
                        height="220"
                        fill="#fff"
                      ></rect>
                      <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                      <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                    </g>
                    <text
                      fill="white"
                      font-family="Nunito-Bold, Nunito"
                      font-size="512"
                      font-weight="bold"
                    >
                      <tspan x="654" y="518">
                        Tailwindow
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright &copy; {new Date().getFullYear()} Tailwindow. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
