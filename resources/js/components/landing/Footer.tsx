import AnimatedLabelInput from "@/components/form/fields/AnimatedLabelInput";
import AppLogo from "@/components/icons/AppLogo";
import { asset } from "@/helper";
import { Link } from "@inertiajs/react";

function Footer() {
    return (
        <div className={"grid h-full w-full grid-cols-2 gap-8 bg-landing-dark"}>
            <div className={"flex flex-col items-start gap-10 py-20 ps-24"}>
                <AppLogo />
                <div className={"flex w-full items-start justify-between"}>
                    <div className={"flex flex-col items-start gap-5"}>
                        <p className={"text-lg font-semibold text-white"}>
                            Preston Rd. Inglewood, Maine
                        </p>
                        <a
                            href={"tel:(808) 555-0111"}
                            className={
                                "cursor-pointer text-lg font-semibold text-white hover:underline"
                            }
                        >
                            (808) 555-0111
                        </a>
                        <a
                            href={"mailto:support@trivex.com"}
                            className={
                                "cursor-pointer text-lg font-semibold text-white hover:underline"
                            }
                        >
                            support@trivex.com
                        </a>
                    </div>
                    <div className={"flex flex-col items-start gap-5"}>
                        <Link
                            href={route("landing.index")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
                            Home
                        </Link>
                        <Link className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            Service
                        </Link>
                        <Link
                            href={route("landing.contact")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className={"flex flex-col items-start gap-5"}>
                        <Link
                            href={route("landing.about")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
                            About
                        </Link>
                        <Link className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            Blog
                        </Link>
                        <Link
                            href={route("landing.faqs")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
                            FAQ's
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className={
                    "h-full w-full bg-[url('/images/map.png')] bg-cover bg-center bg-no-repeat"
                }
            >
                <div className={"flex h-full items-end gap-18 py-28 ps-24"}>
                    <div className={"grid grid-cols-2 items-center gap-5"}>
                        <Link href="/">
                            <img
                                className={"w-6"}
                                src={asset("/images/linkedin.png")}
                            />
                        </Link>
                        <Link href="/">
                            <img
                                className={"w-6"}
                                src={asset("/images/instagram.png")}
                            />
                        </Link>
                        <Link href="/">
                            <img
                                className={"w-6"}
                                src={asset("/images/facebook.png")}
                            />
                        </Link>
                        <Link href="/">
                            <img
                                className={"w-6"}
                                src={asset("/images/twitter.png")}
                            />
                        </Link>
                        <Link href="/">
                            <img
                                className={"w-6"}
                                src={asset("/images/youtube.png")}
                            />
                        </Link>
                        <Link href="/">
                            <img
                                className={"w-6"}
                                src={asset("/images/vim.png")}
                            />
                        </Link>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <h1
                            className={
                                "mb-16 text-3xl font-semibold text-white"
                            }
                            id={"newsletter-footer"}
                        >
                            Newsletter
                        </h1>
                        <AnimatedLabelInput
                            name={"email"}
                            labelClassName={
                                "text-gray-500 peer-focus:text-white  dark:text-gray-400"
                            }
                            label={"Your Email"}
                            className={"w-72 scale-100"}
                        />
                        <button
                            className={
                                "pt-3 text-3xl font-semibold text-landing-primary"
                            }
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
