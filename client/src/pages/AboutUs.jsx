import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WelcomeSection from "../components/WelcomeSection";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return <WelcomeSection />;
};

export default AboutUs;
