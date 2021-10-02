import React from "react";

export default function Error404() {
  return (
    <section className="py-8 px-4 text-center">
      <div className="max-w-auto md:max-w-lg mx-auto">
        <img
          className="mb-8"
          src="https://miro.medium.com/max/1200/1*9HFCpxhVrnPAlgdrKhOXdg.png"
          alt=""
        />
        <h2 className="text-5xl mb-2 font-heading">Page not found</h2>
        <p className="mb-6 text-gray-500">
          Dunder Mifflin is the place where all the paper enthusiastic met one
          day and started selling supplies with true love.
        </p>
        <div>
          <a className="px-4 text-blue-700 hover:underline" href="/">
            Link1
          </a>
          <a className="px-4 text-blue-700 hover:underline" href="/">
            Link1
          </a>
          <a className="px-4 text-blue-700 hover:underline" href="/">
            Link1
          </a>
          <a className="px-4 text-blue-700 hover:underline" href="/">
            Link1
          </a>
        </div>
      </div>
    </section>
  );
}
