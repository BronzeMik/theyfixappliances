

export default function CtaBtn() {
    const scrollToSection = (sectionId) => {
        
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        
      };
    return(
       
        <div className="hidden md:block">
        <button className="bg-orange-700 text-white rounded-lg px-3 py-2 border-2 border-white hover:border-orange-700 hover:text-orange-700 hover:bg-white" onClick={() => scrollToSection('contact')}>SCHEDULE A SERVICE</button>
        </div>
    )
}