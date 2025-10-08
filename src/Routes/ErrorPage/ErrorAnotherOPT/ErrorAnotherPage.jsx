import React from "react";
import DetailsError from "../../../assets/App-Error.png";
import { useNavigate } from "react-router";
const ErrorAnotherPage = () => {
    const navigate = useNavigate()
  return (
    <div className="text-center my-10 space-y-3">
      <img className="mx-auto w-[300px]" src={DetailsError} alt="" />
      <h1 className="text-4xl font-semibold">OPPS!! APP NOT FOUND</h1>
      <p>The App you are requesting is not found on our system.  please try another apps</p>
      <button onClick={()=> navigate(-1)} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded">Go back</button>
    </div>
  );
};

export default ErrorAnotherPage;
