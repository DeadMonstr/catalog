import clsx from "clsx";

export const Input = (props) => {

    const {
        title,
        value,
        setValue,
        className,
        full,
        ...other
    } = props



    return (
        <label className={clsx(full && "w-full")}>
            {title && <span className={`px-[2px] mb-[9px] text-(--color-secondary-text) block`}>{title}</span>}
            <input
                className={clsx(`bg-(--color-muted-background) py-4 px-[14px] rounded-[10px] focus:outline-0`,className, full && "w-full",)}
                {...other}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};

