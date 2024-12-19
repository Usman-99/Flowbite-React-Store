import { Footer } from "flowbite-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { pages } from "../constants/base";

const ReactFooter = () => {
  const footericons = [
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub,
    BsDribbble,
  ];
  const footerlinks = [
    { name: "Follow us", link1: "Github", link2: "Discord" },
    { name: "Legal", link1: "Privacy Policy", link2: "Terms & Conditions" },
  ];
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
    <Footer container className="bg-gray-300">
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
              <Footer.Title title="about" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                {pages.map((page) =>
                  page.name === "Feedback" ? (
                    <HashLink smooth to={page.path}>
                      <Footer.Link>{page.name}</Footer.Link>
                    </HashLink>
                  ) : (
                    <Link
                      to={page.path}
                      onClick={() => {
                        if (pathname === page.path) scrollToTop();
                      }}
                    >
                      <Footer.Link>{page.name}</Footer.Link>
                    </Link>
                  )
                )}
              </Footer.LinkGroup>
            </div>
            {footerlinks.map((item) => (
              <div key={item.name}>
                <Footer.Title title={item.name} className="text-black"/>
                <Footer.LinkGroup col className="text-black">
                  <Footer.Link>{item.link1}</Footer.Link>
                  <Footer.Link>{item.link2}</Footer.Link>
                </Footer.LinkGroup>
              </div>
            ))}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="React Store™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {footericons.map((icon, index) => (
              <Footer.Icon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default ReactFooter;
