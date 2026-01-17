import { asset } from "@/helper";

function OurImpact() {
    return (
        <div
            className={
                "relative flex w-full items-center justify-between bg-landing-dark p-24"
            }
        >
            <div className={"flex w-[42%] flex-col items-start gap-5"}>
                <h2 className={"text-lg text-white uppercase"}>
                    Take a look to our journey
                </h2>
                <h1 className={"text-5xl text-wrap text-white"}>
                    Global Impact Across Every Mission
                </h1>
                <p className={"text-white"}>
                    16+ Years of Experience • Global Operations in High-Risk
                    Regions • Elite Team from Military & Law Enforcement •
                    Advanced Tech & K9 Units
                </p>
            </div>
            <div className={"grid w-[42%] grid-cols-2 items-center gap-5"}>
                <div className={"flex items-center gap-3"}>
                    <img className={"w-16"} src={asset("/images/16.png")} />
                    <p className={"text-xl font-semibold text-wrap text-white"}>
                        Years of Experience
                    </p>
                </div>
                <div className={"flex items-center gap-3"}>
                    <img className={"w-24"} src={asset("/images/250.png")} />
                    <p className={"text-xl font-semibold text-wrap text-white"}>
                        Our Best Army
                    </p>
                </div>
                <div className={"flex items-center gap-3"}>
                    <img className={"w-20"} src={asset("/images/500.png")} />
                    <p className={"text-xl font-semibold text-wrap text-white"}>
                        Cups Of Coffee
                    </p>
                </div>
                <div className={"flex items-center gap-3"}>
                    <img className={"w-12"} src={asset("/images/45.png")} />
                    <p className={"text-xl font-semibold text-wrap text-white"}>
                        Cozy Branch Offices
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurImpact;
