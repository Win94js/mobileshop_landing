import heroImg2 from '../assets/Photos/HeroImg.png';

function About() {
  return (
    <div id='about' className="w-full min-h-[650px] flex flex-col items-center text-white bg-blue-900 m-auto p-8">
      <h2 className="text-[2.4rem] font-bold mt-[2.4rem]">About Us</h2>

      <div className="w-[90%] flex my-[3rem] items-center flex-col lg:flex-row gap-8">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroImg2}
            alt="About us"
            className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-[.95rem] leading-relaxed md:leading-loose">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a incidunt ullam eius et,
            ea nulla asperiores repellat aspernatur repudiandae repellendus ipsum amet totam quo at esse sed? 
            Placeat, optio?
          </p>
          <p className="mb-4">
            Rem, commodi dolorem atque aspernatur amet pariatur aperiam nemo cupiditate deserunt vitae voluptatibus 
            quibusdam minus repellat explicabo temporibus alias natus labore. Unde rerum maiores a ipsum veniam saepe ab provident.
          </p>
          <p className="mb-4">
            Error accusantium, deserunt quos quae animi libero quibusdam corrupti ratione ex nostrum adipisci non praesentium 
            similique officiis facere! Aliquam quod ratione libero asperiores illo doloribus eos ex rerum repudiandae dolor?
          </p>
          <p>
            Consequatur iste repudiandae esse amet exercitationem facere voluptate cupiditate optio qui et alias ut architecto 
            expedita cum molestias earum, commodi cumque delectus? Excepturi recusandae quis molestias velit, vitae saepe omnis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
