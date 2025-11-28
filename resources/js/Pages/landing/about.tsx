import AboutHeroSection from "@/Components/landing/about/AboutHeroSection";
import AboutMissionSection from "@/Components/landing/about/AboutMissionSection";
import AboutTeamSection from "@/Components/landing/about/AboutTeamSection";
import NewsLetterFooter from "@/Components/landing/home/NewsLetterFooter";
import OurImpact from "@/Components/landing/home/OurImpact";

const About = () => {
    return (
        <div className={"h-full w-full"}>
            <AboutHeroSection />
            <OurImpact />
            <AboutTeamSection />
            <AboutMissionSection />
            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default About;
