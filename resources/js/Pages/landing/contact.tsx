import { asset } from "@/helper";
import { Link } from "@inertiajs/react";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";

const Contact = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"flex w-full items-center justify-center py-24"}>
                <div className={"grid w-[83%] grid-cols-3 gap-10"}>
                    <div
                        className={
                            "flex flex-col items-center gap-5 border border-[#BCBCBC] p-10"
                        }
                    >
                        <img
                            className={"w-24"}
                            src={asset("/images/mail-icon.png")}
                        />
                        <h1 className={"text-center text-3xl font-semibold"}>
                            Mail Here
                        </h1>
                        <Link
                            href={"mailto:admin@cybercloops.com"}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                        >
                            admin@cybercloops.com
                        </Link>
                        <Link
                            href={"mailto:info@cybercloops.com"}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                        >
                            info@cybercloops.com
                        </Link>
                    </div>

                    <div
                        className={
                            "flex flex-col items-center gap-5 border border-[#BCBCBC] p-10"
                        }
                    >
                        <img
                            className={"w-24"}
                            src={asset("/images/location-icon.png")}
                        />
                        <h1 className={"text-center text-3xl font-semibold"}>
                            Visit Here
                        </h1>
                        <p className={"text-center font-semibold"}>
                            4517 Washington Ave.
                        </p>
                        <p className={"text-center font-semibold"}>
                            Manchester, Kentucky 39495
                        </p>
                    </div>

                    <div
                        className={
                            "flex flex-col items-center gap-5 border border-[#BCBCBC] p-10"
                        }
                    >
                        <img
                            className={"w-24"}
                            src={asset("/images/phone-icon.png")}
                        />
                        <h1 className={"text-center text-3xl font-semibold"}>
                            Call Here
                        </h1>
                        <Link
                            href={"tel:(406) 555-0120"}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                        >
                            (406) 555-0120
                        </Link>
                        <Link
                            href={"tel:(704) 555-0127"}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                        >
                            (704) 555-0127
                        </Link>
                    </div>
                </div>
            </div>
            <img src={asset("/images/contact-map.png")} className={"w-full"} />
            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Contact;
