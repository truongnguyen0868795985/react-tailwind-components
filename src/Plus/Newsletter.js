import React from "react";

export default function Newsletter() {
  return (
    <main className="mx-auto px-4 bg-gray-800 w-full">
      <section className="py-8 px-3 -mx-4 lg:mx-0 text-center">
        <h2 className="text-3xl font-medium text-white mb-2">
          <span>
            Nuxt<span className="text-green-500">JS</span>
          </span>{" "}
          Newsletter
        </h2>
        <p className="mb-6 text-white">
          Get the latest Nuxt news to your inbox, curated by the NuxtJS team.
        </p>
        {/* form */}
        <form className="flex flex-row justify-center mb-4">
          <div>
            <label for="news-email" className="hidden">
              Email
            </label>
            <input
              type="email"
              required={true}
              placeholder="Email"
              className="border border-r-0 w-48 md:w-64 rounded py-3 px-4 font-medium rounded-r-none outline-none focus:border-primary-base"
            />
          </div>{" "}
          <input
            type="submit"
            className="cursor-pointer inline-block text-white bg-green-500 hover:bg-green-600 font-medium text-sm px-4 py-2 shadow uppercase rounded rounded-l-none hover:shadow-md text-base"
            value="Subscribe"
          />
        </form>{" "}
      </section>
    </main>
  );
}
