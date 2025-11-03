import AppLogo from "@/Components/icons/AppLogo";
import AboutUsSection from "@/Components/landing/home/AboutUsSection";
import HeroSection from "@/Components/landing/home/HomeHero";
import PartnersSection from "@/Components/landing/home/HomePartners";
import InsightsAndNews from "@/Components/landing/home/InsightsAndNews";
import NewsLetterFooter from "@/Components/landing/home/NewsLetterFooter";
import OurImpact from "@/Components/landing/home/OurImpact";
import OurTeam from "@/Components/landing/home/OurTeam";
import { asset } from "@/helper";
import { Link } from "@inertiajs/react";


const Index = () => {
    return (
        <div className={"h-full w-full"}>
            <HeroSection />
            <PartnersSection />
            <AboutUsSection />
            <OurImpact />
            <OurTeam />
            <InsightsAndNews />
            <NewsLetterFooter />
        </div>
    );
};

export default Index;
