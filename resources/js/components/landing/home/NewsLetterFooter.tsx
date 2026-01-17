import LandingButton from "@/components/landing/LandingButton";
import { asset } from "@/helper";
import { Link } from "@inertiajs/react";

function NewsLetterFooter({ withFive = true }: { withFive?: boolean }) {
    return (
        <div className={"h-full w-full bg-landing-background"}>
            <div
                className={
                    "mt-24 flex items-center justify-between gap-32 px-24"
                }
            >
                <div
                    className={
                        "flex flex-col items-start justify-between gap-8"
                    }
                >
                    <h2
                        className={
                            "border-l-4 border-l-landing-primary pl-1 text-lg font-semibold uppercase"
                        }
                    >
                        READY TO SECURE YOUR MISSION
                    </h2>
                    <h1
                        className={
                            "text-start text-5xl font-semibold text-wrap"
                        }
                    >
                        And now it’s time for you to join us for securing your
                        business
                    </h1>
                    <p className={"text-start"}>
                        Whether you need manned guarding, VIP protection,
                        aviation and transport security, or advanced technology
                        solutions Trivex Security International is here to
                        safeguard your people, assets, and reputation. Trusted
                        by governments, corporations, and private clients
                        worldwide, we deliver protection where it matters most.
                    </p>
                </div>

                {withFive && (
                    <img
                        src={asset("/images/5.png")}
                        className={"-top-10 right-5 w-64"}
                    />
                )}
            </div>
            <div className={"mt-24 grid h-full w-full grid-cols-2"}>
                <div className={"flex flex-col items-start gap-10 p-24"}>
                    <h1 className={"text-4xl font-semibold text-wrap"}>
                        Subscribe <br />
                        To Our Newsletter
                    </h1>
                    <p className={"text-wrap"}>
                        Stay updated with the latest trends and strategies in
                        security — from manned guarding and specialist
                        protection to aviation, defence, and risk management.
                        Access expert insights, actionable intelligence, and
                        practical guidance designed to help businesses,
                        governments, and private clients navigate today’s
                        evolving threats with confidence.
                    </p>
                    <Link
                        href={"#newsletter-footer"}
                        className={
                            "flex cursor-pointer items-center gap-3 transition-all duration-200 hover:gap-5"
                        }
                    >
                        <div className={"h-0.5 w-16 bg-black"} />
                        <p className={"text-lg font-semibold"}>Subscribe</p>
                    </Link>
                </div>
                <div
                    className={
                        "flex flex-col items-start gap-10 bg-landing-gray-secondary p-24"
                    }
                >
                    <h1 className={"text-4xl font-semibold text-wrap"}>
                        Let’s <br />
                        Get Started
                    </h1>
                    <p className={"text-wrap"}>
                        Let’s get started by partnering with Trivex for
                        comprehensive security services, covering manned
                        guarding, specialist protection, aviation safety, and
                        defence support to secure your people, assets, and
                        critical operations globally.
                    </p>
                    <Link href={route("landing.contact")}>
                        <LandingButton className={"px-5 py-3"}>
                            Contact Us
                        </LandingButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewsLetterFooter;
