import AboutUsSection from "@/components/landing/home/AboutUsSection";
import HeroSection from "@/components/landing/home/HomeHero";
import InsightsAndNews from "@/components/landing/home/InsightsAndNews";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";
import OurTeam from "@/components/landing/home/OurTeam";
import PartnersSection from "@/components/landing/PartnersSection";
import Post from "@/Models/Post";
import Service from "@/Models/Service";
import Team from "@/Models/Team";
import { asset } from "@/helper";

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
            <div className={"grid grid-cols-2 gap-10 md:grid-cols-4 p-5 md:p-10"}>
                <img
                    src={asset("/images/security-guard-1.jpeg")}
                    alt="Security Guard 1"
                    className={"h-full aspect-square rounded-md"}
                />
                <img
                    src={asset("/images/security-guard-2.jpeg")}
                    alt="Security Guard 2"
                    className={"h-full aspect-square rounded-md"}
                />
                <img
                    src={asset("/images/security-guard-3.jpeg")}
                    alt="Security Guard 3"
                    className={"h-full aspect-square rounded-md"}
                />
                <img
                    src={asset("/images/security-guard-4.jpeg")}
                    alt="Security Guard 4"
                    className={"h-full aspect-square rounded-md"}
                />
            </div>
            <OurTeam team={team} />
            <InsightsAndNews latestPosts={latestPosts} />
            <NewsLetterFooter />
        </div>
    );
};

export default Index;
