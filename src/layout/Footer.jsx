import { Footer } from "flowbite-react";
import useScrollToTop from "../hooks/useScrollToTop";
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
import { scrollToTop } from "../utils/commonFunction"

const ReactFooter = () => {
  useScrollToTop()
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
  return (
    <Footer container className="bg-gray-300">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
            >
              <Footer.Brand
                src="https://flowbite.com/docs/images/logo.svg" 
                href="/aa"
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
                      onClick={scrollToTop}
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
