import animationData from "../assets/scroll.json";
import Lottie from "lottie-react";

const ScrollDown = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="cursor-pointer" onClick={() => handleScroll("about")}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 80, height: 50 }}
        role="presentation" /* Ignore for screen readers */
        aria-hidden="true" /* Hide from assistive technologies */
      />
    </div>
  );
};
export default ScrollDown;
