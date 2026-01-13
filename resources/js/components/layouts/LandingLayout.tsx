import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
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
