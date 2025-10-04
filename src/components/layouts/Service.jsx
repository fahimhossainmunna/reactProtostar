import React from "react";
import Image from "../Image";
import Polygon from "/src/assets/Polygon 1.png";
import Container from "../Container";
import Flex from "../Flex";
import i1 from "/src/assets/Group1.png";
import i2 from "/src/assets/Group2.png";
import i3 from "/src/assets/Group3.png";

const Service = () => {
  return (
    <div className="relative bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <Container>
        {/* Polygon Shape */}
        <div className="absolute left-1/2 top-[30px] -translate-x-1/2 opacity-20 md:opacity-100">
          <Image imgSrc={Polygon} />
        </div>

        {/* Heading Section */}
        <div className="text-center relative z-10 px-4">
          <h3 className="text-[14px] sm:text-[16px] text-[#5E3BEE] font-pop font-medium leading-[26px]">
            SERVICES
          </h3>
          <h2 className="mt-3 text-[28px] sm:text-[36px] md:text-[44px] text-[#000] font-pop font-semibold leading-[42px] sm:leading-[50px] md:leading-[56px] max-w-[700px] mx-auto">
            What I Do For My Customer.
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[26px] sm:leading-[28px] md:leading-[32px] max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit velit, at dictum nisl.
          </p>
        </div>
        

        {/* Service Cards */}
        <Flex className="flex flex-wrap justify-center gap-6 mt-12 md:mt-16">
          {/* Card 1 */}
          <div className="w-[90%] sm:w-[45%] md:w-[30%] bg-[#F9F9FC] hover:bg-white hover:shadow-lg transition-all duration-300 p-8 sm:p-10 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-[#E0E0E0]">
            <Image imgSrc={i1} />
            <h3 className="text-[18px] sm:text-[20px] font-pop font-medium leading-[28px] pt-[20px] sm:pt-[30px]">
              UI/UX Design
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[26px] sm:leading-[30px] max-w-[300px] mx-auto pt-[10px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[90%] sm:w-[45%] md:w-[30%] bg-[#F9F9FC] hover:bg-white hover:shadow-lg transition-all duration-300 p-8 sm:p-10 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-[#E0E0E0]">
            <Image imgSrc={i2} />
            <h3 className="text-[18px] sm:text-[20px] font-pop font-medium leading-[28px] pt-[20px] sm:pt-[30px]">
              Web Development
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[26px] sm:leading-[30px] max-w-[300px] mx-auto pt-[10px]">
              Building modern, responsive and interactive web experiences that
              drive engagement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[90%] sm:w-[45%] md:w-[30%] bg-[#F9F9FC] hover:bg-white hover:shadow-lg transition-all duration-300 p-8 sm:p-10 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-[#E0E0E0]">
            <Image imgSrc={i3} />
            <h3 className="text-[18px] sm:text-[20px] font-pop font-medium leading-[28px] pt-[20px] sm:pt-[30px]">
              Branding Strategy
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[26px] sm:leading-[30px] max-w-[300px] mx-auto pt-[10px]">
              Helping brands stand out with creative, strategic and consistent
              visual identities.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
