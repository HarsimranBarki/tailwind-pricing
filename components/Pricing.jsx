import React from "react";
import Image from "next/image";
import CheckWhite from "../public/checkmark-onwhite.png";
import CheckPurple from "../public/checkmark-onpurple.png";

function Pricing() {
  return (
    <div className="container py-10 flex mx-auto justify-evenly">
      <div className="border border-gray-300 rounded px-8 py-4">
        <div className="text-gray-900 font-medium">Starter Plan 👨</div>
        <div className="text-gray-900 mt-4 font-semibold text-3xl">
          $6.99/mo
        </div>
        <div className="text-gray-400 font-medium text-sm">
          $83.99 biled annually
        </div>
        <button className="py-3 px-20 font-medium mt-2 text-sm rounded shadow bg-blue-600 text-gray-100 hover:bg-blue-700 transition-all">
          Start Indexing{" "}
          <span className="hover:ml-4 inline-block"> &#x2192;</span>
        </button>

        <div className="mt-6 mb-6">
          {" "}
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">
              5000 indexed request per month
            </p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">1 team member only</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">.json export</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">No subdomains allowed</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">Queue enabled</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">20 avg response time</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 rounded px-8 py-4 bg-blue-600 text-white">
        <div className="text-white-900 font-medium">Advanced Plan 🤓</div>
        <div className="text-white-900 mt-4 font-semibold text-3xl">
          $12.99/mo
        </div>
        <div className="text-white-400 font-medium text-sm">
          $155.99 biled annually
        </div>
        <button className="py-3 px-20 font-medium mt-2 text-sm rounded shadow bg-white text-blue-700 hover:bg-blue-700 transition-all">
          Start Indexing{" "}
          <span className="hover:ml-4 inline-block"> &#x2192;</span>
        </button>

        <div className="mt-6 mb-6">
          {" "}
          <div className="flex items-center mt-2">
            <img src={CheckPurple} className="bg-white mr-4 rounded-full p-2" />
            <p className="text-white-900 text-sm">All starter plan features.</p>
          </div>
          <div className="flex items-center mt-2">
            <img src={CheckPurple} className="bg-white mr-4 rounded-full p-2" />
            <p className="text-white-900 text-sm">5 Team members.</p>
          </div>
          <div className="flex items-center mt-2">
            <img src={CheckPurple} className="bg-white mr-4 rounded-full p-2" />
            <p className="text-white-900 text-sm">.json and xml exports.</p>
          </div>
          <div className="flex items-center mt-2">
            <img src={CheckPurple} className="bg-white mr-4 rounded-full p-2" />
            <p className="text-white-900 text-sm">Subdomains allowed.</p>
          </div>
          <div className="flex items-center mt-2">
            <img src={CheckPurple} className="bg-white mr-4 rounded-full p-2" />
            <p className="text-white-900 text-sm">No Queue.</p>
          </div>
          <div className="flex items-center mt-2">
            <img src={CheckPurple} className="bg-white mr-4 rounded-full p-2" />
            <p className="text-white-900 text-sm">5 avg response time.</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 rounded px-8 py-4">
        <div className="text-gray-900 font-medium">Pro Plan 👿</div>
        <div className="text-gray-900 mt-4 font-semibold text-3xl">
          $20.99/mo
        </div>
        <div className="text-gray-400 font-medium text-sm">
          $440.99 biled annually
        </div>
        <button className="py-3 px-20 font-medium mt-2 text-sm rounded shadow bg-blue-600 text-gray-100 hover:bg-blue-700 transition-all">
          Start Indexing{" "}
          <span className="hover:ml-4 inline-block"> &#x2192;</span>
        </button>

        <div className="mt-6 mb-6">
          {" "}
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">All advance plan features.</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">Unlimited request per/mo.</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">All type file exports.</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">Subdomains allowed.</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">No Queue.</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src={CheckWhite}
              className="bg-blue-300 mr-4 rounded-full p-2"
            />
            <p className="text-gray-900 text-sm">Instant response.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
