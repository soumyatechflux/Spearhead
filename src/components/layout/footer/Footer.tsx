import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logoas.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ 
        backgroundImage: "url('/images/footer/footer-bg.png')" 
        // backgroundImage: "url('/images/Black.mp4')"
        
      }}
      >        
         
      <div className="container">   

        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image style={{height:"100px", width:"100px",background:"white", borderRadius:"100%"}} src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                   Business Center 1. M Floor The Meydan Hotel | Nad Al Sheba | Dubai | UAE
                </Link>
                <Link href="tel:+971 566121551">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +971 566121551
                </Link>
                <Link href="mailto:ceo@spearheadcreativity.com ">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  ceo@spearheadcreativity.com 
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Award Winning</Link>
                  </li>
                  <li>
                    <Link href="blog">News & Blog</Link>
                  </li>
                  <li>
                    <Link href="contact-us">careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> Spearhead Creativity by{" "}
                      <Link
                        
                        href="https://themeforest.net/user/UltraDevs"
                        target="_blank"
                      >
                        Paul Williams{" "}
                      </Link>
                      . All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React, { CSSProperties } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "public/images/logoas.svg";
// import log from "./../../../../public/video/Black.mp4";


// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // Define the styles with explicit CSSProperties type
//   const footerStyle: CSSProperties = {
//     position: 'relative',
//     width: '100%',
//     overflow: 'hidden',
//   };

//   const videoStyle: CSSProperties = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     minWidth: '100%',
//     minHeight: '100%',
//     width: 'auto',
//     height: 'auto',
//     transform: 'translate(-50%, -50%)',
//     zIndex: -1,
//     objectFit: 'cover',
//   };

//   const contentStyle: CSSProperties = {
//     position: 'relative',
//     zIndex: 1,
//   };

//   return (
//     <footer className="footer section pb-0" style={footerStyle}>
//       <video autoPlay loop muted playsInline style={videoStyle}>
//         <source src="/public/video/Black.mp4" type="video/mp4" />
//       </video>

//       <div className="container" style={contentStyle}>
//         <div className="row gaper">
//           <div className="col-12 col-lg-5 col-xl-6">
//             <div className="footer__single">
//               <Link href="/" className="logo">
//                 <Image
//                   style={{
//                     height: "100px",
//                     width: "100px",
//                     background: "white",
//                     borderRadius: "100%",
//                   }}
//                   src={logo}
//                   alt="Logo"
//                 />
//               </Link>
//               <div className="footer__single-meta">
//                 <Link
//                   href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
//                   target="_blank"
//                 >
//                   <i className="fa-sharp fa-solid fa-location-dot"></i> Business Center 1. M Floor The Meydan Hotel | Nad Al Sheba | Dubai | UAE
//                 </Link>
//                 <Link href="tel:+971566121551">
//                   <i className="fa-sharp fa-solid fa-phone-volume"></i> +971 566121551
//                 </Link>
//                 <Link href="mailto:ceo@spearheadcreativity.com">
//                   <i className="fa-sharp fa-solid fa-envelope"></i> ceo@spearheadcreativity.com
//                 </Link>
//               </div>
//               <div className="footer__cta text-start">
//                 <Link href="contact-us" className="btn btn--secondary">
//                   Book a call now
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-2 col-xl-2">
//             <div className="footer__single">
//               <div className="footer__single-intro">
//                 <h5>Discover</h5>
//               </div>
//               <div className="footer__single-content">
//                 <ul>
//                   <li>
//                     <Link href="about-us">About Us</Link>
//                   </li>
//                   <li>
//                     <Link href="client-feedback">Award Winning</Link>
//                   </li>
//                   <li>
//                     <Link href="blog">News & Blog</Link>
//                   </li>
//                   <li>
//                     <Link href="contact-us">Careers</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-5 col-xl-4">
//             <div className="footer__single">
//               <div className="footer__single-intro">
//                 <h5>Subscribe to our newsletter</h5>
//               </div>
//               <div className="footer__single-content">
//                 <p>
//                   Welcome to our digital agency. We specialize in helping businesses like yours succeed online.
//                 </p>
//                 <div className="footer__single-form">
//                   <form action="#" method="post">
//                     <div className="input-email">
//                       <input
//                         type="email"
//                         name="subscribe-news"
//                         id="subscribeNews"
//                         placeholder="Enter Your Email"
//                         required
//                       />
//                       <button type="submit" className="subscribe">
//                         <i className="fa-sharp fa-solid fa-paper-plane"></i>
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="footer__copyright">
//               <div className="row align-items-center gaper">
//                 <div className="col-12 col-lg-8">
//                   <div className="footer__copyright-text text-center text-lg-start">
//                     <p>
//                       Copyright &copy;
//                       <span id="copyYear">{currentYear}</span> Spearhead Creativity by{" "}
//                       <Link href="https://themeforest.net/user/UltraDevs" target="_blank">
//                         Paul Williams
//                       </Link>
//                       . All Rights Reserved.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-12 col-lg-4">
//                   <div className="social justify-content-center justify-content-lg-end">
//                     <Link href="https://www.facebook.com/" target="_blank">
//                       <i className="fa-brands fa-facebook-f"></i>
//                     </Link>
//                     <Link href="https://www.twitter.com/" target="_blank">
//                       <i className="fa-brands fa-twitter"></i>
//                     </Link>
//                     <Link href="https://www.pinterest.com/" target="_blank">
//                       <i className="fa-brands fa-linkedin-in"></i>
//                     </Link>
//                     <Link href="https://www.instagram.com/" target="_blank">
//                       <i className="fa-brands fa-instagram"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

