import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterSection = () => {
  return (
    <div className=" flex justify-around p-8 mb-10">
      <div>
        <div className="py-2">Contact: +91-9876543210</div>
        <div className="flex">
          <div className=" hover:text-gray-400 pr-2 ">
            <FacebookIcon />
          </div>
          <div className=" hover:text-gray-400 px-2 ">
            <XIcon />
          </div>
          <div className=" hover:text-gray-400 px-2 ">
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold py-3">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
      <div>
        <div className="font-semibold py-3">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
      <div>
        <div className="font-semibold py-3">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
      <div>
        <div className="font-semibold py-3">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
    </div>
  );
};

export default FooterSection;
