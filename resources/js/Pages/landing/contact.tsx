import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import { asset } from "@/helper";

const Contact = ({
    email,
    address,
    phone,
}: {
    email: string;
    address: string;
    phone: string;
}) => {
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
                        <a
                            href={`mailto:${email}`}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                            target="_blank"
                        >
                            {email}
                        </a>
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
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                            target="_blank"
                        >
                            {address}
                        </a>
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
                        <a
                            href={`tel:${phone}`}
                            className={
                                "text-center font-semibold hover:underline"
                            }
                            target="_blank"
                        >
                            {phone}
                        </a>
                    </div>
                </div>
            </div>
            <img src={asset("/images/contact-map.png")} className={"w-full"} />
            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Contact;
