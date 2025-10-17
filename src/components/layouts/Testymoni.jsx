import React from "react";
import Container from "../Container";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Flex from "../Flex";
import Image from "../Image";
import shakib from "/src/assets/shakib.png";
import messages from "/src/assets/message.png";

const Testymoni = () => {
  return (
    <>
      <div className="relative bg-[url(/images/testy.png)] bg-cover bg-center bg-no-repeat w-full py-[80px] md:py-[150px] mt-15">
        <div className="text-center px-4">
          <h3 className="text-[#5E3BEE] font-medium text-[14px] md:text-[16px] font-pop">
            TESTIMONY
          </h3>
          <h2 className="mt-3 text-[28px] md:text-[44px] text-[#000] font-pop font-semibold leading-[38px] md:leading-[56px] md:w-[621px] m-auto">
            What Our Clients Say.
          </h2>
          <p className="mt-4 text-[14px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[26px] md:leading-[32px] md:w-[600px] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit velit, at dictum nisl.
          </p>
        </div>

        <Container>
          <Flex className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 mt-10 px-4">
            {/* card one  */}
            <div className="relative w-full lg:w-[48%] rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-[0_20px_60px_-15px_rgb(2,6,23,.25)]">
              <div className="icon flex text-amber-500 py-4 text-2xl md:text-3xl">
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
              </div>
              <p className="w-full md:w-[484px] text-[16px] md:text-[18px] font-pop font-medium leading-[26px]">
                Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
                Vestibulum nisl lorem, porta at mollis varius, tincidunt in
                lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
              </p>
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-7 gap-y-4">
                <div className="flex items-center gap-x-5">
                  <Image imgSrc={shakib} className="w-14 h-14 md:w-16 md:h-16" />
                  <div>
                    <h3 className="text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[32px]">
                      Shakib Al Hasan
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[rgba(0,0,0,0.7)] leading-[22px] md:leading-[24px]">
                      All-Rounder
                    </p>
                  </div>
                </div>
                <div>
                  <Image imgSrc={messages} className="w-10 md:w-auto" />
                </div>
              </div>
            </div>

            {/* card two  */}
            <div className="relative w-full lg:w-[48%] rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-[0_20px_60px_-15px_rgb(2,6,23,.25)]">
              <div className="icon flex text-amber-500 py-4 text-2xl md:text-3xl">
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
                <MdOutlineStarBorderPurple500 />
              </div>
              <p className="w-full md:w-[484px] text-[16px] md:text-[18px] font-pop font-medium leading-[26px]">
                Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
                Vestibulum nisl lorem, porta at mollis varius, tincidunt in
                lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
              </p>
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-7 gap-y-4">
                <div className="flex items-center gap-x-5">
                  <Image imgSrc={shakib} className="w-14 h-14 md:w-16 md:h-16" />
                  <div>
                    <h3 className="text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[32px]">
                      Shakib Al Hasan
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[rgba(0,0,0,0.7)] leading-[22px] md:leading-[24px]">
                      All-Rounder
                    </p>
                  </div>
                </div>
                <div>
                  <Image imgSrc={messages} className="w-10 md:w-auto" />
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Testymoni;
