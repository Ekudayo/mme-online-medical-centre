// import styles from "../customersSaying/customerSaying.module.css";
// import customersView from "../../utils/data";
// import { useState } from "react";
// import Slide from "Slide";
// import "slick-carousel/slick/slick.css";
// import pagination from "./pagination";

// const CustomerSaying = () => {
//   return (
//     <div>
//       <h1 className={styles.customerSayingTitle}>What our customers are saying</h1>
//       <hr className={styles.horizontalLine} />
     
//       <ul className={styles.customersLists}>
//         { customersView.map((customer) => ( <li key={customer.id} className={styles.customerItem}>
//           <div>
//             <img src={customer.image} alt="Customer Image" />
//             <span>{customer.name}</span>
//           </div>
//           <p>{customer.description}</p>

//         </li> ))}

//       </ul>

//     </div>
//   );
// };

// export default CustomerSaying;

import React from "react";
import styles from "./customerSaying.module.css"; // Correct import for CSS Modules
import {customersView} from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components (Using styles for any custom classes)
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // Combine slick's default class with your module-scoped class
      className={`${className} ${styles.customPrevArrow}`}
      style={{ ...style, display: "block", left: "-40px" }}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // Combine slick's default class with your module-scoped class
      className={`${className} ${styles.customNextArrow}`}
      style={{ ...style, display: "block", right: "-40px" }}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

const CustomerSaying = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow  />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.customerSayingSection}>
      <h1 className={styles.customerSayingTitle}>
        What our customers are saying
      </h1>
      <hr className={styles.horizontalLine} />

      <div className={styles.carouselContainer}>
        <Slider {...settings }>
          {customersView.map((customer) => (
            <div key={customer.id} className={styles.customerSlide}>
              <div className={styles.customerItem}>
                <div className={styles.customerInfo}>
                  <img
                    src={customer.image}
                    alt="Customer"
                    className={styles.customerImage}
                  />
                  <span className={styles.customerName}>{customer.name}</span>
                </div>
                <p className={styles.customerDescription}>
                  {customer.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerSaying;
