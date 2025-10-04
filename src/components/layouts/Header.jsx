import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Button from "../Button";
import { AiOutlineMail } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#F9F9FC] py-4 shadow-sm sticky top-0 z-50">
      <Container>
        <Flex className="justify-between items-center">
          {/* Logo */}
          <div className="logo w-28 sm:w-32 md:w-36">
            <Image imgSrc={logo} alt="Logo" />
          </div>

          {/* Menu (Desktop) Start */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-6 font-pop text-[14px] lg:text-[15px] text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-[#0088C6] duration-300 font-medium"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0088C6] duration-300 font-medium"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0088C6] duration-300 font-medium"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0088C6] duration-300 font-medium"
                >
                  SERVICE
                </a>
              </li>
            </ul>
          </nav>
           {/* Menu (Desktop) End */}

          {/* Hire Me Button (Hide on mobile) Start */}
          <div className="hidden md:block">
            <Button
              className="flex items-center gap-x-2 py-2 px-5 font-pop text-[14px] font-medium bg-[#5E3BEE] text-white rounded-[24px] hover:bg-[#006fa5] duration-300 shadow-md"
            >
              HIRE ME <AiOutlineMail size={18} />
            </Button>
          </div>
           {/* Hire Me Button (Hide on mobile) End */}

          {/* Mobile Menu Icon start */}
          <div className="block md:hidden">
            <button
              className="text-2xl text-gray-700 hover:text-[#0088C6] duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          {/* Mobile Menu Icon End */}
        </Flex>

        {/* Mobile Menu start */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 bg-white rounded-lg shadow-md"
            >
              <ul className="flex flex-col items-center gap-3 py-4 font-pop text-[14px] text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block hover:text-[#5E3BEE] duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:text-[#5E3BEE] duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:text-[#5E3BEE] duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:text-[#5E3BEE] duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SERVICE
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        {/* Mobile Menu end */}
      </Container>
    </header>
  );
};

export default Header;
