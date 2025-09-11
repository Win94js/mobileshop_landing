import CategoryIcon from '@mui/icons-material/Category'; // more product
import CampaignIcon from '@mui/icons-material/Campaign'; // promotion campagin
import DiscountIcon from '@mui/icons-material/Discount'; // discount
import SupportIcon from '@mui/icons-material/Support'; //expert employee

import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // expert support
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // delivery
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // speed 
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'; //warranty

import saleIMG from '../assets/Photos/hero_img_2.png'
function Sale() {
    return (
        <div className=' w-full min-h-[550px] flex flex-col text-black  bg-neutral-100  m-auto p-8 text-[.75rem] md:text-[.95rem]'>
          
            <div className="sale-text-img flex flex-col md:flex-row justify-between align items-center m-auto gap-2">
                {/* Left Image */}
                <div className="flex justify-center items-center border-yellow-900 w-full md:w-[40%] max-h-[650px] overflow-hidden rounded-xl">
                    <img
                    src={saleIMG}
                    className="w-[420px] h-full relative object-cover pb-8 mb-2"
                    alt="sale-girl"
                    />
                </div>

                {/* Right Features */}
                <div className=' md:w-[55%] p-4 flex flex-col justify-between ' >
                    <h2 className="text-[2rem] text-left font-bold mb-6">
                        One Stop Shop for Mobile and Accessories
                    </h2>
                    <p className='my-4 text-[1.4rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam est libero culpa rem adipisci dolorum, explicabo quidem! Temporibus at eos omnis, cum vel repellendus possimus architecto mollitia modi iste hic?</p>
                    <div className="mt-10 flex flex-col lg:grid md:flex grid-cols-2 gap-4 w-fit md:w-auto m-auto rounded-xl overflow-hidden">
                        {/* Box 1 */}
                        <div className="max-w-[325px] max-h-[200px] flex items-center justify-center  p-2 rounded-2xl bg-blue-300">
                        <CategoryIcon className="!w-12 !h-12 text-blue-800 mb-2" />
                        <div>
                        <h2 className="text-lg font-bold">1000+ items</h2>
                        <p className="text-left text-sm mt-1">
                            Find a wide range of mobile phones, covers, earphones, screen protectors
                            and many more accessories all in one place.
                        </p>
                        </div>
                        </div>

                        {/* Box 2 */}
                        <div className="max-w-[325px] max-h-[200px] flex items-center justify-center  p-2 rounded-2xl">
                        <DiscountIcon className="!w-12 !h-12 text-blue-800 mb-2" />
                            <div>
                                <h2 className="text-lg font-bold">Big Discounts</h2>
                        <p className="text-left text-sm mt-1">
                            Enjoy seasonal discounts and best deals every week.
                        </p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="max-w-[325px] max-h-[200px] flex items-center justify-center  p-2 rounded-2xl  sm:bg-blue-300 lg:bg-transparent ">
                        <CampaignIcon className="!w-12 !h-12 text-blue-800 mb-2" />
                            <div>
                                <h2 className="text-lg font-bold">Hot Promotions</h2>
                        <p className="text-left text-sm mt-1">
                            Stay updated with our latest offers and promotions.
                        </p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="max-w-[325px] max-h-[200px] flex items-center justify-center  p-2 rounded-2xl lg:bg-blue-300">
                        <SupportIcon className="!w-12 !h-12 text-blue-800 mb-2" />
                            <div>
                                <h2 className="text-lg font-bold">Support</h2>
                        <p className="text-left text-sm mt-1">
                            Get customer support anytime for a seamless shopping experience.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        </div>
      );
}
   
                          
export default Sale;