import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full min-h-[80vh] flex justify-center item-center">
        <div className="w-[90%]  flex md:flex-row flex-col md:justify-between justify-center gap-7 md:gap-0  items-center ">
          <div className="text-black md:w-[50%] w-full flex flex-col items-center md:items-start mb-2 md:mb-0 gap-9">
            <div>
            <h1 className="md:text-[2.5rem] text-[1.6rem] font-bold ">Welcome To Our Website</h1>
            <p className="text-[1.3rem] md:text-[1.6rem] font-normal text-[#4C4C4C] mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard
            </p>
            </div>
             <div>
            <button className="text-white font-normal py-[14px] px-[30px] rounded-md bg-black">Contact US</button>
          </div>
          </div>
          <div>
            <Image
            src="/img.svg"
            alt="img"
            width={"402"}
            height={"465"}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
