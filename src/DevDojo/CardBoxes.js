import React from "react";

export default function CommentSection() {
  return (
    <article className="flex flex-col items-center justify-center h-screen bg-gray-100 sm:flex-row">
      <section className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
          <img
            className="h-56 rounded-t-lg"
            alt="article"
            src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
          />
          <div className="px-6 pt-4 mb-2 text-xl font-bold">
            <span>Introduction to HTML</span>
          </div>
          <div className="px-6 pt-2">
            <small>John Doe | 2020-10-06</small>
            <div className="overflow-hidden h-16 ...">
              HTML Introduction for beginner.
            </div>
          </div>
          <div className="px-6 pb-4">
            <a
              href="/"
              className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full"
            >
              #HTML
            </a>
            <a
              href="/"
              className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full"
            >
              #CSS
            </a>
            <a
              href="/"
              className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full"
            >
              #Web
            </a>
          </div>
        </div>
      </section>

      <section className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
          <img
            className="h-56 rounded-t-lg"
            alt="article"
            src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80"
          />
          <div className="px-6 pt-4 mb-2 text-xl font-bold">
            <span>Introduction to HTML</span>
          </div>
          <div className="px-6 pt-2">
            <small>John Doe | 2020-10-06</small>
            <div className="overflow-hidden h-16 ...">
              HTML Introduction for beginner.
            </div>
          </div>
          <div className="px-6 pb-4">
            <a
              href="/"
              className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full"
            >
              #HTML
            </a>
            <a
              href="/"
              className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full"
            >
              #CSS
            </a>
            <a
              href="/"
              className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full"
            >
              #Web
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
