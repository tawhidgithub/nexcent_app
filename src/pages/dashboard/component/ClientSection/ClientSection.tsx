import React, { FC } from "react";
import ClientSectionProps from "./Client.interface";

const ClientSection: FC<ClientSectionProps> = ({ clientList }) => {
  return (
    <div className="flex flex-col items-center text-center ">
      <h1 className="text-3xl text-primaryText1 font-[600] ">Our Client</h1>
      <p className="text-primaryText3 text-xs">
        We have been working with some Fortune 500+ client
      </p>
      <ul className="flex gap-24">
        {clientList.map((item, index) => (
          <li key={index}>
            <img className="px-2.5" src={item} alt="" />
          </li>
        ))}
      </ul>
      <h1 className="">
        Manage your entire community <br /> in a single system
      </h1>
    </div>
  );
};

export default ClientSection;
