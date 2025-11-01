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
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Service</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                    <Link>
                        <LandingButton>Get Started</LandingButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
