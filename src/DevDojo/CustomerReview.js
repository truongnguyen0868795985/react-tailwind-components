import React from "react";

export default function CustomerReview() {
  return (
    <article className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
      <div className="flex justify-center max-w-sm mx-auto">
        <div className="flex flex-col items-start justify-between w-4/5 h-auto p-8 my-20 bg-white rounded-lg shadow-xl">
          <section className="mb-3">
            <h2 className="text-lg font-semibold">50 customer reviews</h2>
          </section>

          <section className="flex flex-row items-center justify-between w-full mb-1 text-sm">
            <span className="text-indigo-800">5 star</span>
            <span className="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
              <span className="block w-4/5 h-full bg-orange-400 rounded-lg"></span>
            </span>
            <span className="text-gray-600">80%</span>
          </section>
          <section className="flex flex-row items-center justify-between w-full mb-1 text-sm">
            <span className="text-indigo-800">4 star</span>
            <span className="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
              <span className="block w-2/4 h-full bg-orange-400 rounded-lg"></span>
            </span>
            <span className="text-gray-600">50%</span>
          </section>
          <section className="flex flex-row items-center justify-between w-full mb-1 text-sm">
            <span className="text-indigo-800">3 star</span>
            <span className="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
              <span className="block w-1/3 h-full bg-orange-400 rounded-lg"></span>
            </span>
            <span className="text-gray-600">33%</span>
          </section>
          <section className="flex flex-row items-center justify-between w-full mb-1 text-sm">
            <span className="text-indigo-800">2 star</span>
            <span className="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
              <span className="block w-1/12 h-full bg-orange-400 rounded-lg"></span>
            </span>
            <span className="text-gray-600">10%</span>
          </section>
          <section className="flex flex-row items-center justify-between w-full mb-1 text-sm">
            <span className="text-indigo-800">1 star</span>
            <span className="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
              <span className="block w-1/6 h-full bg-orange-400 rounded-lg"></span>
            </span>
            <span className="text-gray-600">16%</span>
          </section>

          <section className="mt-4">
            <h3 className="font-semibold text-md">Review this product</h3>
            <p className="text-sm tracking-tight text-gray-600">
              Share your reviews with our customers
            </p>
          </section>

          <section className="mt-4">
            <a
              href="/"
              className="px-4 py-1 text-sm font-normal border border-gray-400 rounded hover:bg-blue-500 hover:text-white hover:border-blue-600"
            >
              Write a review
            </a>
          </section>
        </div>
      </div>
    </article>
  );
}
