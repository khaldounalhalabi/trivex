import HeroSection from "@/components/landing/home/HomeHero";
import PartnersSection from "@/components/landing/PartnersSection";
import AboutUsSection from "@/components/landing/home/AboutUsSection";
import OurImpact from "@/components/landing/home/OurImpact";
import OurTeam from "@/components/landing/home/OurTeam";
import { asset } from "@/helper";

function InsightsAndNews() {
    return (
        <div className={"mt-36 h-full w-full bg-landing-background"}>
            <div
                className={
                    "relative flex h-full w-full items-center justify-center"
                }
            >
                <div
                    className={
                        "flex flex-col items-center justify-between gap-8"
                    }
                >
                    <h2 className={"text-lg font-semibold uppercase"}>
                        Insights & Updates
                    </h2>
                    <h1
                        className={
                            "max-w-[49vw] text-center text-5xl font-semibold text-wrap"
                        }
                    >
                        Do not miss with many news and article from us
                    </h1>
                    <p className={"max-w-[49vw] text-center text-wrap"}>
                        Stay informed with expert analysis, industry news, and
                        practical security advice. Our specialists share
                        knowledge on manned security, specialist protection,
                        aviation security, defence, risk management, and more —
                        helping you prepare for today’s and tomorrow’s
                        challenges.
                    </p>
                </div>
                <img
                    src={asset("/images/4.png")}
                    className={"absolute -top-10 left-5 w-52"}
                />
            </div>
            <div
                className={
                    "flex h-full w-full items-center justify-center pt-10"
                }
            >
                <div className={"grid w-[82vw] grid-cols-2 gap-5"}>
                    <div
                        className={
                            "h-full w-full bg-[url('/images/blog1.png')] bg-cover"
                        }
                    >
                        <div
                            className={
                                "flex flex-col items-start gap-5 bg-transparent p-10"
                            }
                        >
                            <h1
                                className={
                                    "text-3xl font-semibold text-wrap text-white"
                                }
                            >
                                Why Manned Security Still Matters in a Digital
                                World
                            </h1>
                            <p className={"text-wrap text-white"}>
                                Even with advanced technology, static guarding,
                                mobile patrols, and event security remain the
                                backbone of protection. Discover why human
                                presence is still irreplaceable for safety and
                                trust.
                            </p>
                        </div>
                    </div>

                    <div
                        className={"grid h-full grid-cols-2 items-center gap-5"}
                    >
                        <div
                            className={
                                "col-span-2 h-full bg-[url('/images/blog2.png')] bg-cover"
                            }
                        >
                            <div
                                className={
                                    "flex flex-col items-start gap-2 bg-transparent p-6"
                                }
                            >
                                <h1
                                    className={
                                        "text-2xl font-semibold text-wrap text-white"
                                    }
                                >
                                    The Rising Importance of Specialist
                                    Protection for VIPs & Executives
                                </h1>
                                <p className={"text-wrap text-white"}>
                                    Close protection and secure travel routes
                                    are no longer luxuries but essentials for
                                    high-profile figures. Learn how modern
                                    protection strategies are evolving in
                                    high-risk environments.
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "h-full bg-[url('/images/blog3.png')] bg-cover"
                            }
                        >
                            <div
                                className={
                                    "flex flex-col items-start gap-2 bg-transparent p-5"
                                }
                            >
                                <h1
                                    className={
                                        "text-lg font-semibold text-wrap text-white"
                                    }
                                >
                                    Securing the Skies and Seas: Aviation &
                                    Maritime Security Explained
                                </h1>
                                <p className={"text-xs text-wrap text-white"}>
                                    Trivex ensures safe journeys across air,
                                    land, sea.
                                </p>
                            </div>
                        </div>

                        <div
                            className={
                                "h-full bg-[url('/images/blog4.png')] bg-cover"
                            }
                        >
                            <div
                                className={
                                    "flex flex-col items-start gap-2 bg-transparent p-5"
                                }
                            >
                                <h1
                                    className={
                                        "text-lg font-semibold text-wrap text-white"
                                    }
                                >
                                    Why is the CISA certification important?
                                </h1>
                                <p className={"text-xs text-wrap text-white"}>
                                    CISA safeguards U.S. cybersecurity,
                                    infrastructure, risk management, and
                                    resilience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InsightsAndNews;
