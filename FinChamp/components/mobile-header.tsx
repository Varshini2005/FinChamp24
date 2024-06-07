import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-white-900  fixed top-0 w-full z-50 customColor">
            <MobileSidebar/>
            
        </nav>
    );
};