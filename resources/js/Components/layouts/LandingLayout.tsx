import Footer from "@/Components/landing/Footer";
import Navbar from "@/Components/landing/Navbar";
import { ReactNode } from "react";

const LandingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={"h-full w-full bg-landing-background"}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default LandingLayout;
