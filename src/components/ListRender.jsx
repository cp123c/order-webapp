import React from "react";
import Slider from "react-slick";
import { formatCurrencies } from "@utils/utils";
import { twMerge } from "tailwind-merge";

const settings = {
  dots: false,
  autoplaySpeed: 4000,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  swipeToSlide: true,
};

const ItemBox = ({
  data: {
    image,
    restaurantsName,
    place,
    deliveryTime,
    distance,
    rating,
    percenterOff,
    rmOff,
  },
}) => {
  return (
    <div className="mr-3">
      <div>
        <img src={image} className="w-full rounded-xl" alt="" />
      </div>
      <div className="leading-tight">
        <div className="font-semibold pt-2 w-full h-[48px]">
          {restaurantsName} - {place}
        </div>
        <div className="flex gap-2 items-center py-1">
          <span className="text-sm">{deliveryTime}</span>&#183;
          <span className="text-sm">{distance}</span>&#183;
          <span className="text-sm">{rating}</span>
        </div>
        <div className="flex gap-2">
          <div className=" bg-[#fcf2ea] rounded-full px-2 text-xs float-start font-semibold">
            {percenterOff}% OFF
          </div>
          <div className=" bg-[#fcf2ea] rounded-full px-2 text-xs float-start font-semibold">
            RM {formatCurrencies(rmOff)}
          </div>
        </div>
      </div>
    </div>
  );
};

const ListRender = ({ className, title, data }) => {
  return (
    <div className={twMerge("w-full", className)}>
      <div className="flex py-3">
        <div className="font-bold flex text-lg">{title}</div>
      </div>
      <Slider {...settings} className="orderList">
        {data.map((data) => {
          return <ItemBox key={data.id} data={data} />;
        })}
      </Slider>
    </div>
  );
};

export default ListRender;
