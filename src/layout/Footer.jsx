import { Footer, FooterBrand } from "flowbite-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const ReactFooter = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation(); // Get current route path and hash

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to top
    });
  };

  // Scroll to the top whenever the route changes or when the same link is clicked
  useEffect(() => {
    if (!hash) {
      scrollToTop(); // Scroll to top for all routes except hash (like feedback section)
    }
  }, [pathname, hash]);
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link
              to="/"
              onClick={() => {
                if (pathname === "/") scrollToTop(); // Scroll to top if already on Home page
              }}
            >
              <Footer.Brand
                src="https://flowbite.com/docs/images/logo.svg"
                href="/"
                alt="Flowbite Logo"
                name="React Store"
              ></Footer.Brand>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Link
                  to="/"
                  onClick={() => {
                    if (pathname === "/") scrollToTop();
                  }}
                >
                  <Footer.Link>React Store</Footer.Link>
                </Link>
                <Link
                  to="/Product"
                  onClick={() => {
                    if (pathname === "/Product") scrollToTop(); // Scroll to top if already on Home page
                  }}
                >
                  <Footer.Link>Products</Footer.Link>
                </Link>
                <Link
                  to="/Cart"
                  onClick={() => {
                    if (pathname === "/Cart") scrollToTop(); // Scroll to top if already on Home page
                  }}
                >
                  <Footer.Link>Cart</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link>Github</Footer.Link>
                <Footer.Link>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link>Privacy Policy</Footer.Link>
                <Footer.Link>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="React Store™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon icon={BsFacebook} />
            <Footer.Icon icon={BsInstagram} />
            <Footer.Icon icon={BsTwitter} />
            <Footer.Icon icon={BsGithub} />
            <Footer.Icon icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};
export default ReactFooter;
