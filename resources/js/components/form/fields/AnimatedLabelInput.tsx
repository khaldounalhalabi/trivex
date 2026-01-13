import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";
import React, { ChangeEvent, FC } from "react";

interface InputProps
    extends Omit<React.ComponentProps<"input">, "placeholder"> {
    name: string;
    label?: string;
    placeholder?: string;
    defaultValue?: any;
    className?: string;
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    labelClassName?: React.ComponentProps<"label">["className"];
}
const AnimatedLabelInput: FC<InputProps> = ({
    name,
    label,
    type,
    defaultValue,
    className,
    required = false,
    labelClassName,
    ...props
}) => {
    const errors = usePage().props.errors;

    return (
        <div className={`relative z-0 w-full`}>
            <input
                id={`${name}_id`}
                className={cn(
                    "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-white focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-white",
                    className,
                )}
                placeholder=" "
                type={type ?? "text"}
                defaultValue={defaultValue}
                required={required}
                name={name}
                {...props}
            />
            {label && (
                <label
                    className={cn(
                        "absolute start-1 top-1/2 -z-10 origin-left -translate-y-1/2 scale-75 transform text-sm duration-300 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",

                        "peer-focus:-translate-y-[200%] peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",

                        // NEW: Maintain float when input has a value (placeholder is NOT shown)
                        "peer-[:not(:placeholder-shown)]:start-1 peer-[:not(:placeholder-shown)]:-translate-y-[200%] peer-[:not(:placeholder-shown)]:scale-100",

                        labelClassName,
                    )}
                    htmlFor={`${name}_id`}
                >
                    {label}
                    {required && <span className={"text-destructive"}>*</span>}
                </label>
            )}
            {errors[name] && (
                <p className={"text-sm text-destructive"}>{errors[name]}</p>
            )}
        </div>
    );
};
export default AnimatedLabelInput;
