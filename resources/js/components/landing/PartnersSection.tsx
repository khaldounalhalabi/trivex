import { usePage } from "@inertiajs/react";

function PartnersSection() {
    const { partners } = usePage().props;

    return (
        <div
            className={
                "relative flex w-full flex-col items-center gap-8 bg-landing-dark py-10"
            }
        >
            <div className={"h-1 w-16 rounded-sm bg-landing-primary"}></div>
            <h4 className={"text-lg text-white"}>OUR BEST PARTNERS</h4>

            {/* Changed width from fixed 40% to responsive:
                90% on mobile, 60% on tablet, 40% on desktop */}
            <h1
                className={
                    "w-[90%] text-center text-2xl text-wrap text-white md:w-[60%] md:text-4xl lg:w-[40%]"
                }
            >
                Trusted by Leading Governments, Corporations & NGOs
            </h1>

            {/* Responsive Grid:
                - grid-cols-1: Mobile
                - sm:grid-cols-2: Small tablets
                - md:grid-cols-3: Tablets
                - lg:grid-cols-5: Desktop (original style)
                - px-6: Mobile padding
                - md:px-24: Original desktop padding
            */}
            <div
                className={
                    "grid h-full w-full grid-cols-2 items-center justify-between gap-12 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-24 lg:grid-cols-5 lg:gap-0"
                }
            >
                {partners.map((p, index) => (
                    <div
                        className={`flex h-full flex-col items-center justify-between gap-4 ${index == 4 ? "col-span-2 md:col-span-1" : ""}`}
                        key={index}
                    >
                        <img
                            src={p.logo?.url}
                            alt={p.name}
                            className={
                                "h-16 scale-75 object-contain md:h-auto md:scale-65"
                            }
                        />
                        <h1
                            className={
                                "text-center font-playfair! text-2xl font-semibold text-landing-gray uppercase md:text-3xl"
                            }
                        >
                            {p.name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PartnersSection;
