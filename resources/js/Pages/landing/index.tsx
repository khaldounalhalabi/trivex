import AboutUsSection from "@/Components/landing/home/AboutUsSection";
import HeroSection from "@/Components/landing/home/HomeHero";
import PartnersSection from "@/Components/landing/home/HomePartners";
import OurImpact from "@/Components/landing/home/OurImpact";

const Index = () => {
    return (
        <div className={"h-full w-full"}>
            <HeroSection />

            <PartnersSection />

            <AboutUsSection />

            <OurImpact />
        </div>
    );
};

export default Index;
