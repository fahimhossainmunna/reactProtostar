import React from "react";
import Container from "../Container";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container>
      <div className="bg-[url(/images/section.png)] bg-no-repeat bg-cover bg-center w-full py-[100px] mt-[350px] rounded-2xl">
        <div className="text-center text-[50px] font-semibold leading-[72px] font-pop w-[606px] m-auto">
          <h2>Interested Working With me? Let's connect!</h2>

          
        </div>
        <div className="flex items-center justify-center mt-7">
            <Button
              className={
                "flex text-center items-center gap-x-2 py-[15px] px-[30px] rounded-[25px] font-pop text-[14px] font-medium border-[1px] hover:bg-transparent hover:text-black hover:border-[1px] duration-700"
              }
            >
              CONTACT ME <AiOutlineMail />
            </Button>
          </div>
      </div>
    </Container>
  );
};

export default Contact;
