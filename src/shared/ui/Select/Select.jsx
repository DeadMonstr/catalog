import clsx from "clsx";


import img from "@/shared/assets/icons/Vector.png"

export const Select = (props) => {

    const {
        title,
        value,
        setValue,
        options = [],
        className,
        placeholder,
        classNameLabel,
        full,
        ...other
    } = props


    const renderOptions = () => {
        return options.map((item, index) => {

            const value = item.value || item
            const label = item.label || item

            return (
                <option
                    key={index}
                    value={value}
                >
                    {label}
                </option>
            )
        })
    }


    return (
        <label className={clsx("relative" ,full && "w-full", classNameLabel)}>
            <select
                className={clsx(`bg-(--color-muted-background) py-4 px-[14px] rounded-[10px] focus:outline-0 appearance-none`, className, full && "w-full h-full",)}
                {...other}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {renderOptions()}


            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <img src={img} alt=""/>
            </span>
        </label>
    );
};

