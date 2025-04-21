import React, { FC } from "react";
import TextButtonProps from "./interface/textButton.interface";
import { Button } from "antd";

const TextButton: FC<TextButtonProps> = ({ btnText, onTap }) => {
  return (
    <Button
      color="default"
      variant="link"
      onClick={onTap}
      className="hover:!text-black !text-[20]"
    >
      {btnText}
    </Button>
  );
};

export default TextButton;
