import AppLogo from "@/Components/icons/AppLogo";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <div className={"sticky top-0 flex items-center justify-center w-full py-16"}>
            <div className={"w-[83%] flex items-center justify-between"}>
                <div className={"w-[7%]"}>
                    <AppLogo className={"w-full"} />
                </div>
                <div
                    className={
                        "w-[58%] flex items-center justify-between text-xl"
                    }
                >
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Service</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                    <Link>
                        <button
                            className={
                                "px-4 py-2 landing-button-background font-semibold"
                            }
                        >
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
