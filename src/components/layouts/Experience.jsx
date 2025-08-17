import React from "react";
import Container from "../Container";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";

const Experience = () => {
  return (
    <div className="bg-[url('/images/bb1.png')] bg-no-repeat bg-cover bg-center w-full py-[100px]">
      <Container>
        <div className="">
          <h3 className="text-[#5E3BEE] font-medium text-[16px] font-pop">
            GRAPHIC DESIGNER
          </h3>
          <h1 className="text-[#333333] font-bold text-[60px] font-pop w-[479px] leading-[78px] pt-[55px] pb-[60px]">
            Graphic Designer With 10 Years Of Experience.
          </h1>
          <p className="text-[#333333] w-[584px] leading-[32px] text-[16px] font-pop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit velit, at dictum nisl.
          </p>
          <Button
            className={
              "flex items-center gap-x-2 mt-6 py-[15px] px-[30px] rounded-[25px] font-pop text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
            }
          >
            CONTACT ME <AiOutlineMail />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Experience;

// "bg-[url(/img/mountains.jpg)]
