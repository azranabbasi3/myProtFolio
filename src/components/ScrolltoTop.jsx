import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showButton) return null;

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 cursor-pointer  z-50  scale-animation no-hover-scale duration-1000 backdrop-blur-sm rounded-full"
    >
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <foreignObject x="-30" y="-30" width="126" height="126">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style="backdrop-filter:blur(15px);clip-path:url(#bgblur_0_2978_2367_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject> */}
        <circle
          data-figma-bg-blur-radius="30"
          cx="33"
          cy="33"
          r="32.5"
          fill="#252525"
          fill-opacity="0.1"
          stroke="#6EC6A8"
        />
        <path
          d="M27.3858 26.9654C27.3003 26.9227 27.207 26.8977 27.1116 26.8919C27.0162 26.8862 26.9206 26.8998 26.8306 26.9319C26.7406 26.9641 26.6581 27.0141 26.5879 27.0791C26.5178 27.144 26.4615 27.2224 26.4224 27.3097L20.4824 40.6292C19.5374 42.7485 21.6369 44.9457 23.6019 43.896L31.9659 39.4307C32.6175 39.0836 33.3825 39.0836 34.0328 39.4307L42.3968 43.896C44.3617 44.9457 46.4612 42.7485 45.5163 40.6292L43.2893 35.6368C43.0224 35.0374 42.5557 34.5492 41.9689 34.2556L27.3858 26.9654Z"
          fill="#6EC6A8"
        />
        <path
          opacity="0.5"
          d="M28.1975 24.9951C28.0344 24.9138 27.9089 24.7727 27.8472 24.6012C27.7854 24.4297 27.7922 24.241 27.866 24.0743L30.9133 17.2417C31.7491 15.366 34.2495 15.366 35.0854 17.2417L40.7067 29.8472C40.7657 29.9805 40.7821 30.1287 40.7538 30.2716C40.7255 30.4145 40.6538 30.5453 40.5484 30.6459C40.4431 30.7466 40.3093 30.8124 40.1652 30.8342C40.0211 30.8561 39.8738 30.833 39.7434 30.768L28.1975 24.9951Z"
          fill="#6EC6A8"
        />
        <defs>
          <clipPath id="bgblur_0_2978_2367_clip_path">
            <circle transform="translate(30 30)" cx="33" cy="33" r="32.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollToTopButton;
