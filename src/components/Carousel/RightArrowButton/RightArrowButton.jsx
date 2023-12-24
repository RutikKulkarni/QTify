import React, { useEffect, useState } from "react";
import styles from "./RightArrowButton.module.css";
import { ReactComponent as RightArrow } from "../../../assets/CarouselButtons/RightButton.svg";
import { useSwiper } from "swiper/react";

function RightArrowButton() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.btn}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default RightArrowButton;
