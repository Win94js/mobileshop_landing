import { useState } from 'react';
import userImg from '../assets/Photos/user-img.jpeg';
function Testimonial() {

    const reviews = [
    { name: "User One",  user_img:userImg, text: "Ullam, eum tenetur!otam error hic modi architecto ratione blanditiis!otam error hic modi architecto ratione blanditiis!otam error hic modi architecto ratione blanditiis! Totam error hic modi architecto ratione blanditiis!Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis!Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis!Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis!Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis!Ullam, eum tenetur! Totam error hic modi architecto ratione blanditiis!" },
    { name: "User Two",  user_img:userImg,text: "Voluptas sunt nobis magni autem at, est commodi ratione reiciendis error distinctio." },
    { name: "User Three",user_img:userImg,text: "Totam error hic modi architecto ratione blanditiis!" },
    { name: "User Four", user_img:userImg,text: "Stay connected with the best shopping experience ever." },
    { name: "User Five", user_img:userImg, text: "Customer service was excellent and delivery was fast." },
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
    className="review-section relative min-w-[320px] min-h-[380px] 
      bg-center bg-cover bg-no-repeat m-0
      bg-[url('./assets/Photos/customersImg.jpg')]"
  >
    {/* Overlay gradient */}
    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#02102aa3] to-[#044ad780] z-10"></div>

    {/* Content container */}
    <div className="reviews-container relative z-20 px-6 py-8 text-white">
      <h2 className='text-[2.4rem] font-bold text-center mt-[2.4rem]'>Our Customer Reviews</h2>
      
      <div className="review-cards m-auto relative items-center max-w-[620px] h-[520px] overflow-hidden  ">
        <div className=' flex justify-between mt-[3rem] items-center transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${current * 100}%)` }}
        >
        {/* Card */}
        {reviews.map((ureview,index) => (
       <div 
          key={index}
          className="review-card min-w-full h-[300px] p-4 m-auto flex flex-col justify-center items-center opacity-100 -bg-linear-330 from-[#1f1c17ab] to-[#021e71a3] backdrop-blur-sm rounded-xl text-white shadow-lg">
          <img 
            src={ureview.user_img?ureview.user_img:userImg} 
            alt="Reviewer User One" 
            className="w-20 h-20 absolute -top-8 rounded-full shadow-md z-[21]" 
          />
          <h3 className="text-xl font-semibold m-auto mt-10">
            {ureview.name}
          </h3>
          <p className="testimonial-text w-[95%] h-[190px] flex items-center text-[.95rem] justify-items-center justify-center p-4 m-auto mt-2.5 overflow-scroll"
            
          >
            {ureview.text}
          </p>
        </div>
        ))
        }
       

        </div>
    <button
  onClick={prevSlide}
  className="
    absolute left-6 sm:left-4 md:left-6 lg:left-6
    top-1/2 -translate-y-1/2 
    bg-black/70 hover:bg-black text-white 
    rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
    flex items-center justify-center shadow-md
  "
>
  ‹
</button>

<button
  onClick={nextSlide}
  className="
    absolute right-2 sm:right-4 md:right-6 
    top-1/2  -translate-y-1/2 
    bg-black/70 hover:bg-black text-white 
    rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
    flex items-center justify-center shadow-md
  "
>
  ›
</button>

      </div>

      {/* Control btn */}

    
      
    </div>
  </div>    
);

}

export default Testimonial;

