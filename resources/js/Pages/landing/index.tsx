import AboutUsSection from "@/Components/landing/home/AboutUsSection";
import HeroSection from "@/Components/landing/home/HomeHero";
import PartnersSection from "@/Components/landing/home/HomePartners";
import OurImpact from "@/Components/landing/home/OurImpact";
import OurTeam from "@/Components/landing/home/OurTeam";
import { asset } from "@/helper";

const Index = () => {
    return (
        <div className={"h-full w-full"}>
            <HeroSection />
            <PartnersSection />
            <AboutUsSection />
            <OurImpact />
            <OurTeam />

            <div className={"mt-36 h-full w-full bg-landing-background"}>
                <div
                    className={"flex h-full w-full items-center justify-center relative"}
                >
                    <div
                        className={"flex flex-col gap-8 items-center justify-between"}
                    >
                        <h2 className={"text-lg font-semibold uppercase"}>
                            Insights & Updates
                        </h2>
                        <h1
                            className={
                                "max-w-[49vw] text-5xl font-semibold text-wrap text-center"
                            }
                        >
                            Do not miss with many news and article from us
                        </h1>
                        <p className={"max-w-[49vw] text-wrap text-center"}>
                            Stay informed with expert analysis, industry news,
                            and practical security advice. Our specialists share
                            knowledge on manned security, specialist protection,
                            aviation security, defence, risk management, and
                            more — helping you prepare for today’s and
                            tomorrow’s challenges.
                        </p>
                    </div>
                    <img src={asset("/images/4.png")} className={"absolute -top-10 left-5 w-52"} />
                </div>
            </div>
        </div>
    );
};

export default Index;
