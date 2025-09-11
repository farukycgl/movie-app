import React from "react";

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
    <div className="h-[500px]">
      <Slider {...settings}>
        <div className="h-[500px] w-full flex items-center justify-center">
          <img
            className="h-full w-full object-cover"
            alt=""
            src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
        <div className="h-[500px] w-full flex items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?cs=srgb&dl=pexels-obregonia-d-toretto-325418-918281.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="h-[500px] w-full flex items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.pixabay.com/photo/2016/01/22/08/20/film-1155439_1280.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderHero;
