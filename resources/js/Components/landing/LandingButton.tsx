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
                "landing-button-background px-4 py-2 font-semibold",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default LandingButton;
