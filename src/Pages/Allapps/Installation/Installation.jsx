import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../../Utility/AddtoAdd";
import INstalldPage from "./INstalldPage";

const Installation = () => {
  const [appinstall, setAppinstall] = useState([]);
  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    const storeApp = getStoredApp();
    const convertStoreApp = storeApp.map((id) => parseInt(id));
    // console.log(typeof convertStoreApp[0]);
    const myInstalldApp = data.filter((appid) =>
      convertStoreApp.includes(appid.id)
    );
    setAppinstall(myInstalldApp);
  }, []);
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);
    if (type == "Low-High") {
      const LowTOHIgh = [...appinstall].sort(
        (a, b) => a.downloads - b.downloads
      );
      setAppinstall(LowTOHIgh);
    }
    if (type == "High-Low") {
      const HighToLow = [...appinstall].sort(
        (a, b) => b.downloads - a.downloads
      );
      setAppinstall(HighToLow);
    }
  };
  return (
    <div className="my-10 mx-5">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-semibold ">
          ({appinstall.length}) Apps Found.
        </h1>
        <div>
          <select className="select  w-full max-w-xs text-center font-medium shadow-sm">
            <option disabled selected className="text-gray-600">
              Sort By Size
            </option>
            <option onClick={() => handleSort("Low-High")}>Low-High</option>
            <option onClick={() => handleSort("High-Low")}>High-Low</option>
          </select>
        </div>
      </div>
      <div>
        {appinstall.map((apps) => (
          <INstalldPage key={apps.id} apps={apps}></INstalldPage>
        ))}
      </div>
    </div>
  );
};

export default Installation;
