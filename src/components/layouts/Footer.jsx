import React from "react";
import Container from "../Container";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import Image from "../Image";
import flogo from "/src/assets/foo1.png"
import flogo2 from "/src/assets/foot2.png"


// ==================
const Footer = () => {
  return (
    <Container>
      {/* <div className="bg-[#333333] pt-[100px] mt-[50px] rounded-t-[20px]">
        <div className="flex items-center justify-around">
          <div className="">
            <img src="/src/assets/foo1.png" alt="" />
            <p className="mt-[20px] text-[16px] leading-[32px] w-[300px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit.
            </p>
          </div>
          <div className="">
            <h3 className="text-[16px] leading-[32px] text-[#ffffff]">
              <IoIosMail /> inquiry@portostar.com
            </h3>
            <h3 className="my-5 text-[16px] leading-[32px] text-[#ffffff]">
              <IoCallOutline />(001) 1231 3435
            </h3>
            <img src="/src/assets/foot2.png" alt="" />
          </div>
        </div>
       
      </div> */}


 <footer className="bg-[#333333] text-gray-300 pt-12 mt-[50px] rounded-t-[20px]">
  <div className="max-w-6xl mx-auto px-6 py-10">
    <div className="flex justify-between">
        <div className="">
           <Image imgSrc={flogo}/>

            <p className="mt-[20px] text-[16px] leading-[32px] w-[300px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit.
            </p>
        </div>
<div className="space-y-3">
  <h3 className="flex items-center text-[16px] leading-[32px] text-[#ffffff] space-x-2">
    <IoIosMail className="text-xl" />
    <span>inquiry@portostar.com</span>
  </h3>

  <h3 className="flex items-center text-[16px] leading-[32px] text-[#ffffff] space-x-2">
    <IoCallOutline className="text-xl" />
    <span>(001) 1231 3435</span>
  </h3>
  <div className="mt-4">
      <Image imgSrc={flogo2}/>
  </div>

</div>

    </div>

    {/* Divider */}
    <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:text-white">HOME</a>
        <a href="#" className="hover:text-white">ABOUT US</a>
        <a href="#" className="hover:text-white">SERVICES</a>
        <a href="#" className="hover:text-white">WORKS</a>
      </div>
      <p className="text-sm mt-4 md:mt-0">© All Right Reserved</p>
    </div>
  </div>
</footer>


    </Container>
  );
};

export default Footer;
