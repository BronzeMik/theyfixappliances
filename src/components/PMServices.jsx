import { GiWashingMachine } from "react-icons/gi";
import { LuRefrigerator } from "react-icons/lu";
import { MdEmergency } from "react-icons/md";
import { PiOven } from "react-icons/pi";
import { RiToolsFill } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";


const PMServices = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">Commercial Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Solutions for Property Management and Businesses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We understand the unique needs of commercial clients and property management companies. Our dedicated team ensures your appliances are always in top working condition.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pmServices.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-4 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-800 rounded-md shadow-lg">
                        {/* Replace with an icon */}
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const pmServices = [
  {
    title: 'Refrigeration Units',
    description: 'Commercial refrigerators, freezers, and walk-in coolers.',
    icon: <LuRefrigerator className="text-white"/>
  },
  {
    title: 'Laundry Facilities',
    description: 'Washing machines and dryers for apartment complexes and laundromats.',
    icon: <GiWashingMachine className="text-white" />
  },
  {
    title: 'Cooking Appliances',
    description: 'Ovens, stoves, and dishwashers for restaurants and cafes.',
    icon: <PiOven className="text-white"/>
  },
  {
    title: 'HVAC Systems',
    description: 'Efficient repair and maintenance for heating and cooling systems.',
    icon: <TbAirConditioning className="text-white" />
  },
  {
    title: 'Preventative Maintenance',
    description: 'Customizable maintenance plans to prevent unexpected breakdowns.',
    icon: <RiToolsFill className="text-white" />
  },
  {
    title: 'Emergency Repair Services',
    description: '24/7 emergency repair services to address urgent issues promptly.',
    icon: <MdEmergency className="text-white" />
  },
];

export default PMServices;
