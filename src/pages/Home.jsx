
import ApplianceRepairService from "../components/ApplianceRepairService";
import Careers from "../components/Careers";
import CitiesWeServe from "../components/CitiesWeServe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MaintenanceService from "../components/MaintenanceService";

import Nav from "../components/Nav";
import PMServices from "../components/PMServices";
import ScheduleService from "../components/ScheduleService";
import ServicesSection from "../components/ServicesSection";
import TrustedPartner from "../components/TrustedPartner";
import ValuesMission from "../components/ValuesMission";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyChooseUsTwo from "../components/WhyChooseUsTwo";


export default function Home(){
    
    return(
        <>
        <header >
            <Nav />
        </header>

        <main >
            <Hero />
            <ValuesMission />
            <TrustedPartner />
            <WhyChooseUs />
            <ServicesSection />
            <PMServices />
            <MaintenanceService />
            <ApplianceRepairService />
            <CitiesWeServe />
            <WhyChooseUsTwo />
            <ScheduleService />
            <Careers />
        </main>
        <footer>
            <Footer />
        </footer>
        
        
        </>
    )
}