import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import "swiper/css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import LeftArrowButton from "./LeftNavigationButton/LeftArrowButton";
import RightArrowButton from "./RightNavigationButton/RightArrowButton";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        style={{ padding: "0px 20px" }}
        allowTouchMove
      >
        <Controls data={data} />
        <RightArrowButton />
        <LeftArrowButton />
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;