import heroImg2 from '../assets/Photos/HeroImg.png';

function About() {
    return (  
        <div className='w-full min-h-[650px] flex flex-col items-center  text-white  bg-blue-900 m-auto p-8 text-[.75rem] md:text-[.95rem]'>
            <h2 className='text-[2.4rem] font-bold mt-[2.4rem]'>About Us</h2>
            <div className='w-[90%] flex my-[3rem] items-center '>
                    <div className='w-[50%] h-[200px]'><img src={heroImg2} alt="about us photo" className='w-full h-full object-cover rounded-lg' /></div>
                    <div className='w-[50%]'>
                        
                        <p className='p-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a incidunt ullam eius et, ea nulla asperiores repellat aspernatur repudiandae repellendus ipsum amet totam quo at esse sed? Placeat, optio?
                        Rem, commodi dolorem atque aspernatur amet pariatur aperiam nemo cupiditate deserunt vitae voluptatibus quibusdam minus repellat explicabo temporibus alias natus labore. Unde rerum maiores a ipsum veniam saepe ab provident.
                        Error accusantium, deserunt quos quae animi libero quibusdam corrupti ratione ex nostrum adipisci non praesentium similique officiis facere! Aliquam quod ratione libero asperiores illo doloribus eos ex rerum repudiandae dolor?
                        Consequatur iste repudiandae esse amet exercitationem facere voluptate cupiditate optio qui et alias ut architecto expedita cum molestias earum, commodi cumque delectus? Excepturi recusandae quis molestias velit, vitae saepe omnis?
                        </p>
                    </div>
                </div>
        </div>
       
    );
}

export default About;
