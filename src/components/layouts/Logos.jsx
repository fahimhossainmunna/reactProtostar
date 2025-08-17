import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logoone from "/src/assets/g1.png"
import logotwo from "/src/assets/g2.png"
import logothree from "/src/assets/g3.png"
import logofore from "/src/assets/g4.png"


// ==================
const Logos = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <Flex className="items-center ml-[100px]">
            <div className="w-[24%]">
                <Image imgSrc={logoone}/>
            </div>
            <div className="w-[24%]">
                <Image imgSrc={logotwo}/>
            </div>
            <div className="w-[24%]">
               <Image imgSrc={logothree}/>
            </div>
            <div className="w-[24%]">
               <Image imgSrc={logofore}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Logos;
