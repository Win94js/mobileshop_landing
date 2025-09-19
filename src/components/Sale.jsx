import { motion } from "framer-motion";
import CategoryIcon from '@mui/icons-material/Category'; 
import CampaignIcon from '@mui/icons-material/Campaign'; 
import DiscountIcon from '@mui/icons-material/Discount'; 
import SupportIcon from '@mui/icons-material/Support'; 

import saleIMG from '../assets/Photos/hero_img_2.png';

const whatWedo = [
              {
                icon: <CategoryIcon className="!w-12 !h-12 text-blue-800 mb-2" />,
                title: "1000+ items",
                text: "Find a wide range of mobile phones, covers, earphones, screen protectors and many more accessories all in one place.",
                bg: "bg-blue-300"
              },
              {
                icon: <DiscountIcon className="!w-12 !h-12 text-blue-800 mb-2" />,
                title: "Big Discounts",
                text: "Enjoy seasonal discounts and best deals every week.",
                bg: ""
              },
              {
                icon: <CampaignIcon className="!w-12 !h-12 text-blue-800 mb-2" />,
                title: "Hot Promotions",
                text: "Stay updated with our latest offers and promotions.",
                bg: "sm:bg-blue-300 lg:bg-transparent"
              },
              {
                icon: <SupportIcon className="!w-12 !h-12 text-blue-800 mb-2" />,
                title: "Support",
                text: "Get customer support anytime for a seamless shopping experience.",
                bg: "lg:bg-blue-300"
              }
            ]

function Sale() {
  return (
    <div id='sale' className="w-full min-h-[550px] flex flex-col text-black bg-neutral-100 m-auto p-8 text-[.75rem] md:text-[.95rem]">
      
      <div className="sale-text-img flex flex-col md:flex-row justify-between items-center m-auto gap-2">
        
        {/* Left Image */}
        <motion.div
          className="flex justify-center items-center w-full md:w-[40%] max-h-[650px] overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={saleIMG}
            className="w-[420px] h-full relative object-cover pb-8 mb-2"
            alt="sale-girl"
          />
        </motion.div>

        {/* Right Features */}
        <motion.div
          className="md:w-[55%] p-4 flex flex-col justify-between"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[2rem] text-left font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            One Stop Shop for Mobile and Accessories
          </motion.h2>

          <motion.p
            className="my-4 text-[1.4rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam est libero culpa rem adipisci dolorum, explicabo quidem! Temporibus at eos omnis, cum vel repellendus possimus architecto mollitia modi iste hic?
          </motion.p>

          {/* Feature Boxes */}
          <motion.div
            className="mt-10 flex flex-col lg:grid md:flex grid-cols-2 gap-4 w-fit md:w-auto m-auto rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {/* Box Template */}
            {whatWedo.map((box, idx) => (
              <motion.div
                key={idx}
                className={`max-w-[325px] max-h-[200px] flex items-center justify-center p-2 rounded-2xl ${box.bg}`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {box.icon}
                <div>
                  <h2 className="text-lg font-bold">{box.title}</h2>
                  <p className="text-left text-sm mt-1">{box.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sale;
