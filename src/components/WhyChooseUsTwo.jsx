
import { FaRegIdBadge } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";

export default function WhyChooseUsTwo(){
    return(
        <div className="bg-blue-800 md:py-12 md:px-8 px-4 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-end">
                <div>
                    <div className="flex justify-center py-4">
                     <FaRegIdBadge className="text-4xl" />
                    </div>
                    
                    <h2 className="font-semibold text-2xl md:text-4xl pb-3">Warranty and Satisfaction Guarantee</h2>
                    <p>We stand behind our work with a comprehensive warranty and satisfaction guarantee. If you’re not completely satisfied with our service, we&apos;ll do everything we can to make it right. Our commitment to quality and customer satisfaction is second to none.</p>
                </div>
                <div>
                    <div className="flex justify-center py-4">
                     <PiPlantFill className="text-4xl" />
                    </div>
                    
                    <h2 className="font-semibold text-2xl md:text-4xl pb-3">Environmentally Friendly</h2>
                    <p>We are committed to environmentally friendly practices. From proper disposal of old parts to using energy-efficient repair methods, we strive to minimize our environmental impact and promote sustainability.</p>
                </div>
                <div>
                    <div className="flex justify-center py-4">
                     <FaTools className="text-4xl" />
                    </div>
                    
                    <h2 className="font-semibold text-2xl md:text-4xl pb-3">Advanced Diagnostics</h2>
                    <p>We use state-of-the-art diagnostic tools and techniques to accurately identify issues and ensure efficient repairs. This technology helps us quickly pinpoint problems and reduces the time it takes to get your appliance running smoothly again.</p>
                </div>
               
            </div>
        
        </div>
    )
}