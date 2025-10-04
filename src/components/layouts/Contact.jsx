import React from "react";
import Container from "../Container";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container>
      <div
        className="bg-[url('/images/section.png')] bg-no-repeat bg-cover bg-center 
        w-full py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]
        mt-[150px] sm:mt-[200px] md:mt-[300px] lg:mt-[350px]
        rounded-2xl text-center px-4 sm:px-6 md:px-8"
      >
        {/* Heading */}
        <div
          className="text-[26px] sm:text-[34px] md:text-[48px] lg:text-[56px] 
          font-semibold leading-[38px] sm:leading-[48px] md:leading-[64px] 
          font-pop max-w-[95%] sm:max-w-[600px] md:max-w-[800px] mx-auto 
          text-[#363636] drop-shadow-md"
        >
          <h2>
            Interested Working With me?{" "}
            <br className="hidden sm:block" /> Let's connect!
          </h2>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center mt-8 sm:mt-10 md:mt-12">
          <Button
            className={
              "flex items-center gap-x-2 py-[10px] sm:py-[14px] md:py-[16px] px-[24px] sm:px-[30px] md:px-[36px] rounded-[25px] font-pop text-[14px] sm:text-[16px] md:text-[18px] font-medium border border-white text-white hover:bg-white hover:text-black duration-700"
            }
          >
            CONTACT ME <AiOutlineMail className="text-[18px] sm:text-[20px]" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
