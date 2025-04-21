import React from "react";
import TextButton from "./textButton";

const Navbar = () => {
  return (
    <div>
      <TextButton
        btnText={"Home"}
        onTap={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TextButton
        btnText={"Services"}
        onTap={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TextButton
        btnText={"Feature"}
        onTap={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TextButton
        btnText={"Product"}
        onTap={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TextButton
        btnText={"Testimonial"}
        onTap={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TextButton
        btnText={"FAQ"}
        onTap={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Navbar;
