"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import HeroSection from "./landing-page-components/HeroSection";
import HeaderSection from "./landing-page-components/HeaderSection";
import FooterSection from "./landing-page-components/FooterSection";
import LogoCloud from "./landing-page-components/LogoCloud";

function page() {
  return (
    <>
      {/* <div className="">
        <div className="flex  overflow-auto justify-center ">
          <main className=" p-4">
            <div className="text-7xl mt-10 text-gray-900 font-semibold underline underline-offset-8">
              The one stop solution for all your needs!
            </div>
            <div className="text-3xl mt-8 text-gray-900  font-semibold ">
              Society App, a comprehensive software solution for managing all
              your real estate projects.
            </div>
          </main>
        </div>
        <div className="bg-gray-900 flex items-center justify-between absolute bottom-0 h-[5rem] w-screen overflow-x-hidden  px-6 py-2">
          <div className="text-gray-100">Contact: +91-9876543210</div>
          <div>
            <div className="flex justify-end">
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
        </div>
      </div> */}
      <HeroSection />
      <LogoCloud />
      <HeaderSection />
      <FooterSection />
    </>
  );
}

export default page;
