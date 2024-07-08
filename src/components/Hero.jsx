


export default function Hero() {
    return(
        <section className={`flex flex-col justify-center md:justify-end items-center px-6 pb-6 w-screen min-h-[500px] hero-img text-white`} id="home">
            <div className="text-center md:w-[50%] md:mb-10">
                <h1 className="text-2xl md:text-5xl my-2">Reliable Appliance Repair Services You Can Trust</h1>
                <h2 className="text-blue-800 md:text-2xl my-3 font-bold">Expert Repair Solutions for Your Home and Business</h2>
                <p className="hidden md:block">Welcome to They Fix Appliances, where we provide top-notch repair services for all your residential and commercial appliances. From malfunctioning refrigerators and dishwashers to industrial ovens and commercial freezers, our certified technicians have the expertise to get your appliances back in working order quickly and efficiently.</p>
                <p className="block md:hidden">Welcome to They Fix Appliances, where we provide top-notch repair services for all your residential and commercial appliances.</p>
                <h4 className="text-blue-800 md:text-lg">Schedule Your Service Today and Experience the Difference!</h4>
                <div className="pt-5">

                    <button className="bg-orange-700 text-white rounded-lg px-3 py-2 border-2 border-white hover:border-orange-700 hover:text-orange-700 hover:bg-white">SCHEDULE A SERVICE</button>
               
                </div>
                
            </div>
            
        </section>
    )
}