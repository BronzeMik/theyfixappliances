import { FaMapPin } from "react-icons/fa6";

export default function CitiesWeServe() {
    const citiesWeServe = {
        "Ohio": ["Cleveland", "Toledo", "Columbus", "Cincinnati", "Dayton", "Youngstown", "Akron/Canton"],
        "Michigan": ["Detroit", "Grand Rapids", "Ann Arbor", "Sterling Heights", "Lansing", "Dearborn"],
        "Pennsylvania": ["Philadelphia", "Pittsburg", "Allentown"],
        "Florida": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Port St. Lucie", "Cape Coral", "Fort Lauderdale", "Gainesville", "Palm Bay", "Coral Springs"],
        "North Carolina": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston Salem", "Fayetteville"],
        "New York": ["New York City", "Hempstead Town", "Brookhaven", "Oyster Bay", "Buffalo", "Babylon Town", "Syracuse"],
        "New Jersey": ["Newark", "Jersey City", "Paterson", "Lakewood", "Elizabeth"],
        "Virginia": ["Virginia Beach", "Chesapeake", "Arlington", "Norfolk", "Richmond", "Newport News", "Alexandria", "Hampton"],
        "Washington DC": ["Washington DC"]
    };

    return (
        <>
            <section className="pt-16 pb-16 bg-gradient-to-r from-custom-orange-start to-custom-orange-end">
                <h2 className="text-4xl md:text-5xl uppercase font-extrabold text-center text-gray-800 mb-12">Cities We Serve</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {Object.entries(citiesWeServe).map(([state, cities]) => (
                        <div key={state} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
                            <div className="flex items-center justify-center mb-4">
                                <FaMapPin className="text-blue-700 w-6 h-6 mr-2" />
                                <h3 className="text-2xl font-bold text-center text-blue-700">{state}</h3>
                            </div>
                            <ul className="list-none p-0 space-y-2 flex flex-col items-center">
                                {cities.map(city => (
                                    <li key={city} className="text-center font-bold uppercase text-gray-700 text-lg border-b-2 border-b-slate-200 pb-2 md:w-[50%]">{city}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}