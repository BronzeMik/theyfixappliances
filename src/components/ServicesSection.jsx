import CommercialServices from "./CommercialServices";
import MultiColorGrid from "./MultiColorGrid";


export default function ServicesSection() {
    return (
        <section className="py-12 bg-gray-100" id='services'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Residential Services</h2>
                <p className="text-xl text-center mb-12">Comprehensive Appliance Repair Solutions for Home and Business</p>
                
                <div className="grid grid-cols-1 gap-8">
                    {/* Residential Appliance Repair */}
                    <MultiColorGrid />

                    {/* Commercial Appliance Repair */}
                    <h2 className="text-3xl font-bold text-center mt-8">COMMERCIAL REPAIR</h2>
                    <p className="text-center md:px-48 px-3">At They Fix Appliances, we offer a wide range of repair services tailored to meet the needs of both residential and commercial clients. Our team of certified technicians is equipped with the knowledge and tools to handle any appliance issue efficiently and effectively.</p>
                    <CommercialServices />
                </div>

                
            </div>
            
        </section>
    );
}
