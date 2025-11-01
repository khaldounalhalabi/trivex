import AboutUsSection from "@/Components/landing/home/AboutUsSection";
import HeroSection from "@/Components/landing/home/HomeHero";
import PartnersSection from "@/Components/landing/home/HomePartners";

const Index = () => {
    return (
        <div className={"h-full w-full"}>
            {/*  Hero Section  */}
            <HeroSection />

            {/*  Our Best Partners  */}
            <PartnersSection />

            {/*  About Us Section  */}
            <AboutUsSection />
        </div>
    );
};

export default Index;
