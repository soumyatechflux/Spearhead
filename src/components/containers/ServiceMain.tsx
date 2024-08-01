import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useNavigate } from 'react-router-dom';

import thumbone from "../../../public/images/agency/thumb-four.png";
import thumbone1 from "../../../public/images/agency/thumb-five.png";
import exampleImage from 'public/images/pexels.png';
// import { useNavigate } from 'react-router-dom';

const ServiceMain = () => {
  // const navigate = useNavigate();

  // const handleReadMoreClick = () => {
  //   navigate('/service-single');
  // };
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >

                {/* <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Innovation Roadmapping</Link>
                        </h4>
                      </div>
                     <p>Our experts assist you in creating a roadmap for innovation, enabling you to implement new ideas seamlessly. We identify potential bottlenecks, devise actionable plans, and provide ongoing support to ensure successful implementation.</p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Trend Analysis and Market Research</Link>
                        </h4>
                      </div>
                     <p>Stay ahead of the curve with our comprehensive trend analysis and market research services. We analyze industry trends, consumer behavior, and competitor insights to help you identify opportunities and capture the market.</p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Creative Strategy Development</Link>
                        </h4>
                      </div>
                     <p>We work closely with you to devise creative strategies that align with your business objectives and target audience. Our team ensures that your brand stands out and engages customers effectively.</p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Ideation Workshops</Link>
                        </h4>
                      </div>
                     <p>Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and techniques, we empower your team members to generate groundbreaking ideas and unique solutions.
                     </p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Creative Evaluation and Optimization</Link>
                        </h4>
                      </div>
                     <p> We conduct rigorous evaluations of your creative campaigns, identifying areas for improvement and optimization. Through data-driven analysis and feedback, we guide you toward achieving maximum impact and ROI.

                     </p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Innovation Roadmapping</Link>
                        </h4>
                      </div>
                     <p>Our experts assist you in creating a roadmap for innovation, enabling you to implement new ideas seamlessly. We identify potential bottlenecks, devise actionable plans, and provide ongoing support to ensure successful implementation.</p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Trend Analysis and Market Research</Link>
                        </h4>
                      </div>
                     <p>Stay ahead of the curve with our comprehensive trend analysis and market research services. We analyze industry trends, consumer behavior, and competitor insights to help you identify opportunities and capture the market.</p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Creative Strategy Development</Link>
                        </h4>
                      </div>
                     <p>We work closely with you to devise creative strategies that align with your business objectives and target audience. Our team ensures that your brand stands out and engages customers effectively.</p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Ideation Workshopst</Link>
                        </h4>
                      </div>
                     <p> Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and techniques, we empower your team members to generate groundbreaking ideas and unique solutions.
                     </p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Creative Evaluation and Optimization</Link>
                        </h4>
                      </div>
                     <p> We conduct rigorous evaluations of your creative campaigns, identifying areas for improvement and optimization. Through data-driven analysis and feedback, we guide you toward achieving maximum impact and ROI.

                     </p>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>*/}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

{/* first container */}

      <section className="image">
      <div className="container1">
        <div className={`${"section1"} ${"section3"} ${"section23"}`}>
          <span className="head">01</span>
            <h3>Ideation Workshops</h3>
              <p className="zx">Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and techniques, we empower your team members to generate groundbreaking ideas and unique solutions.</p>
                {/* <button className="round-button" onClick={handleReadMoreClick} > */}
                <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link>
        </div>

          <div className={`${"section2"} ${"section23"}`}>
              <Image src={thumbone} alt="Example" className="section-image1" />
          </div>
      </div>

  {/* second container */}

      <div className="container1">
        <div className={`${"section2"}  ${"section23"} ${"section1"}`}>
            <Image src={thumbone} alt="Example" className="section-image1" />
         </div>

        <div className={`${"section2"} ${"section3"}`}>
          <span className="head">02</span>
              <h3>Creative Strategy Development</h3>
                <p className="zx"> We work closely with you to devise creative strategies that align with your business objectives and target audience. Our team ensures that your brand stands out and engages customers effectively.</p>
                  {/* <button className="round-button" >
                    Read more
                  </button>     */}
                  <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link>
        </div>
      </div>

 {/* third container */}

      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section3"}`}>
          <span className="head">03</span>
            <h3>Trend Analysis and Market Research</h3>
              <p className="zx">Stay ahead of the curve with our comprehensive trend analysis and market research services. We analyze industry trends, consumer behavior, and competitor insights to help you identify opportunities and capture the market.</p>
              <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link>
        </div>

        <div className={`${"section2"} ${"section23"}`}>
            <Image src={thumbone1} alt="Example" className="section-image1" />
        </div>
      </div>

{/* fourth container */}

      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section23"}`}>
        <Image src={thumbone} alt="Example" className="section-image1" />
        </div>

        <div className={`${"section2"} ${"section3"}`}>
          <span className="head">04</span>
              <h3>Innovation Roadmapping (UX DESIGN)</h3>
                <p className="zx">Our experts assist you in creating a roadmap for innovation, enabling you to implement new ideas seamlessly. We identify potential bottlenecks, devise actionable plans, and provide ongoing support to ensure successful implementation.</p>
                <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link>
        </div>
      </div>

 {/* fifth container */}

      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section3"}`}>
          <span className="head">05</span>
            <h3>Creative Evaluation and Optimization</h3>
              <p className="zx">We conduct rigorous evaluations of your creative campaigns, identifying areas for improvement and optimization. Through data-driven analysis and feedback, we guide you toward achieving maximum impact and ROI.</p>
              <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link>
        </div>

        <div className={`${"section2"} ${"section23"}`}>
            <Image src={thumbone} alt="Example" className="section-image1" />
        </div>
      </div>

      </section>

      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
