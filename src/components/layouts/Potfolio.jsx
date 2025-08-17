import React from "react";
import Container from "../Container";
import Image from "../Image";
import card from "/src/assets/card1.jpg"





// =============
const Potfolio = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center py-[80px]">
          <div className="">
            <h4 className="text-[16px] text-[#5E3BEE] font-pop font-medium leading-[26px]">
              PORTFOLIO
            </h4>

            <h3 className="text-[44px] text-[#000] font-pop font-semibold leading-[56px]">
              Selected Works.
            </h3>
          </div>
          <div className="">
            <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop  leading-[32px] w-[557px] m-auto pt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
            </p>
          </div>
        </div>

        {/* ===================== */}
        <div className="flex justify-between">
          <div className="card w-[48%] shadow-[0px_10px_20px_rgba(0,0,0,0.19),_0px_6px_6px_rgba(0,0,0,0.23)] rounded-[10px]">
            <figure>
              <Image imgSrc={card}/>
            </figure>
            <div className="card-body p-[30px]">
              <h2 className="text-[20px] font-medium font-pop  leading-[32px]">
                Creativa - Elementor Template Kit
              </h2>
              <p className="text-[16px] text-[rgba(0,0,0,0.7)] font-medium font-pop  leading-[24px]">
                {" "}
                UI/UX Design
              </p>
            </div>
          </div>
          <div className="card w-[48%] shadow-[0px_10px_20px_rgba(0,0,0,0.19),_0px_6px_6px_rgba(0,0,0,0.23)] rounded-[10px]">
            <figure>
             <Image imgSrc={card}/>
            </figure>
            <div className="card-body p-[30px]">
              <h2 className="text-[20px] font-medium font-pop  leading-[32px]">
                Nusapp - Elementor Template Kit
              </h2>
              <p className="text-[16px] text-[rgba(0,0,0,0.7)] font-medium font-pop  leading-[24px]">
                {" "}
                UI/UX Design
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-9 pb-[100px]">
          <div className="card w-[48%] shadow-[0px_10px_20px_rgba(0,0,0,0.19),_0px_6px_6px_rgba(0,0,0,0.23)] rounded-[10px]">
            <figure>
            <Image imgSrc={card}/>
            </figure>
            <div className="card-body p-[30px]">
              <h2 className="text-[20px] font-medium font-pop  leading-[32px]">
                Webina - Elementor Template Kit
              </h2>
              <p className="text-[16px] text-[rgba(0,0,0,0.7)] font-medium font-pop  leading-[24px]">
                {" "}
                UI/UX Design
              </p>
            </div>
          </div>
          <div className="card w-[48%] shadow-[0px_10px_20px_rgba(0,0,0,0.19),_0px_6px_6px_rgba(0,0,0,0.23)] rounded-[10px]">
            <figure>
             <Image imgSrc={card}/>
            </figure>
            <div className="card-body p-[30px]">
              <h2 className="text-[20px] font-medium font-pop  leading-[32px]">
                Marketin - Elementor Template Kit
              </h2>
              <p className="text-[16px] text-[rgba(0,0,0,0.7)] font-medium font-pop  leading-[24px]">
                {" "}
                UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Potfolio;
