import clsx from "clsx";

export const Container = ({children,className}) => {
    return (
        <div
            className={clsx(
                `
                    max-w-(--container-max)
                    px-(--container-margin)
                    grid grid-cols-12
                    gap-(--container-gap)
                    mx-auto
                    
                    px-(--container-margin)
                    xl-max:px-20       
                    lg-max:px-16       
                    md-max:px-10        
                    sm-max:px-4
                `,
                className
            )}
        >
            {children}
        </div>
    );
};

