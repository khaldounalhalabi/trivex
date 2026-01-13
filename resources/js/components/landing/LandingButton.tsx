import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

const LandingButton: FC<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ children, className, ...props }) => {
    return (
        <button
            className={cn(
                "landing-button-background group relative cursor-pointer overflow-hidden px-4 py-2 font-semibold transition-all duration-300 active:scale-95",
                className,
            )}
            {...props}
        >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1500 ease-in-out group-hover:translate-x-full" />

            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default LandingButton;
