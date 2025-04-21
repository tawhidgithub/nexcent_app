import React, { FC } from "react";
import CustomButtonProps from "./button.interface";
import { Button } from "antd";

const CustomButton: FC<CustomButtonProps> = ({
  btnText,
  onClick,
  bgLess,
  lg,
}) => {
  return (
    <Button
      type={bgLess ? "link" : "primary"}
      onClick={onClick}
      className={`${
        bgLess
          ? "!text-primaryGreenShade1  hover:!text-primaryGreenShade5 "
          : "!text-white !font-[600]  !bg-primaryGreenShade1 hover:!bg-primaryGreenShade3 "
      } mx-2.5 !px-5 py-4 !tracking-wider   ${
        lg ? "!px-7 !py-6  " : ""
      } `}
    >
      {btnText}
    </Button>
  );
};

export default CustomButton;
