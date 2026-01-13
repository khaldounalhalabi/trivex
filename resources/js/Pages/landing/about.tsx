import AboutHeroSection from "@/components/landing/about/AboutHeroSection";
import AboutMissionSection from "@/components/landing/about/AboutMissionSection";
import AboutTeamSection from "@/components/landing/about/AboutTeamSection";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";

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
