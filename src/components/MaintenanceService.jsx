import pngimg from '../assets/customer-tech2.png';
import webpimg from '../assets/customer-tech2.png'



export default function MaintenanceService() {
    return(

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">


            {/* img */}
            <div>
            <picture className="w-full h-[400px] object-cover">
                    <source srcSet={webpimg} type="image/webp" />
                    <img src={pngimg} alt="Description of the image" title='The Appliance Repair Centers'/>
            </picture>
                
            </div>
            {/* words */}
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl md:pb-2 font-bold mb-2">MAINTENANCE PLAN</h2>
                <div className="text-gray-700">
                    <h3>Regular maintenance is key to extending the life of your appliances and preventing unexpected breakdowns. Our maintenance plans include:</h3>
                    <ul  className="list-disc list-inside space-y-2">
                        <li>Routine inspections and tune-ups.</li>
                        <li>Cleaning and lubrication of moving parts.</li>
                        <li>Early detection and repair of potential issues.</li>
                    </ul>

                    <h3 className="font-semibold mt-5">Emergency Repairs</h3>
                    <p>
                    We understand that appliance breakdowns can happen at the most inconvenient times. That’s why we offer 24/7 emergency repair services to get your appliances back up and running as quickly as possible.
                    </p>
                </div>
            </div>
            
        
        </div>
    )
}