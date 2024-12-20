import { Navbar } from "flowbite-react";
import { useNavigate, NavLink} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CustomButton from "../components/Buttons";
import { pages } from "../constants/base";
import { scrollToTop } from "../utils/commonFunction"
import useScrollToTop from "../hooks/useScrollToTop"; 

const ReactNavbar = () => {
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50">
      <Navbar.Brand
        onClick={() => {
          navigate("/");
          scrollToTop(); // Scroll to top when logo is clicked
        }}
        className="cursor-pointer"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          React Store
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <CustomButton
          Text={"Start Shopping"}
          onClick={() => {
            navigate("/Product");
            scrollToTop();
          }}
          className="mr-4"
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>{pages.map((page)=>page.name==="Feedback" ? (<HashLink smooth to={page.path}>
          <Navbar.Link>{page.name}</Navbar.Link>
        </HashLink>):(<NavLink
          to={page.path}
          onClick={scrollToTop}
        >
          <Navbar.Link>{page.name}</Navbar.Link>
        </NavLink>))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ReactNavbar;
