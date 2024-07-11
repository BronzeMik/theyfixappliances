import img from '../assets/tarc-logo.jpg'

export default function Logo() {
    return(

        <div className='max-w-[10%]'>
            <img src={img} alt='logo' title='The Appliance Repair Centers' className='md:max-w-[60%]'/>
        </div>
    )
}