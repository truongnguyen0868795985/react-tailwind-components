import React from "react";

export default function LatestPost() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl text-center mb-8 font-heading">Latest posts</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div className="h-full pb-8 rounded shadow-md">
            <a href="/">
              <img
                className="mb-4"
                src="https://images.vexels.com/media/users/3/148316/raw/d610e614f0022951201b5d86dfe2cb30-office-illustration-with-workers.jpg"
                alt=""
              />
              <div className="px-6">
                <small>22 Oct 2019 | By Michael Scott</small>
                <h3 className="text-xl my-3 font-heading">
                  Being world’s best boss
                </h3>
                <p className="text-gray-500">
                  The wise man once said: "Friend first, boss second,
                  entertainer third". That man was me.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div className="h-full pb-8 rounded shadow-md">
            <a href="/">
              <img
                className="mb-4"
                src="https://st2.depositphotos.com/1006318/9040/v/450/depositphotos_90400742-stock-illustration-business-people-at-meeting-in.jpg"
                alt=""
              />
              <div className="px-6">
                <small>22 Oct 2019 | By Dwight K. Schrute</small>
                <h3 className="text-xl my-3 font-heading">
                  Understanding the paper
                </h3>
                <p className="text-gray-500">
                  So you think you know everything about paper? False, you know
                  nothing. Let me illuminate your first steps into my world.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div className="h-full pb-8 rounded shadow-md">
            <a href="/">
              <img
                className="mb-4"
                src="https://st2.depositphotos.com/1037238/6455/v/450/depositphotos_64553843-stock-illustration-people-working-in-the-office.jpg"
                alt=""
              />
              <div className="px-6">
                <small>22 Oct 2019 | By Jim Halpert</small>
                <h3 className="text-xl my-3 font-heading">
                  Dwight doesn’t understand the paper
                </h3>
                <p className="text-gray-500">
                  Read it and finally find out that Dwight Schrute is merely a
                  scammer.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
