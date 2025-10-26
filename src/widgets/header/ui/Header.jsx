
import logo from "@/shared/assets/logo/logo.png";
import plan from "@/shared/assets/icons/f7_location-fill.svg";
import menu from "@/shared/assets/icons/menu.png";
import cross from "@/shared/assets/icons/maki_cross.png";

import {Button} from "@/shared/ui/Button/Button.jsx";
import {Container} from "@/shared/ui/Container/Container.jsx";
import clsx from "clsx";
import {useState} from "react";
import {createPortal} from "react-dom";



export const Header = () => {

    const [active, setActive] = useState(false);



    return (
        <header className={"w-full h-39 bg-(--color-primary)  md-max:h-[106px]"}>
            <Container className="items-center  h-full">
                <nav className={"col-span-4 flex items-center md-max:hidden"}>
                    <ul className={"flex gap-10 items-center justify-start"}>
                        <li className={"link-header"}>
                            <a href="#">
                                О нас
                            </a>
                        </li>
                        <li className={"link-header"}>
                            <a href="#">
                                Каталог
                            </a>
                        </li>
                        <li className={"link-header"}>
                            <a href="#">
                                Продать
                            </a>
                        </li>
                        <li className={"link-header"}>
                            <a href="#">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href={""} className={"col-span-4 md-max:col-span-6 flex items-center justify-center"}>
                    <img src={logo} className={"w-[117px] h-[130px] md-max:w-20 md-max:h-[90px]"} alt="Logo"/>
                </a>
                <div className={"md-max:col-span-6 flex items-center justify-end gap-5 col-span-4"}>
                    <h1 className={"flex gap-1 text-white md-max:hidden"}>
                        <img src={plan} alt="plan"/>
                        <span>Ташкент</span>
                    </h1>
                    <Button className={"rounded-[10px] md-max:hidden"} variant={"secondary"}>Оставить заявку</Button>
                    <div className={"md-max:block hidden absolute z-101"} onClick={() => setActive(!active)}>
                        {
                            active ?  <img  src={cross} alt="Menu"/> : <img  src={menu} alt="Menu"/>
                        }
                    </div>
                </div>
            </Container>


            {createPortal(
                <div className={clsx(" opacity-0 transition-all duration-300 invisible fixed top-0 right-0 z-100 w-full h-[100dvh]" , active && "opacity-100 visible")}>
                    <div className={"w-99 h-full absolute right-0 bg-(--color-primary) py-[61px] flex flex-col"}>
                        <img className={"w-[80px] h-[90px] mx-auto"} src={logo} alt=""/>
                        <hr className={" w-[250px] mt-5 border-white/50 mx-auto "}/>
                        <nav className={"flex items-center justify-between flex-col mt-[35px] grow"}>
                            <ul className={"flex flex-col gap-10 items-center justify-start"}>
                                <li className={"link-header"}>
                                    <a href="#">
                                        О нас
                                    </a>
                                </li>
                                <li className={"link-header"}>
                                    <a href="#">
                                        Каталог
                                    </a>
                                </li>
                                <li className={"link-header"}>
                                    <a href="#">
                                        Продать
                                    </a>
                                </li>
                                <li className={"link-header"}>
                                    <a href="#">
                                        Контакты
                                    </a>
                                </li>
                            </ul>

                            <div className={"flex flex-col gap-[15px] items-center justify-center "}>
                                <h1 className={"flex gap-1 text-white "}>
                                    <img src={plan} alt="plan"/>
                                    <span>Ташкент</span>
                                </h1>
                                <Button className={"rounded-[10px]"} variant={"secondary"}>Оставить заявку</Button>
                            </div>
                        </nav>
                    </div>

                </div>,
                document.body
            )}

        </header>
    );
};
