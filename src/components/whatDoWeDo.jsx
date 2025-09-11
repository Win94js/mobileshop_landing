import BusinessIcon from '@mui/icons-material/Business';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HandymanIcon from '@mui/icons-material/Handyman';


function whatDoWeDo() {
    return (  
        <div className='w-full max-h-[650px] text-white  bg-blue-900 m-auto p-8 text-[.75rem] md:text-[.95rem]'>
           
            <div className=' mt-[2.4rem] flex flex-col justify-center items-center '>
                
                
                <h2 className='text-[2.4rem] font-bold'>What do we do</h2>
                <div className='w-[90%] mt-[26px] grid grid-cols-2 grid-rows-2 md:flex flex-wrap  justify-around '>
                    <div className='max-w-[260px] max-h-[280px] p-2 pb-4 mx-[10px] mt-[20px] 
                        info-text-card flex flex-col items-center
                        text-center rounded-2xl 
                        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                     '>
                        <span>
                            <BusinessIcon className='!w-[60px] !h-[60px] p-2'/>
                        </span>
                        <p className='text-white text-[0.95rem] md:text-[1.25rem] md:tracking-[1.6px] font-semibold md:font-extrabold opacity-[95%] mx-[180px] p-2 w-full h-fit'>Since 2013-Present</p>
                        {/* <p className='w-[95%] flex text-balance '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias in ducimus vel officiis magni. Earum modi officiis recusandae. Maxime consequuntur delectus temporibus animi doloribus eveniet a vitae unde similique.
                        </p> */}
                    </div>
                    <div className='max-w-[260px] max-h-[280px] p-2 pb-4 mx-[10px] mt-[20px]
                        info-text-card flex flex-col items-center
                        text-center rounded-2xl 
                        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                     '>
                        <span>
                            <SellIcon className='!w-[60px] !h-[60px] p-2'/>
                        </span>
                        <p className='text-white text-[0.95rem] md:text-[1.25rem] md:tracking-[1.6px] font-semibold md:font-extrabold opacity-[95%] mx-[180px] p-2 w-full h-fit'>Sale</p>
                        {/* <p className='w-[95%] flex text-balance '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias in ducimus vel officiis magni. Earum modi officiis recusandae. Maxime consequuntur delectus temporibus animi doloribus eveniet a vitae unde similique.
                        </p> */}
                    </div>
                    <div className='max-w-[260px] max-h-[280px] p-2 pb-4 mx-[10px] mt-[20px]
                        info-text-card flex flex-col items-center
                        text-center rounded-2xl
                        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                     '>
                        <span>
                            <StorefrontIcon className='!w-[60px] !h-[60px] p-2'/>
                        </span>
                        <p className='text-white text-[0.95rem] md:text-[1.25rem] md:tracking-[1.6px] font-semibold md:font-extrabold opacity-[95%] mx-[180px] p-2 w-full h-fit'>Retail</p>
                        {/* <p className='w-[95%] flex text-balance '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias in ducimus vel officiis magni. Earum modi officiis recusandae. Maxime consequuntur delectus temporibus animi doloribus eveniet a vitae unde similique.
                        </p> */}
                    </div>
                    <div className='max-w-[260px] max-h-[280px] p-2 pb-4 mx-[10px] mt-[20px]
                        info-text-card flex flex-col items-center
                        text-center rounded-2xl
                        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                     '>
                        <span>
                            <HandymanIcon className='!w-[60px] !h-[60px] p-2'/>
                        </span>
                        <p className='text-white text-[0.95rem] md:text-[1.25rem] md:tracking-[1.6px] font-semibold md:font-extrabold opacity-[95%] mx-[180px] p-2 w-full h-fit'>Services</p>
                        {/* <p className='w-[95%] flex text-balance '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias in ducimus vel officiis magni. Earum modi officiis recusandae. Maxime consequuntur delectus temporibus animi doloribus eveniet a vitae unde similique.
                        </p> */}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default whatDoWeDo;
