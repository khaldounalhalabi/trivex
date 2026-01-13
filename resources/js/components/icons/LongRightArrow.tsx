import { FC, HTMLProps, SVGProps } from "react";

const LongRightArrow: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
    return (
        <svg
            width="122"
            height="41"
            viewBox="0 0 122 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0 20.4141H118.5M118.5 20.4141L99.5 1.41406M118.5 20.4141L99.5 39.4141"
                stroke="#D3B056"
                stroke-width="4"
            />
        </svg>
    );
};

export default LongRightArrow;
