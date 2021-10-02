import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center mb-4 font-heading">
          Frequently Asked Questions
        </h2>
        <div className="p-4 mb-2 border-b">
          <button className="flex w-full text-left">
            <span className="flex-grow font-semibold">
              How does Dunder Mifflin paper differ from other products?
            </span>
            <FaChevronDown className="w-12" />
          </button>
          <p className="mt-1">
            Paper produced with love, devotion, passion - is not the same paper.
            Our supplies are extra strong, and you’re going to need the
            paper-tear up-master to destroy just one sheet. It’s also suited for
            every available printer.
          </p>
        </div>
        <div className="p-4 mb-2 border-b">
          <button className="flex w-full text-left">
            <span className="flex-grow font-semibold">
              Why choose Dunder Mifflin instead of some huge paper producer?
            </span>
            <FaChevronDown className="w-12" />
          </button>
          <p className="hidden mt-1">
            You know that feeling when you are waiting on the phone for hours to
            contact your supplier? Sometimes they even have a waiting time music
            prepared for that. In Dunder Mifflin, you can get help immediately,
            and each of our customers receives an individual assistant. For us,
            companies are people - not numbers, so we take care of each of them.
          </p>
        </div>
        <div className="p-4 mb-2 border-b">
          <button className="flex w-full text-left">
            <span className="flex-grow font-semibold">
              When I will receive the products?
            </span>
            <FaChevronDown className="w-12" />
          </button>
          <p className="hidden mt-1">
            If you buy one of our business plans, you will receive the supplies
            every first Monday of the month. However, you can also purchase
            paper separately. Our employees will make sure that you will receive
            the products in the next business days.
          </p>
        </div>
        <div className="p-4 mb-2 border-b">
          <button className="flex w-full text-left">
            <span className="flex-grow font-semibold">
              How long does it take to finalize the deal?
            </span>
            <FaChevronDown className="w-12" />
          </button>
          <p className="hidden mt-1">
            The whole process depends on your decision. If you sign the contract
            immediately, we can start official cooperation in the next two
            business days.
          </p>
        </div>
      </div>
    </section>
  );
}
