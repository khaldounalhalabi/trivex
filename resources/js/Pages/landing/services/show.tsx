import HomePartners from "@/components/landing/home/HomePartners";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Service from "@/Models/Service";

const Show = ({ service }: { service: Service }) => {
    return (
        <div className={"h-full w-full"}>
            <div className={"pt-10 flex w-full items-center justify-center"}>
                <img src={service.cover?.url} className={"w-[84vw] max-h-[75vh]"} />
            </div>
            <div className={"flex w-full items-center justify-center"}>
                <div className={"w-[84vw] space-y-5 py-10"}>
                    <h1 className={"text-5xl font-semibold"}>{service.name}</h1>
                    <p>{service.description}</p>
                </div>
            </div>
            <div className={"py-5"}>
                {service.service_features?.map((feature, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div
                                className={
                                    "flex w-full items-center justify-between"
                                }
                            >
                                <div
                                    className={
                                        "flex w-1/2 flex-col items-start gap-5 ps-32 pe-16"
                                    }
                                >
                                    <h1 className={"text-5xl font-semibold"}>
                                        {feature.title}
                                    </h1>
                                    <p>{feature.description}</p>
                                </div>
                                <img
                                    src={feature.image?.url}
                                    className={"w-1/2"}
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            className={
                                "flex w-full items-center justify-between gap-5"
                            }
                        >
                            <img src={feature.image?.url} className={"w-1/2"} />

                            <div
                                className={
                                    "flex w-1/2 flex-col items-start gap-5 pe-32"
                                }
                            >
                                <h1 className={"text-5xl font-semibold"}>
                                    {feature.title}
                                </h1>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={"flex items-center justify-center py-10"}>
                <div className={"flex w-[84vw] flex-col gap-5"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Overview Service
                    </h1>
                    <p>{service.service_overview?.description}</p>
                    <div className={"grid grid-cols-3 gap-5"}>
                        {service.service_overview?.images?.map((image) => (
                            <img src={image.url} />
                        ))}
                    </div>
                </div>
            </div>

            <HomePartners />

            <WhyChooseUs />

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Show;
