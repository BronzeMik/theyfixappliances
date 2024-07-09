
import CtaBtn from "./CtaBtn";
import Logo from "./Logo";
import MenuItems from "./MenuItems";


export default function Nav(){
    
    return(
        <nav className="flex bg-white justify-between items-center px-4 md:px-6 py-2 border-solid border-slate-200 shadow-md fixed w-screen z-999 min-h-[80px]">
            
            <Logo />            
            <MenuItems />            
            <CtaBtn />
        </nav>
    )
}