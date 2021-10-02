import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function Tabs({ color }) {
  const [openTab, setOpenTab] = useState(1);

  return (
    <main className="flex flex-wrap">
      <article className="w-full">
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          {/* 1 == profile */}
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex items-center justify-center " +
                (openTab === 1
                  ? "text-white bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              href="#link1"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              <FaUser className="text-base mr-1" />
              <p className="">Profile</p>
            </a>
          </li>
          {/* 2 == settings */}
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex items-center justify-center " +
                (openTab === 2
                  ? "text-white bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              href="#link2"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              <MdSettings className="text-base mr-1" />
              <p className="">Settings</p>
            </a>
          </li>
          {/* 3 == options */}
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex items-center justify-center " +
                (openTab === 3
                  ? "text-white bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              href="#link3"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
            >
              <BiDotsHorizontalRounded className="text-base mr-1" />
              <p className="">Options</p>
            </a>
          </li>
        </ul>

        {/* tab content */}
        <section className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                  <br />
                  <br /> Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                </p>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                  <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br /> Dramatically maintain clicks-and-mortar solutions
                  without functional solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
