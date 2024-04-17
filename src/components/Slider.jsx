// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  useEffect(() => {
    AOS.init({ duration: "3000" });
  }, []);
  return (
    <div className="my-6">
      <Swiper
        cssMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/mvcrJGs/pexels-binyamin-mellish-1396132.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              {/* content */}
              <div className="absolute text-center text-white z-10 ">
                <h1 className="text-sm">HEADING</h1>
                <p className="text-5xl">subheading</p>
                <button className="btn">View more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="relative">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/wyhtdjr/pexels-curtis-adams-4119831.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              {/* content */}
              <div className="absolute text-center text-white z-10">
                <h1>HEADING</h1>
                <p>subheading</p>
                <button className="btn">View more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="relative">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/r6z55Xv/pexels-mark-2724749.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              {/* content */}
              <div className="absolute text-center text-white z-10">
                <h1>HEADING</h1>
                <p>subheading</p>
                <button className="btn">View more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* ******************************** */}
      {/* 1 */}
      {/* <div className="relative">
        <div
          className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/mvcrJGs/pexels-binyamin-mellish-1396132.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
          }}
        >
        
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
         
          <div className="absolute text-center text-white z-10">
            <h1>HEADING</h1>
            <p>subheading</p>
            <button className="btn">View more</button>
          </div>
        </div>
      </div> */}
      {/*  */}
    </div>
  );
};

export default Slider;
