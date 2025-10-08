import React from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../../assets/icon-downloads.png";
import star from "../../../assets/icon-ratings.png";
import like from "../../../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Details = () => {
  const { id } = useParams();
  const convid = parseInt(id);
  const AppsAll = useLoaderData();
  const singleApp = AppsAll.find((app) => app.id === convid);
  //   console.log(singleApp);
  const {
    title,
    image,
    ratingAvg,
    reviews,
    downloads,
    companyName,
    size,
    ratings,
    description,
  } = singleApp;
  // console.log(ratings);
  const chartData = ratings.slice().reverse();
  console.log(chartData);

  return (
    <div>
      <div className="my-5 mx-10 md:flex items-center gap-15 h-auto border-b pb-7 border-[#C9B7CB]">
        <div className="">
          <img
            className="md:w-[300px] mx-auto md:mx-0 h-[220px] p-4 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="paa space-y-4 w-full">
          <div className="space-y-3 border-b border-[#C9B7CB] pb-4">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <h2>
              Developed by{" "}
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </h2>
          </div>
          <div className="flex gap-10">
            <div>
              <img className="w-[30px]" src={download} alt="" />
              <h2>Downloads</h2>
              <h1 className="font-bold text-2xl">{downloads}M</h1>
            </div>
            <div>
              <img className="w-[30px]" src={star} alt="" />
              <h2>Average Ratings</h2>
              <h1 className="font-bold text-2xl">{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-[30px]" src={like} alt="" />
              <h2>Total Reviews</h2>
              <h1 className="font-bold text-2xl">{reviews}K</h1>
            </div>
          </div>
          <button className="btn bg-[#00D390] text-white font-semibold">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold ml-10">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
          >
            <YAxis dataKey="name" type="category" stroke="#666" />

            <XAxis
              type="number"
              tickFormatter={(value) => `${value / 100000}`}
            />

            <Tooltip
              formatter={(value) => [
                `${value.toLocaleString()} ratings`,
                "Count",
              ]}
            />

            <Bar dataKey="count" fill="#FF8811" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-5 mx-8 mb-10">
        <h1 className="text-2xl font-semibold">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default Details;
