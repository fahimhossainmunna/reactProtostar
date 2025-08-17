import React from "react";
import Container from "../Container";
import Image from "../Image";
import avator from "/src/assets/Avatar.png";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";
import { GoDownload } from "react-icons/go";

// =============
const Banner = () => {
  return (
    <>
      <div className="bg-[#F9F9FC] pt-[20px] pb-[45px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-1/2">
              <h3 className="text-[#5E3BEE] font-medium text-[16px] font-pop pt-[100px]">
                SAKIB AL HASAN
              </h3>
              <h1 className="text-[#333333] font-bold text-[60px] font-pop w-[479px] leading-[78px] pt-[55px] pb-[60px]">
                Hello, my name’s Sakib. I’m MERN Stack Developer.
              </h1>
              <div className="flex gap-x-3">
                <Button
                  className={
                    "flex items-center gap-x-2 py-[15px] px-[30px] rounded-[25px] font-pop text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
                  }
                >
                  CONTACT ME <AiOutlineMail />
                </Button>
                <Button
                  className={
                    "flex items-center gap-x-2 py-[15px] px-[30px] rounded-[25px] font-pop text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
                  }
                >
                  <GoDownload /> DOWNLOAD CV
                </Button>
              </div>
            </div>
            <div className="w-1/2">
              <Image imgSrc={avator} className={"w-full"} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
