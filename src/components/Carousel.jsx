import { Carousel } from "flowbite-react";
const CustomCarousel = ({img1src,img2src,img3src,img4src,img5src,sliderReq}) => {
  const imglist = [
    {
      src: img1src,
      alt: "img1",
    },
    {
      src: img2src,
      alt: "img2",
    },
    {
      src: img3src,
      alt: "img3",
    },
    {
      src: img4src,
      alt: "img4",
    },
    {
      src: img5src,
      alt: "img5",
    },
  ];
  return (
    <div className="h-56 sm:h-64 lg:h-[450px] xl:h-[450px] 2xl:h-[470px] mt-10 mb-5">
      <Carousel slide={sliderReq}>
        {imglist.map((item,index)=>(
            <img key={index}
          src={item.src}
          alt={item.alt}
        />)
        )}
      </Carousel>
    </div>
  );
};
export default CustomCarousel;
