
import { GiDiamondTrophy } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function ValuesMission() {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8 justify-items-center justify-center" id="about">
            <div className="flex flex-col justify-between items-center border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg">
                {/* icon */}
                <div>
                    <GiDiamondTrophy className="text-4xl md:text-6xl text-blue-800 justify-self-center my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl">OUR MISSION</h2>
                    <p>We are dedicated to providing exceptional appliance repair services for both residential and commercial clients. With years of experience and a team of certified technicians, we have built a reputation for reliability, efficiency, and outstanding customer service.</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg">
                {/* icon */}
                <div>
                    <HiOutlineLightBulb className="text-4xl md:text-6xl text-blue-800 my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl">OUR VISION</h2>
                    <p>Our mission is to deliver high-quality, timely, and affordable repair solutions that ensure the smooth operation of your appliances. We understand the inconvenience a broken appliance can cause, and we strive to minimize downtime and restore functionality ASAP.</p>
                </div>
            </div>
            
            
        </section>
    )
}