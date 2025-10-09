// import React, { useState } from "react";
import downloadSymb from "../../../assets/icon-downloads.png";
import ratingsymb from "../../../assets/icon-ratings.png";
// import { remobeToStorege } from "../../../Utility/AddtoAdd";
import { toast, ToastContainer } from "react-toastify";
const INstalldPage = ({ apps }) => {
  // console.log(apps);
    // const [isuninstall, setuninstall] = useState(false);
  const hanleUninstall = () => {
    toast(`${title} Uninstall Successfully`);
    // remobeToStorege(id);
  };

  
  const { title, image, ratingAvg, downloads, size } = apps;
  return (
    <div>
        <div className="flex justify-between rounded-2xl shadow bg-white px-3 mt-4 mb-3 items-center py-2">
      <div className="prt flex gap-4 items-center">
        <div className="bg-[#D9D9D9] p-2 rounded">
          <img className="w-[40px]" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#001931]">{title}</h1>
          <div className="flex gap-4 mt-2">
            <span className="flex gap-1">
              <img
                className="w-[15px] object-contain"
                src={downloadSymb}
                alt=""
              />
              <p className="font-bold text-[#00D390]">{downloads}</p>
            </span>
            <span className="flex gap-1">
              <img
                className="w-[15px] object-contain"
                src={ratingsymb}
                alt=""
              />
              <p className="font-bold text-[#FF8811]">{ratingAvg}</p>
            </span>
            <span>
              <p className="font-semibold text-[#627382]">{size} MB</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => hanleUninstall()}
          className="btn font-semibold bg-[#00D390] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </div>

  );
};

export default INstalldPage;
