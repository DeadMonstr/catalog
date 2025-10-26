import clsx from "clsx";

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
        return options.map((item,index) => {

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
        <label className={clsx(full && "w-full", classNameLabel)}>
            <select
                className={clsx(`bg-(--color-muted-background) py-4 px-[14px] rounded-[10px] focus:outline-0`, className, full && "w-full h-full",)}
                {...other}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {renderOptions()}
            </select>
        </label>
    );
};

