import HeroSection from "@/Components/landing/home/HomeHero";
import PartnersSection from "@/Components/landing/home/HomePartners";
import LandingButton from "@/Components/landing/LandingButton";
import { asset } from "@/helper";

const Index = () => {
    return (
        <div className={"h-full w-full"}>
            {/*Hero Section*/}
            <HeroSection />

            {/*  Our Best Partners  */}
            <PartnersSection />

            {/*<div className={"relative bg-landing-background"}>*/}
            {/*    <img*/}
            {/*        src={asset("/images/handed-phone.png")}*/}
            {/*        className={"absolute top-20 left-0 w-[37vw]"}*/}
            {/*    />*/}
            {/*    <img*/}
            {/*        src={asset("/images/01.png")}*/}
            {/*        className={"absolute top-34 right-0 w-[16%]"}*/}
            {/*    />*/}
            {/*</div>*/}

            <div className={"h-full w-full bg-landing-background py-20"}>
                <div className={"flex h-full items-start justify-between"}>
                    <img
                        src={asset("/images/handed-phone.png")}
                        className={"w-[37vw]"}
                    />
                    <div className={"flex flex-col items-start gap-10 py-25"}>
                        <p className={""}>INTRODUCE TRIVEX</p>
                        <h1
                            className={
                                "w-[40vw] text-4xl font-semibold text-wrap"
                            }
                        >
                            Tailored Security Services to Meet Needs
                        </h1>
                        <p className={"w-[26vw] text-sm text-wrap"}>
                            From manned guarding and event control to aviation,
                            defence, cash transit, and advanced tech solutions —
                            Trivex covers every security dimension.
                        </p>
                        <LandingButton className={"px-10 py-3"}>See Our Services</LandingButton>
                    </div>
                    <img
                        src={asset("/images/01.png")}
                        className={"mt-10 w-[16%]"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;
