import { Carousel } from "flowbite-react";

const CustomCarousel = ({ sliderReq, imglist }) => {
  return (
    <div className="h-56 sm:h-64 lg:h-[450px] xl:h-[450px] 2xl:h-[470px] mt-10 mb-5">
      <Carousel slide={sliderReq}>
        {imglist.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
