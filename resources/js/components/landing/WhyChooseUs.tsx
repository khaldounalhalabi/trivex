import { asset } from "@/helper";
import { CheckIcon } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-between px-5 py-5 md:py-16 md:flex-row md:px-0 gap-5 md:gap-0"
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
                    Provide advanced security for advanced threat
                </h1>
                <p>
                    We provide advanced security solutions designed to counter
                    advanced threats, combining innovation, expertise, and
                    reliability to safeguard your business in today’s evolving
                    digital landscape.
                </p>
                <div className={"space-y-3"}>
                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Content Delivery Network
                        </p>
                    </div>

                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            Malware Detection Removal
                        </p>
                    </div>

                    <div className={"flex items-center gap-2"}>
                        <CheckIcon className={"text-landing-primary"} />
                        <p className={"text-lg font-semibold"}>
                            24/7 Customer Support
                        </p>
                    </div>
                </div>
            </div>
            <img className={"md:w-[50%]"} src={asset("/images/meeting.png")} />
        </div>
    );
};

export default WhyChooseUs;
