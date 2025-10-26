import {TypeToggle} from "@/features/subFilter/ui/TypeToggle.jsx";
import {Container} from "@/shared/ui/Container/Container.jsx";
import {Select} from "@/shared/ui/Select/Select.jsx";
import {useEffect, useState} from "react";


const optionsTypeFilter = ["По цене", "По площади"];
const optionsTypeProperty  = ["вторичная", "новостройка"];
const optionsTypeCurrency  = ["сум", "у.е."];



export const SubFilter = ({setSubFilter}) => {


    const [property, setProperty] = useState(optionsTypeProperty[0]);
    const [currency, setCurrency] = useState(optionsTypeCurrency[0]);
    const [typeFilter, setTypeFilter] = useState(optionsTypeFilter[0]);


    useEffect(() => {

        const data = {
            property,
            currency,
            typeFilter
        }

        setSubFilter(data)
    },[typeFilter,property,currency])


    return (
        <div className={"mt-20"}>
            <Container>
                <Select
                    value={typeFilter}
                    setValue={setTypeFilter}
                    classNameLabel={"col-span-3 md-max:col-span-12"}
                    full={true}
                    options={optionsTypeFilter}
                />

                <div className={"col-span-9 md-max:col-span-12 gap-5 flex md-max:flex-col md-max:items-start items-center justify-end"}>
                    <TypeToggle
                        title={"Тип недвижимости"}
                        options={optionsTypeProperty}
                        onChange={setProperty}
                        active={property}
                    />
                    <TypeToggle
                        title={"Валюта"}
                        options={optionsTypeCurrency}
                        onChange={setCurrency}
                        active={currency}
                    />
                </div>
            </Container>
        </div>
    );
};

