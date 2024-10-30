import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const SmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart",
    });

    // Handle internal links with smooth scrolling
    const handleAnchorLinks = (e) => {
      const target = e.target;
      const href = target.getAttribute("href");
      if (target.tagName === "A" && href.startsWith("#")) {
        e.preventDefault();
        scroller.scrollTo(href.substring(1), {
          duration: 800,
          smooth: "easeInOutQuart",
        });
      }
    };

    document.addEventListener("click", handleAnchorLinks);
    return () => document.removeEventListener("click", handleAnchorLinks);
  }, [location]);

  return null;
};

export default SmoothScroll;