import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
   <div className="bg-[#001931]">
     <footer className="footer sm:footer-horizontal  text-neutral-content p-10 border-white">
      <nav>
        <div className="flex">
          <img className="w-[28px] md:w-[35px]" src={logo} alt="" />
          <div className="text-[18px] md:text-2xl font-semibold text-[#632EE3]">
            HERO.IO
          </div>
        </div>
        <p className="md:w-[300px] md:text-justify">
          The modern application begins as a simple idea, then transforms
          through complex code. Developers tirelessly design, test, and debug to
          ensure seamless functionality. Ultimately, a successful app delivers
          exceptional user experience, driving daily engagement and becoming an
          indispensable tool for millions globally.
        </p>
      </nav>
      <nav>
        <h6 className="footer-title text-2xl">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Development</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-2xl">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="">
        <h6 className="footer-title text-2xl">Socal Link</h6>
       <div className="flex gap-3">
         <a className="link link-hover text-[18px]">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="link link-hover text-[18px]"><FontAwesomeIcon icon={faInstagram} /></a>
        <a className="link link-hover text-[18px]"><FontAwesomeIcon icon={faXTwitter} /></a>
       </div>
      </nav>
    </footer>
    <div className="border-t mx-5 border-amber-50 -mt-7">
      <h1 className="text-center text-white pb-5 pt-2">Copyright © 2025 - All right reserved</h1>
    </div>
   </div>
  );
};

export default Footer;
