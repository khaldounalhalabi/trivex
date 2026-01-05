import AppLogo from "@/Components/icons/AppLogo";
import LandingButton from "@/Components/landing/LandingButton";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    // Shared classes for the animated underline
    const linkStyles =
        "relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-landing-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100";

    return (
        <div className={"flex w-full items-center justify-center py-5"}>
            <div className={"flex w-[83%] items-center justify-between"}>
                <div className={"w-[7%]"}>
                    <AppLogo className={"w-full"} />
                </div>
                <div
                    className={
                        "flex w-[58%] items-center justify-between text-xl"
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
                    {/* Note: I added a cursor-pointer for the link without an href */}
                    <Link className={`${linkStyles} cursor-pointer`}>
                        Service
                    </Link>
                    <Link
                        href={route("landing.contact")}
                        className={linkStyles}
                    >
                        Contact
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
