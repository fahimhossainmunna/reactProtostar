import React from "react";
import Image from "../Image";
import Polygon from "/src/assets/Polygon 1.png";
import Container from "../Container";
import Flex from "../Flex";
import i1 from "/src/assets/Group1.png"
import i2 from "/src/assets/Group2.png"
import i3 from "/src/assets/Group3.png"


// =================
const Service = () => {
  return (
    <div className="">
      <Container>
        <div className="">
          <section className="relative overflow-hidden bg-white py-20">
            <div className="absolute left-[50%] top-[30px]">
              <Image imgSrc={Polygon} />
            </div>

            <div className="max-w-3xl mx-auto text-center px-4">
              <h3 className="text-[16px] text-[#5E3BEE] font-pop font-medium leading-[26px]">
                SERVICES
              </h3>
              <h2 className="mt-3 text-[44px] text-[#000] font-pop font-semibold leading-[56px] w-[621px] m-auto">
                What I Do For My Customer.
              </h2>
              <p className="mt-4 text-[16px] text-[rgba(18,18,18,0.7)] font-pop leading-[32px] w-[600px] m-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae blandit lectus. Praesent at hendrerit velit, at dictum
                nisl.
              </p>
            </div>
          </section>
        </div>
        <Flex>
            <div className="pb-[50px] flex justify-between items-center m-auto">
                <div className="w-[32%] bg-[#F3F3F3] border-0 hover:shadow-xl/30 duration-500 p-[50px] rounded-2xl text-center flex flex-col items-center">
                <Image imgSrc={i1}/>
                <h3 className="text-[20px] font-pop font-medium leading-[32px] pt-[30px]">UI/UX Design</h3>
                <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop  leading-[32px] w-[307px] m-auto pt-[10px]">lorem ipsum dolor sit amet consectur adi pising leo</p>
                </div>
                <div className="w-[32%] bg-[#F3F3F3] border-0 hover:shadow-xl/30 duration-500 p-[50px] rounded-2xl text-center flex flex-col items-center">
                <Image imgSrc={i2}/>
                <h3 className="text-[20px] font-pop font-medium leading-[32px] pt-[30px]">UI/UX Design</h3>
                <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop  leading-[32px] w-[307px] m-auto pt-[10px]">lorem ipsum dolor sit amet consectur adi pising leo</p>
                </div>
                <div className="w-[32%] bg-[#F3F3F3] border-0 hover:shadow-xl/30 duration-500 p-[50px] rounded-2xl text-center flex flex-col items-center">
                <Image imgSrc={i3}/>
                <h3 className="text-[20px] font-pop font-medium leading-[32px] pt-[30px]">UI/UX Design</h3>
                <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-pop  leading-[32px] w-[307px] m-auto pt-[10px]">lorem ipsum dolor sit amet consectur adi pising leo</p>
                </div>
            </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
