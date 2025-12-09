
import pngimg from '../assets/arca_logo.PNG'
import webpimg from '../assets/arca_logo.webp'
import { FaPhone } from 'react-icons/fa6'
export default function Logo() {
    return(

        <div className='max-w-[70%] md:max-w-[20%] flex justify-between items-center'>
            <picture className='max-w-[70px] md:max-w-[40%]'>
                    <source srcSet={webpimg} type="image/webp" />
                    <img src={pngimg} alt="Description of the image" title='The Appliance Repair Centers'/>
            </picture>
            <a href='tel:3306015962' className='font-bold flex items-center justify-around md:hidden bg-blue-800 mx-3 py-2 px-2 rounded-lg text-white text-[0.7em] flex-wrap'>
                <FaPhone className='mx-2'/>1-330-601-5962
            </a>
            
        </div>
    )
}
