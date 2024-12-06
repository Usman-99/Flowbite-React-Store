import CustomCarousel from "../components/Carousel";
import FeedbackForm from "../components/FeedbackForm"; // Adjust the path
import CustomSidebar from "../components/CustomSidebar"; // Adjust the path

const Home = () => {
  const handleFormSubmit = (formData) => {
    alert(
      `Form submitted with name: ${formData.name}, email: ${formData.email}, and feedback: ${formData.feedback}`
    );
  };

  return (
    <>
      <CustomCarousel
        img1src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        img2src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        img3src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        img4src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        img5src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        sliderReq={true}
      />

      {/* Sidebar and Form Layout */}
      <div className="flex flex-col lg:flex-row mt-3 mb-4 px-4 lg:px-8">
        {/* Sidebar */}
        <CustomSidebar />

        {/* Form Section */}
        <section id="Feedbackform" className="flex-grow flex justify-center mb-5">
          <FeedbackForm onSubmit={handleFormSubmit} />
        </section>
      </div>
    </>
  );
};

export default Home;
