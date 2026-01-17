import { useState } from "react";
import AppLogo from "@/components/icons/AppLogo";
import LandingButton from "@/components/landing/LandingButton";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use your own icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyles =
        "relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-landing-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100";

    const navLinks = [
        { name: "Home", href: route("landing.index") },
        { name: "About", href: route("landing.about") },
        { name: "Case Studies", href: route("landing.case-study") },
        { name: "Services", href: route("landing.services") },
        { name: "Contact", href: route("landing.contact") },
        { name: "Industries we serve", href: route("landing.industries") },
    ];

    return (
        <nav className="sticky top-0 z-50 flex w-full justify-center border-b border-gray-100 bg-landing-background">
            <div className="flex w-[90%] items-center justify-between py-4">
                {/* Logo Section */}
                <div className="w-[70px] md:w-[7%]">
                    <AppLogo className="w-full" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 text-lg font-medium lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={linkStyles}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href={route("landing.request.quote")}>
                        <LandingButton className="px-8 py-3">
                            Get Started
                        </LandingButton>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 text-landing-primary lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar/Dropdown */}
            <div
                className={`fixed inset-0 top-0 z-40 bg-landing-background transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} `}
            >

                <div className="flex flex-col items-center gap-8 pt-10 text-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={linkStyles}
                            onClick={() => setIsOpen(false)} // Close on click
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={route("landing.request.quote")}
                        onClick={() => setIsOpen(false)}
                    >
                        <LandingButton className="px-10 py-4">
                            Get Started
                        </LandingButton>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
