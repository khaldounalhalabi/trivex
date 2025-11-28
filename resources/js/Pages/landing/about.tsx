import AboutHeroSection from "@/Components/landing/about/AboutHeroSection";
import OurImpact from "@/Components/landing/home/OurImpact";
import AboutTeamSection from "@/Components/landing/about/AboutTeamSection";
import AboutMissionSection from "@/Components/landing/about/AboutMissionSection";
import NewsLetterFooter from "@/Components/landing/home/NewsLetterFooter";

const About = () => {
    return (
        <div className={"h-full w-full"}>
            <AboutHeroSection />
            <OurImpact />
            <AboutTeamSection />
            <AboutMissionSection />
            <NewsLetterFooter />
        </div>
    );
};

export default About;
