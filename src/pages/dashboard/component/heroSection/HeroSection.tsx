import React from "react";
import { motion } from "motion/react";
import CustomButton from "../../../../component/buttonComponent/CustomButton";
import HeroImage from "../../../../assets/img/heroImage.png";
const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row lg:gap-90 px-8 mt-10">
      <div className="text-center lg:text-left min-w-fit">
        <div className=" text-5xl font-semibold min-w-fit text-center mx-auto   lg:text-left ">
          <motion.h1
            className=" overflow-hidden whitespace-nowrap pb-3"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Lessons and insights
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
            className="text-primaryGreenShade1 overflow-hidden whitespace-nowrap pb-6"
          >
            from 8 years
          </motion.h1>
        </div>

        <p className="mb-5">
          Where to grow your business as a photographer: site or social media
        </p>
        <CustomButton
          btnText={"Register"}
          onClick={() => {}}
          bgLess={false}
          lg={true}
        />
      </div>
      <div className="mt-10 lg:mt-0">
        <motion.img
          initial={{
            scale: 0,
          }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: "backOut",
          }}
          src={HeroImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
