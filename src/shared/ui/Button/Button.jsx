
import React from "react";
import clsx from "clsx";

export const Button = ({
                           children,
                           variant = "primary",
                           size = "md",
                           full = false,
                           className = "",
                           ...props
                       }) => {
    const base =
        "inline-flex items-center justify-center font-regular transition-all duration-200 focus:outline-none py-[14px]  px-[33px]";

    const variants = {
        primary:
            "bg-(--color-primary) text-white hover:bg-(--color-primary)/85  active:bg-(--color-primary)/70 ",
        secondary:
            "bg-white/20 text-white hover:bg-white/30  active:bg-white/35",

    };

    const sizes = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    return (
        <button
            {...props}
            className={clsx(
                base,
                variants[variant],
                sizes[size],
                full && "w-full",
                className
            )}
        >
            {children}
        </button>
    );
};

