import React, { use } from "react";
import Banner from "../Banner/Banner";
import SingleData from "./SingleData";
import { Link } from "react-router";

const Home = ({ homeData }) => {
  const allApps = use(homeData);
  const appSlice = allApps.slice(0, 8);
  // console.log(appSlice);
  // console.log(allApps);
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="text-center mt-10">
          <h1 className="text-3xl font-semibold">Trending Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-10">
          {appSlice.map((apps) => (
            <SingleData key={apps.id} apps={apps}></SingleData>
          ))}
        </div>
        <div className="text-center mb-10">
           <Link to={"/apps"}> <span className="btn px-7 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded">Show All</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
