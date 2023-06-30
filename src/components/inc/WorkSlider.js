import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./WorkSlider.css";
import logo1 from "../images/cac-work-1.jpg"
import logo6 from "../images/cac-work-2.jpg"
import logo2 from"../images/cac-work-3.jpg"
import logo3 from "../images/cac-work-4.jpg"
import logo4 from "../images/cac-work-5.jpg"
import logo5 from "../images/cac-work-6.jpg"
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function WorkSlider() {
    const { thumbsSwiper, setThumbsSwiper } = useState(null);
    const style = { height: "27rem" }
    const style2 = { height: "10rem" }
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 "
            >
                <SwiperSlide>
                    <img style={style} src={logo1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style} src={logo2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style} src={logo3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style} src={logo4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style} src={logo5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style} src={logo6} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mb-5"
            >
                <SwiperSlide>
                    <img style={style2} src={logo1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style2} src={logo2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style2} src={logo3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style2} src={logo4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style2} src={logo5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={style2} src={logo6} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default WorkSlider