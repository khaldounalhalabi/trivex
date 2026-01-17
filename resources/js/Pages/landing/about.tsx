import AboutHeroSection from "@/components/landing/about/AboutHeroSection";
import AboutMissionSection from "@/components/landing/about/AboutMissionSection";
import AboutTeamSection from "@/components/landing/about/AboutTeamSection";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";
import Team from "@/Models/Team";

const About = ({ team }: { team: Team[] }) => {
    return (
        <div className={"h-full w-full"}>
            <AboutHeroSection />
            <OurImpact />
            <AboutTeamSection team={team} />
            <AboutMissionSection />
            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default About;
