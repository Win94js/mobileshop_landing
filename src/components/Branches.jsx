import branch_1_img from "../assets/Photos/place_one.jpg";
import { MapPin, Store, Phone } from "lucide-react";
import { motion } from "framer-motion";

const branches = [
  {
    shopImg: branch_1_img,
    shop: "ခေတ်သစ် ၁",
    address: "မြိုမဈေး အရှေ့ဘက် ကားကွင်းမျက်နှာချင်းဆိုင်",
    salesNumber: "09-979 505 053",
    serviceNumber: "09-400 304 414",
    moneyTransfer: "09-444702232",
  },
  {
    shopImg: branch_1_img,
    shop: "ခေတ်သစ် ၂",
    address: "မြိုမဈေး ပွဲရုံတန်း ပ-၂",
    salesNumber: "09 -680 756 648",
    serviceNumber: "09-965 761 522",
    moneyTransfer: " 09-456099223",
  },
  {
    shopImg: branch_1_img,
    shop: "ခေတ်သစ် ၃",
    address: "မြို့မဈေး ပွဲရုံတန်း ပ-၇၅",
    salesNumber: "09-777 763 776",
    serviceNumber: "09-694 848 304",
    moneyTransfer: "09-444702232",
  },
  {
    shopImg: branch_1_img,
    shop: "ခေတ်သစ် ၄",
    address:
      "ပုဗ္ဗသီရိမြိုနယ်နေပြည်တော်ဘူတာကြီးအနီး ကျည်တောင်ကန်မီးပွိင့်ထိပ်",
    salesNumber: "09-771000993",
    serviceNumber: "09-669942883",
    moneyTransfer: "09-771000993",
  },
];

function Branches() {
  return (
    <div className="bg-white text-gray-900 min-h-[720px] px-6 py-12">
      {/* Title */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Branches
      </motion.h3>

      {/* Subtext */}
      <motion.p
        className="mt-3 text-center max-w-3xl mx-auto text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        We are proud to serve our customers through four convenient branches.
        Whether you’re looking for the latest smartphones, quality accessories,
        or quick repair services, our branches are always ready to help.
      </motion.p>

      {/* Branches Grid */}
      <div className="branches-container grid gap-8 mt-10 md:grid-cols-2">
        {branches.map((branch, idx) => (
          <motion.div
            key={idx}
            className="branch-card flex flex-col md:flex-row items-center gap-6 p-5 border rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {/* Image */}
            <div className="w-full md:w-[220px] h-[160px] rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={branch.shopImg}
                alt={branch.shop}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Info */}
            <ul className="flex flex-col gap-2 text-gray-700 text-[0.95rem]">
              <li className="flex items-center gap-3 font-semibold text-lg text-gray-900">
                <Store strokeWidth={1.4} className="w-[22px] h-[22px]" />
                {branch.shop}
              </li>
              <li className="flex items-center gap-3">
                <MapPin strokeWidth={1.4} className="w-[20px] h-[20px]" />
                <span>{branch.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone strokeWidth={1.4} className="w-[20px] h-[20px]" />
                <span>
                  <b>Sales:</b> {branch.salesNumber}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone strokeWidth={1.4} className="w-[20px] h-[20px]" />
                <span>
                  <b>Service:</b> {branch.serviceNumber}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone strokeWidth={1.4} className="w-[20px] h-[20px]" />
                <span>
                  <b>Money Transfer:</b> {branch.moneyTransfer}
                </span>
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
