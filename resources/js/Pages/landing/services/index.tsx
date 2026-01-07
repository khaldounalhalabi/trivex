import PartnersSection from "@/Components/landing/home/HomePartners";
import NewsLetterFooter from "@/Components/landing/home/NewsLetterFooter";
import LandingButton from "@/Components/landing/LandingButton";
import WhyChooseUs from "@/Components/landing/WhyChooseUs";
import { asset } from "@/helper";

const Index = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"flex w-full items-center justify-between"}>
                <div className={"flex w-1/2 flex-col items-start gap-5 ps-32"}>
                    <h2
                        className={
                            "border-s-2 border-s-landing-primary ps-1 capitalize"
                        }
                    >
                        Our Best Services
                    </h2>
                    <h1 className={"text-5xl font-semibold"}>
                        Manned Security Services
                    </h1>
                    <p>
                        Trained professionals providing static guarding, mobile
                        patrols, reception security, construction site
                        protection, and event management for enhanced safety.
                    </p>
                    <LandingButton className={"px-10 py-3"}>
                        See More
                    </LandingButton>
                </div>
                <img src={asset("/images/crew.png")} className={"w-1/2"} />
            </div>

            <div className={"flex w-full items-center justify-between gap-5"}>
                <img
                    src={asset("/images/female-guard.png")}
                    className={"w-1/2"}
                />

                <div className={"flex w-1/2 flex-col items-start gap-5 pe-32"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Specialist Protection
                    </h1>
                    <p>
                        Expert close protection, convoy security, high-risk zone
                        coverage, and international protection services,
                        ensuring the safety of VIPs and assets.
                    </p>
                    <LandingButton className={"px-10 py-3"}>
                        See More
                    </LandingButton>
                </div>
            </div>

            <div className={"flex w-full items-center justify-between"}>
                <div className={"flex w-1/2 flex-col items-start gap-5 ps-32"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Aviation and Transport Security
                    </h1>
                    <p>
                        Comprehensive security for airports, ports, cargo, and
                        public transport, ensuring safe travel, cargo
                        protection, and regulatory compliance across all modes.
                    </p>
                    <LandingButton className={"px-10 py-3"}>
                        See More
                    </LandingButton>
                </div>
                <img src={asset("/images/motors.png")} className={"w-1/2"} />
            </div>

            <div className={"flex w-full items-center justify-between gap-5"}>
                <img src={asset("/images/military.png")} className={"w-1/2"} />

                <div className={"flex w-1/2 flex-col items-start gap-5 pe-32"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Government and Defence Contracts
                    </h1>
                    <p>
                        Specialized security for government buildings, military
                        bases, embassies, critical infrastructure, and border
                        security, ensuring safety and operational continuity.
                    </p>
                    <LandingButton className={"px-10 py-3"}>
                        See More
                    </LandingButton>
                </div>
            </div>

            <div className={"flex w-full items-center justify-between"}>
                <div className={"flex w-1/2 flex-col items-start gap-5 ps-32"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Cash and Valuables in Transit
                    </h1>
                    <p>
                        Secure transport of cash, high-value assets, and
                        sensitive items using armoured vehicles, ensuring
                        safety, confidentiality, and timely delivery.
                    </p>
                    <LandingButton className={"px-10 py-3"}>
                        See More
                    </LandingButton>
                </div>
                <img
                    src={asset("/images/bank-guard.png")}
                    className={"w-1/2"}
                />
            </div>

            <div className={"h-full w-full pt-16"}>
                <PartnersSection />
            </div>

            <WhyChooseUs />

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Index;
