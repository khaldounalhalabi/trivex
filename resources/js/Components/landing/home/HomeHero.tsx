import { asset } from "@/helper";
import { Link } from "@inertiajs/react";

function HomeHero() {
    return (
        <div className={"h-[82vh] w-full bg-landing-background"}>
            <div className={"relative flex w-full items-end justify-end py-10"}>
                <img
                    src={asset("/images/top-left-donut.png")}
                    className={"absolute start-5 top-0 w-24"}
                    alt={"donut logo"}
                />
                <div className={"flex w-[92%] items-center"}>
                    <div
                        className={
                            "relative flex w-[60%] flex-col items-start gap-8 px-5"
                        }
                    >
                        <p className={"font-semibold"}>
                            SECURING EVERY MISSION. WORLDWIDE
                        </p>
                        <h1 className={"text-5xl"}>
                            Trivex Security International delivers specialist
                            protection worldwide.
                        </h1>
                        <p className={"text-sm text-wrap"}>
                            From static guarding and mobile patrols to high-risk
                            international protection, we provide unmatched
                            security solutions trusted by governments,
                            corporations, and private clients.
                        </p>
                        <Link href={route("landing.request.quote")}>
                            <button className="relative inline-block cursor-pointer px-5 py-3 text-landing-primary transition-all hover:bg-landing-primary hover:px-8 hover:text-white">
                                <span className="text-xl font-semibold">
                                    Get in Touch
                                </span>
                                <div className="partial-borders"></div>
                            </button>
                        </Link>
                        <img
                            src={asset("/images/hero-donut.png")}
                            className={
                                "absolute -end-[10%] top-1/2 w-24 -translate-y-1/2"
                            }
                        />
                    </div>
                    <img
                        src={asset("/images/hero-image.png")}
                        className={"z-10 w-[40%]"}
                        alt={"hero image"}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
