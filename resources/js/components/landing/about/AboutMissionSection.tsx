import { asset } from "@/helper";

const AboutMissionSection = () => {
    return (
        <div
            className={
                "flex w-full items-center justify-between px-5 py-10 md:px-0"
            }
        >
            <div className={"space-y-5 md:w-1/2 md:ps-28"}>
                <h1 className={"text-start text-2xl font-semibold md:text-5xl"}>
                    Governance & Standards
                </h1>
                <p className={"text-start md:w-3/4"}>
                    We are committed to operating in line with recognised
                    industry standards and best practices. Our personnel are
                    selected, trained, and deployed in accordance with strict
                    operational protocols, ensuring consistent service quality
                    and accountability.
                </p>
            </div>
            <img
                src={asset("/images/security-shield-inhand.png")}
                className={"hidden w-1/2 md:block"}
            />
        </div>
    );
};

export default AboutMissionSection;
