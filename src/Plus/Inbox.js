import React from "react";

export default function Inbox() {
  return (
    <article className="h-screen flex flex-col">
      <header className="flex flex-shrink-0">
        <div className="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
          <button className="block w-full flex items-center">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
              alt="profile foto"
            />
            <span className="ml-4 mr-2 text-sm font-medium text-white">
              Akanbi Lawal
            </span>
            <svg
              className="ml-auto h-6 w-6 stroke-current text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 10l-4 4-4-4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center px-6 justify-between bg-gray-700">
          <nav className="flex">
            <a
              href="/"
              className="ml-2 text-sm px-3 py-2 leading-none rounded-lg inline-block font-medium text-white hover:bg-gray-600 bg-gray-800"
            >
              Mailbox
            </a>
            <a
              href="/"
              className="ml-2 text-sm px-3 py-2 leading-none rounded-lg inline-block font-medium text-white hover:bg-gray-600"
            >
              Customers
            </a>
            <a
              href="/"
              className="ml-2 text-sm px-3 py-2 leading-none rounded-lg inline-block font-medium text-white hover:bg-gray-600"
            >
              Reporting
            </a>
            <a
              href="/"
              className="ml-2 text-sm px-3 py-2 leading-none rounded-lg inline-block font-medium text-white hover:bg-gray-600"
            >
              Manage
            </a>
          </nav>
          <div className="flex">
            <div className="relative py-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-5 w-5 fill-current text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.293 16.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414z"
                  />
                </svg>
              </span>
              <input
                className="block pl-10 pr-4 py-2 w-64 bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-700 focus:text-gray-900 focus:outline-none"
                placeholder="Search"
              />
            </div>
            <button className="ml-5 text-gray-400 hover:text-gray-200">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 0a2 2 0 00-2 2v.341C3.67 3.165 2 5.388 2 8v5H1a1 1 0 100 2h14a1 1 0 100-2h-1V8a6.002 6.002 0 00-4-5.659V2a2 2 0 00-2-2zM8 18a2 2 0 01-2-2h4a2 2 0 01-2 2z" />
              </svg>
            </button>
            <button className="ml-5 text-gray-400 hover:text-gray-200">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.086-8.724c-.084.56.392 1.022.958 1.022h.47a.525.525 0 00.524-.492c.057-.526.283-.986.676-1.379l.63-.62c.492-.495.836-.944 1.033-1.347.197-.409.295-.842.295-1.299 0-1.005-.303-1.782-.909-2.33C13.985 6.277 13.133 6 12.035 6c-1.088 0-1.947.29-2.58.871a2.84 2.84 0 00-.793 1.28c-.184.604.36 1.131.99 1.131.534 0 .933-.435 1.304-.84.052-.057.103-.114.154-.168.234-.247.542-.37.925-.37.808 0 1.212.454 1.212 1.362 0 .301-.078.589-.233.863-.155.269-.469.621-.94 1.056-.466.43-.787.869-.964 1.315-.087.221-.152.48-.196.776zm.057 2.611c-.233.231-.35.527-.35.887 0 .355.114.648.342.88.233.23.539.346.917.346s.68-.116.909-.347c.233-.231.35-.524.35-.879 0-.36-.12-.656-.358-.887-.233-.237-.534-.355-.901-.355-.368 0-.671.118-.91.355z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 p-6 bg-gray-100 overflow-y-auto">
          <nav>
            <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Mailboxes
            </h2>

            <div className="mt-3">
              <a
                href="/"
                className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
              >
                <span className="inline-flex align-baseline">
                  <span className="leading-normal">
                    <i className="fas fa-inbox h-5 w-5 fill-current text-gray-700 "></i>
                  </span>
                  <span className="ml-2 text-gray-900">Inbox</span>
                </span>
                <span className="w-10 text-center py-1 text-xs font-semibold rounded-full text-gray-700 bg-gray-300">
                  6
                </span>
              </a>
              <a
                href="/"
                className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
              >
                <span className="inline-flex align-baseline">
                  <span className="leading-normal">
                    <i className="far fa-flag h-5 w-5 fill-current text-gray-500 "></i>
                  </span>
                  <span className="ml-2 text-gray-700">Flagged</span>
                </span>
              </a>
              <a
                href="/"
                className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
              >
                <span className="inline-flex align-baseline">
                  <span className="leading-normal">
                    <i className="far fa-edit h-5 w-5 fill-current text-gray-500 "></i>
                  </span>
                  <span className="ml-2 text-gray-700">Drafts</span>
                </span>
                <span className="w-10 text-center py-1 text-xs font-semibold rounded-full text-gray-700 bg-gray-300">
                  2
                </span>
              </a>
              <a
                href="/"
                className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
              >
                <span className="inline-flex align-baseline">
                  <span className="leading-normal">
                    <i className="far fa-user-circle h-5 w-5 fill-current text-gray-500 "></i>
                  </span>
                  <span className="ml-2 text-gray-700">Assigned</span>
                </span>
                <span className="w-10 text-center py-1 text-xs font-semibold rounded-full text-gray-700 bg-gray-300">
                  1
                </span>
              </a>
              <a
                href="/"
                className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
              >
                <span className="inline-flex align-baseline">
                  <span className="leading-normal">
                    <i className="far fa-check-circle h-5 w-5 fill-current text-gray-500 "></i>
                  </span>
                  <span className="ml-2 text-gray-700">Closed</span>
                </span>
              </a>
              <a
                href="/"
                className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
              >
                <span className="inline-flex align-baseline">
                  <span className="leading-normal">
                    <i className="fas fa-trash h-5 w-5 fill-current text-gray-500 "></i>
                  </span>
                  <span className="ml-2 text-gray-700">Junk</span>
                </span>
              </a>
            </div>

            <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Folders
            </h2>
            <div className="mt-4">
              <a href="/" className=" block text-sm font-medium text-gray-700">
                Refunds
              </a>
              <a
                href="/"
                className="mt-4 block text-sm font-medium text-gray-700"
              >
                Discounts
              </a>
              <a
                href="/"
                className="mt-4 block text-sm font-medium text-gray-700"
              >
                Bugs
              </a>
            </div>
          </nav>
        </div>
        <main className="flex-1 flex bg-gray-200">
          <div className="relative flex flex-col w-full max-w-xs flex-grow border-l border-r bg-gray-200">
            <div className="flex-shrink-0 px-4 py-2 border-b flex items-center justify-between">
              <button className="flex items-center text-xs font-semibold text-gray-600">
                Sorted by Date
                <span className="leading-loose h-6 w-6 stroke-current text-gray-500">
                  <i className="fas fa-chevron-down ml-1"></i>
                </span>
              </button>
              <button>
                <span className=" h-6 w-6 stroke-current text-gray-500">
                  <i className="fas fa-sort-amount-up"></i>
                </span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <a href="/" className="block px-6 pt-3 pb-4 bg-white">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
              <a href="/" className="block px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Masturah Adam
                  </span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus element...
                </p>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col w-0">
            <div className="relative shadow-md">
              <div className="flex items-center px-5 py-4 justify-between bg-gray-100 border-b">
                <div className="flex items-center">
                  <button>
                    <span className="leading-normal">
                      <i className="fas fa-reply h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                    </span>
                  </button>
                  <button className="ml-6">
                    <span className="leading-normal">
                      <i className="fas fa-tag h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                    </span>
                  </button>
                  <button className="ml-6">
                    <span className="leading-normal">
                      <i className="far fa-user-circle h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                    </span>
                  </button>
                  <button className="ml-6">
                    <span className="leading-normal">
                      <i className="fas fa-file-download text-2xl fill-current text-gray-600 "></i>
                    </span>
                  </button>
                  <button className="ml-4">
                    <span className="leading-normal">
                      <i className="fas fa-ellipsis-h h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                    </span>
                  </button>
                </div>
                <div className="flex items-center">
                  <button>
                    <span className="leading-normal">
                      <i className="fas fa-chevron-up h-8 w-8 text-2xl stroke-current text-gray-600"></i>
                    </span>
                  </button>
                  <button>
                    <span className="leading-normal">
                      <i className="fas fa-chevron-down h-8 w-8 text-2xl stroke-current text-gray-600"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-3 bg-white">
                <h3 className="text-xl text-gray-900 truncate">
                  Re: Student discount? this is really long and has to wrap and
                  looks stupid this is really long and has to wrap and looks
                  stupid
                </h3>
                <div className="ml-4 flex-shrink-0">
                  <span>#1428</span>
                  <span className="ml-2 text-sm font-semibold text-green-900 bg-green-200 rounded-full leading-none px-2 py-1">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 flex-1 overflow-y-auto">
              <article className="px-10 pt-6 pb-8 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Masturah Adam</span>
                    <span className="text-gray-600">wrote</span>
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600">
                      Yesterday at 7:24 AM
                    </span>
                    <img
                      className="ml-5 h-8 w-8 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.5&w=144&q=60"
                      alt="uns"
                    />
                  </div>
                </div>
                <div className="mt-6 text-gray-800 text-sm">
                  <p>Thanks so much!! Can't wait to try it out :)</p>
                </div>
              </article>
              <article className="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Akanbi Lawal</span>
                    <span className="text-gray-600">wrote</span>
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600">
                      Yesterday at 7:24 AM
                    </span>
                    <img
                      className="ml-5 h-8 w-8 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                      alt="unsplas"
                    />
                  </div>
                </div>
                <div className="mt-6 text-gray-800 text-sm">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="mt-4 font-semibold text-gray-900">
                    Akanbi Lawal
                  </p>
                  <p>Customer Service</p>
                </div>
              </article>
              <article className="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Masturah Adam</span>
                    <span className="text-gray-600">wrote</span>
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600">
                      Yesterday at 7:24 AM
                    </span>
                    <img
                      className="ml-5 h-8 w-8 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.5&w=144&q=60"
                      alt="unsplass"
                    />
                  </div>
                </div>
                <div className="mt-6 text-gray-800 text-sm">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="mt-4 font-semibold text-gray-900">
                    Masturah Abiola
                  </p>
                  <p>Customer Service</p>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
    </article>
  );
}
