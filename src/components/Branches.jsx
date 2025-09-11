import branch_1_img from '../assets/Photos/place_one.jpg';
import { MapPin } from 'lucide-react';
import { Store } from 'lucide-react';
import { Phone } from 'lucide-react';
const branches = [
    {
        "shopImg":branch_1_img,
        "shop":"ခေတ်သစ် ၁",
        "address" : "မြိုမဈေး အရှေ့ဘက် ကားကွင်းမျက်နှာချင်းဆိုင်",
        "salesNumber"  : "09-979 505 053",
        "serviceNumber": "09-400 304 414",
        "moneyTransfer": "09-444702232"
     },
     {
        "shopImg":branch_1_img,
        "shop":"ခေတ်သစ် ၂",
        "address" : "မြိုမဈေး ပွဲရုံတန်း ပ-၂",
        "salesNumber"  : "09 -680 756 648",
        "serviceNumber": "09-965 761 522",
        "moneyTransfer": " 09-456099223"
     },
     {
        "shopImg":branch_1_img,
        "shop":"ခေတ်သစ် ၃",
        "address" : "မြို့မဈေး ပွဲရုံတန်း ပ-၇၅",
        "salesNumber"  : "09-777 763 776",
        "serviceNumber": "09-694 848 304",
        "moneyTransfer": "09-444702232"
     },
     {
        "shopImg":branch_1_img,
        "shop":"ခေတ်သစ် ၄",
        "address" : "ပုဗ္ဗသီရိမြိုနယ်နေပြည်တော်ဘူတာကြီးအနီး ကျည်တောင်ကန်မီးပွိင့်ထိပ်",
        "salesNumber"  : "09-771000993",
        "serviceNumber": "09-669942883",
        "moneyTransfer": "09-771000993"
     },
     

]
function Branches() {


    return ( 
        <div className='bg-white text-black min-h-[720px] p-8'>
            <h3 className='text-[2.4rem] font-bold mt-[2.4rem]'>Our Branches</h3>
            <p>We are proud to serve our customers through four convenient branches, each designed to bring you the best mobile shopping experience. Whether you are looking for the latest smartphones, quality accessories, or quick repair services, our branches are always ready to help.</p>
            <div className="branches-container lg:grid grid-cols-2 grid-rows-2 md:flex md:flex-col gap-4 ">
                {
                    branches.map((branch => (
               <div className="branch-card w-full  lg:w-full md:w-[60%] h-[380px] flex flex-col lg:flex-row items-center gap-4 m-auto p-4 border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    {/* Image with hover effect */}
                    <div className="min-w-[240px]  h-[180px] rounded-2xl overflow-hidden">
                        <img
                        src={branch_1_img}
                        alt="Branch One"
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:brightness-90"
                        />
                    </div>

                    {/* Branch Info */}
                    <div className="flex flex-col gap-2 justify-center p-2 text-[1rem]">
                        <li className="flex items-center gap-3">
                        <Store strokeWidth={1.25} className='w-[24px] h-[24px]'/> <span>{branch.shop}</span>
                        </li>
                        <li className="flex items-center gap-3  line-clamp-2">
                        <MapPin strokeWidth={1.25} className='min-w-[24px] min-h-[24px]' /> <span >{branch.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                        <Phone strokeWidth={1.25} /> <span><b>Sales:</b> {branch.salesNumber}</span>
                        </li>
                        <li className="flex items-center gap-3">
                        <Phone strokeWidth={1.25} /> <span><b>Service:</b> {branch.serviceNumber}</span>
                        </li>
                        <li className="flex items-center gap-3">
                        <Phone strokeWidth={1.25} /> <span><b>Money Transfer:</b> {branch.moneyTransfer}</span>
                        </li>
                    </div>
                </div>
  
                    )))
                
                 
                }
            </div>
                
                
            
        </div>
     );
}

export default Branches;