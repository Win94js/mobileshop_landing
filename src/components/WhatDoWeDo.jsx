import BusinessIcon from '@mui/icons-material/Business';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HandymanIcon from '@mui/icons-material/Handyman';
import { motion } from 'framer-motion';
const weDo = [
    {
        icon:<BusinessIcon className='!w-[60px] !h-[60px] p-2'/>,
        text:"Since 2013-Present"
    },
    {
        icon:<SellIcon className='!w-[60px] !h-[60px] p-2'/>,
        text:"Sale"
    },
    {
        icon:<StorefrontIcon className='!w-[60px] !h-[60px] p-2'/>,
        text:"Retail"
    },
    {
        icon:<HandymanIcon className='!w-[60px] !h-[60px] p-2'/>,
        text:"Services"
    },
]

function WhatDoWeDo() {
    return (  
        <div className='w-full max-h-[650px] text-white  bg-blue-900 m-auto p-8 text-[.75rem] md:text-[.95rem]'>
           
            <div className=' mt-[2.4rem] flex flex-col justify-center items-center '>
                
                
                <h2 className='text-[2.4rem] font-bold'>What do we do</h2>
                <div className='w-[90%] mt-[26px] grid grid-cols-2 grid-rows-2 md:flex flex-wrap  justify-around '>
                    {
                    weDo.map((list,idx) => (
                        <motion.div  key={idx} className='max-w-[280px] max-h-[280px] p-2 pb-4 mx-[10px] mt-[20px] 
                        info-text-card flex flex-col items-center
                        text-center rounded-2xl 
                        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                     '
                         initial={{ opacity: 0, y: 50 }}         // start hidden
              whileInView={{ opacity: 1, y: 0 }}      // fade in on scroll
              viewport={{ once: false, amount: 0.2 }}  // trigger when 20% visible
              transition={{ duration: 0.3, delay: idx * 0.2 }}
              whileTap={{ scale: 0.95 }}              // animate on touch/click
              whileHover={{ scale: 1.05 }}            // animate on hover (desktop)
                         >
                        <span>
                            {list.icon}
                        </span>
                        <p className='text-white text-[0.95rem] md:text-[1.25rem] md:tracking-[1.6px] font-semibold md:font-extrabold opacity-[95%] mx-[180px] p-2 w-full h-fit'>{list.text}</p>
                        {/* <p className='w-[95%] flex text-balance '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias in ducimus vel officiis magni. Earum modi officiis recusandae. Maxime consequuntur delectus temporibus animi doloribus eveniet a vitae unde similique.
                        </p> */}
                    </motion.div>
                    ))
                    
                    }
                    
                </div>
                
            </div>
        </div>
    );
}

export default WhatDoWeDo;
