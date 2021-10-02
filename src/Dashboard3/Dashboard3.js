import React, { useState } from "react";
import { AiFillSetting, AiFillHeart } from "react-icons/ai";
import {
  FaRobot,
  FaEnvelope,
  FaUserCircle,
  FaCreditCard
} from "react-icons/fa";
import { HiSearch, HiOutlineLogout } from "react-icons/hi";

export default function Dashboard3() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      {/* <!--Nav--> */}
      <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            {/* Logo */}
            <a href="/">
              <span className="flex items-center justify-center px-4 md:pl-5 md:pr-0">
                <FaRobot className="text-3xl" />
              </span>
            </a>
          </div>

          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            <span className="relative w-full">
              <input
                type="search"
                placeholder="Search"
                className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
              />

              <div className="absolute" style={{ top: "1rem", left: "0.8rem" }}>
                <HiSearch className="text-white w-4 h-4" />
              </div>
            </span>
          </div>

          {/* links top */}
          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline"
                  href="/"
                >
                  Active
                </a>
              </li>

              <li className="flex-1 md:flex-none md:mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/"
                >
                  link
                </a>
              </li>

              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  {/* user button */}
                  <button
                    onClick={() => setToggle((prev) => !prev)}
                    className="flex items-center text-white focus:outline-none"
                  >
                    <FaUserCircle className="text-2xl mt-2" />
                  </button>

                  {/* dropdown */}
                  <div
                    className={`${
                      toggle ? "absolute" : "hidden"
                    } bg-gray-800 text-white right-0 mt-3 p-3 px-5 overflow-auto z-30`}
                  >
                    <a
                      href="/settings"
                      className="flex items-center p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <AiFillSetting className="mr-2" />
                      <p className="">Settings</p>
                    </a>

                    <div className="border border-gray-800"></div>

                    <span className="flex items-center cursor-pointer flex-shrink-0 p-2 hover:bg-gray-800 text-white text-sm block">
                      <HiOutlineLogout className="mr-2" />
                      <p className="">Logout</p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        <section className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
          <div className="h-full md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 text-left justify-between">
            {/* nav links */}
            <ul className="list-reset flex md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <a
                  href="/inbox"
                  className=" md:flex-row flex-col block flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                >
                  <FaEnvelope className="md:ml-5 md:mx-0 mx-auto text-2xl mt-1 md:pr-3" />
                  <span className="pb-1 md:pb-0 text-sm md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                    Inbox
                  </span>
                </a>
              </li>

              <li className="mr-3 flex-1">
                <a
                  href="/favorites"
                  className="md:flex-row flex-col block flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <AiFillHeart className="md:ml-5 md:mx-0 mx-auto text-2xl mt-1 md:pr-3 text-blue-600" />
                  <span className="pb-1 md:pb-0 text-sm md:text-base text-white md:text-white block md:inline-block">
                    Favorites
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="bg-gray-800 pt-3">
            <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
              <h3 className="font-bold pl-2">Analytics</h3>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Metric Card--> */}
              <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-green-600">
                      <i className="fa fa-wallet fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-600">
                      Total Revenue
                    </h5>
                    <h3 className="font-bold text-3xl">
                      $3249{" "}
                      <span className="text-green-500">
                        <i className="fas fa-caret-up"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Metric Card--> */}
              <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-pink-600">
                      <i className="fas fa-users fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-600">
                      Total Users
                    </h5>
                    <h3 className="font-bold text-3xl">
                      249{" "}
                      <span className="text-pink-500">
                        <i className="fas fa-exchange-alt"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Metric Card--> */}
              <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-yellow-600">
                      <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-600">
                      New Users
                    </h5>
                    <h3 className="font-bold text-3xl">
                      2{" "}
                      <span className="text-yellow-600">
                        <i className="fas fa-caret-up"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Metric Card--> */}
              <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-blue-600">
                      <i className="fas fa-server fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-600">
                      Server Uptime
                    </h5>
                    <h3 className="font-bold text-3xl">152 days</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Metric Card--> */}
              <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-indigo-600">
                      <i className="fas fa-tasks fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-600">
                      To Do List
                    </h5>
                    <h3 className="font-bold text-3xl">7 tasks</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Metric Card--> */}
              <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-red-600">
                      <i className="fas fa-inbox fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-600">
                      Issues
                    </h5>
                    <h3 className="font-bold text-3xl">
                      3{" "}
                      <span className="text-red-500">
                        <i className="fas fa-caret-up"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
          </div>

          <div className="flex flex-row flex-wrap flex-grow mt-2">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Graph Card--> */}
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                </div>
                <div className="p-5">CHART</div>
              </div>
              {/* <!--/Graph Card--> */}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Graph Card--> */}
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                </div>
                <div className="p-5">CHART</div>
              </div>
              {/* <!--/Graph Card--> */}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Graph Card--> */}
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                </div>
                <div className="p-5">CHART</div>
              </div>
              {/* <!--/Graph Card--> */}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Graph Card--> */}
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                </div>
                <div className="p-5">CHART</div>
              </div>
              {/* <!--/Graph Card--> */}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Table Card--> */}
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                </div>
                <div className="p-5">
                  <table className="w-full p-5 text-gray-700">
                    <thead>
                      <tr>
                        <th className="text-left text-blue-900">Name</th>
                        <th className="text-left text-blue-900">Side</th>
                        <th className="text-left text-blue-900">Role</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Obi Wan Kenobi</td>
                        <td>Light</td>
                        <td>Jedi</td>
                      </tr>
                      <tr>
                        <td>Greedo</td>
                        <td>South</td>
                        <td>Scumbag</td>
                      </tr>
                      <tr>
                        <td>Darth Vader</td>
                        <td>Dark</td>
                        <td>Sith</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="py-2">
                    <a href="#">See More issues...</a>
                  </p>
                </div>
              </div>
              {/* <!--/table Card--> */}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/* <!--Advert Card--> */}
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                  <h5 className="font-bold uppercase text-gray-600">Advert</h5>
                </div>
                <div className="p-5 text-center">ADS</div>
              </div>
              {/* <!--/Advert Card--> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
