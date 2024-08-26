import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
// import HomeAboutUs from "@/components/containers/home/HomeAboutUs";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeCapabilities from "@/components/containers/home/HomeCapabilities";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
// import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import HomeApproch from "@/components/containers/home/HomeApproch";
import CountriesTime from "@/components/containers/home/CountriesTime";
import CounterSection from "@/components/containers/home/CounterSection";

const Home = () => {
  return (
    <Layout header={2} footer={1} video={true}>
      <HomeOneBanner />
      {/* <HomeAboutUs/> */}
      <Agency />
      {/* <HomeOffer /> */}
      <HomeCapabilities />
      <PortfolioText />
      <HomeApproch />
      <HomeTestimonial />
      {/* <HomeBlog /> */}
      <HomeSponsor />
      <CounterSection/>
      {/* <CountriesTime /> */}
      {/* <NextPage /> */}
    </Layout>
  );
};

export default Home;
