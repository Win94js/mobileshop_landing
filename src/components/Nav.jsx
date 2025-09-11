function Nav (){
    return (
        <nav className=" flex justify-between items-center bg-blue-900">
            <div className="m-3"> <span className="text-2xl font-bold  ">Logo</span></div>
            <div className=" flex justify-between items-center ">
              
                
                    <ul className="hidden md:flex p-4 justify-around ">
                        <li className="ml-6"><a href="/">Home</a></li>
                        <li className="ml-6"><a href="#">Product</a></li>
                        <li className="ml-6"><a href="#service">Services</a></li>
                        <li className="ml-6"><a href="#about">About</a></li>
                        <li className="ml-6"><a href="#contact">Contact Us</a></li>
                    </ul>
                
                 
            </div>
            <div className="mr-[20px] flex ">
                    <span className="mr-10">
                        Cart
                    </span>
                    <span  >
                        Log in
                    </span>
                </div>   
        </nav>
    )
}

export default Nav;