import { Outlet } from "react-router-dom";
import ReactNavbar from "../layout/Navbar";
import ReactFooter from "../layout/Footer";
const MainContainer = () => {
  const text = "Personal Details";
  const items = ["hello", "world"];
  return (
    <div className="flex flex-col min-h-screen">
      <ReactNavbar />
      <div className="flex-grow py-3">
        <Outlet context={{ text, items }} />
      </div>
      <ReactFooter/>
    </div>
  );
};

export default MainContainer;
