import AppLogo from "@/Components/icons/AppLogo";
import LandingButton from "@/Components/landing/LandingButton";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const linkStyles =
        "relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-landing-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100";

    return (
        <div
            className={
                "sticky top-0 z-50 flex w-full items-center justify-center bg-landing-background"
            }
        >
            <div className={"flex w-[90%] items-center justify-between"}>
                <div className={"w-[7%]"}>
                    <AppLogo className={"w-full"} />
                </div>
                <div
                    className={
                        "flex items-center justify-between gap-5 text-xl"
                    }
                >
                    <Link href={route("landing.index")} className={linkStyles}>
                        Home
                    </Link>
                    <Link href={route("landing.about")} className={linkStyles}>
                        About
                    </Link>
                    <Link
                        href={route("landing.case-study")}
                        className={linkStyles}
                    >
                        Case Studies
                    </Link>

                    <Link
                        className={`${linkStyles}`}
                        href={route("landing.services")}
                    >
                        Services
                    </Link>
                    <Link
                        href={route("landing.contact")}
                        className={linkStyles}
                    >
                        Contact
                    </Link>
                    <Link
                        href={route("landing.industries")}
                        className={linkStyles}
                    >
                        Industries we serve
                    </Link>

                    <Link href={route("landing.request.quote")}>
                        <LandingButton className={"px-8 py-3"}>
                            Get Started
                        </LandingButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
