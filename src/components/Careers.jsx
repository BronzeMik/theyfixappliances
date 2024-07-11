

const Careers = () => {
  return (
    <section className="bg-white py-12" id='career'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">Join Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Careers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We&apos;re always looking for talented individuals to join our team. Explore our open positions and see how you can grow your career with us.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-4 pb-8 shadow-md">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-800 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">{job.title}</h3>
                  <p className="mt-5 text-base text-gray-500">{job.description}</p>
                  <a href={job.link} className="mt-3 text-indigo-600 hover:text-indigo-500">
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900">
            Why Work With Us?
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            At The Appliance Repair Centers, we value our employees and offer a supportive and dynamic work environment. Here are just a few benefits of joining our team:
          </p>
          <ul className="mt-4 space-y-4 text-lg text-gray-500">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex">
                <svg className="flex-shrink-0 h-6 w-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const jobOpenings = [
  {
    title: 'Plumber',
    description: 'Provide high-quality plumbing services for residential and commercial clients.',
    link: '/careers/plumber'
  },
  {
    title: 'Appliance Repair Technician',
    description: 'Repair and maintain various household and commercial appliances.',
    link: '/careers/appliance-repair-technician'
  },
  {
    title: 'Electrician',
    description: 'Perform electrical installations, repairs, and maintenance.',
    link: '/careers/electrician'
  },
  {
    title: 'Maintenance Technician',
    description: 'Ensure the upkeep and maintenance of facilities and equipment.',
    link: '/careers/maintenance-technician'
  },
  {
    title: 'Carpenter',
    description: 'Build, install, and repair structures and fixtures made of wood and other materials.',
    link: '/careers/carpenter'
  },
];

const benefits = [
  'Competitive salary and benefits',
  'Opportunities for career growth',
  'Ongoing training and development',
  'Supportive team environment',
  'Health and wellness programs',
  // Add more benefits as needed
];

export default Careers;
