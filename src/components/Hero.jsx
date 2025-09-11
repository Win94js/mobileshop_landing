function Hero() {
  return (
    <div
      className="hero-section relative min-w-[320px] min-h-[680px] 
                 bg-center bg-cover bg-no-repeat 
                 bg-[url('./assets/Photos/hero_img_1.jpg')]"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(20deg,rgba(1,1,18,0.21)_55%,rgba(22,29,56,0.28)_100%)]"></div>

      {/* Content */}
      <div className="relative w-full flex items-center justify-center h-[680px] px-6">
        <div className="centerBox w-[80%] overflow-hidden flex flex-col justify-center items-center text-center border-r-6 border-amber-500 backdrop-blur-[4px] rounded-sm p-[14px]">
          <p className="wave-text text-amber-500 font-bold text-xl md:text-[28px] mb-2 tracking-[2px] relative top-[-12px] mt-[12px]">
            <span >E</span><span>x</span><span>p</span><span>l</span><span>o</span><span>r</span><span>e</span>
          </p>
         

          {/* Normal Title */}
          <p className="hero-title text-[#ffffff] text-[26px] md:text-[62px] font-sans font-extrabold tracking-[3px] leading-snug mb-6">
            ခေတ်သစ် IT and Mobile Shop
          </p>

          {/* SVG Title (for text stroke/animation effect) */}
          {/* <div className="wrapper w-full hero-title text-[#ef4a4a] text-[26px] md:text-[62px] font-sans font-extrabold tracking-[3px] leading-snug mb-6">
              <svg className="w-full h-[100px] md:h-[160px]" viewBox="0 0 1200 100" preserveAspectRatio="xMidYMid meet">
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  className="fill-white stroke-amber-500 stroke-[1px] text-[26px] md:text-[62px]"
                >
                  ခေတ်သစ် IT and Mobile Shop
                </text>
              </svg>
            </div> */}


          {/* CTA Button */}
          <button
            className="px-6 py-3 
                       bg-[rgba(37,164,203,0.25)] 
                       rounded-[16px] 
                       shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                       backdrop-blur-[6px] 
                       border border-[rgba(37,164,203,0.4)] 
                       text-white font-semibold 
                       hover:bg-[rgba(37,164,203,0.4)] 
                       transition duration-300
                       text-[1rem] md:text-[1.2rem]"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
