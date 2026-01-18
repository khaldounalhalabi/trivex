import { asset } from "@/helper";
import { Link } from "@inertiajs/react";

function HomeHero() {
    return (
        // Changed h-[82vh] to min-h-[82vh] so content doesn't overflow on small screens
        <div
            className={
                "flex w-full items-center bg-landing-background py-10 md:min-h-[82vh] md:py-0"
            }
        >
            <div className={"flex w-full items-end justify-end md:py-10"}>
                {/* Mobile: Stacked (flex-col-reverse so text stays above image)
                   Desktop: Side-by-side (flex-row)
                */}
                <div
                    className={
                        "flex w-full flex-col-reverse items-center md:w-[92%] md:flex-row"
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
                        <p className={"text-xs font-semibold md:text-xl"}>
                            CEO MESSAGE ..
                        </p>
                        {/* Adjusted text size for mobile (text-3xl) vs desktop (md:text-5xl) */}
                        <h1 className={"text-lg md:text-2xl"}>
                            At Trivex Security International, we recognise that
                            effective security is built on responsibility,
                            preparation, and trust.
                        </h1>
                        <div className={"max-w-xl text-sm text-wrap"}>
                            <p>
                                We deliver professional, risk-based security
                                solutions designed to protect people, assets,
                                and operations in complex and demanding
                                environments. Every engagement is carefully
                                assessed and implemented with a focus on
                                compliance, operational clarity, and
                                reliability. Our approach is disciplined and
                                tailored.
                            </p>
                            <p>
                                We do not offer generic solutions, Each service
                                is structured to meet the specific risks and
                                objectives of our clients, ensuring security
                                measures that are effective, proportionate, and
                                accountable. Our commitment remains constant: to
                                deliver trusted security services with
                                professionalism, discretion, and consistency.
                            </p>
                            <p className={"mt-5 font-semibold"}>
                                Chief Executive Officer Trivex Security
                                International
                            </p>
                            <p className={"font-semibold"}>A.Talib</p>
                        </div>

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
                        src={asset("/images/hero.jpeg")}
                        className={
                            "hidden h-auto w-full object-contain pe-5 md:block md:w-[40%]"
                        }
                        alt={"hero image"}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
