
import pngimg from '../assets/tarc-logo.jpg'
import webpimg from '../assets/tarc-logo.webp'
export default function Logo() {
    return(

        <div className='max-w-[6%]'>
            <picture className='md:max-w-[40%]'>
                    <source srcSet={webpimg} type="image/webp" />
                    <img src={pngimg} alt="Description of the image" title='The Appliance Repair Centers'/>
            </picture>
            
        </div>
    )
}