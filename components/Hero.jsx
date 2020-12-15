import React from "react";
import Image from "next/image";
import Logo from "../public/Indexed Logo.png";
import Background from "../public/Mask.png";

function Hero() {
  return (
    <div
      className=" "
      style={{
        backgroundImage: `linear-gradient(rgba(254, 242, 242,0.6),rgba(254, 242, 242,0.6)),url(${Background})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <div className="container mx-auto py-4">
        {" "}
        <div className=" pt-5 flex justify-between items-center">
          <div className="pl-4 sm:pl-0">
            <Image src={Logo} alt="Logo" width={140} height={28} />
          </div>
          <div className=" hidden sm:block flex items-center ">
            <span className="mx-3 cursor-pointer text-gray-400 hover:text-gray-600 font-medium transition-all">
              Home
            </span>
            <span className="mx-3 cursor-pointer text-gray-400 hover:text-gray-600 font-medium transition-all">
              Pricing
            </span>
            <span className="mx-3 cursor-pointer text-gray-400 hover:text-gray-600 font-medium transition-all">
              Newsletter
            </span>
            <button className="mx-4 cursor-pointer text-white font-medium bg-indigo-600 px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition-all">
              Sign Up
            </button>
          </div>
        </div>
        <div className="mx-auto py-32">
          <h1 className="text-center text-5xl font-semibold   ">
            Pricing made easy.
          </h1>
          <p className="text-center mt-6 text-gray-500">
            Transparent pricing to help you make the right choice. With{" "}
            <span className="text-green-500 ">
              30 days <br /> money back guarantee
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
