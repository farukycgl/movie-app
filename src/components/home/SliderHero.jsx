import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderHero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[500px] ">
      <Slider {...settings}>
        <div className="flex items-center justify-center bg-green-300 h-[500px]">
          <h3 className="text-4xl font-bold">1</h3>
        </div>
        <div className="flex items-center justify-center bg-red-400 h-[500px]">
          <h3 className="text-4xl font-bold">2</h3>
        </div>
        <div className="flex items-center justify-center bg-yellow-500 h-[500px]">
          <h3 className="text-4xl font-bold">3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderHero;
