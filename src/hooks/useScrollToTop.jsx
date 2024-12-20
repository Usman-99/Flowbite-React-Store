import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../utils/commonFunction" // Adjust the path to your scroll function

const useScrollToTop = () => {
  const { pathname, hash } = useLocation(); // Get current route path and hash

  useEffect(() => {
    if (!hash) {
      scrollToTop(); // Scroll to top for all routes except hash (like feedback section)
    }
  }, [pathname, hash]);
};

export default useScrollToTop;
