import React from "react";

export default function FAQ2() {
  return (
    <section className="min-h-screen text-gray-700 bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-1 text-2xl font-bold text-center text-gray-800 sm:text-3xl title-font">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            The most common questions about how our{" "}
            <span className="border-b-4 border-yellow-400">application</span>
            works.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          <div className="w-full px-4 py-2 lg:w-1/2">
            <details className="mb-4 bg-gray-100 transition-all">
              <summary className="px-4 py-2 font-semibold bg-gray-300 rounded-md cursor-pointer">
                How does it work?
              </summary>

              <p className="px-4 py-2">
                Our platform works with your content to provides insights and
                metrics on how you can grow your business and scale your
                infastructure.
              </p>
            </details>
            <details className="mb-4 bg-gray-100">
              <summary className="px-4 py-2 font-semibold bg-gray-300 rounded-md cursor-pointer">
                How do I make changes and configure my site?
              </summary>

              <p className="px-4 py-2">
                You can easily change your site settings inside of your site
                dashboard by clicking the top right menu and clicking the
                settings button.
              </p>
            </details>
          </div>
          <div className="w-full px-4 py-2 lg:w-1/2">
            <details className="mb-4 bg-gray-100">
              <summary className="px-4 py-2 font-semibold bg-gray-300 rounded-md cursor-pointer">
                Do you offer team pricing?
              </summary>

              <p className="px-4 py-2">
                Yes, we do! Team pricing is available for any plan. You can take
                advantage of 30% off for signing up for team pricing of 10 users
                or more.
              </p>
            </details>
            <details className="mb-4 bg-gray-100">
              <summary className="px-4 py-2 font-semibold bg-gray-300 rounded-md cursor-pointer">
                How do I add a custom domain?
              </summary>

              <p className="px-4 py-2">
                You can easily change your site settings inside of your site
                dashboard by clicking the top right menu and clicking the
                settings button.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
