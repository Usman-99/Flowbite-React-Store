import { Carousel } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home=()=> {
  return (<>
    <div className="h-56 sm:h-64 lg:h-[450px] xl:h-[450px] 2xl:h-[470px] mt-20">
    <Carousel slide={false}>
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </Carousel>
  </div>
  <Sidebar aria-label="Sidebar with multi-level dropdown example" className="mt-3 mb-4">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Link to="/Product"><Sidebar.Item >Products</Sidebar.Item></Link>
            <Link to="/Cart"><Sidebar.Item >Cart</Sidebar.Item></Link>         
          </Sidebar.Collapse>
          <Sidebar.Item  icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item  icon={HiUser}>
            User
          </Sidebar.Item>
          <Sidebar.Item  icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item  icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item  icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
</>
  );
}
export default Home;




