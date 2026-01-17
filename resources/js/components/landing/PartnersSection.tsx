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
            <h1 className={"w-[40%] text-center text-4xl text-wrap text-white"}>
                Trusted by Leading Governments, Corporations & NGOs
            </h1>
            <div
                className={
                    "grid h-full w-full grid-cols-5 items-center justify-between px-24"
                }
            >
                {partners.map((p, index) => (
                    <div
                        className={
                            "flex h-full flex-col items-center justify-between gap-1"
                        }
                        key={index}
                    >
                        <img
                            src={p.logo?.url}
                            alt="partner dermatech"
                            className={"scale-65"}
                        />
                        <h1
                            className={
                                "text-center font-playfair! text-3xl font-semibold text-landing-gray uppercase"
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
