import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`bg-[#5E3BEE] rounded-3xl text-white ${className}`}>
      {children}
    </button>
  );
};

export default Button;
