import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import PartnersSection from "@/components/landing/PartnersSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Service from "@/Models/Service";

const Show = ({ service }: { service: Service }) => {
    return (
        <div className={"h-full w-full px-5 md:px-0"}>
            <div className={"flex w-full items-center justify-center md:pt-10"}>
                <img
                    src={service.cover?.url}
                    className={"md:max-h-[75vh] md:w-[84vw]"}
                />
            </div>
            <div className={"flex w-full items-center justify-center"}>
                <div className={"space-y-5 py-10 md:w-[84vw]"}>
                    <h1 className={"text-2xl font-semibold md:text-5xl"}>
                        {service.name}
                    </h1>
                    <p>{service.description}</p>
                </div>
            </div>
            <div className={"space-y-5 py-5 md:space-y-0"}>
                {service.service_features?.map((feature, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div
                                className={
                                    "flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-0"
                                }
                            >
                                <div
                                    className={
                                        "flex flex-col items-start gap-5 md:w-1/2 md:ps-32 md:pe-16"
                                    }
                                >
                                    <h1
                                        className={
                                            "text-2xl font-semibold md:text-5xl"
                                        }
                                    >
                                        {feature.title}
                                    </h1>
                                    <p>{feature.description}</p>
                                </div>
                                <img
                                    src={feature.image?.url}
                                    className={"md:w-1/2"}
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            className={
                                "flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-0"
                            }
                        >
                            <img
                                src={feature.image?.url}
                                className={"md:w-1/2"}
                            />

                            <div
                                className={
                                    "flex flex-col items-start gap-5 md:w-1/2 md:pe-32"
                                }
                            >
                                <h1
                                    className={
                                        "text-2xl font-semibold md:text-5xl"
                                    }
                                >
                                    {feature.title}
                                </h1>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={"flex items-center justify-center py-10"}>
                <div className={"flex md:w-[84vw] flex-col gap-5"}>
                    <h1 className={"text-2xl md:text-5xl font-semibold"}>
                        Overview Service
                    </h1>
                    <p>{service.service_overview?.description}</p>
                    <div className={"grid md:grid-cols-3 gap-5"}>
                        {service.service_overview?.images?.map((image) => (
                            <img src={image.url} />
                        ))}
                    </div>
                </div>
            </div>

            <PartnersSection />

            <WhyChooseUs />

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Show;
