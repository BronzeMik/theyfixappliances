import CtaBtn from "./CtaBtn";



export default function Hero() {
    return(
        <section className={`flex flex-col justify-center md:justify-end items-center px-6 pb-6 w-screen min-h-[500px] hero-img text-white pt-16 md:pt-28`} id="home">
            <div className="text-center md:w-[50%] md:mb-4">
                <h1 className="text-4xl md:text-5xl my-2">Reliable Appliance Repair Services You Can Trust</h1>
                <h2 className="text-orange-700 md:text-2xl my-3 font-bold">Expert Repair Solutions for Your Home and Business</h2>
                <p className="hidden md:block">Welcome to The Appliance Repair Centers, where we provide top-notch repair services for all your residential and commercial appliances. From malfunctioning refrigerators and dishwashers to industrial ovens and commercial freezers, our certified technicians have the expertise to get your appliances back in working order quickly and efficiently.</p>
                <p className="block md:hidden">Call Us First, You&apos;ll Be Glad You Did!</p>
                <h4 className="text-blue-800 md:text-lg">Schedule Your Service Today and Experience the Difference!</h4>
                <div className="pt-5">

                    <CtaBtn />
               
                </div>
                
            </div>
            
        </section>
    )
}