import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const CustomSidebar = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="lg:min-w-[250px] w-full lg:w-auto mb-4 lg:mb-0">
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
  );
};

export default CustomSidebar;
