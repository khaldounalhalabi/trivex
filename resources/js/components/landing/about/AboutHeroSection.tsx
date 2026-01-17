import React from "react";
import { asset } from "@/helper";
import LandingButton from "@/components/landing/LandingButton";
import { Link } from "@inertiajs/react";

const AboutHeroSection = () => {
    return (
        <div className={"flex items-start gap-16 px-24 py-10"}>
            <div className={"flex flex-col items-start gap-10"}>
                <h3
                    className={
                        "border-l-2 border-l-landing-primary ps-5 font-semibold"
                    }
                >
                    INTRODUCE TRIVEX
                </h3>
                <h1 className={"text-5xl font-semibold"}>
                    Perfect data protection for your business
                </h1>
                <p>
                    Safeguard sensitive information with advanced security
                    solutions designed to prevent threats, ensure compliance,
                    build trust, and keep your business operations resilient in
                    a digital world.
                </p>
            </div>

            <div className={"grid grid-cols-2 gap-10"}>
                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-3xl font-semibold"}>Our Vision</h2>
                    <p>
                        To be the world’s most trusted security partner,
                        empowering safer businesses, communities, and global
                        operations.
                    </p>
                </div>

                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-3xl font-semibold"}>Our Mission</h2>
                    <p>
                        To deliver tailored security solutions with excellence,
                        innovation, and trust, ensuring protection across global
                        environments.
                    </p>
                </div>

                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-3xl font-semibold"}>Leadership</h2>
                    <p>
                        To be the world’s most influential leader, driving
                        innovation, inspiring teams, and shaping future
                        industries with integrity.
                    </p>
                </div>

                <div className={"flex flex-col items-start gap-5"}>
                    <h2 className={"text-3xl font-semibold"}>Credentials</h2>
                    <p>
                        To be the world’s most recognized authority, setting the
                        standard for expertise, trustworthiness, and excellence
                        in every field we serve.
                    </p>
                </div>

                <div className={"col-span-2 flex items-center justify-center"}>
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
