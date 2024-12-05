import { Button, Navbar } from "flowbite-react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import CustomButton from "./Buttons";

const ReactNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation(); // Get current route path

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50">
      <Navbar.Brand
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
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
          onClick={() => navigate("/Product")}
          className="mr-4"
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <Navbar.Link active>Home</Navbar.Link>
        </NavLink>
        <Navbar.Link>About</Navbar.Link>
        <HashLink to="/#Feedbackform">
          <Navbar.Link>Feedback</Navbar.Link>
        </HashLink>
        <NavLink to="/Product">
          <Navbar.Link>Products</Navbar.Link>
        </NavLink>
        <NavLink to="/Cart">
          <Navbar.Link>Cart</Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ReactNavbar;
