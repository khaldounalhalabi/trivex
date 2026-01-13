import HomePartners from "@/components/landing/home/HomePartners";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import { asset } from "@/helper";

interface Service {
    cover: string;
    image: string;
    name: string;
    small_description: string;
    description: string;
    features: { title: string; description: string; image: string }[];
    overview: { description: string; images: string[] };
}

const service: Service = {
    cover: "images/festival-guard.png",
    image: "crew.png",
    name: "Manned Security Services",
    description:
        "Our Manned Security Services ensure a visible, reliable, and professional security presence at your premises. Trivex officers are trained to maintain order, prevent incidents, and ensure safety through vigilance, discipline, and communication. Each officer operates under clear post orders, supported by supervisors and reporting systems to guarantee accountability and performance excellence.\n",
    small_description: "",
    features: [
        {
            title: "Static Guarding",
            description:
                "Our static guards deliver continuous protection by monitoring access points, enforcing entry protocols, and safeguarding assets. Whether deployed at a corporate office, residential estate, retail outlet, or industrial facility, they provide a professional presence that deters unauthorized activity while maintaining a welcoming and safe environment.",
            image: "images/cop-like.png",
        },
        {
            title: "Mobile Patrol Units",
            description:
                "Mobile patrols are ideal for large or multiple locations requiring flexible coverage. Our marked patrol vehicles and trained officers conduct randomized route patrols, alarm responses, and after-hours checks, providing real-time visibility and rapid response to incidents—minimizing risks like theft and vandalism.",
            image: "/images/car-guards.png",
        },
        {
            title: "Reception & Concierge Security",
            description:
                "Combining hospitality with security, our reception and concierge officers manage visitor access, verify identification, and maintain professional front-of-house service. They ensure guests are welcomed efficiently while maintaining vigilance to prevent unauthorized entry, ensuring a seamless balance between security and service.",
            image: "/images/bank-guard.png",
        },
        {
            title: "Construction Site Security",
            description:
                "Construction sites face high risks of theft, vandalism, and trespassing. Our trained guards secure perimeters, monitor equipment, and control access for contractors and suppliers. With 24/7 monitoring and mobile patrols, we protect materials and machinery, ensuring safe and compliant site operations.",
            image: "/images/construction-guard.png",
        },
    ],
    overview: {
        description:
            "At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.",
        images: [
            "/images/female-orange-guard.png",
            "/images/cctv.png",
            "/images/female-construction-guard.png",
        ],
    },
};

const Show = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"flex w-full items-center justify-center"}>
                <img src={asset(service.cover)} className={"w-[84vw]"} />
            </div>
            <div className={"flex w-full items-center justify-center"}>
                <div className={"w-[84vw] space-y-5 py-10"}>
                    <h1 className={"text-5xl font-semibold"}>{service.name}</h1>
                    <p>{service.description}</p>
                </div>
            </div>
            <div className={"py-5"}>
                {service.features.map((feature, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div
                                className={
                                    "flex w-full items-center justify-between"
                                }
                            >
                                <div
                                    className={
                                        "flex w-1/2 flex-col items-start gap-5 ps-32"
                                    }
                                >
                                    <h1 className={"text-5xl font-semibold"}>
                                        {feature.title}
                                    </h1>
                                    <p>{feature.description}</p>
                                </div>
                                <img
                                    src={asset(feature.image)}
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
                            <img
                                src={asset(feature.image)}
                                className={"w-1/2"}
                            />

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
                    <p>{service.overview.description}</p>
                    <div className={"grid grid-cols-3 gap-5"}>
                        {service.overview.images.slice(0, 3).map((src) => (
                            <img src={asset(src)} />
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
