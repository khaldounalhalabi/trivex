import { asset } from "@/helper";
import { CheckIcon } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div className={"flex items-center justify-between py-16"}>
            <div className={"w-[50%] space-y-5 ps-36"}>
                <h2
                    className={
                        "border-s-2 border-s-landing-primary ps-1 text-lg capitalize"
                    }
                >
                    Why Choos Us
                </h2>
                <h1 className={"text-5xl font-semibold"}>
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
            <img className={"w-[50%]"} src={asset("/images/meeting.png")} />
        </div>
    );
};

export default WhyChooseUs;
