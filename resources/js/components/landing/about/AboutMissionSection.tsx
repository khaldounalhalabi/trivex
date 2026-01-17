import { asset } from "@/helper";

const AboutMissionSection = () => {
    return (
        <div className={"flex w-full items-center justify-between py-10 px-5 md:px-0"}>
            <div className={"md:w-1/2 space-y-5 md:ps-28"}>
                <h1 className={"text-start text-2xl md:text-5xl font-semibold"}>
                    Protection – like freedom and peace – is one of life's
                    essential needs.
                </h1>
                <p className={"md:w-3/4 text-start"}>
                    Our mission is to provide world-class security solutions
                    that safeguard people, assets, and reputations, ensuring
                    peace of mind and freedom to thrive without fear.
                </p>
            </div>
            <img
                src={asset("/images/security-shield-inhand.png")}
                className={"w-1/2 hidden md:block"}
            />
        </div>
    );
};

export default AboutMissionSection;
