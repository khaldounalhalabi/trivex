import AboutHeroSection from "@/components/landing/about/AboutHeroSection";
import AboutMissionSection from "@/components/landing/about/AboutMissionSection";
import AboutTeamSection from "@/components/landing/about/AboutTeamSection";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import OurImpact from "@/components/landing/home/OurImpact";
import Team from "@/Models/Team";

const About = ({ team }: { team: Team[] }) => {
    return (
        <div className={"h-full w-full"}>
            <AboutHeroSection />
            <OurImpact />
            <AboutTeamSection team={team} />
            <AboutMissionSection />
            <div className={"h-full w-full bg-landing-background"}>
                <div
                    className={
                        "mt-24 flex items-center justify-between gap-32 px-5 md:px-24"
                    }
                >
                    <div
                        className={
                            "flex flex-col items-center justify-between gap-8 md:items-start"
                        }
                    >
                        <h2
                            className={
                                "border-l-4 border-l-landing-primary pl-1 font-semibold uppercase md:text-lg"
                            }
                        >
                            Our Approach
                        </h2>
                        <h1
                            className={
                                "text-center text-4xl font-semibold text-wrap md:text-start md:text-5xl"
                            }
                        >
                            Trivex Security International operates on a
                            risk-driven and compliance-first model.
                        </h1>
                        <div className={"text-center md:text-start"}>
                            <p>
                                We do not offer generic security solutions. Each
                                deployment is designed around:
                            </p>
                            <ul className={"list-disc ps-10"}>
                                <li>Threat analysis</li>
                                <li>Operational environment</li>
                                <li>Legal and regulatory requirements</li>
                                <li>Client-specific objectives </li>
                            </ul>
                            <p>
                                This ensures that protection measures are
                                effective, proportionate, and fully accountable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default About;
