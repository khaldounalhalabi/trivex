import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import LandingButton from "@/components/landing/LandingButton";
import PartnersSection from "@/components/landing/PartnersSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Service from "@/Models/Service";
import { Link } from "@inertiajs/react";

const Index = ({ services }: { services: Service[] }) => {
    return (
        <div className={"h-full w-full space-y-5 md:space-y-0"}>
            {services.map((s, index) =>
                index % 2 == 0 ? (
                    <div
                        className={
                            "flex w-full flex-col gap-5 items-center justify-between px-5 md:flex-row md:px-0"
                        }
                    >
                        <div
                            className={
                                "flex flex-col items-start gap-5 md:w-1/2 md:ps-32"
                            }
                        >
                            {s.name.includes("Manned Security") && (
                                <h2
                                    className={
                                        "border-s-2 border-s-landing-primary ps-1 capitalize"
                                    }
                                >
                                    Our Best Services
                                </h2>
                            )}
                            <h1
                                className={"text-2xl font-semibold md:text-5xl"}
                            >
                                {s.name}
                            </h1>
                            <p>{s.small_description}</p>
                            <Link href={route("landing.services.show", s.id)}>
                                <LandingButton className={"px-10 py-3"}>
                                    See More
                                </LandingButton>
                            </Link>
                        </div>
                        <img src={s.image?.url} className={"md:w-1/2 w-full"} />
                    </div>
                ) : (
                    <div
                        className={
                            "flex w-full flex-col-reverse items-center justify-between gap-5 px-5 md:flex-row md:px-0"
                        }
                    >
                        <img src={s.image?.url} className={"md:w-1/2"} />

                        <div
                            className={
                                "flex flex-col items-start gap-5 md:w-1/2 md:pe-32"
                            }
                        >
                            <h1
                                className={"text-2xl font-semibold md:text-5xl"}
                            >
                                {s.name}
                            </h1>
                            <p>{s.small_description}</p>
                            <Link href={route("landing.services.show", s.id)}>
                                <LandingButton className={"px-10 py-3"}>
                                    See More
                                </LandingButton>
                            </Link>
                        </div>
                    </div>
                ),
            )}

            <div className={"h-full w-full pt-16"}>
                <PartnersSection />
            </div>

            <WhyChooseUs />

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Index;
