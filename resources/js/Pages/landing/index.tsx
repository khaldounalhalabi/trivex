import AboutUsSection from "@/components/landing/home/AboutUsSection";
import HeroSection from "@/components/landing/home/HomeHero";
import PartnersSection from "@/components/landing/home/HomePartners";
import InsightsAndNews from "@/components/landing/home/InsightsAndNews";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";
import OurTeam from "@/components/landing/home/OurTeam";

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
