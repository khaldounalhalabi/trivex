import MembersCarousel from "@/components/landing/MembersCarousel";
import Team from "@/Models/Team";

const AboutTeamSection = ({ team }: { team: Team[] }) => {
    return (
        <div className={"flex w-full flex-col items-center gap-10 py-10"}>
            <div
                className={
                    "flex flex-col items-center gap-10 px-5 md:w-[57vw] md:px-0"
                }
            >
                <div className={"flex flex-col items-center gap-2"}>
                    <div className={"h-1 w-16 rounded-sm bg-landing-primary"} />
                    <h4 className={"font-semibold"}>INTRODUCE TRIVEX</h4>
                </div>
                <h1
                    className={"text-center text-2xl font-semibold md:text-5xl"}
                >
                    Elite professionals committed to safeguarding your business
                </h1>
                <p className={"text-center md:w-[78%]"}>
                    Backed by years of global expertise, our specialists deliver
                    tailored security solutions that protect assets, ensure
                    resilience, and give your business the confidence to grow
                    securely.
                </p>
            </div>
            <div className={"mt-6 w-full md:mt-10 px-5"}>
                <MembersCarousel team={team} />
            </div>
        </div>
    );
};

export default AboutTeamSection;
