import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import bannerImg from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto w-full px-3 md:px-0 md:w-[60%] text-center space-y-4">
        <h1 className="font-bold text-[#192F45] text-5xl">
          We Build <br /> <span className="text-[#915DED]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center gap-3 justify-center">
          <a href="https://play.google.com" target="blank">
            {" "}
            <button className="btn font-semibold">
              <span className="text-2xl">
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  style={{ color: "#0b7f22" }}
                />
              </span>{" "}
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="blank">
            <button className="btn font-semibold">
              <span className="text-2xl">
                <FontAwesomeIcon
                  icon={faAppStoreIos}
                  style={{ color: "#024fd4" }}
                />
              </span>{" "}
              App Store
            </button>
          </a>
        </div>
        <img className="w-[500px] mx-auto" src={bannerImg} alt="" />
      </div>
      <div className="w-full text-center py-10 text-white bg-linear-to-t from-[#9F62F2] to-[#632EE3]  space-y-6">
        <h1 className=" text-3xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="parents mx-auto px-3 md:px-0 md:w-[70%] flex flex-wrap md:flex-row md:gap-20 justify-center items-center gap-10">
            <div className="space-y-4">
                <h2>Total Downloads</h2>
                <h1 className="text-5xl font-semibold">29.6M</h1>
                <h2>21% more than last month</h2>
            </div>
            <div className="space-y-4">
                <h2>Total Downloads</h2>
                <h1 className="text-5xl font-semibold">29.6M</h1>
                <h2>21% more than last month</h2>
            </div>
            <div className="space-y-4">
                <h2>Total Downloads</h2>
                <h1 className="text-5xl font-semibold">29.6M</h1>
                <h2>21% more than last month</h2>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
