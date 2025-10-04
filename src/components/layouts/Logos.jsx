import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logoone from "/src/assets/g1.png";
import logotwo from "/src/assets/g2.png";
import logothree from "/src/assets/g3.png";
import logofore from "/src/assets/g4.png";

// ==================
const Logos = () => {
  return (
    <>
      <div className="py-[60px] sm:py-[80px] md:py-[100px]">
        <Container>
          <Flex
            className="flex flex-wrap justify-center md:justify-between items-center 
                       gap-6 sm:gap-10 md:gap-0 ml-0 md:ml-[100px]"
          >
            <div className="w-[45%] sm:w-[30%] md:w-[24%] flex justify-center md:justify-start">
              <Image
                imgSrc={logoone}
                className="w-[100px] sm:w-[140px] md:w-auto opacity-80 hover:opacity-100 duration-300"
              />
            </div>
            <div className="w-[45%] sm:w-[30%] md:w-[24%] flex justify-center md:justify-start">
              <Image
                imgSrc={logotwo}
                className="w-[100px] sm:w-[140px] md:w-auto opacity-80 hover:opacity-100 duration-300"
              />
            </div>
            <div className="w-[45%] sm:w-[30%] md:w-[24%] flex justify-center md:justify-start">
              <Image
                imgSrc={logothree}
                className="w-[100px] sm:w-[140px] md:w-auto opacity-80 hover:opacity-100 duration-300"
              />
            </div>
            <div className="w-[45%] sm:w-[30%] md:w-[24%] flex justify-center md:justify-start">
              <Image
                imgSrc={logofore}
                className="w-[100px] sm:w-[140px] md:w-auto opacity-80 hover:opacity-100 duration-300"
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Logos;
