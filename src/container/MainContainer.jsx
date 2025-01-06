import { Outlet } from "react-router-dom";
import ReactNavbar from "../layout/Navbar";
import ReactFooter from "../layout/Footer";
const MainContainer = () => {
  const text = "Our Products";
  const items = ["hello", "world"];
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <ReactNavbar/>
      <div className="flex-grow py-3 mt-10">
        <Outlet context={{ text, items }} />
      </div>
      <ReactFooter/>
    </div>
  );
};

export default MainContainer;
