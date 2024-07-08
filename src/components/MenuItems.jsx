import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function MenuItems() {
    const [menuVisible, setMenuVisible] = useState(false);

    function menuIsVisible() {
        setMenuVisible(!menuVisible);
    }
    return(
        <>
            {/* mobile menu items */}
            <div className={`md:w-[50%] ${menuVisible ? 'block' : 'hidden'} md:hidden z-0`}>
                <ul className={`flex flex-col fixed left-0 top-9 items-center w-screen bg-orange-700`}>
                    <li className="border-b-slate-100 pt-5 py-2 border-b-2 w-full text-center bg-orange-700 text-white">HOME</li>
                    <li className="border-b-slate-100 py-2 border-b-2 w-full text-center bg-orange-700 text-white">ABOUT US</li>
                    <li className="border-b-slate-100 py-2 border-b-2 w-full text-center bg-orange-700 text-white">SERVICES</li>
                    {/* <li>SERVICE AREAS</li> */}
                    {/* <li>CUSTOMER REVIEWS</li> */}
                    <li className="border-b-slate-100 py-2 border-b-2 w-full text-center bg-orange-700 text-white">CONTACT US</li>
                    {/* <li>FAQs</li>
                    <li>BLOG</li> */}
                    <li className="border-b-slate-100 py-2 border-b-2 w-full text-center bg-orange-700 text-white">CAREERS</li>
                </ul>
            </div>
            <div className="">
                <MdMenu className="md:invisible" onClick={menuIsVisible}/>
            </div>


            {/* large menu items */}
            <div className="md:w-[50%] hidden md:block">
            
                <ul className="flex justify-between items-center">
                    <li className="cursor-pointer font-semibold hover:text-orange-700">HOME</li>
                    <li className="cursor-pointer font-semibold hover:text-orange-700">ABOUT US</li>
                    <li className="cursor-pointer font-semibold hover:text-orange-700">SERVICES</li>
                    {/* <li>SERVICE AREAS</li> */}
                    {/* <li>CUSTOMER REVIEWS</li> */}
                    <li className="cursor-pointer font-semibold hover:text-orange-700">CONTACT US</li>
                    {/* <li>FAQs</li>
                    <li>BLOG</li> */}
                    <li className="cursor-pointer font-semibold hover:text-orange-700">CAREERS</li>
                </ul>
                
                
                
            </div>
        </>
    )
}