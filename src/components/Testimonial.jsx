import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import userImg from "../assets/Photos/user-img.jpeg";

function Testimonial() {
  const reviews = [
    {
      name: "User One",
      user_img: userImg,
      text: "Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "User Two",
      user_img: userImg,
      text: "Voluptas sunt nobis magni autem at, est commodi ratione reiciendis error distinctio."
    },
    {
      name: "User Three",
      user_img: userImg,
      text: "Totam error hic modi architecto ratione blanditiis!"
    },
    {
      name: "User Four",
      user_img: userImg,
      text: "Stay connected with the best shopping experience ever."
    },
    {
      name: "User Five",
      user_img: userImg,
      text: "Customer service was excellent and delivery was fast."
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div
      className="review-section relative min-w-[320px] min-h-[480px] 
        bg-center bg-cover bg-no-repeat m-0
        bg-[url('./assets/Photos/customersImg.jpg')]"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#02102aa3] to-[#044ad780] z-10"></div>

      {/* Content container */}
      <div className="reviews-container relative z-20 px-6 py-8 text-white">
        <h2 className="text-[2.4rem] font-bold text-center mt-[2.4rem]">
          What Our Clients Say
        </h2>

        <div className="relative flex items-center justify-center max-w-[620px] h-[420px] m-auto overflow-hidden mt-[2rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x:200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="review-card relative min-w-full h-[320px] p-6 flex flex-col justify-center items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
            >
              <img
                src={reviews[current].user_img || userImg}
                alt={reviews[current].name}
                className="w-20 h-20 absolute -top-8 rounded-full shadow-md border-2 border-white"
              />
              <h3 className="text-xl font-semibold mt-12">
                {reviews[current].name}
              </h3>
              <p className="testimonial-text w-[95%] max-h-[190px] flex items-center text-[.95rem] justify-center p-4 mt-4 overflow-y-auto">
                {reviews[current].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-black/70 hover:bg-black text-white rounded-full 
              w-10 h-10 flex items-center justify-center shadow-md"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-black/70 hover:bg-black text-white rounded-full 
              w-10 h-10 flex items-center justify-center shadow-md"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
