import { useState, useEffect, useRef } from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import servicImg from "../assets/Photos/service-example9.jpg";

const serviceLists = [
  { serviceList: "Touch/Glass သီးသန့်လဲပေးခြင်း" },
  { serviceList: "Battery လဲပေးခြင်း" },
  { serviceList: "Body cover/back cover လဲပေးခြင်း" },
  { serviceList: "Power key/vol keyများ ပြုပြင်/လဲပေးခြင်း" },
  { serviceList: "Speaker/Mic လဲခြင်း" },
  { serviceList: "Sim/Wifi/Bluetooth/Camera/အားသွင်းခေါင်းများပြုပြင်/လဲပေးခြင်း" },
  { serviceList: "ရေဝင်ဖုန်းများပြုပြင်ပေးခြင်း" },
  { serviceList: "No powerဖုန်းများ ပြုပြင်ပေးခြင်း" },
  { serviceList: "Firmware ရေး/Global rom ချိန်းပေးခြင်း" },
  { serviceList: "Screen Lock/Frp Lock/Mi Account Lockများဖြုတ်ပေးခြင်း" },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartY = useRef(null);

  // Mouse scroll (desktop)
  const handleScroll = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      setActiveIndex((prev) =>
        prev === serviceLists.length - 1 ? 0 : prev + 1
      );
    } else {
      setActiveIndex((prev) =>
        prev === 0 ? serviceLists.length - 1 : prev - 1
      );
    }
  };

  // Touch swipe (mobile)
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e) => {
    // Prevent whole page from scrolling while swiping inside carousel
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!touchStartY.current) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        // Swipe up → next
        setActiveIndex((prev) =>
          prev === serviceLists.length - 1 ? 0 : prev + 1
        );
      } else {
        // Swipe down → prev
        setActiveIndex((prev) =>
          prev === 0 ? serviceLists.length - 1 : prev - 1
        );
      }
    }
    touchStartY.current = null;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Desktop
    carousel.addEventListener("wheel", handleScroll, { passive: false });

    // Mobile
    carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener("wheel", handleScroll);
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="service-section relative bg-white bg-[url('./assets/Photos/service-example5.jpg')] bg-center bg-no-repeat bg-cover
                 min-w-[320px] min-h-[320px] m-auto p-4 text-white">
      <div className="overlay-service-layer z-10 absolute inset-0 h-full w-full bg-[linear-gradient(20deg,rgba(1,1,18,0.8)_55%,rgba(22,29,56,0.6)_100%)]"></div>
      <div className="z-20 relative">
        <h3 className="text-[2.4rem] font-bold text-center mt-[2.4rem]">
        We Bring Your Phone Back to Life
      </h3>
      <p className="text-[.95rem] text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        modi.
      </p>

      <div className="flex justify-center flex-col md:flex-row lg:flex-row items-center m-auto mt-[32px]">
        {/* Service Image */}
        <div className="min-w-[300px] md:w-[420px] m-auto flex overflow-hidden rounded-[5px]">
          <img
            src={servicImg}
            alt="service img"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Carousel */}
        <div className="relative min-w-[320px] lg:w-[700px] h-[420px] flex items-center m-auto justify-center">
          <div
            ref={carouselRef}
            className="relative min-w-[320px] lg:w-[550px] h-full flex flex-col items-center m-auto overflow-hidden"
          >
            {serviceLists.map((list, index) => {
              const offset = index - activeIndex;
              let style = "";

              if (offset === 0) {
                style = "opacity-100 scale-100 z-30 translate-y-0";
              } else if (offset === -1 || offset === 1) {
                style = "opacity-50 scale-90 z-20";
              } else {
                style = "opacity-0 scale-75 z-10";
              }

              return (
                <div
                  key={index}
                  className={`absolute top-[40%] left-1/2 min-w-[300px] lg:w-[480px] h-[180px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out 
                    ${style} flex flex-col items-center justify-center bg-[#bbc4cb76] backdrop-blur-sm rounded-lg 
                    shadow-lg`}
                >
                  <span className="flex items-center p-3 border-2 bg-white text-blue-900 ">
                    <ConstructionIcon />
                  </span>
                  <span className="text-[.95rem] text-center text-black font-semibold mt-2 ">
                    {list.serviceList}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Services;
