import { asset } from "@/helper";

function OurImpact() {
    return (
        <div
            className={
                // Changed p-24 to responsive padding
                // Changed justify-between to flex-col on mobile, flex-row on desktop
                "relative flex w-full flex-col items-center justify-between gap-12 bg-landing-dark p-8 md:p-16 lg:flex-row lg:gap-0 lg:p-24"
            }
        >
            {/* Left Side: Text Content
                Mobile: Full width (w-full)
                Desktop: 42% width (lg:w-[42%])
            */}
            <div
                className={
                    "flex w-full flex-col items-center md:items-start gap-5 text-center lg:w-[42%] lg:items-start lg:text-left"
                }
            >
                <h2 className={"text-base text-center text-white uppercase md:text-lg"}>
                    Take a look to our journey
                </h2>
                <h1 className={"text-3xl text-wrap text-white md:text-5xl"}>
                    Global Impact Across Every Mission
                </h1>
                <p className={"text-sm text-white opacity-80 md:text-base"}>
                    16+ Years of Experience • Global Operations in High-Risk
                    Regions • Elite Team from Military & Law Enforcement •
                    Advanced Tech & K9 Units
                </p>
            </div>

            {/* Right Side: Stats Grid
                Mobile: 1 or 2 columns based on space
                Desktop: 42% width, 2 columns
            */}
            <div
                className={
                    "grid w-full grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-5 lg:w-[42%]"
                }
            >
                <div
                    className={
                        "flex items-center justify-center gap-3 lg:justify-start"
                    }
                >
                    <img
                        className={"w-12 md:w-16"}
                        src={asset("/images/16.png")}
                        alt="16 years"
                    />
                    <p
                        className={
                            "text-lg font-semibold text-wrap text-white md:text-xl"
                        }
                    >
                        Years of Experience
                    </p>
                </div>
                <div
                    className={
                        "flex items-center justify-center gap-3 lg:justify-start"
                    }
                >
                    <img
                        className={"w-20 md:w-24"}
                        src={asset("/images/250.png")}
                        alt="250 army"
                    />
                    <p
                        className={
                            "text-lg font-semibold text-wrap text-white md:text-xl"
                        }
                    >
                        Our Best Army
                    </p>
                </div>
                <div
                    className={
                        "flex items-center justify-center gap-3 lg:justify-start"
                    }
                >
                    <img
                        className={"w-16 md:w-20"}
                        src={asset("/images/500.png")}
                        alt="500 coffee"
                    />
                    <p
                        className={
                            "text-lg font-semibold text-wrap text-white md:text-xl"
                        }
                    >
                        Cups Of Coffee
                    </p>
                </div>
                <div
                    className={
                        "flex items-center justify-center gap-3 lg:justify-start"
                    }
                >
                    <img
                        className={"w-10 md:w-12"}
                        src={asset("/images/45.png")}
                        alt="45 offices"
                    />
                    <p
                        className={
                            "text-lg font-semibold text-wrap text-white md:text-xl"
                        }
                    >
                        Cozy Branch Offices
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurImpact;
