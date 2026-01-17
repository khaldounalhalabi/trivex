import AnimatedLabelInput from "@/components/form/fields/AnimatedLabelInput";
import LoadingSpinner from "@/components/icons/LoadingSpinner";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import LandingButton from "@/components/landing/LandingButton";
import QuoteRequest from "@/Models/QuoteRequest";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const RequestQuote = () => {
    const { post, setData, processing } = useForm<QuoteRequest>();
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("landing.request.quote.store"));
    };

    return (
        <div className={"h-full w-full"}>
            <div
                className={
                    "flex flex-col items-center gap-5 px-5 py-16 text-center md:px-0"
                }
            >
                <h1
                    className={"text-2xl font-semibold md:w-[49vw] md:text-5xl"}
                >
                    Request a Quote
                </h1>
                <p className={"text-sm md:w-[53vw]"}>
                    Get a fast, confidential security proposal tailored to your
                    site, schedule, and risk profile. We assess your needs,
                    recommend the right mix of manpower and technology, and
                    deliver a clear, costed plan with deployment options and
                    timelines. No fluff—just a practical roadmap to safer
                    operations.
                </p>
            </div>

            <div
                className={
                    "flex w-full items-center justify-center px-5 md:px-0"
                }
            >
                <div
                    className={
                        "w-full rounded-4xl bg-[#E5E5E5] px-6 py-16 md:w-[76vw] md:px-18"
                    }
                >
                    <form className={"w-full"} onSubmit={onSubmit}>
                        <div
                            className={
                                "flex w-full flex-col items-center gap-5"
                            }
                        >
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"name"}
                                    label={"Full Name"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"email"}
                                    label={"Your Email"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    type={"email"}
                                />
                            </div>

                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"phone"}
                                    label={"Your Phone Number"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    type={"tel"}
                                />
                            </div>

                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"location"}
                                    label={"Site Type & Location"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"operating_hours"}
                                    label={"Operating Hours & Start Date:"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "operating_hours",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                            <div className={"w-full bg-white"}>
                                <AnimatedLabelInput
                                    name={"headcount"}
                                    label={"Estimated Headcount:"}
                                    className={"p-5"}
                                    labelClassName={
                                        "!text-black font-semibold peer-focus:scale-100 scale-100 start-10 peer-focus:start-1"
                                    }
                                    onChange={(e) =>
                                        setData("headcount", e.target.value)
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
                                    onChange={(e) =>
                                        setData(
                                            "service_interest",
                                            e.target.value,
                                        )
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
                                    onChange={(e) =>
                                        setData(
                                            "special_requirements",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                            <LandingButton
                                type={"submit"}
                                className={"w-full py-5"}
                            >
                                <div
                                    className={
                                        "inline-flex w-full items-center justify-center gap-3"
                                    }
                                >
                                    <span>Submit & Get My Quote</span>
                                    {processing && (
                                        <LoadingSpinner
                                            className={"text-black"}
                                        />
                                    )}
                                </div>
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
