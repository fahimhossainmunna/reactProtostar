import React from "react";
import Container from "../Container";
import Image from "../Image";
import avator from "/src/assets/Avatar.png";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";
import { GoDownload } from "react-icons/go";

const Banner = () => {
  return (
    <>
      <div className="bg-[#F9F9FC] pt-[20px] pb-[45px]">
        <Container>
          {/* Responsive Flex */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
            
            {/* Left Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-[#5E3BEE] font-medium text-[16px] font-pop pt-[40px] md:pt-[100px]">
                SAKIB AL HASAN
              </h3>

              <h1 className="text-[#333333] font-bold text-[32px] sm:text-[40px] md:text-[60px] font-pop md:w-[479px] leading-[42px] sm:leading-[55px] md:leading-[78px] pt-[25px] md:pt-[55px] pb-[30px] md:pb-[60px]">
                Hello, my name’s Sakib. I’m MERN Stack Developer.
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                <Button
                  className={
                    "flex items-center gap-x-2 py-[12px] md:py-[15px] px-[25px] md:px-[30px] rounded-[25px] font-pop text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
                  }
                >
                  CONTACT ME <AiOutlineMail />
                </Button>

                <Button
                  className={
                    "flex items-center gap-x-2 py-[12px] md:py-[15px] px-[25px] md:px-[30px] rounded-[25px] font-pop text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
                  }
                >
                  <GoDownload /> DOWNLOAD CV
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-[80%] sm:w-[70%] md:w-1/2 mx-auto md:mx-0">
              <Image imgSrc={avator} className={"w-full"} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
