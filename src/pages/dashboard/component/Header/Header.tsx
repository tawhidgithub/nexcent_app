import React from "react";
import Navbar from "../Navbar";
import logo from "../../../../assets/img/Icon.png";
import CustomButton from "../../../../component/buttonComponent/CustomButton";

const Header = () => {
  return (
    <section className="flex flex-row justify-center items-center px-5 py-6 shadow-md">
      <div className="flex items-center gap-1.5">
        <img src={logo} alt="" />
        <div className="text-2xl font-[600]">Nexcent</div>
      </div>
      <div className=" flex flex-1 justify-center">
        <Navbar />
      </div>
      <div>
        <CustomButton
          btnText={"Login"}
          onClick={() => {
            console.log("CLicked");
          }}
          bgLess={true}
          lg={false}
        />
        <CustomButton
          btnText={"Login"}
          onClick={() => {
            console.log("CLicked");
          }}
          bgLess={false}
          lg={false}
        />
      </div>
    </section>
  );
};

export default Header;
