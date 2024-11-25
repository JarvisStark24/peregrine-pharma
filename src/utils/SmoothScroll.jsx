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

    // Handle internal anchor links with smooth scrolling
    const handleAnchorLinks = (e) => {
      const target = e.target;
      const href = target.getAttribute("href");

      // Check if it's an anchor link (href starts with "#")
      if (target.tagName === "A" && href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);

        scroller.scrollTo(targetId, {
          duration: 800,
          smooth: "easeInOutQuart",
        });
      }
    };

    // Attach event listener for anchor links
    document.body.addEventListener("click", handleAnchorLinks);

    // Scroll to section if the URL contains a hash (#section) when the component is mounted
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      scroller.scrollTo(sectionId, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleAnchorLinks);
    };
  }, [location]);

  return null;
};

export default SmoothScroll;
