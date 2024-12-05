import { Carousel } from "flowbite-react";
import {useState} from "react"
import { Label, TextInput, Button, Checkbox, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[feedback,setFeedback]=useState('')
const handleSubmit=(e)=>{
  e.preventDefault();
  alert(`Form submitted with name ${name} , email ${email} and feedback ${feedback}`)
}
  return (
    <>
      {/* Carousel */}
      <div className="h-56 sm:h-64 lg:h-[450px] xl:h-[450px] 2xl:h-[470px] mt-10 mb-5">
        <Carousel slide={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      {/* Sidebar and Form Layout */}
      <div className="flex flex-col lg:flex-row mt-3 mb-4 px-4 lg:px-8">
        {/* Sidebar */}
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="lg:min-w-[250px] w-full lg:w-auto mb-4 lg:mb-0"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Link to="/Product">
                  <Sidebar.Item>Products</Sidebar.Item>
                </Link>
                <Link to="/Cart">
                  <Sidebar.Item>Cart</Sidebar.Item>
                </Link>
              </Sidebar.Collapse>
              <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item>
              <Sidebar.Item icon={HiUser}>User</Sidebar.Item>
              <Sidebar.Item icon={HiShoppingBag}>Products</Sidebar.Item>
              <Sidebar.Item icon={HiArrowSmRight}>Sign In</Sidebar.Item>
              <Sidebar.Item icon={HiTable}>Sign Up</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        {/* Form Section */}
        <section id="Feedbackform" className="flex-grow flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg w-full mx-auto lg:w-[600px] lg:ml-auto"><br/><br/>
          <h1 className="text-4xl font-bold text-center mb-8">Give Feedback</h1>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput id="name" type="text" placeholder="Name" required name="name" value={name} onChange={(e)=>{
                setName(e.target.value)
              }}/>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                value={email}
                type="email"
                placeholder="name@flowbite.com"
                required
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="large" value="Give your Feedback" />
              </div>
              <TextInput value={feedback} id="feedback" type="text" sizing="lg" required onChange={(e)=>{
                  setFeedback(e.target.value)
                }}/>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Home;
