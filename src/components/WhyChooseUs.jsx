import { motion } from "framer-motion";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

const chooseUs = [
  {
    icon: SupportAgentIcon,
    chooseTitle: "Professional Support Team",
    chooseText:
      "Our highly trained employees are ready to assist you with expert advice and personalized solutions, ensuring that every customer receives the best experience.",
  },
  {
    icon: LocalShippingIcon,
    chooseTitle: "Convenient Door-to-Door Delivery",
    chooseText:
      "We provide fast and reliable delivery services straight to your doorstep, so you can enjoy a seamless shopping experience without leaving home.",
  },
  {
    icon: RocketLaunchIcon,
    chooseTitle: "Fast & Reliable Service",
    chooseText:
      "With our streamlined process and modern technology, we guarantee quick responses and accurate services that save you valuable time.",
  },
  {
    icon: SwapHorizontalCircleIcon,
    chooseTitle: "Guaranteed Product Warranty",
    chooseText:
      "Shop with confidence knowing that all our products come with a trusted warranty, giving you peace of mind and long-term reliability.",
  },
];

function WhyChooseUs() {
  return (
    <div className="bg-white py-12">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mt-4">
          We deliver quality, speed, and trusted services to ensure the best experience for our customers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {chooseUs.map((choose, idx) => {
          const Icon = choose.icon;
          return (
            <motion.div
              key={idx}
              className="choose-card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}         // start hidden
              whileInView={{ opacity: 1, y: 0 }}      // fade in on scroll
              viewport={{ once: true, amount: 0.2 }}  // trigger when 20% visible
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileTap={{ scale: 0.95 }}              // animate on touch/click
              whileHover={{ scale: 1.05 }}            // animate on hover (desktop)
            >
              <Icon className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{choose.chooseTitle}</h3>
              <p className="text-gray-600 text-sm mt-2">{choose.chooseText}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
