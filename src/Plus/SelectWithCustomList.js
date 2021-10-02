import React from "react";

export default function SelectWithCustomList() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center h-64">
        <div className="w-full px-4">
          <div className="flex flex-col items-center relative">
            <section className="w-full">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <div className="flex flex-auto flex-wrap"></div>
                <input
                  placeholder="Search by position"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </section>

            <section
              style={{ top: "100%", maxHeight: "300px" }}
              className="absolute shadow bg-white z-40 w-full left-0 rounded overflow-y-auto svelte-5uyqqj"
            >
              <div className="flex flex-col w-full">
                <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                  <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div className="w-6 flex flex-col items-center">
                      <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                        <img
                          className="rounded-full"
                          alt="A"
                          src="https://randomuser.me/api/portraits/men/62.jpg"
                        />{" "}
                      </div>
                    </div>
                    <div className="w-full items-center flex">
                      <div className="mx-2 -mt-1  ">
                        Jack jhon
                        <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                          CEO &amp; managin director
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                  <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div className="w-6 flex flex-col items-center">
                      <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                        <img
                          className="rounded-full"
                          alt="A"
                          src="https://randomuser.me/api/portraits/men/65.jpg"
                        />{" "}
                      </div>
                    </div>

                    <div className="w-full items-center flex">
                      <div className="mx-2 -mt-1 w-1/2 ">
                        Brian White
                        <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                          CTO &amp; technical manager
                        </div>
                      </div>
                      <div className="w-1/2 flex">
                        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-green-700 bg-green-100 border border-green-300 ">
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            Hiring!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
