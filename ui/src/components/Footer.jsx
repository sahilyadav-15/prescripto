import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Your trusted healthcare platform connecting patients with qualified
            doctors. We provide seamless appointment booking and reliable
            medical consultations.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                navigate("/privacy");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 1800 3249 46</li>
            <li>contact@prescripto.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
