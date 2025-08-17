import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="bg-[#F9F9FC] py-3">
        <Container>
          <Flex className="justify-between">
            <div className="logo">
              <Image imgSrc={logo} />
            </div>
            <div className="menu">
              <ul className="flex gap-x-4  font-pop text-[14px]">
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
                <li>
                  <a href="#">SERVICE</a>
                </li>
              </ul>
            </div>
            <div className="btn">
              <Button
                className={
                  "flex items-center gap-x-2 py-2 px-4 font-pop text-[14px] font-medium hover:bg-[#0088C6] hover:text-amber-50 duration-700"
                }
              >
                HIRE ME <AiOutlineMail />
              </Button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
