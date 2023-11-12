import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OrderOnline = () => {
  return (
    <section className="my-10 max-w-5xl mx-auto">
      <SectionTitle 
      heading={'From 11:00am to 10:00pm'}
      title={'order online'}
      >
         
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img src={slide1} alt="" className=""/>
          <h2 className="text-3xl font-semibold -mt-16 text-white text-center uppercase">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl font-semibold -mt-16 text-white text-center uppercase">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl font-semibold -mt-16 text-white text-center uppercase">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl font-semibold -mt-16 text-white text-center uppercase">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-3xl font-semibold -mt-16 text-white text-center uppercase">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OrderOnline;
