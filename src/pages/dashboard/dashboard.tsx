import React from "react";
import Header from "./component/Header/Header";
import HeroSection from "./component/heroSection/HeroSection";
import ClientSection from "./component/ClientSection/ClientSection";
import logo1 from '../../assets/logo/Logo.png'
import logo2 from '../../assets/logo/Logo (1).png'
import logo3 from '../../assets/logo/Logo (2).png'
import logo4 from '../../assets/logo/Logo (3).png'
import logo5 from '../../assets/logo/Logo (4).png'
import logo6 from '../../assets/logo/Logo (5).png'
import logo7 from '../../assets/logo/Logo (6).png'

const Dashboard = () => {
  return (
    <div className="font-display ">
      <Header />
      <HeroSection />
      <ClientSection clientList={[logo1,logo2,logo3,logo4,logo5,logo6,logo7]} />
    </div>
  );
};

export default Dashboard;
