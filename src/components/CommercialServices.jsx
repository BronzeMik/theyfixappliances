import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiOven, PiWashingMachine  } from "react-icons/pi";
import { TbToolsKitchen3 } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";

export default function CommercialServices(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-8 justify-items-center justify-center">
            <div className="flex flex-col justify-between items-center border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg mt-3">
                {/* icon */}
                <div>
                    <CgSmartHomeRefrigerator className="text-4xl md:text-6xl text-blue-800 justify-self-center my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl mb-4 font-semibold">COMMERCIAL REFRIGERATOR REPAIR</h2>
                    <p>Fixing cooling problems, compressor failures, and thermostat issues. Servicing walk-in coolers, reach-in refrigerators, and display cases.</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg mt-3">
                {/* icon */}
                <div>
                    <PiOven className="text-4xl md:text-6xl text-blue-800 my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl mb-4 font-semibold">COMMERCIAL OVEN AND STOVE REPAIR</h2>
                    <p>Repairing temperature control issues, faulty ignition systems, and heating problems. Servicing convection ovens, industrial stoves, and pizza ovens.</p>
                </div>
            </div>
            
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 my-8 justify-items-center justify-center">
            <div className="flex flex-col justify-between items-center border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg mt-3">
                {/* icon */}
                <div>
                    <TbToolsKitchen3 className="text-4xl md:text-6xl text-blue-800 justify-self-center my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl mb-4 font-semibold">COMMERCIAL DISHWASHER REPAIR</h2>
                    <p>Addressing water leakage, drainage issues, and cleaning inefficiencies. Repairing or replacing malfunctioning pumps, motors, and heating elements.</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg mt-3">
                {/* icon */}
                <div>
                    <PiWashingMachine className="text-4xl md:text-6xl text-blue-800 my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl mb-4 font-semibold">COMMERCIAL LAUNDRY EQUIPMENT REPAIR</h2>
                    <p>Fixing washers and dryers used in laundromats, hotels, and other commercial settings. Repairing or replacing faulty motors, belts, and control boards.</p>
                </div>
                
            </div>

            <div className="flex flex-col items-center justify-between border-2 border-slate-200 shadow-lg p-4 w-[85%] rounded-lg mt-3">
                {/* icon */}
                <div>
                    <GiAutoRepair className="text-4xl md:text-6xl text-blue-800 my-4"/>
                </div>

                {/* Description */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl mb-4 font-semibold">COMMERCIAL AIR CONDITIONING REPAIR</h2>
                    <p>Fixing cooling issues, thermostat problems, and refrigerant leaks. Repairing or replacing faulty compressors, fans, and evaporator coils</p>
                </div>
                
            </div>
            
            
        </div>
        </>
    )
}