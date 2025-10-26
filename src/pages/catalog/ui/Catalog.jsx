
import {Pagination} from "@/features/pagination/index.js";
import {convertUsdToUzs, convertUzsToUsd} from "@/shared/helpers/convert.js";
import {Container} from "@/shared/ui/Container/Container.jsx";
import {CatalogList} from "@/entities/catalogList";
import {Filter} from "@/features/filter";
import {SubFilter} from "@/features/subFilter";
import {useMemo, useState} from "react";


export const Catalog = () => {


    const data = [
        {
            id: 1,
            image: "/images/img.png",
            mortgage: true,
            price: 50000,
            typeCurrency: "у.е.",
            typeOfHouse: "Квартира",
            property: "вторичная",
            rooms: 4,
            square: 100,
            floor: "2/6",
            location: "Ташкент,Юнусабадский район, массив Юнусабад, 5-й квартал",
        },
        {
            id: 2,
            image: "https://i.pinimg.com/736x/f4/ac/08/f4ac087ed911cbf03d69fc678e7f237c.jpg",
            mortgage: true,
            price: 55555,
            typeCurrency: "у.е.",
            typeOfHouse: "Дом",
            property: "вторичная",
            rooms: 2,
            square: 50,
            floor: "2/6",
            location: "Ташкент,Юнусабадский район, массив Юнусабад, 2-й квартал",
        },
        {
            id: 3,
            image: "https://i.pinimg.com/736x/f4/ac/08/f4ac087ed911cbf03d69fc678e7f237c.jpg",
            mortgage: true,
            price: 60000,
            typeCurrency: "у.е.",
            typeOfHouse: "Квартира",
            property: "вторичная",
            rooms: 1,
            square: 50,
            floor: "2/6",
            location: "Ташкент,Юнусабадский район, массив Юнусабад, 3-й квартал",
        },
        {
            id: 4,
            image: "/images/img.png",
            mortgage: true,
            price: 400000,
            typeCurrency: "у.е.",
            typeOfHouse: "Квартира",
            property: "вторичная",
            rooms: 3,
            square: 40,
            floor: "2/6",
            location: "Ташкент,Юнусабадский район, массив Юнусабад, 4-й квартал",
        },


    ]
    
    const [filter,setFilter] = useState({})
    const [subFilter,setSubFilter] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    let PageSize = 3



    function filterData(data, filters) {
        return data.filter(item => {


            if (filters.countRooms && Number(item.rooms) !== Number(filters.countRooms)) {
                return false;
            }

            if (filters.location && !item.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }

            if (filters.typeOfHouse && item.typeOfHouse !== filters.typeOfHouse) {
                return false;
            }

            if (filters.price) {
                const from = Number(filters.price.from) || 0;
                const to = Number(filters.price.to) || Infinity;
                if (item.price < from || item.price > to) return false;
            }

            if (filters.square) {
                const from = Number(filters.square.from) || 0;
                const to = Number(filters.square.to) || Infinity;
                if (item.square < from || item.square > to) return false;
            }

            return true;
        });
    }

    const subFilterData = (subFilter) => {

        const filteredData = filterData(data, filter);

        const newFilteredData = filteredData.filter(item => {
            return !(subFilter.property && item.property !== subFilter.property);
        });

        const newData = newFilteredData.map(item => {
            let price = item.price
            if (subFilter.currency !== item.typeCurrency) {
                price = subFilter.currency === "сум" ? convertUsdToUzs(item.price) : convertUzsToUsd(item.price);
            }
            return {
                ...item,
                typeCurrency: subFilter.currency,
                price: price,
            };
        })

        if (subFilter.typeFilter === "По цене") {
            return newData.sort((a, b) => b.price - a.price);
        }  {
            return newData.sort((a, b) => b.square - a.square);
        }



    }



    const filteredData = subFilterData(subFilter)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, filteredData]);

    return (
        <div className={"py-20"}>
            <Container>
                <h1 className={"text-[36px] text-(--text-color) col-span-12 font-bold leading-[30px] tracking-[0.02em]"}>Каталог недвижимости</h1>
            </Container>

            <Filter setFilter={setFilter} filter={filter}/>

            <SubFilter setSubFilter={setSubFilter}/>

            <CatalogList data={currentTableData}/>

            <Container>
                <Pagination
                    className="col-span-12 mt-10"
                    currentPage={currentPage}
                    totalCount={filteredData.length}
                    pageSize={PageSize}
                    onPageChange={setCurrentPage}
                />
            </Container>
        </div>
    );
};

