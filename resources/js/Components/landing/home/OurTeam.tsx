import { asset } from "@/helper";

function OurTeam() {
    return (
        <div
            className={
                "flex h-full w-full max-w-[82vw] items-center justify-center bg-landing-background px-24 pt-52"
            }
        >
            <div className={"flex w-full flex-col items-start gap-5"}>
                <div
                    className={
                        "relative flex w-[72vw] items-center justify-between gap-10"
                    }
                >
                    <div className={"flex w-[60%] flex-col items-start gap-10"}>
                        <h2 className={"text-lg font-semibold uppercase"}>
                            INTRODUCE OUR TEAM
                        </h2>
                        <h1 className={"text-5xl font-semibold text-wrap"}>
                            Led by Experts, Driven by Excellence.
                        </h1>
                        <p className={"text-wrap"}>
                            From counter-terrorism to comprehensive risk
                            advisory, our seasoned experts deliver tailored
                            strategies and unwavering protection to safeguard
                            your world everywhere.
                        </p>
                    </div>
                    <div
                        className={
                            "landing-button-background flex w-[40%] flex-col items-start gap-10 px-4 py-16"
                        }
                    >
                        <h3 className={"text-3xl font-semibold text-wrap"}>
                            "Together with our clients, we make the world a
                            safer place."
                        </h3>
                        <h4 className={"text-3xl font-semibold text-wrap"}>
                            - Trivex
                        </h4>
                    </div>

                    <img
                        src={asset("/images/3.png")}
                        className={"absolute -end-64 -top-16 w-52"}
                    />
                </div>

                <div
                    className={
                        "grid w-full grid-cols-3 items-center justify-between gap-54"
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
                        <h1 className={"text-lg font-semibold"}>
                            Thomas Sereza
                        </h1>
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
                        <h1 className={"text-lg font-semibold"}>
                            John Alexander
                        </h1>
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
        </div>
    );
}

export default OurTeam;
