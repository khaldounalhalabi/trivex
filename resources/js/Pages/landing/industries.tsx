import PartnersSection from "@/components/landing/PartnersSection";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import { asset } from "@/helper";
import { CheckIcon } from "lucide-react";

const Industries = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"relative flex items-center justify-between py-16"}>
                <div className={"w-[50%] space-y-5 ps-36"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Industries We Serve
                    </h1>
                    <p>
                        Every sector faces different risks. We design programs
                        that fit the environment, culture, and regulations of
                        your industry.
                    </p>
                    <div>
                        <h2 className={"font-bold"}>Sectors :</h2>
                        <ul className={"list-disc ps-8"}>
                            <li>Corporate offices and campuses</li>
                            <li>Retail and shopping centers</li>
                            <li>Construction and industrial</li>
                            <li>Logistics and warehousing</li>
                            <li>Aviation and transport</li>
                            <li>Hospitality and events</li>
                            <li>Embassies and diplomatic residences</li>
                            <li>Energy and utilities</li>
                            <li>Residential estates and private clients</li>
                        </ul>
                    </div>
                </div>
                <img className={"w-[50%]"} src={asset("/images/guard.png")} />
            </div>

            <PartnersSection />

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
                        We provide advanced security solutions designed to
                        counter advanced threats, combining innovation,
                        expertise, and reliability to safeguard your business in
                        today’s evolving digital landscape.
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

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Industries;
