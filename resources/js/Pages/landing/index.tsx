import AboutUsSection from "@/components/landing/home/AboutUsSection";
import HeroSection from "@/components/landing/home/HomeHero";
import InsightsAndNews from "@/components/landing/home/InsightsAndNews";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";
import OurTeam from "@/components/landing/home/OurTeam";
import PartnersSection from "@/components/landing/PartnersSection";
import Service from "@/Models/Service";
import Team from "@/Models/Team";
import Post from "@/Models/Post";

const Index = ({
    services,
    team,
    latestPosts,
}: {
    services: Service[];
    team: Team[];
    latestPosts: Post[];
}) => {
    return (
        <div className={"h-full w-full"}>
            <HeroSection />
            <PartnersSection />
            <AboutUsSection services={services} />
            <OurImpact />
            <OurTeam team={team} />
            <InsightsAndNews latestPosts={latestPosts} />
            <NewsLetterFooter />
        </div>
    );
};

export default Index;
