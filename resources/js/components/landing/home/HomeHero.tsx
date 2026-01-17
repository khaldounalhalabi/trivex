import { asset } from "@/helper";
import { Link } from "@inertiajs/react";

function HomeHero() {
    return (
        // Changed h-[82vh] to min-h-[82vh] so content doesn't overflow on small screens
        <div
            className={
                "flex py-10 md:py-0 md:min-h-[82vh] w-full items-center bg-landing-background"
            }
        >
            <div className={"flex w-full items-end justify-end md:py-10"}>
                {/* Mobile: Stacked (flex-col-reverse so text stays above image)
                   Desktop: Side-by-side (flex-row)
                */}
                <div
                    className={
                        "flex w-full md:w-[92%] flex-col-reverse items-center md:flex-row"
                    }
                >
                    {/* Mobile: Full width (w-full)
                       Desktop: 60% width (md:w-[60%])
                    */}
                    <div
                        className={
                            "relative flex w-full flex-col items-start gap-6 px-5 md:mt-0 md:w-[60%] md:gap-8"
                        }
                    >
                        <p className={"text-xs font-semibold md:text-base"}>
                            SECURING EVERY MISSION. WORLDWIDE
                        </p>
                        {/* Adjusted text size for mobile (text-3xl) vs desktop (md:text-5xl) */}
                        <h1 className={"text-3xl md:text-5xl"}>
                            Trivex Security International delivers specialist
                            protection worldwide.
                        </h1>
                        <p className={"max-w-xl text-sm text-wrap"}>
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
                    </div>

                    <img
                        src={asset("/images/hero-image.png")}
                        className={
                            "h-auto w-full object-contain hidden md:block md:w-[40%]"
                        }
                        alt={"hero image"}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
