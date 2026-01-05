import QuestionCard from "@/Components/landing/faqs/QuestionCard";
import NewsLetterFooter from "@/Components/landing/home/NewsLetterFooter";
import { asset } from "@/helper";

const Faqs = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"relative flex flex-col items-center gap-5 py-16"}>
                <div className={"h-1 w-16 rounded-sm bg-landing-primary"} />
                <h4 className={"font-semibold"}>FREQUENTLY ASKED QUESTION</h4>
                <h1 className={"w-[41vw] text-center text-5xl"}>
                    Are you have a question ? look here
                </h1>
                <p className={"w-[61vw] pt-5 text-center text-sm text-wrap"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor quam quam adipiscing at est integer tellus. Quis
                    congue tortor tortor convallis egestas magna massa
                    consequat. Neque tellus nunc a augue volutpat non elementum
                    pulvinar.
                </p>
                <img
                    src={asset("/images/full-donut.png")}
                    className={
                        "absolute start-16 top-1/2 w-72 -translate-y-1/2"
                    }
                />
            </div>

            <div className={"w-full py-24"}>
                <div className={"flex flex-col items-center gap-5 px-16"}>
                    <QuestionCard
                        question={"What services do you provide?"}
                        answer={
                            "We don’t offer cybersecurity services. Our expertise is private security and physical security technology—manned guarding, close protection, K9, CCTV, alarms, access control, and monitoring. We’ll collaborate with your internal IT/cyber teams or trusted vendors to align policies, harden interfaces, and avoid conflicts, but we don’t deliver cyber monitoring, SOC operations, incident response, or penetration testing. Partner referrals available on request. "
                        }
                    />

                    <QuestionCard
                        question={"Do you provide cybersecurity?"}
                        answer={
                            "We don’t offer cybersecurity services. Our expertise is private security and physical security technology—manned guarding, close protection, K9, CCTV, alarms, access control, and monitoring. We’ll collaborate with your internal IT/cyber teams or trusted vendors to align policies, harden interfaces, and avoid conflicts, but we don’t deliver cyber monitoring, SOC operations, incident response, or penetration testing. Partner referrals available on request. "
                        }
                    />

                    <QuestionCard
                        question={"Do you operate internationally?"}
                        answer={
                            "Yes. We routinely integrate with existing access control and CCTV ecosystems, including badge/biometric readers, VMS/NVR platforms, alarm panels, and remote monitoring centers. Our engineers map device inventories, assess firmware/compatibility, and design API/onvif integrations, permissions, and escalation paths. /cyber teams or trusted vendors to align policies, harden interfaces, and avoid conflicts, but we don’t deliver cyber monitoring, SOC operations, incident response, or penetration testing. Partner referrals available on request. "
                        }
                    />

                    <QuestionCard
                        question={"How fast can you deploy?"}
                        answer={
                            "We don’t offer cybersecurity services. Our expertise is private security and physical security technology—manned guarding, close protection, K9, CCTV, alarms, access control, and monitoring. We’ll collaborate with your internal IT/cyber teams or trusted vendors to align policies, harden interfaces, and avoid conflicts, but we don’t deliver cyber monitoring, SOC operations, incident response, or penetration testing. Partner referrals available on request. "
                        }
                    />
                </div>
            </div>

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Faqs;
