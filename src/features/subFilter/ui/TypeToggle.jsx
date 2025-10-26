import clsx from "clsx";
import {memo, useCallback} from "react";

export const TypeToggle = memo(({title,options,onChange,active}) => {

    const renderOptions = useCallback( () => {
        return options.map((item,index) => {

            return (
                <span
                    key={index}
                    className={clsx(
                        "cursor-pointer",
                        item === active ? "text-(--color-primary-text)": "text-(--color-secondary-text)"
                    )}
                    onClick={() => onChange(item)}
                >
                    {item}
                </span>
            )
        })
    },[options,active])


    return (
        <div className={"flex gap-[15px] "}>
            <h1 className={"text-(--color-secondary-text)"}>{title}:</h1>
            {renderOptions()}
        </div>
    );
});
