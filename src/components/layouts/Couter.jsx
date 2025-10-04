import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Couter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  return (
    <div ref={ref} className="py-[30px] sm:py-[80px] md:py-[100px] bg-[#fff]">
      <Container>
        <Flex className="flex flex-wrap justify-center md:justify-between items-center gap-y-10 md:gap-y-0">
          {/* Counter Item 1 */}
          <div className="w-[45%] sm:w-[40%] md:w-[24%] text-center">
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] text-[#000] font-pop font-semibold leading-[56px]">
              {inView ? <CountUp end={100} duration={2} /> : 0}+
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">
              PROJECTS
            </p>
          </div>

          {/* Counter Item 2 */}
          <div className="w-[45%] sm:w-[40%] md:w-[24%] text-center">
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] text-[#000] font-pop font-semibold leading-[56px]">
              {inView ? <CountUp end={24} duration={2.5} /> : 0}
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">
              WINNING AWARD
            </p>
          </div>

          {/* Counter Item 3 */}
          <div className="w-[45%] sm:w-[40%] md:w-[24%] text-center">
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] text-[#000] font-pop font-semibold leading-[56px]">
              {inView ? <CountUp end={70} duration={2} /> : 0}+
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">
              HAPPY CLIENTS
            </p>
          </div>

          {/* Counter Item 4 */}
          <div className="w-[45%] sm:w-[40%] md:w-[24%] text-center">
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] text-[#000] font-pop font-semibold leading-[56px]">
              {inView ? <CountUp end={10} duration={2.5} /> : 0}
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(18,18,18,0.7)] font-pop font-medium leading-[24px]">
              YEAR EXPERIENCE
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Couter;
