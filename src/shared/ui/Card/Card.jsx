import clsx from "clsx";

export const Card = ({children,className}) => {

    const hover = `hover:bg-(--color-muted-background)/80 hover:translate-y-[-5px] transition-all duration-200 hover:shadow-md `;

    return (
        <div className={clsx(`p-[10px] bg-(--color-muted-background) rounded-[10px]`,hover, className)}>
            {children}
        </div>
    );
};

