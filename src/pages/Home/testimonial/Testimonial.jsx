import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setRivews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/rivews")
      .then((res) => res.json())
      .then((data) => setRivews(data));
  }, []);
  return (
    <div className="mb-10">
      <SectionTitle heading={"What Our Clients Say"} title={"TESTIMONIALS"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="space-y-3">
            <div className="flex justify-center">
            <Rating
             style={{maxWidth: 180}}
             value={review.rating}
             readOnly
             className="text-center"
            />
            </div>
            <p className="max-w-4xl mx-auto">{review?.details}</p>
            <h3 className="text-3xl font-semibold text-center text-[#CD9003]">
              {review?.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
