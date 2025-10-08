import React from "react";
import Error from "../../assets/error-404.png";
import { useNavigate } from "react-router";
const ErrorElement = () => {
    const navigate = useNavigate()
  return (
    <div className="text-center my-10 space-y-3">
      <img className="mx-auto w-[300px]" src={Error} alt="" />
      <h1 className="text-4xl font-semibold">Oops, page not found!</h1>
      <p>
       The page you are looking for is not available.
      </p>
      <button onClick={()=> navigate(-1)} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded">Go Back!</button>
    </div>
  );
};

export default ErrorElement;
