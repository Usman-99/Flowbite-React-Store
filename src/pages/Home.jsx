import CustomCarousel from "../components/Carousel";
import FeedbackForm from "../components/FeedbackForm"; // Adjust the path
import CustomSidebar from "../components/CustomSidebar"; // Adjust the path


const Home = () => {
  const imglist = [
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "img1",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "img2",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "img3",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
      alt: "img4",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
      alt: "img5",
    },
  ];

  return (
    <>
      <CustomCarousel sliderReq={true} imglist={imglist} />

      {/* Sidebar and Form Layout */}
      <div className="flex flex-col lg:flex-row mt-3 mb-4 px-4 lg:px-8">
        {/* Sidebar */}
        <CustomSidebar />

        {/* Form Section */}
        <section id="Feedbackform" className="flex-grow flex justify-center mb-5">
          <FeedbackForm />
        </section>
      </div>
    </>
  );
};

export default Home;
