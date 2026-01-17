import AnimatedLabelInput from "@/components/form/fields/AnimatedLabelInput";
import AppLogo from "@/components/icons/AppLogo";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEvent } from "react";

function Footer() {
    const { contact } = usePage().props;
    const { setData, post, processing } = useForm<{ email: string }>();
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("landing.newsletter.subscribe"));
    };

    return (
        <div
            className={
                "grid h-full w-full gap-8 bg-landing-dark md:grid-cols-2 py-5 md:py-0"
            }
        >
            <div
                className={
                    "flex flex-col items-start gap-10 px-5 md:py-20 md:px-0 md:ps-24"
                }
            >
                <AppLogo />
                <div
                    className={
                        "flex w-full flex-col items-start justify-between gap-10 md:flex-row md:gap-0"
                    }
                >
                    <div className={"flex flex-col items-start gap-5"}>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact?.address ?? "")}`}
                            className={
                                "cursor-pointer text-lg font-semibold text-white hover:underline"
                            }
                            target={"_blank"}
                        >
                            {contact?.address}
                        </a>
                        <a
                            href={`tel:${contact?.phone}`}
                            className={
                                "cursor-pointer text-lg font-semibold text-white hover:underline"
                            }
                            target={"_blank"}
                        >
                            {contact?.phone}
                        </a>
                        <a
                            href={`mailto:${contact?.email}`}
                            className={
                                "cursor-pointer text-lg font-semibold text-white hover:underline"
                            }
                            target={"_blank"}
                        >
                            {contact?.email}
                        </a>
                    </div>
                    <div className={"flex flex-col items-start gap-5"}>
                        <Link
                            href={route("landing.index")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
                            Home
                        </Link>
                        <Link
                            href={route("landing.services")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
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
                        <Link
                            href={route("landing.posts.index")}
                            className="cursor-pointer text-lg font-semibold text-white hover:underline"
                        >
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
                    "h-full w-full bg-[url('/images/map.png')] bg-cover bg-center bg-no-repeat py-5 md:py-0"
                }
            >
                <div className={"flex h-full items-end gap-18 md:py-28 px-5 md:px-0 md:ps-24"}>
                    <form onSubmit={onSubmit}>
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
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <button
                                className={
                                    "cursor-pointer pt-3 text-3xl font-semibold text-landing-primary"
                                }
                                type={"submit"}
                            >
                                Subscribe {processing && "..."}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
