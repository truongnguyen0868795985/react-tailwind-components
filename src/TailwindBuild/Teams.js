import React from "react";

export default function Teams() {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-4xl mb-2 leading-tight font-heading">
        Dunder Mifflin Family
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-gray-500">
        Because no great company could exist without accountants, sellers, stock
        workers, and of course - paper.
      </p>
      <div className="flex flex-wrap -mx-8">
        <div className="md:w-1/3 p-8">
          <img
            className="w-1/3 mx-auto mb-4 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
            alt=""
          />
          <h3 className="text-xl font-heading">Karen Filippelli</h3>
          <span>Regional Manager</span>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Started as a Sales representative at Stamford branch, moved to
            Scranton. All of us left as soon as possible except for Andy.
          </p>
        </div>
        <div className="md:w-1/3 p-8 md:border-l">
          <img
            className="w-1/3 mx-auto mb-4 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
            alt=""
          />
          <h3 className="text-xl font-heading">Darryl Philbin</h3>
          <span>Marketing Director</span>
          <p className="mt-4 text-gray-500 leading-relaxed">
            The warehouse is not a piece of cake, man. I started there as an
            Assistant and finally got a promotion to the Marketing Director.
          </p>
        </div>
        <div className="md:w-1/3 p-8 md:border-l">
          <img
            className="w-1/3 mx-auto mb-4 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
            alt=""
          />
          <h3 className="text-xl font-heading">Kelly Kapoor</h3>
          <span>Customer Service</span>
          <p className="mt-4 text-gray-500 leading-relaxed">
            I work for Dunder Mifflin for a few years now. I learned a lot. You
            know, one person department is not easy to manage.
          </p>
        </div>
      </div>
    </section>
  );
}
