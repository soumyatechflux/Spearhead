import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
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