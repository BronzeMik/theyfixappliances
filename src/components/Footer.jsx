import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";



export default function Footer() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-t-slate-200 shadow-md bg-white py-8 px-2 text-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-blue-800 pb-3">THEY FIX APPLIANCES</h2>
                <p>Call us first, you&apos;ll be glad you did!</p>
            </div>
            <div className="flex flex-col md:items-center md:pr-6 py-5">
                <h2 className="text-2xl md:text-3xl font-semibold pb-3">Links</h2>
                <ul className="md:text-left">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    {/* <li>SERVICE AREAS</li> */}
                    {/* <li>CUSTOMER REVIEWS</li> */}
                    <li>CONTACT US</li>
                    {/* <li>FAQs</li>
                    <li>BLOG</li> */}
                    <li>CAREERS</li>
                </ul>
            </div>
            <div className="py-5">
                <h2 className="text-2xl md:text-3xl font-semibold pb-3">CONTACT US</h2>
                <div className="flex justify-center">
                    <PiPhone />
                    <a href="tel:1-800-999-9999">1-800-999-9999</a>
                </div>
                <div className="flex justify-center">
                    <MdEmail />
                    <a href="mailto:contact@theyfixappliances.com">contact@theyfixappliances.com</a>
                </div>
            </div>

        </div>
    )
}