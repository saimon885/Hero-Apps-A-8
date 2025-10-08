import React, { use, useState } from "react";
import SingleApp from "./SingleApp";
import errorMsg from "../../assets/App-Error.png"
const Allapps = ({ homeData }) => {
  const [search, setSearch] = useState("");
  const Apps = use(homeData);
  const term = search.trim().toLowerCase()
  const searchApps = term ?  Apps.filter(Appd => Appd.title.toLowerCase().includes(term)): Apps;
  console.log(searchApps);

  return (
    <div>
      <div className="text-center mt-5 space-y-2 mx-5 md:mx-0">
        <h1 className="text-3xl font-semibold">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-5 mx-5 flex justify-between items-center">
        <div className="text-[18px] md:text-2xl font-semibold">({searchApps.length}) Apps Found</div>
        <div>
          <input
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-1 md:w-70"
            type="search"
            placeholder="search Apps"
            
          />
        </div>
      </div>
     {searchApps.length === 0 && term.length > 0 ? (
        <div className="my-10">
            <img className="mx-auto" src={errorMsg} alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-5">
          {searchApps.map((app) => (
            <SingleApp key={app.id} app={app}></SingleApp>
          ))}
        </div>
      )}
    </div>
  );
};

export default Allapps;
