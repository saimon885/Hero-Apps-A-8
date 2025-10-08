import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
const SingleData = ({ apps }) => {
//   console.log(apps);
  const { title, image, ratingAvg, reviews } = apps;
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

export default SingleData;
// companyName
// :
// "Spotify AB"
// description
// :
// "Stream music and podcasts from millions of artists worldwide."
// downloads
// :
// 1000000000
// id
// :
// 1
// image
// :
// "https://i.ibb.co.com/tMwhyL0g/Spotify.webp"
// ratingAvg
// :
// 4.4
// ratings
// :
// Array(5)
// 0
// :
// {name: '1 star', count: 200000}
// 1
// :
// {name: '2 star', count: 300000}
// 2
// :
// {name: '3 star', count: 800000}
// 3
// :
// {name: '4 star', count: 2400000}
// 4
// :
// {name: '5 star', count: 10000000}
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)
// reviews
// :
// 13800000
// size
// :
// 45
// title
// :
// "Spotify"
