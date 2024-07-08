


export default function MultiColorGrid() {
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 px-8 text-center">
                <div className="bg-orange-700 text-white px-4 py-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Refrigerator Repair</h2>
                    <p>Fixing cooling issues, leaks, and faulty compressors. Repairing or replacing damaged door seals and thermostats.</p>
                </div>
                <div className="bg-white-700 text-black px-4 py-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Washing Machine Repair</h2>
                    <p>Addressing drainage problems, spin cycle issues, and unresponsive controls. Replacing worn-out belts, pumps, and motors.</p>
                </div>
                <div className="bg-orange-700 text-white px-4 py-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Dryer Repair</h2>
                    <p>Solving heating problems, drum issues, and electrical malfunctions. Repairing or replacing broken belts, timers, and thermostats.</p>
                </div>
                <div className="bg-white-700 text-black px-4 py-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Dishwasher Repair</h2>
                    <p>Fixing water leakage, drainage problems, and cleaning issues. Repairing or replacing malfunctioning motors, pumps, and door seals.</p>
                </div>
                <div className="bg-orange-700 text-white px-4 py-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Oven and Stove </h2>
                    <p>Addressing heating issues, broken burners, and faulty ignition systems. Repairing or replacing damaged heating elements, thermostats, and control boards.</p>
                </div>
                <div className="bg-white-700 text-black px-4 py-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Air Conditioning and Furnace Repair</h2>
                    <p>Fixing cooling issues, thermostat problems, and refrigerant leaks. Repairing or replacing faulty compressors, fans, and evaporator coils.</p>
                </div>
            </div>
        </>
    )
}