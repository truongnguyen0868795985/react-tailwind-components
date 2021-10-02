import React from "react";
import { FaMobileAlt, FaPencilAlt, FaTruck } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="py-12 px-4 text-center bg-red-100">
      <h2 className="text-3xl mb-8 font-heading">
        How to get Dunder Mifflined?
      </h2>
      <div className="flex flex-wrap items-center justify-center -mx-8 mb-12">
        <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
          <FaMobileAlt className="mx-auto text-3xl" />
          <h3 className="text-2xl mt-6 mb-3 font-heading">Contact our Sales</h3>
          <p className="text-gray-500 leading-relaxed">
            During the phone call we will be able to present you all details of
            cooperation, pricing and special offers, suited for your company.
          </p>
        </div>
        <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
          <FaPencilAlt className="mx-auto text-3xl" />
          <h3 className="text-2xl mt-6 mb-3 font-heading">
            Sign the documents
          </h3>
          <p className="text-gray-500 leading-relaxed">
            We can also talk during business meeting, or visit your office
            anytime you want! Our employees will provide proper contracts.
          </p>
        </div>
        <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
          <FaTruck className="mx-auto text-3xl" />
          <h3 className="text-2xl mt-6 mb-3 font-heading">
            Wait for delivery!
          </h3>
          <p className="text-gray-500 leading-relaxed">
            You don’t buy a pig... or shall I say a paper in a poke. The
            supplies will be delivered to your company every first Monday of the
            month.
          </p>
        </div>
      </div>
      <div>
        <a
          className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
          href="/"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
