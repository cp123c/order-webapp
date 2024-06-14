import React from "react";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  className: "center",
  infinite: true,
  centerMode: true,
  centerPadding: "20px",
  slidesToShow: 1,
  swipeToSlide: true,
};

const EachSliderContent = ({data:{title,name,image,desc}}) => {
  return (
    <div>
      <div className="flex py-3">
        <div className="font-bold flex gap-2 text-lg items-center">
          {title} <ArrowRight className="w-[14px]" />
        </div>
      </div>
      <div className="rounded-md mr-4">
        <img src={image} className="w-full h-48" alt="" />
      </div>
      <div className="leading-tight">
        <div className="font-semibold pt-2 w-full">
          {desc}
        </div>
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
};

const SliderFoodOffer = ({className,data}) => {
  return (
    <div className={twMerge("w-full", className)} >
      <div></div>
      <Slider {...settings}>
        {data.map((data)=>{
            return <EachSliderContent key={data.id} data={data} />
        })}
      </Slider>
    </div>
  );
};

export default SliderFoodOffer;
