import { asset } from "@/helper";
import { CheckIcon } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-between gap-5 px-5 py-5 md:flex-row md:gap-0 md:px-0 md:py-16"
            }
        >
            <div className={"space-y-5 md:w-[50%] md:ps-36"}>
                <h2
                    className={
                        "border-s-2 border-s-landing-primary ps-1 text-lg capitalize"
                    }
                >
                    Why Choos Us
                </h2>
                <h1 className={"text-2xl font-semibold md:text-5xl"}>
                    Security built on discipline and trust
                </h1>
                <p>
                    We deliver risk-based, compliance-led security solutions
                    that protect people, assets, and operations in demanding
                    environments. Our services combine professional personnel,
                    intelligence, and technology to ensure reliable protection
                    without compromise.
                </p>
                <div className={"space-y-3"}>
                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Risk-Based, Compliance-Led Approach
                        </p>
                    </div>

                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Sector-Specific Security Expertise
                        </p>
                    </div>

                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Highly Trained Security Professionals
                        </p>
                    </div>

                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Intelligence & Surveillance Capabilities
                        </p>
                    </div>

                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Scalable and Reliable Operations
                        </p>
                    </div>
                </div>
            </div>
            <img className={"md:w-[50%]"} src={asset("/images/meeting.png")} />
        </div>
    );
};

export default WhyChooseUs;
