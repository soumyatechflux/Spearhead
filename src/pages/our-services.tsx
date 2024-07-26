import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
// import Home from './components/Home';

const OurServices = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      {/* <Router> */}
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <HomeTwoModal />
      <UxProcessTwo />
      <HomeTestimonialThree />
      <CtaTwo />

      
          {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service_main" element={<ServiceMain />} />
          <Route path="/service-single" element={<ServiceDetailsMain />} />
          </Routes>
      </Router> */}

    </Layout>
    
  );
};

export default OurServices;
