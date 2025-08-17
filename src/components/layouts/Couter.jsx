import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Couter = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <Flex className="justify-between items-center">
          <div className=" w-[24%] text-center">
            <h3 className="text-[48px] text-[#000] font-pop font-semibold leading-[56px]">
              100+
            </h3>
            <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">PROJECTS</p>
          </div>
          <div className=" w-[24%] text-center">
            <h3 className="text-[48px] text-[#000] font-pop font-semibold leading-[56px]">24</h3>
            <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">WINNING AWARD</p>
          </div>
          <div className=" w-[24%] text-center">
            <h3 className="text-[48px] text-[#000] font-pop font-semibold leading-[56px]">70+</h3>
            <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">HAPPY CLIENTS</p>
          </div>
          <div className=" w-[24%] text-center">
            <h3 className="text-[48px] text-[#000] font-pop font-semibold leading-[56px]">10</h3>
            <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">YEAR EXPERIENCE</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Couter;
