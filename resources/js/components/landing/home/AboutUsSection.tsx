import LongRightArrow from "@/components/icons/LongRightArrow";
import LandingButton from "@/components/landing/LandingButton";
import { asset } from "@/helper";
import Service from "@/Models/Service";
import { Link } from "@inertiajs/react";
function AboutUsSection({ services = [] }: { services: Service[] }) {
    return (
        <div className={"h-full w-full bg-landing-background py-20"}>
            <div className={"flex h-full items-start justify-between"}>
                <img
                    src={asset("/images/handed-phone.png")}
                    className={"w-[37vw]"}
                />
                <div className={"flex flex-col items-start gap-10 py-25"}>
                    <p className={""}>INTRODUCE TRIVEX</p>
                    <h1 className={"w-[40vw] text-4xl font-semibold text-wrap"}>
                        Tailored Security Services to Meet Needs
                    </h1>
                    <p className={"w-[26vw] text-sm text-wrap"}>
                        From manned guarding and event control to aviation,
                        defence, cash transit, and advanced tech solutions —
                        Trivex covers every security dimension.
                    </p>
                    <Link href={route("landing.services")}>
                        <LandingButton className={"px-10 py-3"}>
                            See Our Services
                        </LandingButton>
                    </Link>
                </div>
                <img
                    src={asset("/images/01.png")}
                    className={"mt-10 w-[16%]"}
                />
            </div>
            <div className={"-mt-56 flex items-center justify-center"}>
                <div className={"relative flex flex-col items-center gap-10"}>
                    <img
                        src={asset("/images/02.png")}
                        className={"absolute -left-26 w-52"}
                    />
                    <p>OUR BEST SERVICES</p>
                    <h1
                        className={
                            "z-10 w-[50vw] text-center text-4xl font-semibold text-wrap"
                        }
                    >
                        We Provide the Security Your Mission Deserves
                    </h1>
                    <p className={"w-[45vw] text-center text-wrap"}>
                        Tailored solutions built on intelligence, training, and
                        technology to protect what matters most, ensuring
                        resilience against threats, enabling continuity,
                        strengthening trust, and delivering unmatched security
                        across governments, corporations, NGOs, and private
                        clients worldwide
                    </p>
                </div>
            </div>
            <div className={"grid h-full grid-cols-3 gap-30 px-30 py-10"}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={
                            "flex h-full flex-col items-start justify-between gap-5"
                        }
                    >
                        <h2 className={"text-3xl font-semibold"}>
                            {service.name}
                        </h2>
                        <p>{service.small_description}</p>
                        <Link href={route("landing.services.show", service.id)}>
                            <button
                                className={
                                    "flex cursor-pointer items-center gap-3 transition-all hover:gap-5"
                                }
                            >
                                <LongRightArrow />
                                <p>View More</p>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsSection;
