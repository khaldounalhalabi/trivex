import React from "react";
import { asset } from "@/helper";

const AboutTeamSection = () => {
    return (
        <div className={"flex w-full flex-col items-center gap-10 py-10"}>
            <div className={"flex w-[57vw] flex-col items-center gap-10"}>
                <div className={"flex flex-col items-center gap-2"}>
                    <div className={"h-1 w-16 rounded-sm bg-landing-primary"} />
                    <h4 className={"font-semibold"}>INTRODUCE TRIVEX</h4>
                </div>
                <h1 className={"text-center text-5xl font-semibold"}>
                    Elite professionals committed to safeguarding your business
                </h1>
                <p className={"w-[78%] text-center"}>
                    Backed by years of global expertise, our specialists deliver
                    tailored security solutions that protect assets, ensure
                    resilience, and give your business the confidence to grow
                    securely.
                </p>
            </div>
            <div
                className={
                    "grid w-[83%] grid-cols-3 items-center justify-between"
                }
            >
                <div
                    className={
                        "flex h-full w-[26vw] flex-col items-center gap-5"
                    }
                >
                    <img
                        src={asset("/images/person1.png")}
                        className={"h-full w-full"}
                    />
                    <h1 className={"text-lg font-semibold"}>Thomas Sereza</h1>
                    <p>Network Security</p>
                </div>

                <div
                    className={
                        "flex h-full w-[26vw] flex-col items-center gap-5"
                    }
                >
                    <img
                        src={asset("/images/person2.png")}
                        className={"h-full w-full"}
                    />
                    <h1 className={"text-lg font-semibold"}>John Alexander</h1>
                    <p>Cyper Security</p>
                </div>

                <div
                    className={
                        "flex h-full w-[26vw] flex-col items-center gap-5"
                    }
                >
                    <img
                        src={asset("/images/person3.png")}
                        className={"h-full w-full"}
                    />
                    <h1 className={"text-lg font-semibold"}>Joao Hobbs</h1>
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default AboutTeamSection;
