import AboutUsSection from "@/components/landing/home/AboutUsSection";
import HeroSection from "@/components/landing/home/HomeHero";
import PartnersSection from "@/components/landing/PartnersSection";
import InsightsAndNews from "@/components/landing/home/InsightsAndNews";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";
import OurTeam from "@/components/landing/home/OurTeam";
import Service from "@/Models/Service";
import Team from "@/Models/Team";

const Index = ({services, team}:{services:Service[], team:Team[]}) => {
    return (
        <div className={"h-full w-full"}>
            <HeroSection />
            <PartnersSection />
            <AboutUsSection services={services} />
            <OurImpact />
            <OurTeam team={team}/>
            <InsightsAndNews />
            <NewsLetterFooter />
        </div>
    );
};

export default Index;
