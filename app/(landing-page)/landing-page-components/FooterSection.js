import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterSection = () => {
  return (
    <div className="bg-gray-900 flex justify-around p-4 text-gray-100">
      <div>
        <div>Contact: +91-9876543210</div>
        <div className="flex">
          <div className="text-gray-100 mx-1 hover:text-gray-400">
            <FacebookIcon />
          </div>
          <div className="text-gray-100 mx-1 hover:text-gray-400">
            <XIcon />
          </div>
          <div className="text-gray-100 mx-1 hover:text-gray-400">
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
      <div>
        <div className="font-semibold">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
      <div>
        <div className="font-semibold">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
      <div>
        <div className="font-semibold">Support</div>
        <div>Pricing</div>
        <div>Documentation</div>
        <div>Guides</div>
      </div>
    </div>
  );
};

export default FooterSection;
