import AnimatedLabelInput from "@/Components/form/fields/AnimatedLabelInput";
import NewsLetterFooter from "@/Components/landing/home/NewsLetterFooter";
import LandingButton from "@/Components/landing/LandingButton";
import { asset } from "@/helper";

const RequestQuote = () => {
    return (
        <div className={"h-full w-full"}>
            <div
                className={"flex flex-col items-center gap-5 py-16 text-center"}
            >
                <h1 className={"w-[49vw] text-5xl font-semibold"}>
                    Request a Quote
                </h1>
                <p className={"w-[53vw] text-sm"}>
                    Get a fast, confidential security proposal tailored to your
                    site, schedule, and risk profile. We assess your needs,
                    recommend the right mix of manpower and technology, and
                    deliver a clear, costed plan with deployment options and
                    timelines. No fluff—just a practical roadmap to safer
                    operations.
                </p>
            </div>

            <div className={"relative flex w-full items-center justify-center"}>
                <img
                    src={asset("/images/full-donut.png")}
                    className={"absolute -end-20 -top-32 w-64"}
                />
                <img
                    src={asset("/images/donut-rotate.png")}
                    className={"absolute -start-24 -top-32 w-64"}
                />

                <div
                    className={"w-[76vw] rounded-4xl bg-[#E5E5E5] px-18 py-16"}
                >
                    <form className={"w-full"}>
                        <div
                            className={
                                "flex w-full flex-col items-center gap-5"
                            }
                        >
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"site_type_and_location"}
                                    label={"Site Type & Location"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"operating_hours_and_start_date"}
                                    label={"Operating Hours & Start Date:"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"estimated_headcount"}
                                    label={"Estimated Headcount:"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"service_interest"}
                                    label={"Service Interest:"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"special_requirements"}
                                    label={"Special Requirements:"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                />
                            </div>
                            <LandingButton
                                type={"submit"}
                                className={"w-full py-5"}
                            >
                                Submit & Get My Quote
                            </LandingButton>
                        </div>
                    </form>
                </div>
            </div>

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default RequestQuote;
