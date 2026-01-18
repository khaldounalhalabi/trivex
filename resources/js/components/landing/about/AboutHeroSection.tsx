import LandingButton from "@/components/landing/LandingButton";
import { Link } from "@inertiajs/react";

const AboutHeroSection = () => {
    return (
        <div
            className={
                "flex flex-col items-start gap-16 px-5 py-5 md:flex-row md:px-24 md:py-10"
            }
        >
            <div className={"flex flex-col items-start gap-10"}>
                <h3
                    className={
                        "border-l-2 border-l-landing-primary ps-5 font-semibold"
                    }
                >
                    ABOUT US ..
                </h3>
                <h1 className={"text-2xl font-semibold md:text-4xl"}>
                    Specialist Security Solutions for Complex Environments
                    Worldwide.
                </h1>
                <p>
                    Trivex Security International is a specialist security and
                    risk-management company delivering professional protection
                    services to corporate, government, and
                    critical-infrastructure clients worldwide.
                </p>
            </div>

            <div className={"grid grid-cols-1 gap-10 md:grid-cols-2"}>
                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-xl font-semibold md:text-3xl"}>
                        Our Vision
                    </h2>
                    <p>
                        To be the world’s most trusted security partner,
                        empowering safer businesses, communities, and global
                        operations.
                    </p>
                </div>

                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-xl font-semibold md:text-3xl"}>
                        Our Mission
                    </h2>
                    <p>
                        To deliver tailored security solutions with excellence,
                        innovation, and trust, ensuring protection across global
                        environments.
                    </p>
                </div>

                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-xl font-semibold md:text-3xl"}>
                        Leadership
                    </h2>
                    <p>
                        To be the world’s most influential leader, driving
                        innovation, inspiring teams, and shaping future
                        industries with integrity.
                    </p>
                </div>

                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-xl font-semibold md:text-3xl"}>
                        Credentials
                    </h2>
                    <p>
                        To be the world’s most recognized authority, setting the
                        standard for expertise, trustworthiness, and excellence
                        in every field we serve.
                    </p>
                </div>

                <div
                    className={"flex items-center justify-center md:col-span-2"}
                >
                    <Link href={route("landing.contact")}>
                        <LandingButton className={"w-42 py-3"}>
                            Contact Us
                        </LandingButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutHeroSection;
