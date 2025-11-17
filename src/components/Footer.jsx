import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import pngimg from '../assets/tarc-logo.jpg'
import webpimg from '../assets/tarc-logo.webp'


export default function Footer() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        
      };
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-t-slate-200 shadow-md bg-white py-8 px-2 text-center">
            <div className="flex flex-col justify-center items-center">
                <picture className='max-w-[40%] mb-3'>
                    <source srcSet={webpimg} type="image/webp" />
                    <img src={pngimg} alt="Description of the image" title='The Appliance Repair Centers'/>
                </picture>
                
                <p>Call us first, you&apos;ll be glad you did!</p>
            </div>
            <div className="flex flex-col md:items-center md:pr-6 py-5">
                <h2 className="text-2xl md:text-3xl font-semibold pb-3">Links</h2>
                <ul className="md:text-left">
                    <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:underline">HOME</li>
                    <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:underline">ABOUT US</li>
                    <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:underline">SERVICES</li>
                    {/* <li>SERVICE AREAS</li> */}
                    {/* <li>CUSTOMER REVIEWS</li> */}
                    <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:underline">CONTACT US</li>
                    {/* <li>FAQs</li>
                    <li>BLOG</li> */}
                    <li className="cursor-pointer hover:underline" onClick={() => scrollToSection('career')}>CAREERS</li>
                </ul>
            </div>
            <div className="flex flex-col items-center py-5">
                <h2 className="text-2xl md:text-3xl font-semibold pb-3">CONTACT US</h2>
                <div className="flex justify-around items-center md:w-[60%]">
                    <PiPhone />
                    <a href="tel:3306015962">1-330-601-5962</a>
                </div>
                <div className="flex justify-around items-center md:w-[60%]">
                    <MdEmail />
                    <a href="mailto:contact@theyfixappliances.com">contact@theyfixappliances.com</a>
                </div>
            </div>

        </div>
    )
}
