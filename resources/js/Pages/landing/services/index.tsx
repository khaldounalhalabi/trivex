import PartnersSection from "@/components/landing/home/HomePartners";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import LandingButton from "@/components/landing/LandingButton";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Service from "@/Models/Service";
import { Link } from "@inertiajs/react";

const Index = ({ services }: { services: Service[] }) => {
    return (
        <div className={"h-full w-full"}>
            {services.map((s, index) =>
                index % 2 == 0 ? (
                    <div className={"flex w-full items-center justify-between"}>
                        <div
                            className={
                                "flex w-1/2 flex-col items-start gap-5 ps-32"
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
                            <h1 className={"text-5xl font-semibold"}>
                                {s.name}
                            </h1>
                            <p>{s.small_description}</p>
                            <Link href={route("landing.services.show", s.id)}>
                                <LandingButton className={"px-10 py-3"}>
                                    See More
                                </LandingButton>
                            </Link>
                        </div>
                        <img src={s.image?.url} className={"w-1/2"} />
                    </div>
                ) : (
                    <div
                        className={
                            "flex w-full items-center justify-between gap-5"
                        }
                    >
                        <img src={s.image?.url} className={"w-1/2"} />

                        <div
                            className={
                                "flex w-1/2 flex-col items-start gap-5 pe-32"
                            }
                        >
                            <h1 className={"text-5xl font-semibold"}>
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
