import IconCard from "./IconCard";
import { FaPersonShelter } from "react-icons/fa6";
import { LuBrainCircuit, LuMessagesSquare } from "react-icons/lu";
import { MdHomeRepairService, MdOutlineLocalShipping  } from "react-icons/md";


export default function WhyChooseUs(){
    return(
        <>
            <div className="flex flex-col items-center bg-blue-800">
                <h2 className="text-white text-2xl md:text-4xl font-semibold mt-10">WHY CHOOSE US?</h2>
                {/* grid 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                <IconCard
                icon={<LuBrainCircuit className="text-4xl md:text-6xl text-white"/>}
                description={
                    <div className="text-white">
                        <h3 className="font-semibold text-xl">Expert Technicians</h3>
                        <p>Our team consists of highly trained and certified technicians with extensive experience in repairing a wide range of appliances. We stay updated with the latest industry trends and technologies to provide the best service possible.</p>
                    </div>
                }
                />
                <IconCard
                icon={<MdHomeRepairService className="text-4xl md:text-6xl  text-white"/>}
                description={
                    <div className="text-white">
                        <h3 className="font-semibold text-xl">Comprehensive Service</h3>
                        <p>From residential refrigerators and washing machines to commercial ovens and freezers, we handle all types of appliance repairs. No job is too big or too small for our skilled team.</p>
                    </div>
                }
                />

                </div>



                {/* grid 2 */}
                <div className="grid grid-1 md:grid-cols-3">
                    <IconCard
                    icon={<LuMessagesSquare className="text-4xl md:text-6xl  text-white"/>}
                    description={
                        <div className="text-white">
                            <h3 className="font-semibold text-xl">Prompt Response</h3>
                            <p>We value your time and prioritize prompt service. Our efficient scheduling and swift response times ensure that your appliance issues are addressed quickly.</p>
                        </div>
                    }
                    />
                    <IconCard
                    icon={<FaPersonShelter className="text-4xl md:text-6xl  text-white"/>}
                    description={
                        <div className="text-white">
                            <h3 className="font-semibold text-xl">Customer Centric Approach</h3>
                            <p>Your satisfaction is our top priority. We listen to your concerns, provide transparent pricing, and offer solutions tailored to your specific needs.</p>
                        </div>
                    }
                    />
                    <IconCard
                    icon={<MdOutlineLocalShipping  className="text-4xl md:text-6xl  text-white"/>}
                    description={
                        <div className="text-white">
                            <h3 className="font-semibold text-xl">Fast Quality Service</h3>
                            <p>We understand that a malfunctioning appliance can disrupt your daily routine. That&apos;s why we prioritize quick response times and aim to have a technician at your doorstep as soon as possible. Our efficient scheduling system ensures that you won&apos;t be left waiting.</p>
                        </div>
                    }
                    />
                </div>
            </div>
        </>
    )
}