import {Footer} from "@/widgets/footer";
import {Header} from "@/widgets/header";

export const MainLayout = ({children}) => {
    return (
        <div className={"w-full h-[100dvh] overflow-auto relative"}>
            <Header/>
            {children}

            <Footer/>
        </div>
    );
};

