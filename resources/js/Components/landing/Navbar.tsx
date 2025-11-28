import AppLogo from "@/Components/icons/AppLogo";
import LandingButton from "@/Components/landing/LandingButton";
import { Link } from "@inertiajs/react";

const Navbar = () => {
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
                    <Link href={route("landing.index")}>Home</Link>
                    <Link href={route("landing.about")}>About</Link>
                    <Link href={route("landing.case-study")}>Case Studies</Link>
                    <Link>Service</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                    <Link>
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
