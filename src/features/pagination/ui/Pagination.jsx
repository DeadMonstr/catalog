import {DOTS, usePagination} from "@/shared/hooks/usePagination.js";
import clsx from "clsx";
import React, {useCallback} from "react";

import left from "@/shared/assets/icons/left.png";
import right from "@/shared/assets/icons/right.png";

export const Pagination = React.memo(props => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    const renderPageNumbers = useCallback(() => {
        return paginationRange.map((pageNumber,index) => {
            if (pageNumber === DOTS) {
                return <li key={index} className="pagination-item dots">&#8230;</li>;
            }

            return (
                <li
                    key={index}
                    className={clsx(
                        "flex items-center justify-center rounded-full cursor-pointer",
                        pageNumber === currentPage && "w-10 h-10 bg-(--color-primary) text-white"
                    )}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </li>
            );
        })
    },[currentPage, onPageChange, paginationRange])




    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange?.length - 1];



    const renderedPages = renderPageNumbers()


    return (
        <ul
            className={clsx("flex items-center justify-center w-full", className)}
        >
            <li
                className={clsx('flex items-center justify-center', currentPage === 1 && "pointer-events-none opacity-50") }
                onClick={onPrevious}
            >
                <img src={left} alt="left"/>
            </li>
            <div className="flex items-center justify-center px-[37px] gap-[37px]">
                {renderedPages}
            </div>

            <li
                className={clsx('flex items-center justify-center', currentPage === lastPage && "pointer-events-none opacity-50") }
                onClick={onNext}
            >
                <img src={right} alt="right"/>
            </li>
        </ul>
    );
})