import React from "react";
import Container from "../Container";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import Image from "../Image";
import flogo from "/src/assets/foo1.png";
import flogo2 from "/src/assets/foot2.png";

const Footer = () => {
  return (
    <Container>
      <footer className="bg-[#333333] text-gray-300 pt-12 mt-[50px] rounded-t-[20px]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-10">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10">
            {/* Left Logo + Text */}
            <div className="text-center sm:text-left">
              <Image imgSrc={flogo} className="mx-auto sm:mx-0" />

              <p className="mt-[20px] text-[14px] sm:text-[15px] md:text-[16px] leading-[28px] sm:leading-[30px] md:leading-[32px] max-w-[320px] text-[#FFFFFF] mx-auto sm:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae blandit lectus. Praesent at hendrerit.
              </p>
            </div>

            {/* Right Contact Info */}
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="flex justify-center sm:justify-start items-center text-[15px] sm:text-[16px] leading-[32px] text-[#ffffff] gap-2">
                <IoIosMail className="text-lg sm:text-xl" />
                <span>inquiry@portostar.com</span>
              </h3>

              <h3 className="flex justify-center sm:justify-start items-center text-[15px] sm:text-[16px] leading-[32px] text-[#ffffff] gap-2">
                <IoCallOutline className="text-lg sm:text-xl" />
                <span>(001) 1231 3435</span>
              </h3>

              <div className="mt-4 flex justify-center sm:justify-start">
                <Image imgSrc={flogo2} />
              </div>
            </div>
          </div>

          {/* Divider Section */}
          <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm sm:text-[15px] mb-3 md:mb-0">
              <a href="#" className="hover:text-white transition-colors duration-300">
                HOME
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                ABOUT US
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                SERVICES
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                WORKS
              </a>
            </div>
            <p className="text-sm sm:text-[14px] md:text-[15px] text-gray-400">
              © All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
