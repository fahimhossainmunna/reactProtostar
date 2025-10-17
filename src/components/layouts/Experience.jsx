import React from "react";
import Container from "../Container";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";

const Experience = () => {
  return (
    <div className="bg-[url('/images/bb1.png')] bg-no-repeat bg-cover bg-center w-full py-[60px] md:py-[100px]">
      <Container>
        <div className="text-center md:text-left px-4">
          <h3 className="text-[#5E3BEE] font-medium text-[14px] md:text-[16px] font-pop">
            GRAPHIC DESIGNER
          </h3>

          <h1 className="text-[#333333] font-bold text-[32px] sm:text-[42px] md:text-[60px] font-pop md:w-[479px] leading-[44px] sm:leading-[56px] md:leading-[78px] pt-[25px] md:pt-[55px] pb-[30px] md:pb-[60px]">
            Graphic Designer With 10 Years Of Experience.
          </h1>

          <p className="text-[#333333] text-[14px] sm:text-[15px] md:text-[16px] font-pop leading-[26px] sm:leading-[28px] md:leading-[32px] md:w-[584px] m-auto md:m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit velit, at dictum nisl.
          </p>

          <Button
            className={
              "flex items-center justify-center md:justify-start gap-x-2 mt-6 py-[12px] sm:py-[14px] md:py-[15px] px-[25px] sm:px-[30px] rounded-[25px] font-pop text-[13px] sm:text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
            }
          >
            CONTACT ME <AiOutlineMail className="text-[18px]" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
