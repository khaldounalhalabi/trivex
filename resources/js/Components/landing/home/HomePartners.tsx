import { asset } from "@/helper";

function HomePartners() {
    return (
        <div
            className={
                "relative flex w-full flex-col items-center gap-8 bg-landing-dark py-10"
            }
        >
            <div className={"h-1 w-16 rounded-sm bg-landing-primary"}></div>
            <h4 className={"text-lg text-white"}>OUR BEST PARTNERS</h4>
            <h1 className={"w-[40%] text-center text-4xl text-wrap text-white"}>
                Trusted by Leading Governments, Corporations & NGOs
            </h1>
            <div
                className={
                    "grid h-full w-full grid-cols-5 items-center justify-between px-24 pt-10"
                }
            >
                <div
                    className={
                        "flex h-full flex-col items-center justify-between gap-3"
                    }
                >
                    <img
                        src={asset("/images/dermatech.png")}
                        alt="partner dermatech"
                        className={"w-1/4"}
                    />
                    <h1
                        className={
                            "text-center !font-playfair text-3xl font-semibold text-landing-gray"
                        }
                    >
                        DERMATECH
                    </h1>
                </div>

                <div
                    className={
                        "flex h-full flex-col items-center justify-between gap-3"
                    }
                >
                    <img
                        src={asset("/images/heliosen.png")}
                        alt="partner dermatech"
                        className={"w-1/4"}
                    />
                    <h1
                        className={
                            "text-center !font-playfair text-3xl font-semibold text-landing-gray"
                        }
                    >
                        HELIOSEN
                    </h1>
                </div>

                <div
                    className={
                        "flex h-full flex-col items-center justify-between gap-3"
                    }
                >
                    <img
                        src={asset("/images/sonarium.png")}
                        alt="partner dermatech"
                        className={"w-1/4"}
                    />
                    <h1
                        className={
                            "text-center !font-playfair text-3xl font-semibold text-landing-gray"
                        }
                    >
                        SONARIUM
                    </h1>
                </div>

                <div
                    className={
                        "flex h-full flex-col items-center justify-between gap-3"
                    }
                >
                    <img
                        src={asset("/images/fablulous.png")}
                        alt="partner dermatech"
                        className={"w-1/4"}
                    />
                    <h1
                        className={
                            "text-center !font-playfair text-3xl font-semibold text-landing-gray uppercase"
                        }
                    >
                        Fablulous
                    </h1>
                </div>

                <div
                    className={
                        "flex h-full flex-col items-center justify-between gap-3"
                    }
                >
                    <img
                        src={asset("/images/inkalioum.png")}
                        alt="partner dermatech"
                        className={"w-1/4"}
                    />
                    <h1
                        className={
                            "text-center !font-playfair text-3xl font-semibold text-landing-gray uppercase"
                        }
                    >
                        Inkalioum
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default HomePartners;
