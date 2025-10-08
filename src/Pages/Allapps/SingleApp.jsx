import React from 'react';
import downloadImg from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
const SingleApp = ({app}) => {
    // console.log(app);
    const { title, image, ratingAvg, reviews } = app;
      return (
        <div className="card bg-base-100 shadow-sm cursor-pointer">
          <figure>
            <img
              className="w-[200px] h-[210px] p-4 object-cover"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions flex justify-between">
              <div className="bg-[#E4E8DC] px-3 py-1 flex gap-2 cursor-pointer rounded">
                <img className="w-[16px] object-contain" src={downloadImg} alt="" />
                <span className="text-[#00D390] font-semibold"> {reviews}M</span>
              </div>
              <div className="bg-[#FFF0E1] px-3 py-1 flex gap-2 cursor-pointer rounded">
                <img
                  className="w-[20px] h-auto object-contain"
                  src={rating}
                  alt=""
                />
                <span className=" text-[#FF8811] font-semibold"> {ratingAvg}</span>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SingleApp;