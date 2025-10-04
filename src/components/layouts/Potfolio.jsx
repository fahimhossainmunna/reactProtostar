import React from "react";
import Container from "../Container";
import Image from "../Image";
import card from "/src/assets/card1.jpg";

// =================
const Portfolio = () => {
  return (
    <>
      <Container>
        {/* ======= Heading Section ======= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-[60px] md:py-[80px] gap-5">
          <div>
            <h4 className="text-[16px] text-[#5E3BEE] font-pop font-medium leading-[26px]">
              PORTFOLIO
            </h4>

            <h3 className="text-[32px] md:text-[44px] text-[#000] font-pop font-semibold leading-[46px] md:leading-[56px]">
              Selected Works.
            </h3>
          </div>

          <div className="max-w-full md:max-w-[557px]">
            <p className="text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[28px] md:leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
            </p>
          </div>
        </div>

        {/* ======= Card Section ======= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-[100px]">
          {/* Card Template */}
          {[
            "Creativa - Elementor Template Kit",
            "Nusapp - Elementor Template Kit",
            "Webina - Elementor Template Kit",
            "Marketin - Elementor Template Kit",
          ].map((title, i) => (
            <div
              key={i}
              className="shadow-[0px_10px_20px_rgba(0,0,0,0.19),_0px_6px_6px_rgba(0,0,0,0.23)]
                         rounded-[10px] overflow-hidden bg-white
                         transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            >
              <figure className="overflow-hidden">
                <Image
                  imgSrc={card}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </figure>
              <div className="p-[25px] md:p-[30px]">
                <h2 className="text-[18px] md:text-[20px] font-medium font-pop leading-[28px] md:leading-[32px]">
                  {title}
                </h2>
                <p className="text-[15px] md:text-[16px] text-[rgba(0,0,0,0.7)] font-medium font-pop leading-[22px] md:leading-[24px] mt-1">
                  UI/UX Design
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
