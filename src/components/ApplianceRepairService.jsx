const ApplianceRepairService = () => {
    const services = [
      {
        title: 'Refrigerator Repair',
        description: 'Get your fridge running efficiently again. Our technicians can handle any brand or model.',
      },
      {
        title: 'Washing Machine Repair',
        description: 'We can fix any washing machine issue, from leaks to mechanical problems, ensuring your laundry is hassle-free.',
      },
      {
        title: 'Dryer Repair',
        description: 'Don’t let a faulty dryer ruin your laundry day. We offer prompt and reliable dryer repair services.',
      },
      {
        title: 'Oven and Stove Repair',
        description: 'From heating issues to complete breakdowns, our experts are here to get your cooking appliances back in action.',
      },
      {
        title: 'Dishwasher Repair',
        description: 'Enjoy spotless dishes again with our dishwasher repair services, addressing leaks, clogs, and more.',
      },
      {
        title: 'Furnace Repair',
        description: 'Keep your home warm and cozy with our reliable furnace repair services. We handle all types of furnaces.',
      },
      {
        title: 'AC Repair',
        description: 'Beat the heat! Our technicians provide efficient air conditioning repair to keep your home cool.',
      },
    ];
  
    return (
      <div className="bg-[#e8e5e3] py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#030a8c] mb-6">
            Residential Appliance Repair Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            We provide top-notch reliable appliance repair services to keep your home running smoothly.
            Our expert technicians are here to help you with any appliance issue you may have.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-[#030a8c] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-block bg-[#ef5c39] text-white text-sm font-semibold py-2 px-4 rounded transition duration-300 hover:bg-[#e84e2f]"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default ApplianceRepairService;