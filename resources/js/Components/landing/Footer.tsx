import AppLogo from "@/Components/icons/AppLogo";
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
                        <Link href={route("landing.index")} className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            Home
                        </Link>
                        <Link className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            Service
                        </Link>
                        <Link href={route("landing.contact")} className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            Contact
                        </Link>
                    </div>
                    <div className={"flex flex-col items-start gap-5"}>
                        <Link href={route("landing.about")} className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            About
                        </Link>
                        <Link className="cursor-pointer text-lg font-semibold text-white hover:underline">
                            Blog
                        </Link>
                        <Link href={route("landing.faqs")} className="cursor-pointer text-lg font-semibold text-white hover:underline">
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
                        >
                            Newsletter
                        </h1>
                        <div className="relative z-0 w-72">
                            <input
                                type="text"
                                id="floating_standard"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-white focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-white"
                                placeholder=" "
                            />
                            <label
                                htmlFor="floating_standard"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Your Email
                            </label>
                        </div>
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
