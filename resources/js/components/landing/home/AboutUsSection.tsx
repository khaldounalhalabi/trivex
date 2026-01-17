import LongRightArrow from "@/components/icons/LongRightArrow";
import LandingButton from "@/components/landing/LandingButton";
import { asset } from "@/helper";
import Service from "@/Models/Service";
import { Link } from "@inertiajs/react";

function AboutUsSection({ services = [] }: { services: Service[] }) {
    return (
        <div className={"h-full w-full bg-landing-background py-20"}>
            {/* Top Section: Now centered and cleaner without the phone image */}
            <div
                className={
                    "container mx-auto flex flex-col items-center px-6 text-center lg:flex-row lg:justify-between lg:gap-20 lg:text-left"
                }
            >
                <div
                    className={
                        "flex max-w-2xl flex-col items-center gap-6 py-10 lg:items-start"
                    }
                >
                    <p
                        className={
                            "font-bold tracking-widest text-primary uppercase"
                        }
                    >
                        Introduce Trivex
                    </p>
                    <h1
                        className={
                            "text-4xl leading-tight font-semibold lg:text-5xl"
                        }
                    >
                        Tailored Security Services{" "}
                        <br className="hidden lg:block" /> to Meet Your Needs
                    </h1>
                    <p className={"text-md max-w-lg opacity-80"}>
                        From manned guarding and event control to aviation,
                        defence, cash transit, and advanced tech solutions —
                        Trivex covers every security dimension.
                    </p>
                    <Link href={route("landing.services")}>
                        <LandingButton className={"mt-4 px-10 py-4"}>
                            See Our Services
                        </LandingButton>
                    </Link>
                </div>

                {/* Keeping 01.png as a decorative element or removing if preferred */}
                <img
                    src={asset("/images/01.png")}
                    className={"hidden w-[25%] animate-pulse lg:block"}
                    alt="Decorative element"
                />
            </div>

            {/* Middle Section: Best Services */}
            <div className={"mt-24 flex items-center justify-center"}>
                <div
                    className={"relative flex flex-col items-center gap-6 px-6"}
                >
                    <img
                        src={asset("/images/02.png")}
                        className={
                            "absolute top-0 -left-32 hidden w-48 opacity-50 xl:block"
                        }
                        alt="Background element"
                    />
                    <p className={"font-medium"}>OUR BEST SERVICES</p>
                    <h1
                        className={
                            "z-10 max-w-3xl text-center text-4xl leading-snug font-semibold"
                        }
                    >
                        We Provide the Security Your Mission Deserves
                    </h1>
                    <p className={"max-w-2xl text-center text-gray-600"}>
                        Tailored solutions built on intelligence, training, and
                        technology to protect what matters most, ensuring
                        resilience against threats and delivering unmatched
                        security across governments, corporations, and private
                        clients worldwide.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div
                className={
                    "container mx-auto grid grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-3"
                }
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={
                            "group flex flex-col items-start justify-between gap-4 rounded-lg border border-transparent p-6 transition-all hover:border-gray-200"
                        }
                    >
                        <h2
                            className={
                                "text-2xl font-semibold transition-colors group-hover:text-primary"
                            }
                        >
                            {service.name}
                        </h2>
                        <p className={"line-clamp-3 text-gray-600"}>
                            {service.small_description}
                        </p>
                        <Link href={route("landing.services.show", service.id)}>
                            <button
                                className={
                                    "flex cursor-pointer items-center gap-3 font-medium text-primary transition-all hover:gap-5"
                                }
                            >
                                <LongRightArrow />
                                <span>View More</span>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsSection;
