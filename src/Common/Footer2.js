import React from "react";
import { FaTwitter, FaFacebook, FaDribbble, FaGithub } from "react-icons/fa";

export default function Footer2() {
  return (
    <footer className="block py-4 pt-12 mt-16 bg-gray-200 relative">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: 80, transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <section className="w-full lg:w-6/12 px-4">
            <h4 className="text-2xl font-semibold">Tailwind Starter Kit</h4>
            <h5 className="text-base mt-0 mb-2 text-gray-700">
              A beautiful extension for TailwindCSS.
            </h5>

            <div className="mt-6">
              <a href="https://www.twitter.com/creativetim" target="_blank">
                <FaTwitter className=" text-blue-400 shadow-lg text-3xl items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a href="https://www.facebook.com/creativetim" target="_blank">
                <FaFacebook className=" text-blue-600 shadow-lg text-3xl items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a href="https://www.dribbble.com/creativetim" target="_blank">
                <FaDribbble className=" text-pink-400 shadow-lg text-3xl items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a
                href="https://www.github.com/creativetimofficial"
                target="_blank"
              >
                <FaGithub className=" text-gray-900 shadow-lg text-3xl items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
            </div>

            <p className="text-sm mt-6 text-gray-600 font-semibold">
              Currently v1.0.0. Code
              <a
                href="https://github.com/creativetimofficial/tailwind-starter-kit"
                className="text-gray-700"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                licensed MIT
              </a>
              , docs
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                targe="_blank"
                className="text-gray-700"
              >
                {" "}
                CC BY 4.0
              </a>
              .
            </p>
          </section>

          <section className="w-full lg:w-6/12 mt-3 lg:mt-0">
            <div className="flex flex-wrap items-top mb-6">
              {/* useful links */}
              <section className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-red-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/blog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </section>

              {/* other resources */}
              <section className="w-full lg:w-4/12 px-4 mt-3 lg:mt-0">
                <span className="block uppercase text-red-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>

        <hr className="my-4 border-gray-400" />

        <section className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © 2020 Tailwind Starter Kit by{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noreferrer"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
