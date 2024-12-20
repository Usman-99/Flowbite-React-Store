import { Sidebar } from "flowbite-react";
import { IoMdHome } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { scrollToTop } from "../utils/commonFunction";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useScrollToTop from "../hooks/useScrollToTop";

const sidenavArr = [
  { name: "Home", icon: IoMdHome, path: "/" },
  { name: "Feedback", icon: RiFeedbackFill, path: "/#Feedbackform" },
  { name: "Person Details", icon: FaUser, path: "/PersonDetails" },
  { name: "Products", icon: AiFillProduct, path: "/Product" },
  { name: "Cart", icon: FaShoppingCart, path: "/Cart" },
];

const CustomSidebar = () => {
  useScrollToTop();
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="lg:min-w-[250px] w-full lg:w-auto mb-4 lg:mb-0"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidenavArr.map((page, index) =>
            page.name === "Feedback" ? (
              <HashLink smooth to={page.path} key={index}>
                <Sidebar.Item icon={page.icon}>{page.name}</Sidebar.Item>
              </HashLink>
            ) : (
              <Link key={index} to={page.path} onClick={scrollToTop}>
                <Sidebar.Item icon={page.icon}>{page.name}</Sidebar.Item>
              </Link>
            )
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default CustomSidebar;
